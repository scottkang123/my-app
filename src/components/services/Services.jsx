import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id = 'services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className = "container services_container">

        {/*
        <article className = 'service'>
          <div className="service_head">
            <h3>Front-End</h3>
          </div>

          <ul className = 'service_list'>

            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p>
                Creating web application using React Library.
                 
              </p>
            </li>

          </ul>
        </article> 
        */}

        <article className = 'service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className = 'service_list'>

            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p>Creating web application using React Library</p>
            </li>

          </ul>
        </article> 

        <article className = 'service'>
          <div className="service_head">
            <h3>Software Design / Algorithm</h3>
          </div>

          <ul className = 'service_list'>
            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p> Developing software designs using object-oriented programming, which includes classes/objects, encapsulation/data hiding,
                inheritance, polymorphism, and interfaces/methods</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p> Proficient in using various libraries, including STL(c++), Standard Python Libary, pygame(Python), numpy, pandas, etc </p>
            </li>
            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p> Experienced in using various algorithms, such as DFS, QFS, sliding window, two pointers, graph problems, topological sort, etc</p>
            </li>
          </ul>
        </article> 
        
      </div>
    </section>
  )
}

export default Services