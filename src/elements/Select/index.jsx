import React from "react"
import PropTypes from "prop-types"
import { renderToStaticMarkup } from "react-dom/server"
import { FaChevronDown } from "react-icons/fa"
import "./Select.scss"

export const Select = ({ onChange, options = [], value }) => {
  const rootStyles = getComputedStyle(document.documentElement)
  const gray500 = rootStyles.getPropertyValue("--color-gray-500").trim()
  const svgString = encodeURIComponent(
    renderToStaticMarkup(<FaChevronDown color={gray500} />)
  )
  const iconDataUri = `url("data:image/svg+xml,${svgString}")`

  return (
    <select
      onChange={(e) => onChange(e)}
      style={{ backgroundImage: iconDataUri }}
      value={value}
    >
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        )
      })}
    </select>
  )
}

Select.propTypes = {
  onChange: PropTypes.func,
  campuses: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
  value: PropTypes.string,
}
