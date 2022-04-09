import React, { useContext, useEffect, useState } from 'react'
import {
  FirstConvertCardForSideBar,
  NewsCard,
  SecondConvertCardForSideBar,
} from '../Card'
import { LocaleContext } from '../../../context/localeContext'
import { pages } from '../../../locales'
import './style.scss'
import axios from 'axios'
import requests from '../../../const/requests'

const SideBar = () => {
  const { locale } = useContext(LocaleContext)
  const [latestNews, setLatestNews] = useState({})
  useEffect(() => {
    axios.get(requests.news()).then(({ data: { results } }) => {
      if (results) {
        setLatestNews(results[0])
      }
    })
  }, [])
  return (
    <div className="side_bar_info_wrapper">
      <FirstConvertCardForSideBar />
      <div className="news_wrapper">
        <span>{pages.small_texts[`latest_news_${locale}`]}</span>
        <NewsCard className="news_card_custom" {...latestNews} />
      </div>
      <SecondConvertCardForSideBar />
    </div>
  )
}

export default React.memo(SideBar)
