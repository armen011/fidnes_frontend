import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import requests from '../../../const/requests'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import NewsFeed from './newsFeed'
import './style.scss'

const News = () => {
  const selectedNewsId = useQuery('news_id')
  const page = useQuery('page') || '1'
  const { locale } = useContext(LocaleContext)
  const [selected, setSelected] = useState(undefined)
  const [news, setNews] = useState([])
  const [pageArray, setPageArray] = useState([])

  useEffect(() => {
    if (selectedNewsId) {
      axios.get(requests.currentNews(selectedNewsId)).then(({ data }) => {
        if (data) {
          setSelected(data)
        }
      })
    } else {
      if (page !== '1') {
        axios
          .get(requests.newsPage(page))
          .then(({ data: { results, pages: array } }) => {
            if (results) {
              setNews(results)
              setPageArray(array)
            }
          })
      } else {
        axios
          .get(requests.news())
          .then(({ data: { results, pages: array } }) => {
            if (results) {
              setNews(results)
              setPageArray(array)
            }
          })
      }
      setSelected(undefined)
    }
  }, [selectedNewsId, page])
  return (
    <div className="news_page_wrapper">
      <BreadCrumb
        title={pages.titles[`news_${locale}`]}
        path={[
          { title: pages.titles[`home_${locale}`], url: '/' },
          { title: pages.titles[`news_${locale}`], url: '/news' },
        ]}
      />
      <div className="main_news_page_container">
        <div className="main_news_wrapper">
          <NewsFeed
            {...{
              selected,
              setSelected,
              news,
              page,
              pages: pageArray,
            }}
          />
        </div>
        <SideBar />
      </div>
    </div>
  )
}

export default React.memo(News)
