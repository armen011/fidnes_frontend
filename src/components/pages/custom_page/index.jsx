import React, { useContext, useEffect, useMemo, useState } from 'react'
import BreadCrumb from '../../core/BreadCrumb'
import LoanCalculator from '../../loanCalculator'
import { pages } from '../../../locales'
import { useQuery } from '../../../hooks'
import { LocaleContext } from '../../../context/localeContext'
import { GlobalData } from '../../../context/globalData'
import './style.scss'

const CustomPage = () => {
  const selectedReportTypeId = useQuery('report_type')
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)

  const reportTypes = pages.extra_header[1].drop_down
  const reports = useMemo(
    () => (globalData ? globalData.Report : {}),
    [globalData]
  )
  const [selected, setSelected] = useState(undefined)

  useEffect(() => {
    if (selectedReportTypeId) {
      setSelected(reports[`${selectedReportTypeId}`])
    } else {
      setSelected(undefined)
    }
  }, [selectedReportTypeId, reports])

  return (
    <div className="reports_wrapper">
      <BreadCrumb
        title={pages.titles[`reports_${locale}`]}
        path={
          selectedReportTypeId
            ? [
                { title: pages.titles[`home_${locale}`], url: '/' },
                { title: pages.titles[`reports_${locale}`], url: '/reports' },
                {
                  title: reportTypes.filter(
                    (elm) => elm.id === selectedReportTypeId
                  )[0][`title_${locale}`],
                  url: `/reports?report_type=${selectedReportTypeId}`,
                },
              ]
            : [
                { title: pages.titles[`home_${locale}`], url: '/' },
                { title: pages.titles[`reports_${locale}`], url: '/reports' },
              ]
        }
      />
      <div className="reports_container">
        <div className="reports_wrapper">
          <div className="report_main_container"></div>
        </div>
      </div>
      <LoanCalculator />
    </div>
  )
}

export default React.memo(CustomPage)
