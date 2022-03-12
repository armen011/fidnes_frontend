import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import About from '../pages/about'
import ContactUs from '../pages/contact_us'
import Home from '../pages/home'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact_us" element={<ContactUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
