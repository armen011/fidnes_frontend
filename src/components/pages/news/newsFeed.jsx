import { AnimatePresence, motion } from 'framer-motion'
import React, { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { LocaleContext } from '../../../context/localeContext'
import { DesktopNewsCard } from '../../core/Card/NewsCard'

const NewsFeed = ({ news, selected, setSelected }) => {
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
    <div className="main_news_container">
      <AnimatePresence exitBeforeEnter>
        {selected ? (
          <div>hello</div>
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
                  description: elm[`describtion_${locale}`],
                  date: '12 Դեկտեմբեր 2022',
                  status: 'Նոր',
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
