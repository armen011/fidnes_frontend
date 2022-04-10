import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { LocaleContext } from '../../../context/localeContext'
import { DesktopNewsCard } from '../../core/Card/NewsCard'
import Status from '../../core/Status'

const NewsFeed = ({ news, selected }) => {
  const { locale } = useContext(LocaleContext)
  const variantList = useMemo(
    () => ({
      show: {
        transition: {
          delayChildren: 0.1,
          staggerChildren: 0.05,
          ease: 'easeInOut',
        },
      },
    }),
    []
  )
  const navigate = useNavigate()

  return (
    <div
      className="main_news_container"
      style={{ padding: selected ? '0' : '32px' }}
    >
      <AnimatePresence exitBeforeEnter>
        {selected ? (
          <div className="current_news_wrapper">
            <div className="news_img_wrapper">
              <img src={selected.image} alt="" />
            </div>
            <div className="news_content_wrapper">
              <div className="news_info_bar">
                <div className="news_date_info_wrapper">{selected.date}</div>
                <Status status={selected ? selected.status : []} />
              </div>
              <div className="news_text_wrapper">
                <h3>{selected[`title_${locale}`]}</h3>
                <div
                  className="ck-content"
                  dangerouslySetInnerHTML={{
                    __html: selected[`text_${locale}`],
                  }}
                ></div>
              </div>
            </div>
          </div>
        ) : (
          <motion.ul
            variants={variantList}
            animate="show"
            initial="hidden"
            exit="hidden"
          >
            {news.map((elm, index) => (
              <DesktopNewsCard
                {...{
                  title: elm[`title_${locale}`],
                  description: elm[`description_${locale}`],
                  ...elm,
                }}
                onClick={() => {
                  navigate('?news_id=' + elm.id)
                }}
                key={index}
              />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default React.memo(NewsFeed)
