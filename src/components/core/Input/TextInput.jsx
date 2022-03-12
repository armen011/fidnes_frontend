import React from 'react'

export const TextInput = ({ className, placeholder, ...otherProps }) => {
  return (
    <input
      className={`text_input ${className}`}
      placeholder={placeholder}
      {...otherProps}
    />
  )
}
