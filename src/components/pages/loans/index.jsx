import React, { useContext, useEffect, useState } from 'react'
import { pages } from '../../../constants'
import { LocaleContext } from '../../../context/localeContext'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import LoanCalculator from './loanCalculator'
import LoansContiner from './loansContiner'
import './style.scss'

const Loans = () => {
  const selectedLoanId = useQuery('loan_id')
  const { locale } = useContext(LocaleContext)
  const [selected, setSelected] = useState(undefined)
  const loans = [
    {
      title_am: 'Հիփոթեքային վարկեր',
      title_ru: 'Հիփոթեքային վարկեր',
      title_en: 'Հիփոթեքային վարկեր',
    },
    {
      title_am: 'Հիփոթեքային վարկեր',
      title_ru: 'Հիփոթեքային վարկեր',
      title_en: 'Հիփոթեքային վարկեր',
    },
    {
      title_am: 'Հիփոթեքային վարկեր',
      title_ru: 'Հիփոթեքային վարկեր',
      title_en: 'Հիփոթեքային վարկեր',
    },
    {
      title_am: 'Հիփոթեքային վարկեր',
      title_ru: 'Հիփոթեքային վարկեր',
      title_en: 'Հիփոթեքային վարկեր',
    },
    {
      title_am: 'Հիփոթեքային վարկեր',
      title_ru: 'Հիփոթեքային վարկեր',
      title_en: 'Հիփոթեքային վարկեր',
    },
    {
      title_am: 'Հիփոթեքային վարկեր',
      title_ru: 'Հիփոթեքային վարկեր',
      title_en: 'Հիփոթեքային վարկեր',
    },
    {
      title_am: 'Հիփոթեքային վարկեր',
      title_ru: 'Հիփոթեքային վարկեր',
      title_en: 'Հիփոթեքային վարկեր',
    },
  ]

  useEffect(() => {
    setSelected(selectedLoanId)
  }, [selectedLoanId])

  return (
    <div className="loans_page_wrapper">
      <BreadCrumb
        title={pages.titles[`loan_${locale}`]}
        path={
          selected
            ? [
                { title: pages.titles[`home_${locale}`], url: '/' },
                { title: pages.titles[`loan_${locale}`], url: '/loans' },
                { title: pages.titles[`loan_${locale}`], url: '/loans' },
              ]
            : [
                { title: pages.titles[`home_${locale}`], url: '/' },
                { title: pages.titles[`loan_${locale}`], url: '/loans' },
              ]
        }
        callBack={() => setSelected(undefined)}
      />
      <div className="mail_loan_page_containr">
        <div className="loan_menu_wrapper">
          <LoansContiner {...{ loans, selected, setSelected }} />
          <LoanCalculator />
        </div>
        <SideBar />
      </div>
    </div>
  )
}

export default Loans
