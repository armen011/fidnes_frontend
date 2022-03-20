import React, { useState } from 'react'
import Router from './components/router'
import { LocaleContext } from './context/localeContext'
import './App.scss'

const App = () => {
  const [locale, setLocale] = useState('am')
  return (
    <div>
      <LocaleContext.Provider value={{ locale, setLocale }}>
        <Router />
      </LocaleContext.Provider>
    </div>
  )
}

export default App
