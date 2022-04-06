import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { LocaleContext } from '../../../context/localeContext'
import './style.scss'

const DropDown = ({ content, isSelected, queryName }) => {
  const navigate = useNavigate()
  const { locale } = useContext(LocaleContext)
  const location = useLocation()

  return (
    <ul className="drop_down_wrapper">
      {content &&
        content.map(({ id, url, ...titles }, index) => (
          <li
            className="page_title_wrapper"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              navigate(`${queryName + id}`)
            }}
            key={index}
            style={{
              color:
                parseInt(location.search.split('=')[1]) === id &&
                isSelected &&
                '#482003',
              fontWeight:
                parseInt(location.search.split('=')[1]) === id &&
                isSelected &&
                '600',
            }}
          >
            {titles[`title_${locale}`]}
          </li>
        ))}
    </ul>
  )
}

export default React.memo(DropDown)
