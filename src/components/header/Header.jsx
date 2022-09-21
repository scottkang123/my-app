import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/scott_beach.png'
import HeaderSocial from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5> Hello I'm </h5>
        <h1>Scott Kang</h1>
        <h5 classname = "text-light"> Fullstack Developer</h5>
        <CTA />

        <HeaderSocial />

        <div className = "me">
          <img src = {me} alt = "" />
        </div>

        <a href = "#contact" className = 'scroll_down'> Scroll Down </a>

      </div>
    </header>
  )
}

export default Header