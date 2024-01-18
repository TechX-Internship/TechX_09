import React from 'react'
import style from '../styles/learn_more.module.css'
import Image from 'next/image'
import right_arrow from '@/assets/image/right_arrow.svg'
import Link from 'next/link'

const Learn_more = ({isTrue}) => {
  return (
      <Link href={"/"}>
        <button className={`${style.learn_more} ${ isTrue && style.bg_color}`}>
          <span className={`${style.learn_more_span} ${ isTrue && style.span_color}`}>Learn more</span>
          <i className={`ri-arrow-right-line ${style.learn_arrow} ${isTrue && style.text_color}`}></i>
        </button>
      </Link>
  )
}
// style={{color: isWhite ? 'white': ''}}
export default Learn_more