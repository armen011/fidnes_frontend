import React, { useContext } from 'react'
import { LocaleContext } from '../../../context/localeContext'
import { pages } from '../../../locales'
import './style.scss'

const DateContainer = ({ date }) => {
  const { locale } = useContext(LocaleContext)
  const switchDate = (date) => {
    const selectedDate = new Date(date)
    const res = `${selectedDate.getDate() < 10 ? '0' + selectedDate.getDate() : selectedDate.getDate()}.${
      (selectedDate.getMonth() + 1) < 10
        ? '0' + (selectedDate.getMonth() + 1)
        : (selectedDate.getMonth() + 1)
    }.${selectedDate.getFullYear()}  ${selectedDate.getHours()}:${selectedDate.getMinutes()}`
    return res
  }
  return (
    <div className="updated_at_wrapper">
      {pages.small_texts[`updated_at_${locale}`] + ' ' + switchDate(date)}
    </div>
  )
}

export default DateContainer
