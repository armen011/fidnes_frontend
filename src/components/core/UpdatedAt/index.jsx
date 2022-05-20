import React, { useContext } from 'react'
import { LocaleContext } from '../../../context/localeContext'
import { pages } from '../../../locales'
import './style.scss'

const DateContainer = ({ date }) => {
  const { locale } = useContext(LocaleContext)
  return (
    <date className="updated_at_wrapper">
      {pages.small_texts[`updated_at_${locale}`] + ' ' + date}
    </date>
  )
}

export default DateContainer
