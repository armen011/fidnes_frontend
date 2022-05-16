import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import requests from '../../../const/requests'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import BreadCrumb from '../../core/BreadCrumb'
import Icon from '../../core/Icon'
import LoanCalculator from '../../loanCalculator'
import externalLink from '../../../assets/img/externalLint.svg'
import './style.scss'

const LegalActs = () => {
  const { locale } = useContext(LocaleContext)
  const [[lawFirst, lawSecondFirst, lawSecondSecond], setLegalActs] = useState([
    undefined,
    undefined,
    undefined,
  ])

  useEffect(() => {
    axios.get(requests.legalActs()).then(({ data }) => {
      if (data) {
        setLegalActs(data)
      }
    })
  }, [])

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
        {lawFirst && (
          <div className="law_first_container">
            <div className="header_container">
              <span>{lawFirst[`title_${locale}`]}</span>
            </div>
            <ul className="content_container">
              {lawFirst.files.map((pdf, index) => (
                <a
                  href={pdf.file}
                  target="_blank"
                  key={index}
                  rel="noreferrer"
                >
                  <li>
                    {pdf.types==="PDF"?<img src={externalLink} alt="" />:<Icon iconName="pdf_file" width={24} height={24} />
                    }
                    <span>{pdf[`title_${locale}`]}</span>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        )}
        <div className="law_second_container">
          {lawSecondFirst && (
            <div className="law_second_first">
              <div className="header_container">
                <span>{lawSecondFirst[`title_${locale}`]}</span>
              </div>
              <ul className="content_container">
                {lawSecondFirst.files.map((pdf, index) => (
                  <a
                    href={pdf[`file_${locale}`]}
                    target="_blank"
                    key={index}
                    rel="noreferrer"
                  >
                    <li>
                      <Icon iconName="pdf_file" width={24} height={24} />
                      <span>{pdf[`title_${locale}`]}</span>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          )}
          {lawSecondSecond && (
            <div className="law_second_second">
              <div className="header_container">
                <span>{lawSecondSecond[`title_${locale}`]}</span>
              </div>
              <ul className="content_container">
                {lawSecondSecond.files.map((pdf, index) => (
                  <a
                    href={pdf[`file_${locale}`]}
                    target="_blank"
                    key={index}
                    rel="noreferrer"
                  >
                    <li>
                      <Icon iconName="pdf_file" width={24} height={24} />
                      <span>{pdf[`title_${locale}`]}</span>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <LoanCalculator />
    </div>
  )
}

export default React.memo(LegalActs)
