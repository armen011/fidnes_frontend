import React, { useContext, useEffect, useState } from 'react'
import { pages } from '../../../locales'
import { LocaleContext } from '../../../context/localeContext'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import LoanCalculator from '../../loanCalculator'
import SearchBar from './searchBar'
import './style.scss'
import axios from 'axios'
import requests from '../../../const/requests'

const Results = () => {
  const { locale } = useContext(LocaleContext)
  const searchText = useQuery('search')
  const [results, setResults] = useState([])
  useEffect(() => {
    axios.get(requests.doSearch(searchText)).then(({ data }) => {
      if (data) {
        setResults([...data.Page, ...data.News, ...data.Loan])
      }
    })
  }, [searchText])
  return (
    <div className="result_page_wrapper">
      <BreadCrumb title={pages.titles[`search_results_${locale}`]} />
      <div className="result_page_container">
        <SearchBar {...{ results }} />
        <SideBar />
      </div>
      <LoanCalculator />
    </div>
  )
}

export default Results
