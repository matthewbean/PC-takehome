import React from "react"
import "./Category.scss"
function Category({ label, value, Icon }) {
  return (
    <div className="category">
      <div className="iconBox">
        <Icon />
      </div>
      <div className="categoryLabel">{label}</div>
      <div className="amountLabel">${value}</div>
    </div>
  )
}

export default Category
