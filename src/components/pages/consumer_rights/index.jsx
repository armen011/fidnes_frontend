import React, { useContext, useMemo, useState } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import LoanCalculator from '../../loanCalculator'
import ConsumerMenu from './consumerMenu'
import './style.scss'

const consumers = pages.extra_header[2].drop_down

const ConsumerRights = () => {
  const selectedConsumerId = useQuery('consumer_right_id')
  const { locale } = useContext(LocaleContext)

  const [selected, setSelected] = useState(undefined)

  const selectedConsumer = useMemo(
    () => consumers.filter(({ id }) => id === selectedConsumerId)[0],
    [selectedConsumerId]
  )

  return (
    <div className="consumer_page_wrapper">
      <BreadCrumb
        title={pages.titles[`consumer_rights_${locale}`]}
        path={
          selectedConsumer
            ? [
                { title: pages.titles[`home_${locale}`], url: '/' },
                {
                  title: pages.titles[`consumer_rights_${locale}`],
                  url: '/consumer_rights',
                },
                { title: selectedConsumer[`title_${locale}`] },
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
