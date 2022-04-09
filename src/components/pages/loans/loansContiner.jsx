import React, { useContext, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LocaleContext } from '../../../context/localeContext'
import CkContant from '../../core/CkContant'

const LoansContainer = ({ loans, selected, setSelected }) => {
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()
  return (
    <div className="loans_conatiner">
      {selected ? (
        <CkContant {...selected}>
          <div className="selected_loan_header">
            <img src={selected.icon} alt="" />
            <p>{selected[`title_${locale}`]}</p>
          </div>
        </CkContant>
      ) : (
        <div className="loans_type_wrapper">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="loan_type_container"
              onClick={() => navigate(`/loans?loan_id=${loan.id}`)}
            >
              <div className="loan_type_header">
                <img src={loan.icon} alt="" />
              </div>
              <p>{loan[`title_${locale}`]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default memo(LoansContainer)
