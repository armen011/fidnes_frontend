import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { LocaleContext } from '../../../context/localeContext'
import { pages } from '../../../locales'
import './style.scss'
import { useNavigate } from 'react-router-dom'

export { default as PageDropdown } from './PageDropdown'

const DropDown = ({ content, isSelected, queryName, ...otherProps }) => {
  const { locale } = useContext(LocaleContext)
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <ul className="drop_down_wrapper">
      {content &&
        content.map(({ id, url, ...titles }, index) => (
          <li
            className="page_title_wrapper"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              if(titles.types && titles.types === 'url'){
                if (
                titles.link.includes('://fides.am') ||
                titles.link.includes('://www.fides.am')
              ) {
                window.location.replace(titles.link)
              } else {
                window.open(titles.link)
              }
              }
              else{
                navigate(`${queryName + id}`);
              }
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
      {otherProps.aboutDropdown && (
        <li
          className="page_title_wrapper"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            window.open(`/management`, '_blank')
          }}
        >
          {pages.small_texts[`management_${locale}`]}
        </li>
      )}
    </ul>
  )
}

export default React.memo(DropDown)
