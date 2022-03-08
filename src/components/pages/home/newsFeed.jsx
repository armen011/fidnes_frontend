import React from 'react'
import NewsCard from '../../core/NewsCard'
import { news } from './mock.data'

const NewsFeed = () => {
  return (
    <div className="news_feed_container">
      <div className="news_feed_header">
        <span>Նորություններ</span>
        <button>Տեսնել բոլորը</button>
      </div>
      <div className="news_feed_body">
        {news.map((elm, index) => (
          <NewsCard key={index} {...elm} />
        ))}
      </div>
      <button>Տեսնել բոլորը</button>
    </div>
  )
}

export default React.memo(NewsFeed)
