import React from 'react'

export const TextArea = ({ className, placeholder }) => {
  return (
    <textarea
      className={`textare ${className}`}
      placeholder={placeholder}
      cols="30"
      rows="10"
    ></textarea>
  )
}
