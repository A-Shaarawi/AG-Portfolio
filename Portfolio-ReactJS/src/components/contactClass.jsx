import React from 'react'
import '../App.css'
export default function ContactClass(props) {
    console.log(props.text)
    return (
        <div className="contact--body" id='contact'>
            <div className="contact--body--inside">
                {props.icon}
                <a href= {props.link} target='_blank' className='contact--text'>{props.text}</a>
            </div>
        </div>
    )
}