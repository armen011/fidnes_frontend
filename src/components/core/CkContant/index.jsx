import React, { memo, useContext } from 'react'
import { LocaleContext } from '../../../context/localeContext'
import { PageDropdown } from '../DropDown'
import './style.scss'

const CkContant = ({ children, instants, ...otherProps }) => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="ck_content_wrapper">
      {children}
      <div
        className="ck-content"
        dangerouslySetInnerHTML={{
          __html: otherProps[`text_${locale}`],
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
