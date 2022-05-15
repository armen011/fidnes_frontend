import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/home'
import About from '../pages/about'
import ContactUs from '../pages/contact_us'
import LegalActs from '../pages/legal_acts'
import Reports from '../pages/reports'
import Owners from '../pages/owners'
import News from '../pages/news'
import Loans from '../pages/loans'
import SiteMap from '../pages/site_map'
import Address from '../pages/address'
import ConsumerRights from '../pages/consumer_rights'
import Results from '../pages/results'
import Article from '../pages/article'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/legal_acts" element={<LegalActs />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/news" element={<News />} />
          <Route path="/article" element={<Article />} />
          <Route path="/loans" element={<Loans />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route path="/address" element={<Address />} />
          <Route path="/consumer_rights" element={<ConsumerRights />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
