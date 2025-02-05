import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.jpeg'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.jpg'
import dark_arrow from '../../assets/dark_arrow.png'



const Contact = () => {

  return (
    <div className='contact'>
        <div className="contact-col"> 
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact
                information below. Your feedback,questions, and suggestions are 
                important to us as we strive to provide exceptinalservice to our 
                university community.</p>

                <ul>
                    <li> <img src={mail_icon} alt="" /> Contact us</li>
                    <li> <img src={ phone_icon} alt="" /> +254 701664312</li>
                    <li> <img src={location_icon} alt="" /> green1,southC <br/> MA 09876,Kenya/nairobi</li>                
                </ul>
        </div>
        <div className="contact-col">
            <form> 
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile 
                number'required />
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={dark_arrow} alt="" /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact
