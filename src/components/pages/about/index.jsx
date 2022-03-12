import React, { useEffect, useState, useMemo } from 'react'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import LoanCalculator from '../../loanCalculator'
import { pages } from '../../../constants'
import './style.scss'
import ArticleContainer from './articleContainer'
import {
  FirstConvertCardForSideBar,
  NewsCard,
  SecondConvertCardForSideBar,
} from '../../core/Card'
import newsImg from '../../../assets/img/newsImg.png'

const articles = pages.main_header[0].drop_down

const About = (state) => {
  const selectedArticleId = useQuery('article')

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
        title="Մեր Մասին"
        path={
          selectedArticle
            ? [
                { title: 'Գլխավոր', url: '/' },
                { title: 'Մեր Մասին', url: '/about' },
                { title: selectedArticle.title },
              ]
            : [
                { title: 'Գլխավոր', url: '/' },
                { title: 'Մեր Մասին', url: '/about' },
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
        <div className="side_bar_info_wrapper">
          <FirstConvertCardForSideBar />
          <div className="news_wrapper">
            <span>Վերջին Նորությունը</span>
            <NewsCard
              className="news_card_custom"
              {...{
                img: newsImg,
                title: 'Բաժնետերերի տարեկան ընդհանուր ժողով․․․',
                content:
                  'Հարգելի  հաճախորդներ և գործընկերներ:«Ֆիդես հիփոթեքային ընկերություն» ՈՒՎԿ ՓԲԸ-ն սիրով ... ',
                date: '12 Դեկտեմբեր 2022',
              }}
            />
          </div>
          <SecondConvertCardForSideBar />
        </div>
      </div>
      <LoanCalculator />
    </div>
  )
}

export default About
