import React from 'react'
import Banner from './components/banner/Banner'
import Header from './components/header/Header'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Summary from './components/summary/Summary'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Skill/>
      <Summary/>
      <Contact/>
    </>
  )
}

export default App