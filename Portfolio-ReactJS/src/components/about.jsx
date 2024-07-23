import { useState } from 'react'
import React from 'react'
import '../App.css'

function About() {

    return (
        <div className="about" id='about'>
            <span className='about--title'>About Me</span>
            <div className="about--text">
                <span className='about--name'>Abdelrahman Gamal Shaarawi</span>
                <span className='about--about'>Professional ReactJS front end developer, Computer Science student, graduated the American diploma in 2022</span>
            </div>
            <div className="about--experience">
                <div className="gpa">
                    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="56" cy="56" r="56" fill="#EF6C57" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M42.5 31C43.3284 31 44 31.6716 44 32.5V34H68V32.5C68 31.6716 68.6716 31 69.5 31C70.3284 31 71 31.6716 71 32.5V34H74C77.3137 34 80 36.6863 80 40V73C80 76.3137 77.3137 79 74 79H38C34.6863 79 32 76.3137 32 73V40C32 36.6863 34.6863 34 38 34H41V32.5C41 31.6716 41.6716 31 42.5 31ZM72.362 40H39.635C38.735 40 38 40.672 38 41.5V44.5C38 45.328 38.732 46 39.635 46H72.365C73.265 46 74 45.328 74 44.5V41.5C74 40.672 73.268 40 72.362 40ZM64.562 55.438C65.1485 56.0245 65.1485 56.9755 64.562 57.562L55.562 66.562C55.2806 66.8441 54.8985 67.0027 54.5 67.0027C54.1015 67.0027 53.7194 66.8441 53.438 66.562L48.938 62.062C48.5586 61.6826 48.4104 61.1296 48.5493 60.6113C48.6882 60.093 49.093 59.6882 49.6113 59.5493C50.1296 59.4104 50.6826 59.5586 51.062 59.938L54.5 63.379L62.438 55.438C63.0245 54.8515 63.9755 54.8515 64.562 55.438Z" fill="white" />
                    </svg>
                    <div className="gpa--text">
                        <span className='about--largeSpan'>3.5+</span>
                        <span>GPA</span>
                    </div>
                </div>
                <div className="courses">
                    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="56" cy="56" r="56" fill="#EF6C57" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M51.5 35C49.0147 35 47 37.0147 47 39.5V41H36.5C34.0147 41 32 43.0147 32 45.5V49.652L54.842 55.742C55.6008 55.9441 56.3992 55.9441 57.158 55.742L80 49.652V45.5C80 43.0147 77.9853 41 75.5 41H65V39.5C65 37.0147 62.9853 35 60.5 35H51.5ZM51.5 38H60.5C61.3284 38 62 38.6716 62 39.5V41H50V39.5C50 38.6716 50.6716 38 51.5 38ZM36.5 74C34.0147 74 32 71.9853 32 69.5V52.55L55.613 58.841C55.8666 58.9087 56.1334 58.9087 56.387 58.841L80 52.55V69.5C80 71.9853 77.9853 74 75.5 74H36.5Z" fill="white" />
                    </svg>
                    <div className="courses--text">
                        <span className='about--largeSpan'>5+</span>
                        <span>Projects</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About