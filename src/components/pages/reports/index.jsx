import React, { useContext, useEffect, useMemo, useState } from 'react'
import BreadCrumb from '../../core/BreadCrumb'
import ReportsContainer from './reportsContainer'
import SideBar from '../../core/SideBar'
import LoanCalculator from '../../loanCalculator'
import reportImg from '../../../assets/img/report_img.png'
import { pages } from '../../../locales'
import { useQuery } from '../../../hooks'
import { LocaleContext } from '../../../context/localeContext'
import './style.scss'
import { GlobalData } from '../../../context/globalData'
import requests from '../../../const/requests'
import axios from 'axios'

const Reports = () => {
  const selectedReportTypeId = useQuery('report_type_id')
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)

  const dinamicPages = globalData ? globalData.Page : {}
  const reporTypes = dinamicPages.reports || []

  const [selected, setSelected] = useState(undefined)

  useEffect(() => {
    if (selectedReportTypeId) {
      axios
        .get(requests.currentPageData(selectedReportTypeId))
        .then(({ data }) => {
          if (data) {
            setSelected(data)
          }
        })
    } else {
      setSelected(undefined)
    }
  }, [selectedReportTypeId])

  return (
    <div className="reports_wrapper">
      <BreadCrumb
        title={pages.titles[`reports_${locale}`]}
        path={
          selected
            ? [
                { title: pages.titles[`home_${locale}`], url: '/' },
                { title: pages.titles[`reports_${locale}`], url: '/reports' },
                { title: selected[`title_${locale}`] },
              ]
            : [
                { title: pages.titles[`home_${locale}`], url: '/' },
                { title: pages.titles[`reports_${locale}`], url: '/reports' },
              ]
        }
      />
      <div className="reports_container">
        <div className="reports_wrapper">
          <div className="report_main_container">
            <div className="img_wrapper">
              <img src={reportImg} alt="" />
            </div>
            <div className="report_content_wrapper">
              <span>
                {selected
                  ? selected[`title_${locale}`]
                  : pages.small_texts[`category_${locale}`]}
              </span>
              <ReportsContainer {...{ reporTypes, selected, setSelected }} />
            </div>
          </div>
          <span>{pages.small_texts[`static_test_first_${locale}`]}</span>
          <span>{pages.small_texts[`static_test_second_${locale}`]}</span>
        </div>
        <SideBar />
      </div>
      <LoanCalculator />
    </div>
  )
}

export default React.memo(Reports)
