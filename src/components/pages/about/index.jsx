import React, { useEffect, useState, useMemo, useContext } from 'react'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import LoanCalculator from '../../loanCalculator'
import { pages } from '../../../locales'
import ArticleContainer from './articleContainer'
import SideBar from '../../core/SideBar'
import './style.scss'
import { LocaleContext } from '../../../context/localeContext'
import { GlobalData } from '../../../context/globalData'
import requests from '../../../const/requests'
import axios from 'axios'

const About = () => {
  const selectedArticleId = useQuery('article')
  const { locale } = useContext(LocaleContext)
  const { globalData } = useContext(GlobalData)

  const dinamicPages = globalData ? globalData.Page : {}
  const articles = dinamicPages.about || []

  const [selected, setSelected] = useState(undefined)
  useEffect(() => {
    if (selectedArticleId) {
      axios
        .get(requests.currentPageData(selectedArticleId))
        .then(({ data }) => {
          if (data) {
            setSelected(data)
          }
        })
    } else {
      setSelected(undefined)
    }
  }, [selectedArticleId])

  return (
    <div className="about_page_wrapper">
      <BreadCrumb
        title={pages.titles[`about_${locale}`]}
        path={
          selected
            ? [
                { title: pages.titles[`home_${locale}`], url: '/' },
                { title: pages.titles[`about_${locale}`], url: '/about' },
                { title: selected[`title_${locale}`] },
              ]
            : [
                { title: pages.titles[`home_${locale}`], url: '/' },
                { title: pages.titles[`about_${locale}`], url: '/about' },
              ]
        }
        callBack={() => setSelected(undefined)}
      />
      <div className="about_page_container">
        <div className="menu_wrapper">
          <ArticleContainer {...{ selected, setSelected, articles }} />
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
      <LoanCalculator />
    </div>
  )
}

export default React.memo(About)
