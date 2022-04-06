import React, { useContext } from 'react'
import Icon from '../core/Icon'
import { BurgerButton } from '../core/Button'
import DropDown from '../core/DropDown'
import { pages } from '../../constants'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { LocaleContext } from '../../context/localeContext'
import { GlobalData } from '../../context/globalData'

const ExtraMenu = ({ setIsMenuBarOpened, isMenuBarOpened }) => {
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()
  const location = useLocation()
  const { globalData } = useContext(GlobalData)
  const page = globalData ? globalData.Page : {}
  return (
    <div className={`extra_menu`}>
      <Icon
        iconName="logo"
        width={64}
        height={80}
        onClick={() => navigate('/')}
      />
      <ul>
        {pages.extra_header.map(
          ({ drop_down_key, query_name, url, ...titles }, index) => (
            <li
              key={index}
              onClick={() => {
                navigate(url)
              }}
            >
              <span style={{ color: location.pathname === url && '#482003' }}>
                {titles[`title_${locale}`]}
              </span>
              {page[drop_down_key] && (
                <Icon
                  iconName="arrow_left"
                  width={16}
                  height={16}
                  className="icon_wrapper"
                />
              )}
              {page[drop_down_key] && (
                <DropDown
                  content={page[drop_down_key]}
                  isSelected={location.pathname === url}
                  queryName={query_name}
                />
              )}
            </li>
          )
        )}
      </ul>

      <BurgerButton
        {...{
          onClick: () => setIsMenuBarOpened((prev) => !prev),
          isOpened: isMenuBarOpened,
        }}
      />
    </div>
  )
}

export default React.memo(ExtraMenu)
