import React from 'react'
import style from '../styles/srevice_card.module.css'
import Image from 'next/image'

const Service_card = ( {img, title, disc}) => {
    return (
        <div className={`${style.service_card}`}>
            <Image className={`${style.service_card_img}`} src={img} alt="" />
            <span>{title}</span>
            <p>{disc}</p>
        </div>
    )
}

export default Service_card