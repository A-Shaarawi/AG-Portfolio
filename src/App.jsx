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
  document.addEventListener("DOMContentLoaded", () => {

    // Use Intersection Observer to determine if objects are within the viewport
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        return;
      }
      entry.target.classList.remove('in-view');
      });
    });
  
    // Get all the elements with the .animate class applied
    const allAnimatedElements = document.querySelectorAll('.animate');
  
    // Add the observer to each of those elements
    allAnimatedElements.forEach((element) => observer.observe(element));
  
  }); 
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
