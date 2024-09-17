import { useState } from 'react'
import React from 'react'
import '../App.css'
export default function Services() {
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
        <div className="about--services animate" id='services'>
            <span className="services">Services</span>
            <span className='services--title'>What do we provide</span>
            <div className="about--services--body">
                <span className='services--provide'>Full function responsive websites built in ReactJS</span>
                <div className="about--services--detailed">
                    <div className="about--services--detailed--2">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="40" fill="#EF6C57" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40.3784 24 40.7244 24.2138 40.894 24.5523L41.618 26.0013H51C52.6569 26.0013 54 27.3454 54 29.0034V44.0139H26V29.0034C26 27.3454 27.3431 26.0013 29 26.0013H38.38L39.106 24.5523C39.2756 24.2138 39.6216 24 40 24ZM25 46.0153C24.4477 46.0153 24 46.4633 24 47.016C24 47.5687 24.4477 48.0167 25 48.0167H30.72L29.03 54.7794C28.9107 55.3098 29.2364 55.8384 29.7635 55.97C30.2906 56.1016 30.8263 55.788 30.97 55.2637L31.78 52.0195H48.22L49.03 55.2637C49.1737 55.788 49.7094 56.1016 50.2365 55.97C50.7636 55.8384 51.0893 55.3098 50.97 54.7794L49.28 48.0167H55C55.5523 48.0167 56 47.5687 56 47.016C56 46.4633 55.5523 46.0153 55 46.0153H25ZM32.28 50.0181L32.78 48.0167H47.22L47.72 50.0181H32.28Z" fill="white" />
                        </svg>
                        <span className='about--detailed--title'>Designing</span>
                    </div>
                    <div className="about--services--detailed--2">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="40" fill="#EF6C57" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37 26C35.3431 26 34 27.3431 34 29V30H27C25.3431 30 24 31.3431 24 33V35.768L39.228 39.828C39.7339 39.9627 40.2661 39.9627 40.772 39.828L56 35.768V33C56 31.3431 54.6569 30 53 30H46V29C46 27.3431 44.6569 26 43 26H37ZM37 28H43C43.5523 28 44 28.4477 44 29V30H36V29C36 28.4477 36.4477 28 37 28ZM27 52C25.3431 52 24 50.6569 24 49V37.7L39.742 41.894C39.911 41.9391 40.089 41.9391 40.258 41.894L56 37.7V49C56 50.6569 54.6569 52 53 52H27Z" fill="white" />
                        </svg>

                        <span className='about--detailed--title'>Developing</span>
                    </div>
                    <div className="about--services--detailed--2">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="40" cy="40" r="40" fill="#EF6C57" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.8639 25.4549C41.3759 23.515 38.6221 23.515 38.1361 25.4549L37.9941 26.0269C37.8249 26.7038 37.3018 27.2356 36.6278 27.416C35.9538 27.5963 35.235 27.3968 34.7503 26.8948L34.3404 26.4728C32.9504 25.0349 30.5646 26.4148 31.1146 28.3347L31.2765 28.9027C31.4674 29.573 31.2801 30.2941 30.7871 30.7867C30.2941 31.2792 29.5728 31.466 28.9027 31.2745L28.3347 31.1146C26.4128 30.5646 25.0349 32.9504 26.4728 34.3404L26.8948 34.7503C27.3968 35.235 27.5963 35.9538 27.416 36.6278C27.2356 37.3018 26.7038 37.8249 26.0269 37.9941L25.4549 38.1361C23.515 38.6241 23.515 41.3779 25.4549 41.8639L26.0269 42.0059C26.7038 42.1751 27.2356 42.6982 27.416 43.3722C27.5963 44.0462 27.3968 44.765 26.8948 45.2497L26.4728 45.6596C25.0349 47.0496 26.4148 49.4354 28.3347 48.8854L28.9027 48.7235C29.573 48.5326 30.2941 48.7199 30.7867 49.2129C31.2792 49.7059 31.466 50.4272 31.2745 51.0973L31.1146 51.6653C30.5646 53.5872 32.9504 54.9651 34.3404 53.5272L34.7503 53.1052C35.235 52.6032 35.9538 52.4037 36.6278 52.584C37.3018 52.7644 37.8249 53.2962 37.9941 53.9731L38.1361 54.5451C38.6241 56.485 41.3779 56.485 41.8639 54.5451L42.0059 53.9731C42.1751 53.2962 42.6982 52.7644 43.3722 52.584C44.0462 52.4037 44.765 52.6032 45.2497 53.1052L45.6596 53.5272C47.0496 54.9651 49.4354 53.5852 48.8854 51.6653L48.7235 51.0993C48.5316 50.4287 48.7186 49.7069 49.2117 49.2137C49.7049 48.7206 50.4268 48.5336 51.0973 48.7255L51.6653 48.8854C53.5872 49.4354 54.9651 47.0496 53.5272 45.6596L53.1052 45.2497C52.6032 44.765 52.4037 44.0462 52.584 43.3722C52.7644 42.6982 53.2962 42.1751 53.9731 42.0059L54.5451 41.8639C56.485 41.3759 56.485 38.6221 54.5451 38.1361L53.9731 37.9941C53.2962 37.8249 52.7644 37.3018 52.584 36.6278C52.4037 35.9538 52.6032 35.235 53.1052 34.7503L53.5272 34.3404C54.9651 32.9504 53.5852 30.5646 51.6653 31.1146L51.0993 31.2765C50.4287 31.4684 49.7069 31.2814 49.2137 30.7883C48.7206 30.2951 48.5336 29.5732 48.7255 28.9027L48.8854 28.3347C49.4354 26.4128 47.0496 25.0349 45.6596 26.4728L45.2497 26.8948C44.765 27.3968 44.0462 27.5963 43.3722 27.416C42.6982 27.2356 42.1751 26.7038 42.0059 26.0269L41.8639 25.4549ZM40.5 40.9999H49.9454C49.603 44.4108 47.5366 47.4083 44.4705 48.9415C41.4045 50.4747 37.7666 50.3298 34.8323 48.5575L40.5 40.9999ZM49.9454 39.0001C49.603 35.5892 47.5366 32.5917 44.4705 31.0585C41.4045 29.5253 37.7666 29.6702 34.8323 31.4425L40.5 39.0021H49.9454V39.0001ZM30.0046 40C30.0018 37.2036 31.1737 34.5347 33.2344 32.6445L38.7501 40L33.2344 47.3555C31.2485 45.5297 30.0046 42.9098 30.0046 40Z" fill="white" />
                        </svg>
                        <span className='about--detailed--title'>Testing</span>
                    </div>



                </div>
            </div>
        </div>
    )
}