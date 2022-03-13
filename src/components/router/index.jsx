import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import Home from '../pages/home'
import About from '../pages/about'
import ContactUs from '../pages/contact_us'
import LegalActs from '../pages/legal_acts'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_us" element={<ContactUs />} />
          <Route path="/legal_acts" element={<LegalActs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
