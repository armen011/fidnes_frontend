import React, { useContext, useMemo } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LocaleContext } from '../../../context/localeContext'
import Icon from '../../core/Icon'
import { useNavigate } from 'react-router-dom'

const ConsumerItem = ({ id, setSelected, ...otherProps }) => {
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
      className="consumer_item_wrapper"
      variants={variantItem}
      onClick={() => {
        setSelected({ id, ...otherProps })
        navigate('?consumer_right_id=' + id)
      }}
    >
      <span>{otherProps[`title_${locale}`]}</span>
      <Icon iconName="about_item_arrow_right" width={24} height={24} />
    </motion.li>
  )
}

const ConsumerMenu = ({ selected, consumers, setSelected }) => {
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
    <div className="consumer_menu_wrapper">
      <AnimatePresence exitBeforeEnter>
        {selected ? (
          <div className="selected_wrapper">
            <span>{selected[`title_${locale}`]}</span>
          </div>
        ) : (
          <motion.ul
            variants={variantList}
            animate="show"
            initial="hidden"
            exit="hidden"
          >
            {consumers.map((elm, index) => (
              <ConsumerItem key={index} {...{ setSelected, ...elm }} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ConsumerMenu
