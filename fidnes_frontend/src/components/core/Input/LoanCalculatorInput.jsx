import React from 'react'
import './style.scss'

export const LoanCalculatorInput = React.memo(({ label, typeName }) => {
  return (
    <div className="loan_calculator_input_wrapper">
      <span>{label}</span>
      <input type="number" placeholder="0" />
      <span>{typeName}</span>
    </div>
  )
})
