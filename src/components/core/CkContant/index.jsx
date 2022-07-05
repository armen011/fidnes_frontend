import React, { memo, useContext, useEffect } from 'react'
import env from '../../../const/env'
import { LocaleContext } from '../../../context/localeContext'
import { PageDropdown } from '../DropDown'
import Icon from '../Icon'
import externalLink from '../../../assets/img/externalLint.svg'
import './style.scss'

const CkContant = ({ children, instants, ...otherProps }) => {
  const { locale } = useContext(LocaleContext)
  useEffect(() => {
    const tables = document.querySelectorAll('.ck_content_wrapper table')
    tables.forEach((item) => {
      const fgr = item.parentNode
      fgr.style.border = item.style.border ? item.style.border : null
      fgr.style.backgroundColor = item.style.backgroundColor
        ? item.style.backgroundColor
        : null
      item.style.border = null
      const tbody = item.querySelectorAll('tbody')
      tbody.forEach((tbody) => {
        const td = tbody.querySelectorAll('tr td')
        td.forEach((td) => {
          const val = td.innerHTML
          const res = val.replaceAll('&nbsp;', ' ')

          td.innerHTML = res
          td.style.padding = '10px !important'
          td.style.wordBreak = 'break-word !important'
        })
      })
    })
  })

  const text = otherProps[`text_${locale}`]
    ? otherProps[`text_${locale}`].replace(
        '<img src="',
        `<img src="${env.BASE_URL}`
      )
    : ''
  return (
    <div className="ck_content_wrapper">
      {children}
      <div
        className="ck-content"
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></div>
      {otherProps.file_type && (
        <a href={otherProps.file} target="_blank" rel="noreferrer">
          {otherProps.file_type === 'PDF' ? (
            <Icon iconName="pdf_file" width={24} height={24} />
          ) : (
            <img src={externalLink} alt="" />
          )}
          {otherProps[`file_title_${locale}`]}
        </a>
      )}
      {instants && (
        <div className="dropdowns_conatiner">
          {instants.map((instant, index) => (
            <PageDropdown {...instant} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export default memo(CkContant)
