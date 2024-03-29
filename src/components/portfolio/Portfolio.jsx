import React from 'react'
import './portfolio.css'
import IMG from '../../assets/portfolio5.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio6.jpg'
import IMG4 from '../../assets/portfolio1.jpg'
import IMG5 from '../../assets/vandymarketplace.png'
import ML from './ML'
import NA from './NetworkAnalysis'
import DataA from './DataA'
import VandyWeb from './VandyWeb'

const data = [
  {
    id: 1,
    image: IMG,
    title: 'Projects in GitHub',
    github: 'https://github.com/scottkang123'
  }
]

const data_ml = [
  {
    id: 2,
    image: IMG2,
    title: "Machine Learning Project: Phishing URL Classification"
  }
]

const data_na = [
  {
    id: 3,
    image: IMG3,
    title: "Network Analysis: Drug Drug Interaction"
  }
]

const data_a = [
  {
    id: 4,
    image: IMG4,
    title: "Data Analysis Using MySQL: Voters' Registration"
  }
]

const vandy_web = [
  {
    id: 5,
    image: IMG5,
    title: "Vandy Market Website Demo"
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

          {
            data_ml.map(({id, image, title}) => {
              return(
                  <article key = {id} className = 'portfolio_item'>
                  <div className="portfolio_item_image">
                    <img src = {image} alt = {title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <ML/>
                  </div>
                  </article>
              )
            })
          }

          {
            data_na.map(({id, image, title}) => {
              return(
                  <article key = {id} className = 'portfolio_item'>
                  <div className="portfolio_item_image">
                    <img src = {image} alt = {title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <NA/>
                  </div>
                  </article>
              )
            })
          }

          {
            data_a.map(({id, image, title}) => {
              return(
                  <article key = {id} className = 'portfolio_item'>
                  <div className="portfolio_item_image">
                    <img src = {image} alt = {title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <DataA/>
                  </div>
                  </article>
              )
            })
          }

          {
            vandy_web.map(({id, image, title}) => {
              return(
                  <article key = {id} className = 'portfolio_item'>
                  <div className="portfolio_item_image">
                    <img src = {image} alt = {title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio_item-cta">
                    <VandyWeb/>
                  </div>
                  <small><a href="https://vandymarketplace.vercel.app/log-in" target="_blank">https://vandymarketplace.vercel.app/log-in</a></small>
                  </article>
              )
            })
          }



      </div>

    </section>
  )
}

export default Portfolio