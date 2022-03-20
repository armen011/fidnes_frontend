import React, { useContext } from 'react'
import { pages } from '../../../constants'
import { LocaleContext } from '../../../context/localeContext'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import './style.scss'

const News = () => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="news_page_wrapper">
      <BreadCrumb
        title={pages.titles[`news_${locale}`]}
        path={[
          { title: pages.titles[`home_${locale}`], url: '/' },
          { title: pages.titles[`legal_acts_${locale}`], url: '/news' },
        ]}
      />
      <div className="main_news_page_container">
        <div className="main_news_wrapper">
          <div className="main_news_container"></div>
          <span>
            «Ֆիդես հիփոթեքային ընկերություն» ունիվերսալ վարկային
            կազմակերպություն փակ բաժնետիրական ընկերությունը (այսուհետ`
            Կազմակերպություն) ունի մեկ մասնաճյուղ:
          </span>
          <span>
            Կազմակերպության իրավաբանական հասցեն է` ՀՀ, ք. Երևան, Նաիրի Զարյան
            17ա: Կազմակերպության գործունեության հասցեն է` ԱՀ, ք. Ստեփանակերտ, Մ.
            Գոշ 2/33:
          </span>
        </div>
        <SideBar />
      </div>
    </div>
  )
}

export default React.memo(News)
