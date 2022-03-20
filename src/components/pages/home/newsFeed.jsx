import React, { useContext } from 'react'
import { pages } from '../../../constants'
import { LocaleContext } from '../../../context/localeContext'
import { NewsCard } from '../../core/Card'
import { news } from './mock.data'

const NewsFeed = () => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="news_feed_container">
      <div className="news_feed_header">
        <span>{pages.titles[`news_${locale}`]}</span>
        <button>{pages.button_texts[`see_all_${locale}`]}</button>
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
