import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import Status from '../../Status'

const DesktopNewsCard = ({
  image,
  title,
  description,
  date,
  status,
  onClick,
}) => {
  const variantItem = useMemo(
    () => ({
      hidden: { y: -40, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
      },
      exit: { opacity: 0 },
    }),
    []
  )

  const selectedDate = new Date(date)
  const res = `${selectedDate.getDate()}.${
    selectedDate.getMonth() < 10
      ? '0' + selectedDate.getMonth()
      : selectedDate.getMonth()
  }.${selectedDate.getFullYear()}  ${selectedDate.getHours()}:${selectedDate.getMinutes()}`

  return (
    <motion.li
      className="desktop_news_card_wrapper"
      variants={variantItem}
      onClick={onClick}
    >
      <div className="news_card_img_wrapper">
        <img src={image} alt="" />
      </div>
      <div className="news_card_content_wrapper">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="content_footer">
          {date && (
            <div className="date_wrapper">
              <span>{res}</span>
            </div>
          )}
          <Status status={status} />
        </div>
      </div>
    </motion.li>
  )
}

export default DesktopNewsCard
