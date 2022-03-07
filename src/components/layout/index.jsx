import React from 'react'
import { useScrollTopAndDown } from '../../hooks'
import Header from './header'
import ExtraMenu from './extraMenu'
import Footer from './footer'
import './style.scss'

const Layout = ({ children }) => {
  const isHeaderOpened = useScrollTopAndDown()

  return (
    <div className="full_page_wrapper">
      <div className={`headers_wrapper ${!isHeaderOpened && 'hide'}`}>
        <Header />
        <ExtraMenu />
      </div>
      <div className={`content_wrapper ${!isHeaderOpened && 'content_margin'}`}>
        <div className="children_wrapper">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default React.memo(Layout)
