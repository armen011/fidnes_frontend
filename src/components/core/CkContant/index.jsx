import React, { memo, useContext } from 'react'
import env from '../../../const/env'
import { LocaleContext } from '../../../context/localeContext'
import { PageDropdown } from '../DropDown'
import './style.scss'

const CkContant = ({ children, instants, ...otherProps }) => {
  const { locale } = useContext(LocaleContext)

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
