import React from 'react'
import { ButtonWithIcon, ButtonWithTextAndIcon } from '../core/Button'
import DropDown from '../core/DropDown'
import Icon from '../core/Icon'
import pages from './pages.json'

const Header = () => {
  return (
    <div className="layout_header">
      <ul className="header_first_container">
        {pages.main_header.map(({ title, drop_down }, index) => (
          <li key={index}>
            {title}
            {drop_down && (
              <Icon
                iconName="arrow_left"
                width={16}
                height={16}
                className="icon_wrapper"
              />
            )}
            {drop_down && <DropDown content={drop_down} />}
          </li>
        ))}
      </ul>
      <div className="header_second_container">
        <ButtonWithIcon
          iconName="search_24"
          width={24}
          height={24}
          className="search_button"
        />
        <div className="phone_number_wrapper">
          <Icon iconName="phone_24" width={24} height={24} />
          <span>+ 374 10 59 23 23</span>
        </div>
        <ButtonWithTextAndIcon
          iconName="earth_20"
          width={20}
          height={20}
          text="ENG"
          className="language_button"
        />
        <button className="addres_job_button">Հասցեներ և աշխատաժամեր</button>
        <ButtonWithIcon
          iconName="geo_location_24"
          width={24}
          height={24}
          className="addres_job_icon_button"
        />
      </div>
    </div>
  )
}

export default React.memo(Header)
