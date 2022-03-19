import React, { useState } from 'react'
import { useScrollTopAndDown } from '../../hooks'
import Header from './header'
import ExtraMenu from './extraMenu'
import Footer from './footer'
import './style.scss'
import BurgerMenu from './burgerMenu'

const Layout = ({ children }) => {
  const isHeaderOpened = useScrollTopAndDown()
  const [isMenuBarOpened, setIsMenuBarOpened] = useState(false)

  return (
    <div className="full_page_wrapper">
      <div className={`headers_wrapper ${!isHeaderOpened && 'hide'}`}>
        <Header {...{ isMenuBarOpened }} />
        <ExtraMenu {...{ isMenuBarOpened, setIsMenuBarOpened }} />
        <BurgerMenu {...{ isMenuBarOpened, setIsMenuBarOpened }} />
      </div>
      <div className={`content_wrapper ${!isHeaderOpened && 'content_margin'}`}>
        <div className="children_wrapper">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default React.memo(Layout)
