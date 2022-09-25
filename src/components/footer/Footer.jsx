import React from 'react'
import './footer.css'
import {AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href = '#' className = 'footer_logo'>Egator</a>
      <ul className = 'permalinks'>
        <li><a href = '#'>Home</a></li>
        <li><a href = '#about'>About</a></li>
        <li><a href = '#experience'>Experience</a></li>
        <li><a href = '#services'>Services</a></li>
        <li><a href = '#portfolio'>Portfolio</a></li>
        <li><a href = '#contact'>Contact</a></li>
      </ul>

      <div className = 'footer_socials'>
        <a href = 'https://www.facebook.com/scott.k.kang/'><AiFillFacebook/></a>
        <a href = 'https://www.https://www.instagram.com/scottk_1103/.com/scott.k.kang/'><BsInstagram/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Egator Tutorials. All rights reserved</small>
      </div>


    </footer>
  )
}

export default Footer