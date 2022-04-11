import React, { useContext, useEffect, useState } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import LoanCalculator from '../../loanCalculator'
import './style.scss'
import { GlobalData } from '../../../context/globalData'
import axios from 'axios'
import requests from '../../../const/requests'
import CkContant from '../../core/CkContant'

const Owners = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)
  const dinamicPages = globalData ? globalData.Page : {}
  const [data, setData] = useState({})

  const ownersProps = dinamicPages.menu
    ? dinamicPages.menu.length > 0
      ? dinamicPages.menu[0]
      : {}
    : {}

  useEffect(() => {
    if (ownersProps.id) {
      axios.get(requests.currentPageData(ownersProps.id)).then(({ data }) => {
        if (data) {
          setData(data)
        }
      })
    }
  }, [ownersProps.id])

  return (
    <div className="owners_wrapper">
      <BreadCrumb
        title={pages.titles[`owners_${locale}`]}
        path={[
          { title: pages.titles[`home_${locale}`], url: '/' },
          { title: pages.titles[`owners_${locale}`], url: '/owners' },
        ]}
      />
      <div className="owners_container">
        <div className="owners_wrapper">
          <div className="owners_main_container">
            <h3>{ownersProps[`title_${locale}`]}</h3>
            <CkContant {...data} />
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

export default React.memo(Owners)
