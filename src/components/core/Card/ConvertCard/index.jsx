import React, { useContext } from 'react'
import euro from '../../../../assets/img/euro.png'
import rub from '../../../../assets/img/rub.png'
import usd from '../../../../assets/img/usd.png'
import './style.scss'
import { pages } from '../../../../locales'
import { LocaleContext } from '../../../../context/localeContext'
import { GlobalData } from '../../../../context/globalData'
import { getLatestDate } from '../../../../utils'

const neededExchange = ['EUR', 'RUB', 'USD']
const exchangePhotos = {
  EUR: euro,
  RUB: rub,
  USD: usd,
}

export const FirstConvertCard = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)

  const exchange = globalData ? globalData.Exchange : []

  const filteredExchange = exchange.filter(({ abbreviation }) => {
    return neededExchange.includes(abbreviation)
  })
  try {
    filteredExchange.splice(0, 0, filteredExchange.pop())
  } catch {}

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
              <th>{pages.small_texts[`central_bank_${locale}`]}</th>
            </tr>
          </thead>
          <tbody>
            {filteredExchange.map(
              ({ abbreviation, purchase, sales, cb }, index) => (
                <tr key={index}>
                  <td>
                    <div className="name_td">
                      <img src={exchangePhotos[`${abbreviation}`]} alt="" />
                      <p>{abbreviation}</p>
                    </div>
                  </td>
                  <td>
                    <div className="td_wrapper">
                      <span>{purchase}</span>
                    </div>
                  </td>
                  <td>
                    <div className="td_wrapper">
                      <span>{sales}</span>
                    </div>
                  </td>
                  <td>
                    <div className="td_wrapper">
                      <span>{cb}</span>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="card_footer">
        <span>
          {pages.small_texts[`updated_at_${locale}`]}{' '}
          {getLatestDate(filteredExchange)}
        </span>
      </div>
    </div>
  )
}

export const SecondConvertCard = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)

  const interestRate = globalData ? globalData.InterestRate : []
  return (
    <div className="covert_card">
      <div className="card_header">
        <span>{pages.small_texts[`interest_rates_${locale}`]}</span>
      </div>
      <div className="card_container">
        {interestRate.map((elm, index) => {
          return (
            <div className="percent_item" key={index}>
              <span>{elm[`title_${locale}`]}</span>
              <p>{elm.rate} %</p>
            </div>
          )
        })}
      </div>
      <div className="card_footer">
        <span>
          {pages.small_texts[`updated_at_${locale}`]}
          {'  '}
          {getLatestDate(interestRate)}
        </span>
      </div>
    </div>
  )
}

export const FirstConvertCardForSideBar = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)

  const exchange = globalData ? globalData.Exchange : []

  const filteredExchange = exchange.filter(({ abbreviation }) => {
    return neededExchange.includes(abbreviation)
  })
  try {
    filteredExchange.splice(0, 0, filteredExchange.pop())
  } catch {}
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
              <th>{pages.small_texts[`central_bank_${locale}`]}</th>
            </tr>
          </thead>
          <tbody>
            {filteredExchange.map(
              ({ abbreviation, purchase, sales, cb }, index) => (
                <tr key={index}>
                  <td>
                    <div className="name_td">
                      <img src={exchangePhotos[`${abbreviation}`]} alt="" />
                      <p>{abbreviation}</p>
                    </div>
                  </td>
                  <td>
                    <div className="td_wrapper">
                      <span>{purchase}</span>
                    </div>
                  </td>
                  <td>
                    <div className="td_wrapper">
                      <span>{sales}</span>
                    </div>
                  </td>
                  <td>
                    <div className="td_wrapper">
                      <span>{cb}</span>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="subbar_card_footer">
        <span>
          {pages.small_texts[`updated_at_${locale}`]}
          {'    '}
          {getLatestDate(filteredExchange)}
        </span>
      </div>
    </div>
  )
}

export const SecondConvertCardForSideBar = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)

  const interestRate = globalData ? globalData.InterestRate : []
  return (
    <div className="subbar_covert_card">
      <div className="subbar_card_header">
        <span>{pages.small_texts[`interest_rates_${locale}`]}</span>
      </div>
      <div className="subbar_card_container">
        {interestRate.map((elm, index) => {
          return (
            <div className="percent_item" key={index}>
              <span>{elm[`title_${locale}`]}</span>
              <p>{elm.rate} %</p>
            </div>
          )
        })}
      </div>
      <div className="subbar_card_footer">
        <span>
          {pages.small_texts[`updated_at_${locale}`]}{' '}
          {getLatestDate(interestRate)}
        </span>
      </div>
    </div>
  )
}
