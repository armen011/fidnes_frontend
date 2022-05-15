import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { LocaleContext } from '../../../context/localeContext'
import { pages } from '../../../locales'
import BreadCrumb from '../../core/BreadCrumb'
import requests from '../../../const/requests'
import { PageDropdown } from '../../core/DropDown'
import "./style.scss";

const ManagementPage = () => {
  const { locale } = useContext(LocaleContext)
    const [data,setData] = useState();

  useEffect(() => {
    axios.get(requests.management()).then(({data}) => {
        setData(data);
    })
  }, [])

  return (
    <div className="management-wrapper">
      <BreadCrumb
        title={pages.small_texts[`management_${locale}`]}
        path={[
          { title: pages.titles[`home_${locale}`], url: '/' },
          {
            title: pages.small_texts[`management_${locale}`],
            url: `/management`,
          },
        ]}
      />
       <div className="dropdowns_conatiner">
          {data && data.map((item, index) => (
            <PageDropdown {...item} key={index} />
          ))}
        </div>
    </div>
  )
}

export default ManagementPage
