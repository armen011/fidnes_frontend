import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import requests from '../../../const/requests'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { NewsCard } from '../../core/Card'

const NewsFeed = () => {
  const { locale } = useContext(LocaleContext)
  const [news, setNews] = useState([])
  useEffect(() => {
    axios.get(requests.news()).then(({ data: { results } }) => {
      if (results) {
        setNews(results)
      }
    })
  }, [])

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
      <button>{pages.button_texts[`see_all_${locale}`]}</button>
    </div>
  )
}

export default React.memo(NewsFeed)
