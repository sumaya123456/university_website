import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Start your beautiful and bright future!</h1>
            <p>Join us to shape the future.</p>            
            
            
          
            <button className='btn'>Apply Now <img src={dark_arrow} alt="" />
            </button>



        </div>
      
    </div>
  )
}

export default Hero
