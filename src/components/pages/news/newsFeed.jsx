import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { LocaleContext } from '../../../context/localeContext'
import { DesktopNewsCard } from '../../core/Card/NewsCard'
import Icon from '../../core/Icon'
import Status from '../../core/Status'

const NewsFeed = ({ news, selected, page, pages }) => {
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

  const getPages = () => {
    if (page > 3) {
      if (pages.length - 1 >= +page + 2) {
        return [...pages].slice(page - 3, +page + 2) || []
      } else {
        return [...pages].slice(pages.length - 5, pages.length) || []
      }
    } else {
      return [...pages].splice(0, 5) || []
    }
  }
  const switchDate = (date) => {
    const selectedDate = new Date(date)
    const res = `${selectedDate.getDate()}.${
      selectedDate.getMonth() < 10
        ? '0' + selectedDate.getMonth()
        : selectedDate.getMonth()
    }.${selectedDate.getFullYear()}  ${selectedDate.getHours()}:${selectedDate.getMinutes()}`
    return res
  }

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
                <div className="news_date_info_wrapper">
                  {switchDate(selected.date)}
                </div>
                <Status status={selected ? selected.status : []} />
              </div>
              <div className="news_text_wrapper">
                <h3 style={{ marginBottom: '12px' }}>
                  {selected[`title_${locale}`]}
                </h3>
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
      {pages.length > 1 && !selected && (
        <div className="pagination_container">
          <Icon
            iconName="arrow_left_24"
            width={24}
            height={24}
            className="arrow_wrapper"
            onClick={() => {
              if (page !== '1') {
                navigate('/news?page=' + (page - 1))
              }
            }}
          />
          {getPages().map((value, index) => {
            return (
              <div
                key={index}
                className="page_identifyer"
                style={{
                  border: +page === value ? '1px solid #482003' : 'none',
                }}
                onClick={() => {
                  navigate('/news?page=' + value)
                }}
              >
                {value}
              </div>
            )
          })}
          <Icon
            iconName="arrow_left_24"
            width={24}
            height={24}
            className="arrow_wrapper"
            onClick={() => {
              if (page < pages.length) {
                navigate('/news?page=' + (1 + +page))
              }
            }}
          />
        </div>
      )}
    </div>
  )
}

export default React.memo(NewsFeed)
