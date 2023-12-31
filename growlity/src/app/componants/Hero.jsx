import React from 'react'
import style from '../styles/hero.module.css'
import Learn_more from './Learn_more'

const Hero = () => {
  return (
    <section className={`${style.hero}`}>
      <div className="container">
        <div className={`${style.hero_main}`}>
          <div className={`${style.hero_left}`}>
            <div>
              <h2>  
                Growlity Ready To Go For Growth With Sustainability?
              </h2>
              <p className="">
                Globally, we’re helping all industry sectors transform to reach Net Zero, balanced with Sustainable Development Goals.
              </p>
              <Learn_more isTrue={true}/>
              <div className={`${style.l_more}`}>
                <Learn_more isTrue={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero