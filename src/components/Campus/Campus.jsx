import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery1.jpg'
import gallery_2 from '../../assets/gallery2.jpg'
import gallery_3 from '../../assets/gallery3.jpg'
import gallery_4 from '../../assets/gallery4.jpg'
import dark_arrow from '../../assets/dark_arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
    <div className='gallery'>
      <img src={gallery_1} alt="" />
      <img src={gallery_2} alt="" />
      <img src={gallery_3} alt="" />
      <img src={gallery_4} alt="" />

    </div>
    <button className='btn dark-btn'> See more here <img src={dark_arrow} alt="" /> </button>
    </div>
  )
}

export default Campus
