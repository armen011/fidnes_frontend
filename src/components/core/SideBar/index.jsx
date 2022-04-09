import React, { useContext } from 'react'
import {
  FirstConvertCardForSideBar,
  NewsCard,
  SecondConvertCardForSideBar,
} from '../Card'
import { LocaleContext } from '../../../context/localeContext'
import { pages } from '../../../locales'
import { GlobalData } from '../../../context/globalData'
import './style.scss'

const SideBar = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)
  const latestNews = globalData ? globalData.LastNews[0] : {}

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
