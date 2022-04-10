import React from 'react'

export const TextInput = ({
  className,
  placeholder,
  value,
  setValue,
  ...otherProps
}) => {
  return (
    <input
      className={`text_input ${className}`}
      value={value}
      onChange={({ target: { value } }) => {
        setValue(value)
      }}
      placeholder={placeholder}
      {...otherProps}
    />
  )
}
