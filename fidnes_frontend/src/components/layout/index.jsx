import React, { useRef } from 'react'
import { useScrollTopAndDown } from '../../hooks'
import Header from './header'
import ExtraMenu from './extraMenu'
import Footer from "./footer"
import "./style.scss"

const Layout = ({ children }) => {
    const contentRef = useRef(null)
    const isExtraMenuOpened = useScrollTopAndDown(contentRef)

    return (
        <div className='full_page_wrapper'>
            <Header />
            <ExtraMenu opened={isExtraMenuOpened} />
            <div className='content_wrapper' style={{ paddingTop: isExtraMenuOpened ? "96px" : 0 }} ref={contentRef}>
                <div className="children_wrapper">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default React.memo(Layout)