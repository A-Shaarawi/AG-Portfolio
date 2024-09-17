import { useState } from 'react'
import React from 'react'
import '../App.css'

function Landing() {

  return (
    <div className='landing animate' id='landing'>
        <span className='landing--name'>Abdelrahman Shaarawi</span>
        <span className='landing--job'>Front-End web developer</span>
        <span className='landing--profession'>Professional ReactJS developer</span>
        <a href="#projects" className='landing--button'>SEE MY WORK</a>
        <img src='IMG_2648.JPEG' />
    </div>
  )
}

export default Landing