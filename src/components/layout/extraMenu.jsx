import React, { useContext } from 'react'
import Icon from '../core/Icon'
import { BurgerButton } from '../core/Button'
import DropDown from '../core/DropDown'
import { pages } from '../../constants'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import { LocaleContext } from '../../context/localeContext'

const ExtraMenu = ({ setIsMenuBarOpened, isMenuBarOpened }) => {
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className={`extra_menu`}>
      <Icon
        iconName="logo"
        width={64}
        height={80}
        onClick={() => navigate('/')}
      />
      <ul>
        {pages.extra_header.map(({ drop_down, url, ...titles }, index) => (
          <li
            key={index}
            onClick={() => {
              navigate(url)
            }}
          >
            <span style={{ color: location.pathname === url && '#482003' }}>
              {titles[`title_${locale}`]}
            </span>
            {drop_down && (
              <Icon
                iconName="arrow_left"
                width={16}
                height={16}
                className="icon_wrapper"
              />
            )}
            {drop_down && (
              <DropDown
                content={drop_down}
                isSelected={location.pathname === url}
              />
            )}
          </li>
        ))}
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
