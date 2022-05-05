import React, { useEffect, useState } from 'react'
import Router from './components/router'
import { LocaleContext } from './context/localeContext'
import './App.scss'
import { GlobalData } from './context/globalData'
import axios from 'axios'
import requests from './const/requests'
import { getLocaleFromLocaleStoreage } from './utils/localeStorage'
import { BallTriangle } from 'react-loader-spinner'

const App = () => {
  const [locale, setLocale] = useState(getLocaleFromLocaleStoreage() || 'hy')
  const [isLoading, setIsLoading] = useState(true)
  const [globalData, setGlobalData] = useState(null)
  useEffect(() => {
    axios.get(requests.global()).then((res) => {
      if (res) {
        setGlobalData(res.data)
        setIsLoading(false)
      }
    })
  }, [])
  if (isLoading) {
    return (
      <div className="load_wrapper">
        <BallTriangle color="#dfb43c" width={200} height={200} />
      </div>
    )
  }

  return (
    <div>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <GlobalData.Provider value={{ globalData }}>
          <Router />
        </GlobalData.Provider>
      </LocaleContext.Provider>
    </div>
  )
}

export default App
