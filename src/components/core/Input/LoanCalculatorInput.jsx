import React from 'react'
import './style.scss'

export const LoanCalculatorInput = React.memo(({ label, typeName, isBig }) => {
  return (
    <div
      className={
        isBig
          ? 'loan_calculator_input_wrapper_big'
          : `loan_calculator_input_wrapper`
      }
    >
      <span>{label}</span>
      <input type="number" placeholder="0" />
      <span>{typeName}</span>
    </div>
  )
})
