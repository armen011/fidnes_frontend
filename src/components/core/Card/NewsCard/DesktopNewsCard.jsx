import { motion } from 'framer-motion'
import React, { useMemo } from 'react'
import newsImg from '../../../../assets/img/newsImg.png'

const DesktopNewsCard = ({ title, description, date, status, onClick }) => {
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

  return (
    <motion.li
      className="desktop_news_card_wrapper"
      variants={variantItem}
      onClick={onClick}
    >
      <div className="news_card_img_wrapper">
        <img src={newsImg} alt="" />
      </div>
      <div className="news_card_content_wrapper">
        <h5>{title}</h5>
        <p>{description}</p>
        <div className="content_footer">
          <div className="date_wrapper">
            <span>{date}</span>
          </div>
          <div className="status_wrapper">
            <span>{status}</span>
          </div>
        </div>
      </div>
    </motion.li>
  )
}

export default DesktopNewsCard
