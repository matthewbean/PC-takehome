import React from "react"
import PropTypes from "prop-types"
import "./Input.scss"

export const Input = ({
  autoComplete,
  id,
  onChange,
  placeholder,
  type = "text",
  value,
  name,
}) => {
  return (
    <input
      name={name}
      autoComplete={autoComplete}
      className="input"
      id={id}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
}
