import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { NewsCard } from '../../core/Card'
import { GlobalData } from '../../../context/globalData'

const NewsFeed = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)
  const news = globalData ? globalData.LastNews : []

  const navigate = useNavigate()
  return (
    <div className="news_feed_container">
      <div className="news_feed_header">
        <span>{pages.titles[`news_${locale}`]}</span>
        <button onClick={() => navigate('/news')}>
          {pages.button_texts[`see_all_${locale}`]}
        </button>
      </div>
      <div className="news_feed_body">
        {news.map((elm, index) => (
          <NewsCard key={index} {...elm} />
        ))}
      </div>
      <button onClick={() => navigate('/news')}>
        {pages.button_texts[`see_all_${locale}`]}
      </button>
    </div>
  )
}

export default React.memo(NewsFeed)
