import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'Projects in GitHub',
    github: 'https://github.com/scottkang123'
  }
]


const Portfolio = () => {
  return (
    <section id = 'portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className = 'container portfolio_container'>

          {
            data.map(({id, image, title, github}) => {
              return(
                  <article key = {id} className = 'portfolio_item'>
                  <div className="portfolio_item_image">
                    <img src = {image} alt = {title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <a href = {github} className = 'btn'>GitHub </a>
                  </div>
          </article>
              )
            })
          }

      </div>

    </section>
  )
}

export default Portfolio