import { useState } from 'react'
import React from 'react'
import ContactClass from './contactClass'
import data from './contactData'
import '../App.css'

export default function Contact() {

  const contact = data.map(item => {
    return (
      <ContactClass
        icon={item.svg}
        text={item.text}
        link={item.link}
      />
    )
  })

  return (
    <div className='contact'>
      <div className="contact--title">
        <span>Contact</span>
      </div>
      <div className="mapping">
        {contact}
      </div>
    </div>
  )
}
