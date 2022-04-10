import React, { useContext, useState } from 'react'
import { ButtonWithIcon, ButtonWithTextAndIcon } from '../core/Button'
import DropDown from '../core/DropDown'
import Icon from '../core/Icon'
import { pages } from '../../locales'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { LocaleContext } from '../../context/localeContext'
import { GlobalData } from '../../context/globalData'
import { setLocaleOnLocaleStorage } from '../../utils/localeStorage'

const Header = ({ setIsSearchOpened }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isLocalesDropDownOpened, setIsLocalesDropDownOpened] = useState(false)
  const { locale, setLocale } = useContext(LocaleContext)
  const handleLocaleSelect = (locale) => () => {
    setLocale(locale)
    setLocaleOnLocaleStorage(locale)
    setIsLocalesDropDownOpened(false)
  }

  const { globalData } = useContext(GlobalData)
  const page = globalData ? globalData.Page : {}

  const social = globalData ? globalData.Social : {}
  const number = social.Mobile ? social.Mobile[0].value : ''

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
            {elm.drop_down_key && (
              <Icon
                iconName="arrow_left"
                width={16}
                height={16}
                className="icon_wrapper"
              />
            )}
            {page[elm.drop_down_key] && (
              <DropDown
                content={page[elm.drop_down_key]}
                isSelected={location.pathname === elm.url}
                queryName={elm.query_name}
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
        <a href={`tel:${number}`} className="phone_number_wrapper">
          <Icon iconName="phone_24" width={24} height={24} />
          <span>{number}</span>
        </a>
        <div className="locales_wrapper">
          <ButtonWithTextAndIcon
            iconName="earth_20"
            width={20}
            height={20}
            text={locale === 'hy' ? 'ՀԱՅ' : locale === 'ru' ? 'РУС' : 'ENG'}
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
            <li onClick={handleLocaleSelect('hy')}>ՀԱՅ</li>
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
