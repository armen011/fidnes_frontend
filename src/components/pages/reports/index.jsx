import React, { useContext, useEffect, useMemo, useState } from 'react'
import BreadCrumb from '../../core/BreadCrumb'
import LoanCalculator from '../../loanCalculator'
import { pages } from '../../../locales'
import { useQuery } from '../../../hooks'
import { LocaleContext } from '../../../context/localeContext'
import { GlobalData } from '../../../context/globalData'
import './style.scss'
import SideBar from '../../core/SideBar'
import Icon from '../../core/Icon'
import { useNavigate } from 'react-router-dom'
import ReportDropDown from '../../core/DropDown/ReportDropDown'

const intermediateReportType = {
  quartal_1: {
    title_hy: 'Առաջին եռամսյակ',
    title_ru: 'Первая четверть',
    title_en: 'First quarter',
  },
  quartal_2: {
    title_hy: 'Երկրորդ եռամսյակ',
    title_ru: 'Вторая четверть',
    title_en: 'Second quarter',
  },
  quartal_3: {
    title_hy: 'Երրորդ եռամսյակ',
    title_ru: 'Третья четверть',
    title_en: 'Third quarter',
  },
  quartal_4: {
    title_hy: 'Չորրորդ եռամսյակ',
    title_ru: 'Четвертая четверть',
    title_en: 'Forth quarter',
  },
}

const Reports = () => {
  const selectedReportTypeId = useQuery('report_type')
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)
  const navigate = useNavigate()

  const reportTypes = pages.extra_header[1].drop_down
  const reports = useMemo(
    () => (globalData ? globalData.Report : {}),
    [globalData]
  )
  const [selected, setSelected] = useState(reports[reportTypes])

  useEffect(() => {
    if (selectedReportTypeId) {
      setSelected(reports[selectedReportTypeId])
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
        <div className="reports_main_wrapper">
          <div className="report_types_container">
            {reportTypes.map((type, index) => (
              <div
                key={index}
                className={`type_container ${
                  selectedReportTypeId === type.id && 'selected_type_conatiner'
                }`}
                onClick={() => navigate(`/reports?report_type=${type.id}`)}
              >
                {type[`title_${locale}`]}
                <Icon iconName="arrow_right_24" width={24} height={24} />
              </div>
            ))}
          </div>
          <div className="selected_report_content_container">
            {selected &&
              Object.keys(selected).reverse().map((key, index) => (
                <ReportDropDown title={key} key={selectedReportTypeId + index}>
                  {selectedReportTypeId === 'intermediate' ? (
                    <div className="intermediate_container">
                      {Object.keys(selected[key]).map((typeKey, index) => (
                        <ReportDropDown
                          title={
                            intermediateReportType[typeKey] &&
                            intermediateReportType[typeKey][`title_${locale}`]
                          }
                          key={index}
                        >
                          <div className="selected_intermediant">
                            {selected[key][typeKey].length &&
                              selected[key][typeKey].map((report, index) => (
                                <a
                                  key={index}
                                  href={report[`file_${locale}`]}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <Icon
                                    iconName="pdf_file"
                                    width={24}
                                    height={24}
                                  />
                                  {report[`title_${locale}`]}
                                </a>
                              ))}
                          </div>
                        </ReportDropDown>
                      ))}
                    </div>
                  ) : (
                    <div className="container">
                      {selected[key].length &&
                        selected[key].map((report, index) => (
                          <a
                            key={index}
                            href={report[`file_${locale}`]}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Icon iconName="pdf_file" width={24} height={24} />
                            {report[`title_${locale}`]}
                          </a>
                        ))}
                    </div>
                  )}
                </ReportDropDown>
              ))}
          </div>
        </div>
        <SideBar />
      </div>
      <LoanCalculator />
    </div>
  )
}

export default React.memo(Reports)
