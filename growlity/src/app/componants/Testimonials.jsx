import React from 'react'
import style from '../styles/testimonials.module.css'
import Image from 'next/image'

const Testimonials = ({img, disc, name, post}) => {
    return (
        <div className={`${style.cust}`}>
            <Image className={`${style.cust_img}`} src={img} alt="" />
            <p className={`${style.cust_words}`}>{disc}</p>
            <h2 className={`${style.cust_name}`}>{name}</h2>
            <span className={`${style.cust_position}`}>{post}</span>
        </div>
    )
}

export default Testimonials