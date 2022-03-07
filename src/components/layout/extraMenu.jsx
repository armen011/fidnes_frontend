import React, { useState } from 'react'
import Icon from '../core/Icon'
import logo from '../../assets/img/logo.png'
import { ButtonWithIcon } from '../core/Button'

const ExtraMenu = () => {
  const [isMenuBarOpened, setIsMenuBarOpened] = useState(false)

  return (
    <div className={`extra_menu`}>
      <img src={logo} alt="fides logo" />
      <ul>
        <li>Սեփականատերեր</li>
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
        <li>Կապ</li>
      </ul>
      <ButtonWithIcon
        iconName="hanmburger_menu"
        width={48}
        height={48}
        className="burdger_button"
      />
    </div>
  )
}

export default React.memo(ExtraMenu)
