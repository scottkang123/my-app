import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className = 'header_socials'>
        <a href = "https://www.linkedin.com/in/scott-kang/" target = "_blank" rel = "noreferrer"><BsLinkedin/></a>
        <a href = "https://github.com/scottkang123" target = "_blank" rel = "noreferrer"><FaGithub/></a>
        <a href = "https://www.instagram.com/scottk_1103/" target = "_blank" rel = "noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials
