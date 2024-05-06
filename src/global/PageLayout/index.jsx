import React from "react"
import PropTypes from "prop-types"
import { Header } from "../Header"
import { Nav } from "../Nav"
import "./PageLayout.scss"

export const PageLayout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Nav />
        {children}
        <div className="placeholder m-0" />
      </div>
      <div className="placeholder footer" />
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
