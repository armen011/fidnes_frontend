import React from 'react'
import { FirstConvertCard, SecondConvertCard } from '../../core/Card'
import Icon from '../../core/Icon'

const Converter = () => {
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
              <span>Տալիս եմ</span>
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
              <span>Ստանում եմ</span>
            </div>
          </div>
        </div>
        <SecondConvertCard />
      </div>
    </div>
  )
}

export default React.memo(Converter)
