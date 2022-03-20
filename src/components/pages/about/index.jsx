import React, { useEffect, useState, useMemo, useContext } from 'react'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import LoanCalculator from '../../loanCalculator'
import { pages } from '../../../constants'
import ArticleContainer from './articleContainer'
import SideBar from '../../core/SideBar'
import './style.scss'
import { LocaleContext } from '../../../context/localeContext'

const articles = pages.main_header[0].drop_down

const About = () => {
  const selectedArticleId = useQuery('article')
  const { locale } = useContext(LocaleContext)

  const selectedArticle = useMemo(
    () => articles.filter(({ id }) => id === selectedArticleId)[0],
    [selectedArticleId]
  )

  const [selected, setSelected] = useState(undefined)
  useEffect(() => {
    selectedArticleId ? setSelected(selectedArticle) : setSelected(undefined)
  }, [selectedArticleId, selectedArticle])
  return (
    <div className="about_page_wrapper">
      <BreadCrumb
        title={pages.titles[`about_${locale}`]}
        path={
          selectedArticle
            ? [
                { title: pages.titles[`home_${locale}`], url: '/' },
                { title: pages.titles[`about_${locale}`], url: '/about' },
                { title: selectedArticle[`title_${locale}`] },
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
