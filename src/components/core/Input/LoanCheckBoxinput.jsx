import React from 'react'
import './style.scss'

export const LoanCheckBoxinput = React.memo(
  ({ label, value, name, onClick }) => {
    console.log('value', value)
    console.log('name', name)
    return (
      <div className="loan_checkbox_input" onClick={onClick}>
        <div
          style={{
            border: `1px solid ${value === name ? '#dfb43c' : '#949494'}`,
          }}
        >
          <div style={{ opacity: value === name ? 1 : 0 }} />
        </div>
        <span>{label}</span>
      </div>
    )
  }
)
