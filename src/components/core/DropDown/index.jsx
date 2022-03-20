import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { LocaleContext } from '../../../context/localeContext'
import './style.scss'

const DropDown = ({ content }) => {
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  return (
    <ul className="drop_down_wrapper">
      {content &&
        content.map(({ url, ...titles }, index) => (
          <li
            className="page_title_wrapper"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              navigate(url)
            }}
            key={index}
          >
            {titles[`title_${locale}`]}
          </li>
        ))}
    </ul>
  )
}

export default React.memo(DropDown)
