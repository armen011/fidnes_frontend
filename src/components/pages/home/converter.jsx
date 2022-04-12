import React, { useContext, useState } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { FirstConvertCard, SecondConvertCard } from '../../core/Card'
import { GlobalData } from '../../../context/globalData'
import Icon from '../../core/Icon'

const neededExchange = ['EUR', 'RUB', 'USD']

const Converter = () => {
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)
  const [value, setValue] = useState('')
  const [isFromOpened, setIsFromOpened] = useState(false)
  const [isToOpened, setIsToOpened] = useState(false)
  const [{ from, to }, setFromTo] = useState({ from: 'USD', to: 'AMD' })
  const [counted, setCounted] = useState(0)

  const exchange = globalData ? globalData.Exchange : []

  const filteredExchange = exchange.filter(({ abbreviation }) => {
    return neededExchange.includes(abbreviation)
  })

  const allExchanges = [
    ...filteredExchange,
    { abbreviation: 'AMD', purchase: 1, sales: 1 },
  ]
  const handleCountOnChange = (value) => {
    const { sales: fromSales } = allExchanges.filter((elm) => {
      return elm.abbreviation === from
    })[0]
    const { purchase: toPurchase } = allExchanges.filter(
      (elm) => elm.abbreviation === to
    )[0]

    setCounted(
      (parseFloat(value) * parseFloat(fromSales)) / parseFloat(toPurchase)
    )
  }

  return (
    <div className="coverter_container">
      <div className="converter_wrapper">
        <FirstConvertCard />
        <div className="covert_calculator">
          <div className="input_core">
            <div className="dropdown_wrapper">
              <button
                className="input_drop_down"
                onClick={() => setIsFromOpened((prev) => !prev)}
              >
                <span>{from}</span>
                <Icon
                  iconName="coverter_caluclator_drop_down_arrow"
                  width={24}
                  height={24}
                />
              </button>
              {isFromOpened && (
                <ul>
                  {allExchanges.map(({ abbreviation }, index) => {
                    return (
                      abbreviation !== from &&
                      abbreviation !== to && (
                        <li
                          key={index}
                          onClick={() => {
                            setFromTo((prev) => ({
                              ...prev,
                              from: abbreviation,
                            }))
                            setIsFromOpened(false)
                          }}
                        >
                          {abbreviation}
                        </li>
                      )
                    )
                  })}
                </ul>
              )}
            </div>
            <input
              value={value}
              onChange={({ target: { value } }) => {
                handleCountOnChange(value)
                setValue(value)
              }}
              type="number"
              placeholder="0"
            />
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
            <div className="dropdown_wrapper">
              <button
                className="input_drop_down"
                onClick={() => setIsToOpened((prev) => !prev)}
              >
                <span>{to}</span>
                <Icon
                  iconName="coverter_caluclator_drop_down_arrow"
                  width={24}
                  height={24}
                />
              </button>
              {isToOpened && (
                <ul>
                  {allExchanges.map(({ abbreviation }, index) => {
                    return (
                      abbreviation !== to &&
                      abbreviation !== from && (
                        <li
                          key={index}
                          onClick={() => {
                            setFromTo((prev) => ({
                              ...prev,
                              to: abbreviation,
                            }))
                            setIsToOpened(false)
                          }}
                        >
                          {abbreviation}
                        </li>
                      )
                    )
                  })}
                </ul>
              )}
            </div>
            <span>{counted ? counted.toFixed(2) : '0'}</span>
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
