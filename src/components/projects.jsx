import { useState } from 'react'
import React from 'react'

import '../App.css'

function Projects() {
  const images = ["https://i.pinimg.com/236x/77/8d/b1/778db11901d25dd745450ab80d1e553a.jpg",
    "https://i.pinimg.com/564x/50/17/1d/50171dbb5eb3a6496658c265e615d8c6.jpg",
    "https://i.pinimg.com/564x/c6/92/be/c692be173d1b36cb473b69947d98702a.jpg"]

  const text = ["BMR Calculator", "Nike Clone", "HSDKJAH"]

  const [imageNumber, setImageNumber] = useState(0)
  const [textNumber, setTextNumber] = useState(0)

  function handleClickAdd() {
    if (imageNumber < images.length - 1) {
      setImageNumber(imageNumber + 1)
      setTextNumber(textNumber + 1)
    } else {
      setImageNumber(0)
      setTextNumber(0)
    }
  }

  function handleClickSubtract() {
    if (imageNumber != 0) {
      setImageNumber(imageNumber - 1)
      setTextNumber(textNumber - 1)
    } else {
      setImageNumber(images.length - 1)
      setTextNumber(text.length - 1)
    }
  }


  return (
    <div className="projects--item" id='projects'>
      <div className="projects--item--inside">
        <a href='#'>
          <img className='projects--item--img' src={images[imageNumber]} />
          <span className='img--text'>{text[textNumber]}</span>
        </a>
      </div>
      <div className="switchers">
        <button onClick={handleClickSubtract}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
        <button onClick={handleClickAdd}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg></button>
      </div>
    </div>
  )
}

export default Projects
