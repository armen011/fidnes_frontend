import React, { useContext, useMemo, useState } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { LoanCalculatorInput, LoanCheckBoxinput } from '../../core/Input'
import LoanModal from '../../core/Modal'

const LoanCalculator = () => {
  const initialValue = useMemo(
    () => ({ sum: '', period: '', percentage: '', method: 0 }),
    []
  )
  const { locale } = useContext(LocaleContext)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [formValues, setFormValues] = useState(initialValue)

  return (
    <div className="loan_page_calculator_conatiner">
      <h5>{pages.small_texts[`credit_calculator_${locale}`]}</h5>
      <div className="main_calcuator_wrapper">
        <div className="main_calculator_inputs_wrapper">
          <LoanCalculatorInput
            label={pages.labels[`loan_amount_${locale}`]}
            typeName={pages.labels[`type_name_amd_${locale}`]}
            isBig={true}
            value={formValues.sum}
            onChange={(value) =>
              setFormValues((prev) => ({ ...prev, sum: value }))
            }
          />
          <LoanCalculatorInput
            label={pages.labels[`annual_interest_rate_${locale}`]}
            typeName="%"
            isBig={true}
            value={formValues.percentage}
            onChange={(value) =>
              setFormValues((prev) => ({ ...prev, percentage: value }))
            }
          />
          <LoanCalculatorInput
            label={pages.labels[`repayment_period_${locale}`]}
            typeName={pages.labels[`type_name_month_${locale}`]}
            isBig={true}
            value={formValues.period}
            onChange={(value) =>
              setFormValues((prev) => ({ ...prev, period: value }))
            }
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
              value={formValues.method}
              name={0}
              onClick={() => setFormValues((prev) => ({ ...prev, method: 0 }))}
            />
            <LoanCheckBoxinput
              label={pages.labels[`with_equal_repayments_${locale}`]}
              value={formValues.method}
              name={1}
              onClick={() => setFormValues((prev) => ({ ...prev, method: 1 }))}
            />
          </div>
          <button
            onClick={() => {
              if (
                formValues.sum > 0 &&
                formValues.period > 0 &&
                formValues.percentage > 0
              ) {
                setIsModalOpened(true)
              }
            }}
          >
            {pages.button_texts[`count_${locale}`]}
          </button>
        </div>
      </div>
      {isModalOpened && (
        <LoanModal
          closeModal={() => {
            setIsModalOpened(false)
            // setFormValues(initialValue)
          }}
          formValues={formValues}
        />
      )}
    </div>
  )
}

export default LoanCalculator
