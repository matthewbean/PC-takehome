import React, { useContext, useState } from "react"
import { DataContext } from "../../data/"
import { Pane } from "../../elements/Pane"
import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"
import { CreditCard, DebitCard } from "../../icons"
import "./Wallet.scss"

export const Wallet = () => {
  const { data, setData } = useContext(DataContext)
  const [number, setNumber] = useState("")
  const [cvc, setCvc] = useState("")
  const [expiration, setExpiration] = useState("")
  const [type, setType] = useState("credit")

  const handleAddCard = () => {
    setData((prevData) => ({
      ...prevData,
      cards: [
        ...(prevData.cards || []),
        {
          type: type,
          number: number,
          cvc: cvc,
          expiration: expiration,
        },
      ],
    }))
    setNumber("")
    setCvc("")
    setExpiration("")
    setType("credit")
  }

  const handleCardNumberChange = (e) => {
    //remove spaces for checks
    let checkInput = e.target.value.replaceAll(" ", "")
    //only allow inputs that are numbers  up to 16 digits
    if (/^\d{0,16}$/.test(checkInput)) {
      if (checkInput.length >= 4) {
        setNumber(checkInput.match(/.{1,4}/g).join(" "))
      } else {
        setNumber(checkInput)
      }
    }
  }
  const handleCVCChange = (e) => {
    //only allow inputs that are up to 3 numbers long such as a cvc would be
    if (/^\d{0,3}$/.test(e.target.value)) {
      setCvc(e.target.value)
    }
  }
  const handleDateChange = (e) => {
    //Handle edge case in case a user deletes the slash
    if (e.target.value.length === 2 && expiration.length === 3) {
      setExpiration(e.target.value)
      return
    }
    //start by taking out all of the text that we input before
    let checkInput = e.target.value.replaceAll("/", "")
    //Check if the user has input anywhere between zero and six digits, don't update if they put in an invalid input
    if (/^\d{0,6}$/.test(checkInput)) {
      //If the input is 3 characters are longer, that means the user has started to add the year and we should add the slash
      if (checkInput.length >= 2) {
        setExpiration(checkInput.slice(0, 2) + "/" + checkInput.slice(2))
      } else {
        setExpiration(e.target.value)
      }
    }
  }
  return (
    <Pane size="sm" title="My Wallet">
      <form className="card-form" onSubmit={(e) => e.preventDefault()}>
        <div className="card-form--row">
          <label htmlFor="cardNumber">Card Number:</label>
          <Input
            id="cardNumber"
            name="cardNumber"
            onChange={handleCardNumberChange}
            placeholder="1111 1111 1111 1111"
            autoComplete="cc-number"
            type="text"
            inputmode="numeric"
            value={number}
          />
        </div>

        <div className="card-form--row">
          <label htmlFor="cvc">CVC:</label>
          <Input
            id="cvc"
            name="cvc"
            onChange={handleCVCChange}
            placeholder="xxx"
            autoComplete="cc-csc"
            type="text"
            inputmode="numeric"
            value={cvc}
          />
        </div>

        <div className="card-form--row">
          <label htmlFor="expiration">Expiration:</label>
          <Input
            id="expiration"
            name="expiration"
            onChange={handleDateChange}
            autoComplete="cc-exp"
            placeholder="mm/yyyy"
            type="text"
            value={expiration}
          />
        </div>

        <div className="card-type">
          <p>Card Type:</p>
          <div className="card-type--options">
            <div
              onClick={() => setType("credit")}
              className={`${type === "credit" ? "selected" : ""}`}
            >
              Credit
            </div>
            <div
              onClick={() => setType("debit")}
              className={`${type === "debit" ? "selected" : ""}`}
            >
              Debit
            </div>
          </div>
        </div>
        <Button type="submit" onClick={handleAddCard} text="Add Card" />
      </form>

      <div className="cards-list">
        {data.cards.map((card, index) => {
          return (
            <div className="card" key={index}>
              <div className="card--icon">
                {card.type === "credit" ? <CreditCard /> : <DebitCard />}
              </div>

              <div className="card--details">
                <h2 className="card--number">{card.number}</h2>
                <div className="flex">
                  <p className="card--cvc">{card.cvc}</p>
                  <p className="card--expiration">{card.expiration}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Pane>
  )
}
