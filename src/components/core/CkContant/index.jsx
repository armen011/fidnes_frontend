import React, { memo, useContext, useEffect } from 'react'
import env from '../../../const/env'
import { LocaleContext } from '../../../context/localeContext'
import { PageDropdown } from '../DropDown'
import Icon from '../Icon'
import externalLink from '../../../assets/img/externalLint.svg'
import './style.scss'
import { pages } from '../../../locales'

const CkContant = ({ children, instants, ...otherProps }) => {
  const { locale } = useContext(LocaleContext)
  useEffect(() => {
    const tables = document.querySelectorAll('.ck_content_wrapper table')
    tables.forEach((item) => {
      const tbody = item.querySelectorAll('tbody')
      tbody.forEach((tbody) => {
        const td = tbody.querySelectorAll('tr td')
        td.forEach((td) => {
          const val = td.innerHTML
          const res = val.replaceAll('&nbsp;', ' ')

          td.innerHTML = res
          td.style.cssText = `
                padding: 10px !important;
                word-break: break-word;
            `
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
      {otherProps.file_type !== null && (
        <a href={otherProps.file} target="_blank" rel="noreferrer">
          {otherProps.file_type === 'PDF' ? (
            <Icon iconName="pdf_file" width={24} height={24} />
          ) : (
            <img src={externalLink} alt="" />
          )}
          {pages.small_texts[`attached_file_${locale}`]}
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
