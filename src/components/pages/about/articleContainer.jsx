import React, { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router'
import Icon from '../../core/Icon'
import { AnimatePresence, motion } from 'framer-motion'
import { LocaleContext } from '../../../context/localeContext'
import CkContant from '../../core/CkContant'

const ArticleItem = ({ id, setSelected, ...otherProps }) => {
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
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
      className="article_item_wrapper"
      variants={variantItem}
      onClick={() => {
        setSelected({ id, ...otherProps })
        navigate('?article=' + id)
      }}
    >
      <span>{otherProps[`title_${locale}`]}</span>
      <Icon iconName="about_item_arrow_right" width={24} height={24} />
    </motion.li>
  )
}
const ArticleContainer = ({ articles, selected, setSelected }) => {
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
  return (
    <div className="article_wrapper">
      <AnimatePresence exitBeforeEnter>
        {selected ? (
          <CkContant {...selected}>
            <div className="selected_wrapper">
              <span>{selected[`title_${locale}`]}</span>
            </div>
          </CkContant>
        ) : (
          <motion.ul
            variants={variantList}
            animate="show"
            initial="hidden"
            exit="hidden"
          >
            {articles.map((elm, index) => (
              <ArticleItem key={index} {...{ setSelected, ...elm }} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default React.memo(ArticleContainer)
