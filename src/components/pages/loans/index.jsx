import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import requests from '../../../const/requests'
import { pages } from '../../../locales'
import { GlobalData } from '../../../context/globalData'
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
  const { globalData } = useContext(GlobalData)

  const [selected, setSelected] = useState(undefined)

  const dinamicPages = globalData ? globalData.Page : {}
  const loans = dinamicPages.loans || []

  useEffect(() => {
    if (selectedLoanId) {
      axios.get(requests.currentPageData(selectedLoanId)).then(({ data }) => {
        if (data) {
          setSelected(data)
        }
      })
    } else {
      setSelected(undefined)
    }
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
                { title: selected[`title_${locale}`] },
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
