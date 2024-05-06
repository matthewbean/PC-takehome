import React from "react"
import PropTypes from "prop-types"
import "./Button.scss"

export const Button = ({
  children,
  onClick = () => null,
  size = "md",
  variant = "filled",
  text = "",
  ...restProps
}) => {
  return (
    <button
      onClick={(e) => onClick(e)}
      className={`button button--${size} button--${variant}`}
      {...restProps}
    >
      {text || children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.string,
  text: PropTypes.string,
  variant: PropTypes.string,
}
