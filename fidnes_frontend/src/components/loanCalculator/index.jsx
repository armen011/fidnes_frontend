import { AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'
import React, { useState } from 'react'
import { LoanCalculatorInput, LoanCheckBoxinput } from '../core/Input'
import Container from './Container'
import LoanTypes from './loanTypes'
import './style.scss'

const LoanCalculator = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newPage) => {
    const newDirection = newPage > page ? 1 : -1
    setPage([newPage, newDirection])
  }
  const containerIndex = wrap(0, LoanTypes.length, page)

  return (
    <div className="loan_calculator_container">
      <span>Վարկեր</span>
      <div className="loan_calculator_wrapper">
        <div className="loadn_type_selector_wrapper">
          <div className="loadn_type_selector_container">
            <AnimatePresence custom={direction} exitBeforeEnter>
              <Container
                typeArray={LoanTypes[containerIndex]}
                {...{ direction, page }}
              />
            </AnimatePresence>
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
          <span>Վարկային Հաշվիչ</span>
          <div className="main_calcuator_wrapper">
            <div className="main_calculator_inputs_wrapper">
              <LoanCalculatorInput label="Վարկի գումար" typeName="դրամ" />
              <LoanCalculatorInput label="Տարեկան տոկոսադրույք" typeName="%" />
              <LoanCalculatorInput label="Մարման ժամկետը" typeName="ամիս" />
            </div>
            <div className="main_calculator_select_button_wrapper">
              <div className="payment_method_select_type">
                <span>Վարկի մարման տարբերակը</span>
                <LoanCheckBoxinput label="մայր գումարի հավասարաչափ մարումներով" />
                <LoanCheckBoxinput label="հավասարաչափ մարումներով" />
              </div>
              <button>Հաշվել</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(LoanCalculator)
