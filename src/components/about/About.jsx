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

    
          <div className="about_cards">
            <article className ='about_card'>
               <BsFillBookFill className = 'about_icon'/>
               <h5>Education</h5>
               <li>
                <m> Vanderbilt University Bachelor of Science </m>
               </li>
               <li>
                <m> Graduation: Dec 2023 </m>
               </li>
               <li>
                <m> Major: Computer Science</m>
               </li>
               <li>
                <m> Minor: Mathematics, Economics, Chemistry</m>
               </li>
               <li>
                 <m> GPA: 3.801</m>
               </li>
               <li>
                 <m> Relevant Courseworks: Principles of Software Engineer, Machine Learning, Data Visualization, Operating Systems, Project in Virtual Reality Design, Network Analysis in Healthcare, Theory of Automata, Program Design Data Structures, Algorithms, Intermediate Software Design, Programming Languages, Programming & Problem-Solving</m>
               </li>
               <li>
                 <m>Awards & Honors: Dean’s List, Yonsei Summer Program Scholarship, Colonel Book Report Awards, Major General award in the training center of the Korean Army, special warrior title for the top performance </m>
               </li>
            </article>
          </div>
          
          <div className='about_content'>

          <p>
          I have earned a Bachelor of Science degree from Vanderbilt University School of Engineering. My major is Computer Science, 
          and my minors are Mathematics, Economics, and Chemistry. I am excited to leverage my academic knowledge and passion for 
          software engineering to contribute in cutting-edge projects. My proficiency in programming coupled with my creative problem-solving skills 
          enable me to write optimized and scalable code that adheres to industry best practices. I also possess a strong foundation in algorithms, 
          data structures, and software design principles, which I believe will be valuable in formulating innovative solutions to meet both product 
          and technology roadmaps. I am excited about the prospect of working in a collaborative Agile environment, engaging with multiple stakeholders 
          to develop end-to-end technology solutions.
          </p>

          <p>
            I have gained proficiency in several programming languages including C++, Python, Java, C#, Matlab, Racket, and Prolog during my coursework 
            at Vanderbilt University. Additionally, during my internship at Stryker, I utilized C# to develop test cases using the Selenium library and 
            created a debugging tool for communicating with various networking devices. For full-stack projects, I have leveraged JavaScript, the React library, 
            the Jest testing framework, and Firebase to construct a Reuse Market website for Vanderbilt University. I have also employed Java, Angular, Spring Boot, 
            Amazon S3, and MongoDB to build a YouTube Clone for my personal project. Additionally, my strong interest in data science has led me to use MySQL for a project focused on performing 
            diverse data analysis tasks on voters' information.
          </p>

          <p>
          Growing up in five different countries, including South Korea, the United States, Malaysia, Thailand, and Taiwan, has cultivated my adaptability and 
          open-mindedness. These qualities have proven invaluable throughout my career as a software engineer, where I continually seek to learn new tools and 
          technologies to tackle complex challenges. Outside of work, I enjoy engaging in social activities and pursuing an active lifestyle. 
          My interests encompass soccer, golf, boxing, hiking, and maintaining a regular fitness regimen.
          </p>

          <a href = '#contact' className = 'btn btn-primary'>Let's Talk</a>

          </div>

        </div>

    </section>
  )
}

export default About