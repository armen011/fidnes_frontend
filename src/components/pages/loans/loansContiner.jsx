import React from 'react'

const LoansContainer = ({ loans, selected, setSelected }) => {
  return (
    <div className="loans_conatiner">
      <div className="loans_type_wrapper">
        {loans.map(({ elm }, index) => (
          <div key={index} className="loan_type_container">
            <div className="loan_type_header">hello</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LoansContainer
