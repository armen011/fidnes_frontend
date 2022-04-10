import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import Icon from '../../core/Icon'
import { useNavigate } from 'react-router-dom'
import { GlobalData } from '../../../context/globalData'

const ItemWrapper = ({ title, dropDown, url, queryName }) => {
  const [isOpened, setIsOpened] = useState(false)
  const navigate = useNavigate()

  const { locale } = useContext(LocaleContext)
  return (
    <motion.div className="item_wrapper">
      <div
        className={`item_main_header ${isOpened && 'opened'}`}
        onClick={() => {
          dropDown ? setIsOpened((prev) => !prev) : navigate(url)
        }}
      >
        <span
          onClick={(event) => {
            event.stopPropagation()
            navigate(url)
          }}
        >
          {title}
        </span>
        {dropDown && <Icon iconName="arrow_right_16" width={16} height={16} />}
      </div>
      <motion.ul>
        {isOpened &&
          dropDown.map((elm, index) => (
            <motion.li key={index} onClick={() => navigate(queryName + elm.id)}>
              <Icon iconName="dropdown_point" width={8} height={8} />
              <span>{elm[`title_${locale}`]}</span>
            </motion.li>
          ))}
      </motion.ul>
    </motion.div>
  )
}

const SiteMapContainer = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)
  const dinamicPages = globalData ? globalData.Page : {}
  const aboutDropDown = dinamicPages.about || []
  const loanDropDown = dinamicPages.loans || []
  const reportsDropDown = dinamicPages.reports || []
  const rightsDropDown = dinamicPages.consumer_rights || []

  return (
    <div className="sitemap_main_container">
      <ItemWrapper
        title={pages.titles[`about_${locale}`]}
        dropDown={aboutDropDown}
        url="/about"
        queryName="/about?article="
      />
      <ItemWrapper
        title={pages.titles[`loan_${locale}`]}
        dropDown={loanDropDown}
        url="/loans"
        queryName="/loans?loan_id="
      />
      <ItemWrapper title={pages.titles[`news_${locale}`]} url="/news" />
      <ItemWrapper
        title={pages.titles[`addresses_&_working_hours_${locale}`]}
        url="/address"
      />
      <ItemWrapper title={pages.titles[`owners_${locale}`]} url="/owners" />
      <ItemWrapper
        title={pages.titles[`reports_${locale}`]}
        dropDown={reportsDropDown}
        url="/reports"
        queryName="/reports?report_type_id="
      />
      <ItemWrapper
        title={pages.titles[`consumer_rights_${locale}`]}
        dropDown={rightsDropDown}
        url="/consumer_rights"
        queryName="/consumer_rights?consumer_right_id="
      />
      <ItemWrapper
        title={pages.titles[`legal_acts_${locale}`]}
        url="/legal_acts"
      />
      <ItemWrapper
        title={pages.titles[`contact_${locale}`]}
        url="/contact_us"
      />
    </div>
  )
}

export default SiteMapContainer
