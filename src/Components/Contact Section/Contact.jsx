import React, { useState } from 'react'
import emailjs from '@emailjs/browser'


import msg_icon from '../../assets/images/msg-icon.png'
import mail_icon from '../../assets/images/mail-icon.png'
import phone_icon from '../../assets/images/phone-icon.png'
import location_icon from '../../assets/images/location-icon.png'
import white_arrow from '../../assets/images/white-arrow.png'

import './Contact.css'

const Contact = () => {

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    setTimeout(() => {
      emailjs.sendForm(
        "service_rm9opnh",
        "template_ceapuag",
        event.target,
        "468dXUvQl3AWBnyaO"
      )
      .then(() => {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();

        // auto hide success message
        setTimeout(() => {
          setResult("");
          setLoading(false);
        }, 1500);
      })
      .catch(() => {
        setResult("Failed to send ❌");
        setLoading(false);
      });
    }, 1000); // 1 sec delay
  };

  return (
    <div className='contact-section container' id="contact">
      <div className="title">
        <p>CONTACT US</p>
        <h2>Get in Touch</h2>
      </div>

      <div className='contact'>
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
          <p>
            Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
          </p>

          <div className='contact-details'>
            <p><img src={mail_icon} alt="" /> Samadab1579@gmail.com</p>
            <p><img src={phone_icon} alt="" /> 03143707756</p>
            <p><img src={location_icon} alt="" /> Pakistan, Hyderabad</p>
          </div>
        </div>

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name="name" placeholder='Enter your name' required />

            <label>Phone number</label>
            <input type="number" name="phone" placeholder='Enter your mobile number' required />

            <label>Your email</label>
            <input type="email" name="email" placeholder='Enter your email' required />

            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

            <button type="submit" className='btn dark-btn' disabled={loading}>
              {loading ? "Sending..." : "Submit now"}
              <img src={white_arrow} alt="" />
            </button>
          </form>

          {result && <span>{result}</span>}
        </div>
      </div>
    </div>
  )
}

export default Contact
