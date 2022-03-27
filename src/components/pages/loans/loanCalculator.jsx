import React, { useContext } from 'react'
import { pages } from '../../../constants'
import { LocaleContext } from '../../../context/localeContext'
import { LoanCalculatorInput, LoanCheckBoxinput } from '../../core/Input'

const LoanCalculator = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className="loan_page_calculator_conatiner">
      <h5>{pages.small_texts[`credit_calculator_${locale}`]}</h5>
      <div className="main_calcuator_wrapper">
        <div className="main_calculator_inputs_wrapper">
          <LoanCalculatorInput
            label={pages.labels[`loan_amount_${locale}`]}
            typeName={pages.labels[`type_name_amd_${locale}`]}
            isBig={true}
          />
          <LoanCalculatorInput
            label={pages.labels[`annual_interest_rate_${locale}`]}
            typeName="%"
            isBig={true}
          />
          <LoanCalculatorInput
            label={pages.labels[`repayment_period_${locale}`]}
            typeName={pages.labels[`type_name_month_${locale}`]}
            isBig={true}
          />
        </div>
        <div className="main_calculator_select_button_wrapper">
          <div className="payment_method_select_type">
            <span>{pages.small_texts[`loan_repayment_option_${locale}`]}</span>
            <LoanCheckBoxinput
              label={
                pages.labels[
                  `with_equal_repayments_of_the_principal_amount_${locale}`
                ]
              }
            />
            <LoanCheckBoxinput
              label={pages.labels[`with_equal_repayments_${locale}`]}
            />
          </div>
          <button>{pages.button_texts[`count_${locale}`]}</button>
        </div>
      </div>
    </div>
  )
}

export default LoanCalculator
