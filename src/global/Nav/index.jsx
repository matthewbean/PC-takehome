import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import {
  Wallet,
  WalletOutline,
  Budget,
  BudgetOutline,
  Transactions,
  TransactionsOutline,
} from "../../icons"
import "./Nav.scss"

const Link = ({ to, label, icon, iconActive }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <>
          {isActive
            ? React.createElement(iconActive)
            : React.createElement(icon)}
          {label}
        </>
      )}
    </NavLink>
  )
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  iconActive: PropTypes.func.isRequired,
}
export const Nav = () => {
  return (
    <nav>
      <Link to="/" label="My Wallet" icon={WalletOutline} iconActive={Wallet} />
      <Link
        to="/budget"
        label="Budget"
        icon={BudgetOutline}
        iconActive={Budget}
      />
      <Link
        to="/transactions"
        label="Transactions"
        icon={TransactionsOutline}
        iconActive={Transactions}
      />
    </nav>
  )
}
