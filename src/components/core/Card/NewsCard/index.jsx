import React from 'react'
import './style.scss'

export { default as DesktopNewsCard } from './DesktopNewsCard'

export const NewsCard = ({ img, title, content, date, className }) => {
  return (
    <div className={`news_card_wrapper ${className ? className : ''}`}>
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
