import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import About from '../pages/about'
import Home from '../pages/home'

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router