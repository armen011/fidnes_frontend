import React from 'react'
import Icon from '../core/Icon'
import logo from '../../assets/img/logo.png'
import { BurgerButton } from '../core/Button'
import DropDown from '../core/DropDown'
import pages from './pages.json'

const ExtraMenu = ({ setIsMenuBarOpened, isMenuBarOpened }) => {
  return (
    <div className={`extra_menu`}>
      <img src={logo} alt="fides logo" />
      <ul>
        {pages.extra_header.map(({ title, drop_down }, index) => (
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
        {/* <li>Սեփականատերեր</li>
        <li>
          Հաշվետվություններ
          <Icon
            iconName="arrow_left"
            width={16}
            height={16}
            className="icon_wrapper"
          />
        </li>
        <li>
          Սպառողի իրավունքներ
          <Icon
            iconName="arrow_left"
            width={16}
            height={16}
            className="icon_wrapper"
          />
        </li>
        <li>Իրավական ակտեր</li>
        <li>Կապ</li> */}
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
