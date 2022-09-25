import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact() {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6tkfy4c', 'template_yl97xz9', form.current, 'UWGNQtl1rwFNYWSwr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };
 
  return (
    <section id = 'contact'>  

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className = 'container contact_container'>
        <div className="contact_options">

          <article className = 'contact_option'>
            <HiOutlineMail className='contact_option_icon'/>
            <h4>Email</h4>
            <h5>kyung.ho.kang@vanderbilt.edu</h5>
            <a href = 'mailto:kyung.ho.kang@vanderbilt.edu'>Send A Message</a>
          </article>

          <article className = 'contact_option'>
            <BsMessenger className='contact_option_icon' />
            <h4>Messenger</h4>
            <h5>Scott Facebook</h5>
            <a href = 'https://m.me/scott.k.kang'>Send A Message</a>
          </article> 

          <article className = 'contact_option'>
            <AiFillPhone className='contact_option_icon'/>
            <h4>Phone Message/Call</h4>
            <h5>+16159350739</h5>
            <a href = 'https://api.whatsapp.com/send?phone=16159350739'>Send A Message</a>
          </article>  
  

        </div>
        <form ref = {form} onSubmit = {sendEmail}>
          <input type = 'text' name = 'name' placeholder= 'Your Full Name' required />
          <input type = 'email' name = 'email' placeholder = 'Your Email' required />
          <textarea name = 'message' rows = '7' placeholder= 'Your Message' required> </textarea>
          <button type = 'submit' className = 'btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact 