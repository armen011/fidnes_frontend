import React, { useContext } from 'react'
import { pages } from '../../../constants'
import { LocaleContext } from '../../../context/localeContext'
import BreadCrumb from '../../core/BreadCrumb'
import Icon from '../../core/Icon'
import LoanCalculator from '../../loanCalculator'
import pdfs from './pdf.json'
import './style.scss'

const LegalActs = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className="legal_acts_wrapper">
      <BreadCrumb
        title={pages.titles[`legal_acts_${locale}`]}
        path={[
          { title: pages.titles[`home_${locale}`], url: '/' },
          { title: pages.titles[`legal_acts_${locale}`], url: '/legal_acts' },
        ]}
      />
      <div className="legal_acts_container">
        <div className="law_first_container">
          <div className="header_container">
            <span>Կանոնակարգեր</span>
          </div>
          <ul className="content_container">
            {pdfs.laws_first.map(({ title }, index) => (
              <li key={index}>
                <Icon iconName="pdf_file" width={24} height={24} />
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="law_second_container">
          <div className="law_second_first">
            <div className="header_container">
              <span>Օրենքներ</span>
            </div>
            <ul className="content_container">
              {pdfs.law_second_first.map(({ title }, index) => (
                <li key={index}>
                  <Icon iconName="pdf_file" width={24} height={24} />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="law_second_second">
            <div className="header_container">
              <span>Օրենքներ</span>
            </div>
            <ul className="content_container">
              {pdfs.law_second_second.map(({ title }, index) => (
                <li key={index}>
                  <Icon iconName="pdf_file" width={24} height={24} />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <LoanCalculator />
    </div>
  )
}

export default React.memo(LegalActs)
