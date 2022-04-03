import React, { useContext, useState } from 'react'
import { ButtonWithIcon, ButtonWithTextAndIcon } from '../core/Button'
import DropDown from '../core/DropDown'
import Icon from '../core/Icon'
import { pages } from '../../constants'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { LocaleContext } from '../../context/localeContext'

const Header = ({ setIsSearchOpened }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLocalesDropDownOpened, setIsLocalesDropDownOpened] = useState(false)
  const { locale, setLocale } = useContext(LocaleContext)
  const handleLocaleSelect = (locale) => () => {
    setLocale(locale)
    setIsLocalesDropDownOpened(false)
  }

  return (
    <div className="layout_header">
      <ul className="header_first_container">
        {pages.main_header.map((elm, index) => (
          <li
            key={index}
            onClick={() => {
              navigate(elm.url)
              setIsLocalesDropDownOpened(false)
              setIsSearchOpened(false)
            }}
            style={{ color: location.pathname === elm.url && '#482003' }}
          >
            {elm[`title_${locale}`]}
            {elm.drop_down && (
              <Icon
                iconName="arrow_left"
                width={16}
                height={16}
                className="icon_wrapper"
              />
            )}
            {elm.drop_down && (
              <DropDown
                content={elm.drop_down}
                isSelected={location.pathname === elm.url}
              />
            )}
          </li>
        ))}
      </ul>
      <div className="header_second_container">
        <ButtonWithIcon
          iconName="search_24"
          width={24}
          height={24}
          className="search_button"
          onClick={() => {
            setIsSearchOpened((prev) => !prev)
            setIsLocalesDropDownOpened(false)
          }}
        />
        <a href="tel:+37410592323" className="phone_number_wrapper">
          <Icon iconName="phone_24" width={24} height={24} />
          <span>+ 374 10 59 23 23</span>
        </a>
        <div className="locales_wrapper">
          <ButtonWithTextAndIcon
            iconName="earth_20"
            width={20}
            height={20}
            text={locale === 'am' ? 'ՀԱՅ' : locale === 'ru' ? 'РУС' : 'ENG'}
            className="language_button"
            onClick={() => {
              setIsLocalesDropDownOpened((prev) => !prev)
              setIsSearchOpened(false)
            }}
          />
          <ul
            style={
              isLocalesDropDownOpened
                ? { height: '152px', padding: '16px 0' }
                : {}
            }
          >
            <li onClick={handleLocaleSelect('am')}>ՀԱՅ</li>
            <li onClick={handleLocaleSelect('en')}>ENG</li>
            <li onClick={handleLocaleSelect('ru')}>РУС</li>
          </ul>
        </div>
        <button
          className="addres_job_button"
          onClick={() => {
            navigate('/address')
            setIsLocalesDropDownOpened(false)
            setIsSearchOpened(false)
          }}
        >
          {pages.titles[`addresses_&_working_hours_${locale}`]}
        </button>
        <ButtonWithIcon
          iconName="geo_location_24"
          width={24}
          height={24}
          className="addres_job_icon_button"
          onClick={() => {
            setIsLocalesDropDownOpened(false)
            setIsSearchOpened(false)
          }}
        />
      </div>
    </div>
  )
}

export default React.memo(Header)
