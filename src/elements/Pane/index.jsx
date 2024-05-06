import React from "react"
import PropTypes from "prop-types"
import "./Pane.scss"

export const Pane = ({ children, size = "md", title }) => {
  return (
    <div className={`pane pane--${size}`}>
      {title && (
        <div className="pane--header">
          <h2>{title}</h2>
        </div>
      )}
      <div className="pane--content">{children}</div>
    </div>
  )
}

Pane.propTypes = {
  children: PropTypes.node,
  size: PropTypes.string,
  title: PropTypes.string,
}
