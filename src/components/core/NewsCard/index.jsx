import React from 'react'
import './style.scss'

const NewsCard = ({ img, title, content, date }) => {
  return (
    <div className="news_card_wrapper">
      <div className="news_img_wrapper">
        <img src={img} alt="" />
      </div>
      <div className="news_content_wrapper">
        <span>{title}</span>
        <span>{content}</span>
        <div>
          <p>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
