import React from 'react'
import Icon from '../core/Icon'
import logo from "../../assets/img/logo.png"


const ExtraMenu = ({ opened }) => {
    return (
        <div className={`extra_menu ${opened && "extra_menu_opened"}`}>
            <img src={logo} alt="fides logo" />
            <ul >
                <li>Սեփականատերեր</li>
                <li>
                    Հաշվետվություններ
                    <Icon iconName='arrow_left' width={16} height={16} className='icon_wrapper' />
                </li>
                <li>
                    Սպառողի իրավունքներ
                    <Icon iconName='arrow_left' width={16} height={16} className='icon_wrapper' />
                </li>
                <li>Իրավական ակտեր</li>
                <li>Կապ</li>
            </ul>
        </div>
    )
}

export default React.memo(ExtraMenu)