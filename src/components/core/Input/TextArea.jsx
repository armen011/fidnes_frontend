import React from 'react'

export const TextArea = ({ className, placeholder, value, setValue }) => {
  return (
    <textarea
      value={value}
      onChange={({ target: { value } }) => setValue(value)}
      className={`textare ${className}`}
      placeholder={placeholder}
      cols="30"
      rows="10"
    ></textarea>
  )
}
