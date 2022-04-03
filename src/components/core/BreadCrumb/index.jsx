import React from 'react'
import { useNavigate } from 'react-router'
import Icon from '../Icon'
import './style.scss'

const BreadCrumb = ({ title, path, callBack }) => {
  const navigate = useNavigate()
  return (
    <div className="bredcrumb_wrapper">
      <div className="bredcrumb_header">
        <span>{title}</span>
      </div>
      {path && (
        <ul>
          {path.map(({ title, url }, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(url)
                callBack && callBack()
              }}
            >
              <span>{title}</span>
              <Icon iconName="bredcrumb_arrow_right" width={12} height={16} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BreadCrumb
