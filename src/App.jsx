import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Porjects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Three from './components/Three'
import { Height } from '@mui/icons-material'

function App() {

  return (
    <div className='APP'>
      <Three />
      <Header classname='other_elements' />
      <Hero classname='other_elements' />
      <Porjects classname='other_elements' />
      <Skills classname='other_elements' />
      <Footer classname='other_elements' />

    </div>
  )
}

export default App
