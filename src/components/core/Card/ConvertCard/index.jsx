import React, { useContext } from 'react'
import Icon from '../../Icon'
import euro from '../../../../assets/img/euro.png'
import './style.scss'
import { pages } from '../../../../locales'
import { LocaleContext } from '../../../../context/localeContext'

export const FirstConvertCard = () => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="covert_card">
      <div className="card_header">
        <span>{pages.small_texts[`exchange_rates_today_${locale}`]}</span>
      </div>
      <div className="card_container">
        <table>
          <thead>
            <tr>
              <th>{pages.small_texts[`currency_${locale}`]}</th>
              <th>{pages.small_texts[`purchase_${locale}`]}</th>
              <th>{pages.small_texts[`sale_${locale}`]}</th>
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
                    <Icon iconName="coverter_arrow_up" width={24} height={24} />
                    <span>477.50</span>
                  </div>
                </td>
                <td>
                  <div className="td_wrapper">
                    <Icon iconName="coverter_arrow_up" width={24} height={24} />
                    <span>477.50</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card_footer">
        <span>{pages.small_texts[`updated_at_${locale}`]} 18/05/2022</span>
      </div>
    </div>
  )
}

export const SecondConvertCard = () => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="covert_card">
      <div className="card_header">
        <span>{pages.small_texts[`interest_rates_${locale}`]}</span>
      </div>
      <div className="card_container">
        <div className="percent_item">
          <span>{pages.small_texts[`money_involvement_${locale}`]}</span>
          <p>6.25 %</p>
        </div>
        <div className="percent_item">
          <span>{pages.small_texts[`lombard_repo_${locale}`]}</span>
          <p>9.25 %</p>
        </div>
        <div className="percent_item">
          <span>{pages.small_texts[`refinancing_${locale}`]}</span>
          <p>7.75 %</p>
        </div>
        <div className="percent_item">
          <span>{pages.small_texts[`bank_interest_rate_${locale}`]}</span>
          <p>12 %</p>
        </div>
      </div>
      <div className="card_footer">
        <span>{pages.small_texts[`updated_at_${locale}`]} 18/05/2022</span>
      </div>
    </div>
  )
}

export const FirstConvertCardForSideBar = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className="subbar_covert_card">
      <div className="subbar_card_header">
        <span>{pages.small_texts[`exchange_rates_today_${locale}`]}</span>
      </div>
      <div className="subbar_card_container">
        <table>
          <thead>
            <tr>
              <th>{pages.small_texts[`currency_${locale}`]}</th>
              <th>{pages.small_texts[`purchase_${locale}`]}</th>
              <th>{pages.small_texts[`sale_${locale}`]}</th>
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
                    <Icon iconName="coverter_arrow_up" width={24} height={24} />
                    <span>477.50</span>
                  </div>
                </td>
                <td>
                  <div className="td_wrapper">
                    <Icon iconName="coverter_arrow_up" width={24} height={24} />
                    <span>477.50</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="subbar_card_footer">
        <span>{pages.small_texts[`updated_at_${locale}`]} 18/05/2022</span>
      </div>
    </div>
  )
}

export const SecondConvertCardForSideBar = () => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="subbar_covert_card">
      <div className="subbar_card_header">
        <span>{pages.small_texts[`interest_rates_${locale}`]}</span>
      </div>
      <div className="subbar_card_container">
        <div className="percent_item">
          <span>{pages.small_texts[`money_involvement_${locale}`]}</span>
          <p>6.25 %</p>
        </div>
        <div className="percent_item">
          <span>{pages.small_texts[`lombard_repo_${locale}`]}</span>
          <p>9.25 %</p>
        </div>
        <div className="percent_item">
          <span>{pages.small_texts[`refinancing_${locale}`]}</span>
          <p>7.75 %</p>
        </div>
        <div className="percent_item">
          <span>{pages.small_texts[`bank_interest_rate_${locale}`]}</span>
          <p>12 %</p>
        </div>
      </div>
      <div className="subbar_card_footer">
        <span>{pages.small_texts[`updated_at_${locale}`]} 18/05/2022</span>
      </div>
    </div>
  )
}
