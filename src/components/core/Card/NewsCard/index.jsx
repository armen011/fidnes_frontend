import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { LocaleContext } from '../../../../context/localeContext'
import Status from '../../Status'
import './style.scss'

export { default as DesktopNewsCard } from './DesktopNewsCard'

export const NewsCard = ({
  id,
  image,
  content,
  date,
  className,
  status,
  ...otherProps
}) => {
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()

  const selectedDate = new Date(date)
  const res = `${selectedDate.getDate()}.${
    selectedDate.getMonth() < 10
      ? '0' + selectedDate.getMonth()
      : selectedDate.getMonth()
  }.${selectedDate.getFullYear()}  ${selectedDate.getHours()}:${selectedDate.getMinutes()}`

  return (
    <div
      className={`news_card_wrapper ${className ? className : ''}`}
      onClick={() => {
        navigate('/news?news_id=' + id)
      }}
    >
      <div className="news_img_wrapper">
        <img src={image} alt="" />
      </div>
      <div className="news_content_wrapper">
        <span>{otherProps[`title_${locale}`]}</span>
        <span>{otherProps[`description_${locale}`]}</span>
        <div>
          {date && <p>{res}</p>}
          <Status status={status} />
        </div>
      </div>
    </div>
  )
}
