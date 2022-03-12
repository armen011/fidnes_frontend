import React from 'react'
import Icon from '../Icon'
import './style.scss'

const BreadCrumb = ({ title, path }) => {
  return (
    <div className="bredcrumb_wrapper">
      <div className="bredcrumb_header">
        <span>{title}</span>
      </div>
      <ul>
        {path.map((elm, index) => (
          <li key={index}>
            <span>{elm}</span>
            <Icon iconName="bredcrumb_arrow_right" width={12} height={16} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BreadCrumb
