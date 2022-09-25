import React from 'react'
import './experience.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id = 'experience'>Experience
    
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className = 'container experience_container'>

        <div className = "experience_frontend">
          <h3>Frontend Development</h3>
          <div className = 'experience_content'>
            <article className = 'experience_details'>
              <BsFillCheckCircleFill className = "experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className = 'text-light'>Intermediate</small>
              </div>
            </article>

            <article className = 'experience_details'>
              <BsFillCheckCircleFill className = "experience_details-icon"/>
              <div>
                <h4>React</h4>
                <small className = 'text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className = 'experience_details'>
              <BsFillCheckCircleFill className = "experience_details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className = 'text-light'>Intermediate</small>
              </div>
            </article>

            <article className = 'experience_details'>
              <BsFillCheckCircleFill className = "experience_details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className = 'text-light'>Intermediate</small>
              </div>
             
            </article>

          </div>
        </div>

        <div className = 'experience_backe nd'>

          <h3>Backend Development</h3>

          <div className = 'experience_content'>
            <article className = 'experience_details'>
              <BsFillCheckCircleFill className = 'experience_details-icon'/>
              <div>
                <h4>C++</h4>
                <small className = 'text-light'>Expert</small>
              </div>
            </article>

            <article className = 'experience_details'>
              <BsFillCheckCircleFill className = 'experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className = 'text-light'>Expert</small>
              </div>
            </article>

            <article className = 'experience_details'>
              <BsFillCheckCircleFill className = 'experience_details-icon'/>
              <div>
                <h4>JAVA</h4>
                <small className = 'text-light'>Intermediate</small>
              </div>
            </article>

            <article className = 'experience_details'>
              <BsFillCheckCircleFill className = 'experience_details-icon' />
              <div>
                <h4>Node.js</h4>
                <small className = 'text-light'>Beginner's Level</small>
              </div>
            </article>
          </div> 

        </div>


      </div>

    </section>

  )
}

export default Experience