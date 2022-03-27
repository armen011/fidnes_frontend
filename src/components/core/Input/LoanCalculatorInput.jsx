import React from 'react'
import './style.scss'

export const LoanCalculatorInput = React.memo(
  ({ label, typeName, onChange, isBig, value }) => {
    return (
      <div
        className={
          isBig
            ? 'loan_calculator_input_wrapper_big'
            : `loan_calculator_input_wrapper`
        }
      >
        <span>{label}</span>
        <input
          type="number"
          placeholder="0"
          value={value}
          onChange={({ target: { value } }) => {
            onChange(parseInt(value))
          }}
        />
        <span>{typeName}</span>
      </div>
    )
  }
)
