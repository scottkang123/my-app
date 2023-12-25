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
              <p> Developing software designs using object-oriented programming, including classes/objects, encapsulation/data hiding,
                inheritance, polymorphism, and interfaces/methods</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p> Proficient in using various libraries, including STL(c++), Standard Python Libary, pygame(Python), NumPy, Pandas, etc </p>
            </li>
            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p> Experienced in using various algorithms, such as DFS, QFS, sliding window, two pointers, graph problems, topological sort, etc</p>
            </li>
          </ul>
        </article> 

        <article className = 'service'>
          <div className="service_head">
            <h3>Machine Learning</h3>
          </div>

          <ul className = 'service_list'>
            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p> Data pre-processing, which includes Principal Component Analysis and Feature Selection</p>
            </li>
            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p> Implementing various Machine Learning Models, including Polynomial Regression, Logistic Regression, Support Vector Machine, Neural Network, K-nearest-neighbors, etc </p>
            </li>
            
          </ul>
        </article> 

        <article className = 'service'>
          <div className="service_head">
            <h3>Data Visualization</h3>
          </div>

          <ul className = 'service_list'>
            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p> Given raw data, implementing data visualizations, such as tSNE implemented scatter plot, treemap algorithms, multiple view composition on precipitation and sky coverage of US states, parallel coordinates, stacked area
marks, and bubble plot. </p>
            </li>
            <li>
              <AiOutlineCheck className = 'service_list-icon'/>
              <p> Implementing user interactions, such as highlighting, data brushing, and multiple view compositions. </p>
            </li>
            
          </ul>
        </article> 
        
      </div>
    </section>
  )
}

export default Services