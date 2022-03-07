import React from 'react'
import './style.scss'

export const LoanCheckBoxinput = React.memo(({ label }) => {
  return (
    <div className="loan_checkbox_input">
      <div>
        <div />
      </div>
      <span>{label}</span>
    </div>
  )
})
