import React from 'react'
import Image from 'next/image'
import style from '../styles/section_title_img.module.css'
import after_leaf from '../../../public/after_leaf.png'

const Section_title_img = ({title, isWhite}) => {
    return (
        <h2 className={`${style.section_title_h2}`} style={{color: isWhite ? 'white': ''}}>{title}
            <Image className={`${style.section_title_img}`} src={after_leaf} alt="" />
        </h2>
    )
}

export default Section_title_img