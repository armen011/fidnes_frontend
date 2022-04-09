import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import Icon from '../../core/Icon'

const ItemWrapper = ({ title }) => {
  const [isOpened, setIsOpened] = useState(false)

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <motion.div
      className="item_wrapper"
      onClick={() => setIsOpened((prev) => !prev)}
    >
      <div className={`item_main_header ${isOpened && 'opened'}`}>
        <span>{title}</span>
        <Icon iconName="arrow_right_16" width={16} height={16} />
      </div>
      <motion.ul>
        {isOpened &&
          arr.map(() => <motion.li>Առաքելությունը և նպատակը</motion.li>)}
      </motion.ul>
    </motion.div>
  )
}

const SiteMapContainer = () => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="sitemap_main_container">
      <ItemWrapper title={pages.titles[`about_${locale}`]} />
      <ItemWrapper title={pages.titles[`about_${locale}`]} />
      <ItemWrapper title={pages.titles[`about_${locale}`]} />
      <ItemWrapper title={pages.titles[`about_${locale}`]} />
    </div>
  )
}

export default SiteMapContainer
