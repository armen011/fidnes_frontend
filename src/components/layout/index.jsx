import React, { useEffect, useState } from 'react'
import { useScrollTopAndDown } from '../../hooks'
import Header from './header'
import ExtraMenu from './extraMenu'
import Footer from './footer'
import './style.scss'
import BurgerMenu from './burgerMenu'
import { useLocation } from 'react-router'
import Search from './search'

const Layout = ({ children }) => {
  const isHeaderOpened = useScrollTopAndDown()
  const [isMenuBarOpened, setIsMenuBarOpened] = useState(false)
  const [isSearchOpened, setIsSearchOpened] = useState(false)
  const pathName = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])

  return (
    <div className="full_page_wrapper">
      <div className={`headers_wrapper ${!isHeaderOpened && 'hide'}`}>
        <Header {...{ setIsSearchOpened }} />
        <ExtraMenu {...{ isMenuBarOpened, setIsMenuBarOpened }} />
        <BurgerMenu {...{ isMenuBarOpened, setIsMenuBarOpened }} />
      </div>
      <div className={`content_wrapper ${!isHeaderOpened && 'content_margin'}`}>
        <div className="children_wrapper">{children}</div>
        <Footer />
      </div>
      <Search {...{ isSearchOpened, setIsSearchOpened, isHeaderOpened }} />
    </div>
  )
}

export default React.memo(Layout)
