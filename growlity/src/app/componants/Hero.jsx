import React from 'react'
import style from '../styles/hero.module.css'
import Learn_more from './Learn_more'

const Hero = () => {
  return (
    <section className={`${style.hero}`}>
      <div className="container">
        <div className={`${style.hero_main}`}>
          <div className={`${style.hero_left}`}>
              <h2 className=''>  
                Growlity Ready To Go For Growth With Sustainability?
              </h2>
              <p className={`${style.hero_pera_1}`}>
                Globally, we’re helping all industry sectors transform to reach Net Zero, balanced with Sustainable Development Goals.</p>
              <p className={`${style.hero_pera_2}`}>
                Globally, we’re helping all industry sectors transform.
              </p>
              {/* <Learn_more className={`${style.l_more}`} isTrue={true}/> */}
              <div className={``}>
                <Learn_more isTrue={true}/>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero