import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Porjects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Three from './components/Three'
import Layout from './components/Layout'
import Blogs from './components/Blogs'
import PrivacyPolicy from './components/PrivacyPolicy'
import ResearchPapers from './components/ResearchPapers'

function App() {
  return (
    <HashRouter>
      <div className='APP'>
        <Header />
        <Three />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/research-paper" element={<ResearchPapers />} />
        </ Routes>
        <Footer classname='other_elements' />
      </div>
    </HashRouter>
  )
}

export default App
