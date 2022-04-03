import React, { useContext, useEffect, useState } from 'react'
import { pages } from '../../../constants'
import { LocaleContext } from '../../../context/localeContext'
import { useQuery } from '../../../hooks'
import BreadCrumb from '../../core/BreadCrumb'
import SideBar from '../../core/SideBar'
import LoanCalculator from '../../loanCalculator'
import SearchBar from './searchBar'
import './style.scss'

const Results = () => {
  const { locale } = useContext(LocaleContext)
  const searchText = useQuery('search')
  const [results, setResults] = useState([])
  useEffect(() => {
    //do search end respose array
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
