import { useState } from 'react'
import React from 'react'
import Navigation from './components/navigation'
import Landing from './components/landing'
import About from './components/about'
import Services from './components/services'
import ProjectsTitle from './components/ProjectsTitle'
import Projects from './components/projects'
import Contact from './components/contact'
import './App.css'

function App() {

  return (
    <div>
      <Navigation />
      <Landing />
      <About />
      <Services />
      <ProjectsTitle />
      <Projects  />
      <Contact />
    </div>
  )
}

export default App
