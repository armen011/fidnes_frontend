import React, { useContext } from 'react'
import { pages } from '../../../constants'
import { LocaleContext } from '../../../context/localeContext'
import { calcLoan } from '../../../utils'
import Icon from '../Icon'
import './style.scss'

const LoanModal = ({ closeModal, formValues }) => {
  const { locale } = useContext(LocaleContext)
  const { result, totlaPercentSum, totalSum, totalMainSum } = calcLoan(
    formValues.sum,
    formValues.period,
    formValues.percentage,
    formValues.method
  )
  return (
    <div className="loan_modal_wrapper" onClick={closeModal}>
      <div
        className="modal_container"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="modal_header">
          <span>{pages.labels[`credit_calculator_results_${locale}`]}</span>
          <Icon
            iconName="close_modal"
            width={24}
            height={24}
            onClick={closeModal}
          />
        </div>
        <div className="main_content_wrapper">
          <div className="info_container">
            <ul className="loan_general_info">
              <li>
                <span>{pages.labels[`loan_amount_${locale}`]}</span>
                <span>
                  {formValues.sum} {pages.labels[`type_name_amd_${locale}`]}
                </span>
              </li>
              <li>
                <span>{pages.labels[`annual_interest_rate_${locale}`]}</span>
                <span>{formValues.percentage} %</span>
              </li>
              <li>
                <span>{pages.labels[`repayment_period_${locale}`]}</span>
                <span>
                  {formValues.period}{' '}
                  {pages.labels[`type_name_month_${locale}`]}
                </span>
              </li>
            </ul>
            <div className="seprate_infor">
              <span>{pages.labels[`table_total_${locale}`]}</span>
              <span>
                {parseInt(totalSum)} {pages.labels[`type_name_amd_${locale}`]}
              </span>
            </div>
          </div>
          <table className="table_container">
            <tr>
              <th>{pages.labels[`table_month_${locale}`]}</th>
              <th>{pages.labels[`table_interest_amount_${locale}`]}</th>
              <th>{pages.labels[`table_pepayment_of_principal_${locale}`]}</th>
              <th>{pages.labels[`table_total_${locale}`]}</th>
            </tr>
            {result.map(({ month, capitalSum, percentSum, totalSum }) => (
              <tr>
                <td>
                  <div>{month}</div>
                </td>
                <td>{percentSum}</td>
                <td>{capitalSum}</td>
                <td>{totalSum}</td>
              </tr>
            ))}
            <tr>
              <td>{pages.labels[`table_total_${locale}`]}</td>
              <td>{totalMainSum}</td>
              <td>{totlaPercentSum}</td>
              <td>{totalSum}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LoanModal
