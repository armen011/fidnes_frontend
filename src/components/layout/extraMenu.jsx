import React from 'react'
import Icon from '../core/Icon'
import { BurgerButton } from '../core/Button'
import DropDown from '../core/DropDown'
import { pages } from '../../constants'

const ExtraMenu = ({ setIsMenuBarOpened, isMenuBarOpened }) => {
  return (
    <div className={`extra_menu`}>
      <Icon iconName="logo" width={58} height={72} />
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
