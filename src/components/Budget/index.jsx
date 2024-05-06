import React, { useState } from "react"
import { Pane } from "../../elements/Pane"
import { Input } from "../../elements/Input"
import { Button } from "../../elements/Button"
import Category from "../../elements/Category/Index"
import {
  Transportation,
  Housing,
  DiningOut,
  HealthFitness,
  Food,
} from "../../icons/index"
import "./Budget.scss"

export const Budget = () => {
  //function to add cammas to numbers
  const addCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const [addingItem, setAddingItem] = useState(false)
  const [categories, setCategories] = useState([
    {
      label: "Transportation",
      value: 400,
      icon: Transportation,
    },
    {
      label: "Housing",
      value: 1500,
      icon: Housing,
    },
    {
      label: "Food",
      value: 500,
      icon: Food,
    },
    {
      label: "Dining Out",
      value: 500,
      icon: DiningOut,
    },
    {
      label: "Health & Fitness",
      value: 200,
      icon: HealthFitness,
    },
  ])

  const [total, setTotal] = useState(5000)
  //calculate how much is spent by adding together all the values of the categories
  const spent = categories.reduce((a, b) => a + b.value, 0)

  return (
    <Pane size="md" title="Budget">
      {addingItem ? (
        <form className="formattedForm">
          <h3>New Category</h3>
          <div className="input-group">
            <label htmlFor="categoryName">Category Name</label>
            <Input type="text" name="categoryName" id="categoryName" />
          </div>
          <div className="input-group iconRadios">
            <div>Icon:</div>
            <Input
              type="radio"
              id="Houseing"
              name="Icon"
              value="Houseing"
              checked
            />
            <label aria-label="Houseing Icon" for="Houseing">
              <Housing />
            </label>
            <Input
              type="radio"
              id="TransportationIcon"
              name="Icon"
              value="TransportationIcon"
              checked
            />
            <label aria-label="Transportation Icon" for="TransportationIcon">
              <Transportation />
            </label>
            <Input
              type="radio"
              id="FoodIcon"
              name="Icon"
              value="FoodIcon"
              checked
            />
            <label aria-label="Food Icon" for="FoodIcon">
              <Food />
            </label>
            <Input
              type="radio"
              id="DiningOutIcon"
              name="Icon"
              value="DiningOutIcon"
              checked
            />
            <label aria-label="Dining Out Icon" for="DiningOutIcon">
              <DiningOut />
            </label>
            <Input
              type="radio"
              id="HealthFitnessIcon"
              name="Icon"
              value="HealthFitnessIcon"
              checked
            />
            <label aria-label="Health and Fitness Icon" for="HealthFitnessIcon">
              <HealthFitness />
            </label>
          </div>
          <div className="input-group">
            <label htmlFor="limit">Limit</label>
            <Input type="text" name="limit" id="limit" />
          </div>
          <div className="flex spaced">
            <Button
              onClick={(e) => {
                e.preventDefault()
                setAddingItem(false)
              }}
              text="Cancel"
              variant="outline-full"
            />
            <Button
              onClick={(e) => {
                e.preventDefault()
                setAddingItem(false)
              }}
              text="Add new category"
              variant="filled-full"
            />
          </div>
        </form>
      ) : (
        <>
          <div className="flex subHeading">
            <div className="flex-item">
              <h3 className="title">MONTHLY INCOME</h3>
              <p className="boldLarge">${addCommas(total)}</p>
            </div>
            <div className="flex-item">
              <h3 className="title">ALLOCATED</h3>
              <p className="boldLarge">${addCommas(spent)}</p>
            </div>
            <div className="flex-item">
              <h3 className="title">REMAINING</h3>
              <p className="boldLarge">${addCommas(total - spent)}</p>
            </div>
          </div>
          <h3>Categories</h3>
          <div className="categories">
            {categories &&
              categories.map((category) => (
                <Category
                  key={category.label}
                  label={category.label}
                  value={addCommas(category.value)}
                  Icon={category.icon}
                />
              ))}
          </div>
          <Button
            onClick={() => setAddingItem(true)}
            text="+ Add Item"
            variant="outline-full"
          ></Button>
        </>
      )}
    </Pane>
  )
}
