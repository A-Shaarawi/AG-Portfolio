import { useState } from 'react'
import '../App.css'
import React from 'react'
export default function Navigation() {

    return (
        <nav className='nav'>
            <svg width="46px" height="44px"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.11357 17.5385L23 3.09017L42.8864 17.5385L35.2905 40.9164H10.7095L3.11357 17.5385Z" stroke="#EF6D58" stroke-width="5" />
                <path d="M22.5 14L31.535 20.5643L28.084 31.1857H16.916L13.465 20.5643L22.5 14Z" fill="#EF6D58" />
            </svg>
            <a href="#landing">Personal</a>
            <div className='nav--links'>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#">Blog</a>
            </div>
            <a href="#contact" className='nav--contact'>CONTACT</a>
        </nav>
    )
}

