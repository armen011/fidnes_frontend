import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import requests from '../../../const/requests'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
// import NewsFeed from './newsFeed'
import '../news/style.scss'
import ArticleFeed from './articleFeed'

const Article = () => {
  const selectedArticleId = useQuery('article_id')
  const { locale } = useContext(LocaleContext)
  const [selected, setSelected] = useState(undefined)

  useEffect(() => {
    if (selectedArticleId) {
      axios.get(requests.slides(selectedArticleId)).then(({ data }) => {
        if (data) {
          setSelected(data)
        }
      })
    }
  }, [selectedArticleId])

  return (
    <div className="news_page_wrapper">
      {selected && (
        <BreadCrumb
          title={selected[`title_${locale}`]}
          path={[
            { title: pages.titles[`home_${locale}`], url: '/' },
            {
              title: selected[`title_${locale}`],
              url: `/article?article_id=${selected?.id}`,
            },
          ]}
        />
      )}

      <div className="main_news_page_container">
        <div className="main_news_wrapper">
          <ArticleFeed selected={selected} />
          {/* <span>{pages.small_texts[`static_test_first_${locale}`]}</span> */}
          {/* <span>{pages.small_texts[`static_test_second_${locale}`]}</span> */}
        </div>
        <SideBar />
      </div>
    </div>
  )
}

export default React.memo(Article)
