import React, { useContext } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { FirstConvertCard, SecondConvertCard } from '../../core/Card'
import { GlobalData } from '../../../context/globalData'
import Icon from '../../core/Icon'

const Converter = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)

  const exchange = globalData ? globalData.Exchange : []

  return (
    <div className="coverter_container">
      <div className="converter_wrapper">
        <FirstConvertCard />
        <div className="covert_calculator">
          <div className="input_core">
            <div className="input_drop_down">
              <span>AMD</span>
              <Icon
                iconName="coverter_caluclator_drop_down_arrow"
                width={24}
                height={24}
              />
            </div>
            <span>0</span>
            <div className="input_footer">
              <span>{pages.small_texts[`i_give_${locale}`]}</span>
            </div>
          </div>
          <Icon
            iconName="coverter_caluclator_exchange"
            width={32}
            height={32}
          />
          <div className="input_core">
            <div className="input_drop_down">
              <span>USD</span>
              <Icon
                iconName="coverter_caluclator_drop_down_arrow"
                width={24}
                height={24}
              />
            </div>
            <span>0</span>
            <div className="input_footer">
              <span>{pages.small_texts[`i_get_${locale}`]}</span>
            </div>
          </div>
        </div>
        <SecondConvertCard />
      </div>
    </div>
  )
}

export default React.memo(Converter)
