import React from 'react'
import './about.css'
import ME from '../../assets/me_image.png'
import {MdWork} from 'react-icons/md'
import {BsFillBookFill} from 'react-icons/bs'
import {MdLibraryBooks} from 'react-icons/md'

function About() {
  return (
    <section id = 'about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className = 'container about_container'>

        <div className="about_me">
          <div className="about_me_image">
            <img src = {ME} alt ='About_Image'/>
          </div>
        </div>

        <div className="about_content">

          <div className="about_cards">
            <article className ='about_card'>
               <BsFillBookFill className = 'about_icon'/>
               <h5>Education</h5>
               <li>
                <small> Vanderbilt University Bachelor of Science </small>
               </li>
               <li>
                <small> Major: Computer Science</small>
               </li>
               <li>
                <small> Minor: Mathematics, Economics, Chemistry</small>
               </li>
               <li>
                 <small> GPA: 3.801</small>
               </li>
            </article>
          
            {/*
            <article className ='about_card'>
               <MdWork className = 'about_icon'/> 
               <h5>Work Experience</h5>
               <small> </small>
            </article>
            */}
          
            <article className ='about_card'>
               <MdLibraryBooks className = 'about_icon'/> 
               <h5>Projects</h5>
               <li>
                 <small> Phishing Link Deteching ML Projects (Numpy, Python) </small>
               </li>
               <li>
                 <small> Linux Peer to Peer chat Network System (C) </small>
               </li>
               <li>
                 <small> Diff. Interactive Data Visualization Projects (D3, Javascript) </small>
               </li>
               <li>
                 <small> Maze Solver / Text Twist (C++) </small>
               </li>
               <li>
                 <small> Front-End/Back-End Project (Node.js, React, MySQL) </small>
               </li>
               
            </article>
            
          </div>
          <p>
            Bachelor's Degree
            I am currently a Senior at Vanderbilt University Engineering School, majoring in Computer Science.
            I was born in Seoul, South Korea. However, throughout my childhood, I have lived in 5 different countries, including South Korea, Malaysia, Thailand, Taiwan, and United States.
            With my diverse and multicultural background, I learned to adapt quickly to new environment and have a flexible mindset. 
            I believe programming is a tool that provides solutions and benefits to various aspects of our lives. As programming has limitles potential and usages, I want 
            to use my programming skills to positively impact the world and make our lives more efficient, entertaining, and harmonious. 
          </p>

          <a href = '#contact' className = 'btn btn-primary'>Let's Talk</a>


        </div>
      </div>

    </section>
  )
}

export default About