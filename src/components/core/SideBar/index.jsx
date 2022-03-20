import React, { useContext } from 'react'
import {
  FirstConvertCardForSideBar,
  NewsCard,
  SecondConvertCardForSideBar,
} from '../Card'
import newsImg from '../../../assets/img/newsImg.png'
import { LocaleContext } from '../../../context/localeContext'
import { pages } from '../../../constants'
import './style.scss'

const SideBar = () => {
  const { locale } = useContext(LocaleContext)
  return (
    <div className="side_bar_info_wrapper">
      <FirstConvertCardForSideBar />
      <div className="news_wrapper">
        <span>{pages.small_texts[`latest_news_${locale}`]}</span>
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
  )
}

export default React.memo(SideBar)
