import React from 'react'
import Icon from '../../core/Icon'
import euro from '../../../assets/img/euro.png'

const Converter = () => {
  return (
    <div className="coverter_container">
      <div className="converter_wrapper">
        <div className="covert_card">
          <div className="card_header">
            <span>Փոխարժեքներն այսօր</span>
          </div>
          <div className="card_container">
            <table>
              <thead>
                <tr>
                  <th>Արժույթ</th>
                  <th>Առք</th>
                  <th>Վաճառք</th>
                </tr>
              </thead>
              <tbody>
                {['EURO', 2, 3].map((elm, index) => (
                  <tr key={index}>
                    <td>
                      <div className="name_td">
                        <img src={euro} alt="" />
                        <p>EURO</p>
                      </div>
                    </td>
                    <td>
                      <div className="td_wrapper">
                        <Icon
                          iconName="coverter_arrow_up"
                          width={24}
                          height={24}
                        />
                        <span>477.50</span>
                      </div>
                    </td>
                    <td>
                      <div className="td_wrapper">
                        <Icon
                          iconName="coverter_arrow_up"
                          width={24}
                          height={24}
                        />
                        <span>477.50</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card_footer">
            <span>Թարմացվել է ՝ 18/05/2022</span>
          </div>
        </div>
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
        <div className="covert_card">
          <div className="card_header">
            <span>Տոկոսադրույքներ</span>
          </div>
          <div className="card_container">
            <div className="percent_item">
              <span>Դրամական միջ. ներգրավման</span>
              <p>6.25 %</p>
            </div>
            <div className="percent_item">
              <span>Լոմբարդային ռեպո</span>
              <p>9.25 %</p>
            </div>
            <div className="percent_item">
              <span>Վերաֆինանսավորման</span>
              <p>7.75 %</p>
            </div>
            <div className="percent_item">
              <span>Բանկային տոկոսի հաշվարկային դրույք</span>
              <p>12 %</p>
            </div>
          </div>
          <div className="card_footer">
            <span>Թարմացվել է ՝ 18/05/2022</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Converter)
