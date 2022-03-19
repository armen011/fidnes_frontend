import React, { useEffect, useMemo, useState } from 'react'
import BreadCrumb from '../../core/BreadCrumb'
import ReportsContainer from './reportsContainer'
import SideBar from '../../core/SideBar'
import LoanCalculator from '../../loanCalculator'
import reportImg from '../../../assets/img/report_img.png'
import { pages } from '../../../constants'
import { useQuery } from '../../../hooks'
import './style.scss'

const reports = pages.extra_header[1].drop_down

const Reports = () => {
  const selectedReportTypeId = useQuery('report_type_id')
  const branches = pages.extra_header[1].drop_down

  const selectedReportType = useMemo(
    () => reports.filter(({ id }) => id === selectedReportTypeId)[0],
    [selectedReportTypeId]
  )

  const [selected, setSelected] = useState(undefined)

  useEffect(() => {
    selectedReportTypeId
      ? setSelected(selectedReportType)
      : setSelected(undefined)
  }, [selectedReportTypeId, selectedReportType])

  return (
    <div className="reports_wrapper">
      <BreadCrumb
        title="Հաշվետվություններ"
        path={
          selectedReportType
            ? [
                { title: 'Գլխավոր', url: '/' },
                { title: 'Հաշվետվություններ', url: '/reports' },
                { title: selectedReportType.title },
              ]
            : [
                { title: 'Գլխավոր', url: '/' },
                { title: 'Հաշվետվություններ', url: '/reports' },
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
              <span>{selected ? selected.title : 'Բաժիններ'}</span>
              <ReportsContainer {...{ branches, selected, setSelected }} />
            </div>
          </div>
          <span>
            «Ֆիդես հիփոթեքային ընկերություն» ունիվերսալ վարկային
            կազմակերպություն փակ բաժնետիրական ընկերությունը (այսուհետ`
            Կազմակերպություն) ունի մեկ մասնաճյուղ:
          </span>
          <span>
            Կազմակերպության իրավաբանական հասցեն է` ՀՀ, ք. Երևան, Նաիրի Զարյան
            17ա: Կազմակերպության գործունեության հասցեն է` ԱՀ, ք. Ստեփանակերտ, Մ.
            Գոշ 2/33:
          </span>
        </div>
        <SideBar />
      </div>
      <LoanCalculator />
    </div>
  )
}

export default React.memo(Reports)
