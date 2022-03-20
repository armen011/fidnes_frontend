import React, { useContext } from 'react'
import Icon from '../core/Icon'
import { BurgerButton } from '../core/Button'
import DropDown from '../core/DropDown'
import { pages } from '../../constants'
import { useNavigate } from 'react-router'
import { LocaleContext } from '../../context/localeContext'

const ExtraMenu = ({ setIsMenuBarOpened, isMenuBarOpened }) => {
  const { locale } = useContext(LocaleContext)
  const navigate = useNavigate()
  return (
    <div className={`extra_menu`}>
      <Icon
        iconName="logo"
        width={58}
        height={72}
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
            {titles[`title_${locale}`]}
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
