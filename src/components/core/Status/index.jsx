import React, { useContext } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import './style.scss'

const Status = ({ status }) => {
  const { locale } = useContext(LocaleContext)
  return status && status.length > 0 ? (
    <div
      className="news_status_wrapper"
      style={
        status[0] === 'Important'
          ? {
              color: '#EB5757',
              backgroundColor: 'rgba(235, 87, 87, 0.25)',
            }
          : {
              color: '#53d86a',
              backgroundColor: 'rgba(83, 216, 106, 0.15)',
            }
      }
    >
      {pages.small_texts[`status_${status[0]}_${locale}`]}
    </div>
  ) : null
}

export default Status
