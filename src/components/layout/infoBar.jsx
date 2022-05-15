import React, { useContext } from 'react'
import { LocaleContext } from '../../context/localeContext'
import { pages } from '../../locales'
import Icon from '../core/Icon'

const InfoBar = ({ close }) => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="info_bar_container">
      <p>
        {pages.small_texts[`info_bar_${locale}`]}
        <a href="https://old.fides.am/" target="_blank" rel="noreferrer">
          {pages.button_texts[`here_${locale}`]}
        </a>
      </p>
      <Icon iconName="close_modal" width={24} height={24} onClick={close} />
    </div>
  )
}

export default InfoBar
