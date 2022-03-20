import { AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { LoanCalculatorInput, LoanCheckBoxinput } from '../core/Input'
import Container from './Container'
import LoanTypes from './loanTypes'
import { pages } from '../../constants'
import { LocaleContext } from '../../context/localeContext'
import './style.scss'

const LoanCalculator = () => {
  const [[page, direction], setPage] = useState([0, 0])
  const { locale } = useContext(LocaleContext)
  const paginate = useCallback(
    (newPage) => {
      if (newPage < 0) newPage = 3
      if (newPage > 3) newPage = 0
      const newDirection = newPage > page ? 1 : -1
      setPage([newPage, newDirection])
    },
    [page]
  )

  useEffect(() => {
    let timeOut
    timeOut = setTimeout(() => {
      paginate(page + 1)
    }, 3500)

    return () => clearTimeout(timeOut)
  }, [paginate, page])

  const containerIndex = wrap(0, LoanTypes.length, page)
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="loan_calculator_container">
      <span>{pages.titles[`loan_${locale}`]}</span>
      <div className="loan_calculator_wrapper">
        <div className="loadn_type_selector_wrapper">
          <div className="loadn_type_selector_container">
            <AnimatePresence custom={direction} exitBeforeEnter>
              <Container
                typeArray={LoanTypes[containerIndex]}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(page + 1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(page - 1)
                  }
                }}
                {...{ direction, page }}
              />
            </AnimatePresence>
          </div>
          <div className="loan_type_selector_container_mobile">
            {[...LoanTypes.flat()].map(({ title, img }, index) => {
              return (
                <div className="mobile_container" key={index}>
                  <div className="img_wrapper">
                    <img src={img} alt="" />
                  </div>
                  <div className="text_wrapper">
                    <span>{title}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="loadn_type_selector_controller">
            <button onClick={() => paginate(0)}>
              <div style={page === 0 ? { width: '100%', opacity: 1 } : {}} />
            </button>
            <button onClick={() => paginate(1)}>
              <div style={page === 1 ? { width: '100%', opacity: 1 } : {}} />
            </button>
            <button onClick={() => paginate(2)}>
              <div style={page === 2 ? { width: '100%', opacity: 1 } : {}} />
            </button>
            <button onClick={() => paginate(3)}>
              <div style={page === 3 ? { width: '100%', opacity: 1 } : {}} />
            </button>
          </div>
        </div>
        <div className="loadn_caluclator_input_wrapper">
          <span>{pages.small_texts[`credit_calculator_${locale}`]}</span>
          <div className="main_calcuator_wrapper">
            <div className="main_calculator_inputs_wrapper">
              <LoanCalculatorInput
                label={pages.labels[`loan_amount_${locale}`]}
                typeName={pages.labels[`type_name_amd_${locale}`]}
              />
              <LoanCalculatorInput
                label={pages.labels[`annual_interest_rate_${locale}`]}
                typeName="%"
              />
              <LoanCalculatorInput
                label={pages.labels[`repayment_period_${locale}`]}
                typeName={pages.labels[`type_name_month_${locale}`]}
              />
            </div>
            <div className="main_calculator_select_button_wrapper">
              <div className="payment_method_select_type">
                <span>
                  {pages.small_texts[`loan_repayment_option_${locale}`]}
                </span>
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
      </div>
    </div>
  )
}

export default React.memo(LoanCalculator)
