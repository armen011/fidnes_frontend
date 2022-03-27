import React, { useContext } from 'react'
import { pages } from '../../../constants'
import { LocaleContext } from '../../../context/localeContext'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import SiteMapContainer from './siteMapContainer'
import './style.scss'

const SiteMap = () => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="site_map_page_container">
      <BreadCrumb
        title={pages.titles[`sitemap_${locale}`]}
        path={[
          { title: pages.titles[`home_${locale}`], url: '/' },
          { title: pages.titles[`sitemap_${locale}`], url: '/site_map' },
        ]}
      />
      <div className="sitemap_page_container">
        <SiteMapContainer />
        <SideBar />
      </div>
    </div>
  )
}

export default SiteMap
