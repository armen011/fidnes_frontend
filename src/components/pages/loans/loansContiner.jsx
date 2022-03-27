import React, { useContext } from 'react'
import { LocaleContext } from '../../../context/localeContext'

const LoansContiner = ({ loans, selected, setSelected }) => {
  console.log('loans', loans)
  const { locale } = useContext(LocaleContext)
  return (
    <div className="loans_conatiner">
      {selected ? null : (
        <div className="loans_type_wrapper">
          {loans.map(({ elm, index }) => (
            <div key={index} className="loan_type_container">
              <div className="loan_type_header">hello</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LoansContiner
