import React from 'react'
import Carousel from './carousel'
import NewsFeed from './newsFeed'
import LoanCalculator from '../../loanCalculator'
import './style.scss'
import Converter from './converter'

const Home = () => {
  return (
    <>
      <Carousel />
      <Converter />
      <NewsFeed />
      <LoanCalculator />
    </>
  )
}

export default React.memo(Home)
