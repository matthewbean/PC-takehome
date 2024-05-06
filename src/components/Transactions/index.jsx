import React, { useContext } from "react"
import { DataContext } from "../../data/"
import { Pane } from "../../elements/Pane"
import "./Transactions.scss"

export const Transactions = () => {
  const { data } = useContext(DataContext)
  const startingBalance = 3250.2
  const totalTransactionsAmount = data.transactions.reduce(
    (accumulator, transaction) => {
      return accumulator + transaction.amount
    },
    0
  )
  const balance = startingBalance - totalTransactionsAmount
  const addDollarSign = (number) => {
    if (number > 0) {
      return `$${number}`
    } else {
      return `$-${Math.abs(number)}`
    }
  }

  return (
    <Pane size="lg" title="Transactions">
      <div className="transactions">
        <div className="heading">
          <h2>Balance:</h2>
          <p>${balance}</p>
        </div>
        {data.transactions.map((transaction, index) => {
          return (
            <div className="card" key={index}>
              <div className="transactions-icon">
                {transaction.description.match(/[A-Z]/g).slice(0, 2).join("")}
              </div>
              <div className="transactions-description">
                {transaction.description}
              </div>
              <div
                className={`transactions-amount ${
                  transaction.amount > 0 ? "positive" : "negative"
                }`}
              >
                {addDollarSign(transaction.amount)}
              </div>
              <div className="transactions-category">
                {transaction.category}
              </div>
              <div className="transactions-date">{transaction.date}</div>
            </div>
          )
        })}
      </div>
    </Pane>
  )
}
