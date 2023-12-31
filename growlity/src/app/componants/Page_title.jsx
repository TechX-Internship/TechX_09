import React from 'react'
import style from '../styles/page_title.module.css'
import Section_title_img from './Section_title_img'

const Page_title = ({heading, isWhite}) => {
  return (
    <section className={`${style.page_title}`}>
        <div className={`container ${style.page_title_container}`}>
            <div className={`${style.page_title_h2}`}>
                <Section_title_img title={heading} isWhite={isWhite}/>
            </div>
        </div>
    </section>
  )
}

export default Page_title