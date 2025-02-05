import React from 'react'
import './About.css'
import about_img from '../../assets/About.jpg'
import play_icon from '../../assets/play_icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left"> 
            <img src={about_img} alt="" className='about_img'/>
            <img src={play_icon} alt=""  className='play_icon'/>
        </div>
        <div className="about-right"></div>
        <h3>ABOUT UNIVERSITY</h3>
        <p>Our university has been providing world-class education for over seven years. 
           We offer a variety of programs that prepare students for leadership roles in their chosen fields.</p>
        <p>Located in the heart of stokholm, our campus is equipped with state-of-the-art facilities and is
           home to a diverse and vibrant student body.</p>
    </div>
  )
}

export default About
