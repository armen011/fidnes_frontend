import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import requests from '../../../const/requests'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import NewsFeed from './newsFeed'
import './style.scss'

const News = () => {
  const selectedNewsId = useQuery('news_id')
  const { locale } = useContext(LocaleContext)
  const [selected, setSelected] = useState(undefined)
  const [news, setNews] = useState([])
  useEffect(() => {
    if (selectedNewsId) {
      axios.get(requests.currentNews(selectedNewsId)).then(({ data }) => {
        if (data) {
          setSelected(data)
        }
      })
    } else {
      axios.get(requests.news()).then(({ data: { results } }) => {
        if (results) {
          setNews(results)
        }
      })
      setSelected(undefined)
    }
  }, [selectedNewsId])
  return (
    <div className="news_page_wrapper">
      <BreadCrumb
        title={pages.titles[`news_${locale}`]}
        path={[
          { title: pages.titles[`home_${locale}`], url: '/' },
          { title: pages.titles[`news_${locale}`], url: '/news' },
        ]}
      />
      <div className="main_news_page_container">
        <div className="main_news_wrapper">
          <NewsFeed {...{ selected, setSelected, news }} />
          <span>{pages.small_texts[`static_test_first_${locale}`]}</span>
          <span>{pages.small_texts[`static_test_second_${locale}`]}</span>
        </div>
        <SideBar />
      </div>
    </div>
  )
}

export default React.memo(News)
