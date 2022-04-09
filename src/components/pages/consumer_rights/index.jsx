import React, { useContext, useEffect, useState } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { GlobalData } from '../../../context/globalData'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import LoanCalculator from '../../loanCalculator'
import ConsumerMenu from './consumerMenu'
import './style.scss'
import axios from 'axios'
import requests from '../../../const/requests'

const ConsumerRights = () => {
  const selectedConsumerId = useQuery('consumer_right_id')
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)

  const dinamicPages = globalData ? globalData.Page : {}
  const consumers = dinamicPages.consumer_rights || []

  const [selected, setSelected] = useState(undefined)

  useEffect(() => {
    if (selectedConsumerId) {
      axios
        .get(requests.currentPageData(selectedConsumerId))
        .then(({ data }) => {
          if (data) {
            setSelected(data)
          }
        })
    } else {
      setSelected(undefined)
    }
  }, [selectedConsumerId])

  return (
    <div className="consumer_page_wrapper">
      <BreadCrumb
        title={pages.titles[`consumer_rights_${locale}`]}
        path={
          selected
            ? [
                { title: pages.titles[`home_${locale}`], url: '/' },
                {
                  title: pages.titles[`consumer_rights_${locale}`],
                  url: '/consumer_rights',
                },
                { title: selected[`title_${locale}`] },
              ]
            : [
                { title: pages.titles[`home_${locale}`], url: '/' },
                {
                  title: pages.titles[`consumer_rights_${locale}`],
                  url: '/consumer_rights',
                },
              ]
        }
        callBack={() => setSelected(undefined)}
      />
      <div className="consumer_page_container">
        <ConsumerMenu {...{ selected, consumers, setSelected }} />
        <SideBar />
      </div>
      <LoanCalculator />
    </div>
  )
}

export default ConsumerRights
