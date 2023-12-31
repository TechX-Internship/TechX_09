import React from 'react'
import Image from 'next/image'
import style from '../styles/globle_team.module.css'

const Glob_card = ({ img, member_name, post, disc }) => {
    return (
        <div className={`${style.g_card} d-flex gap-3`}>
            <Image className={style.g_card_img} src={img} alt="" />
            <div className={style.g_card_data}>
                <h2>{member_name}</h2>
                <span>{post}</span>
                <p>{disc}</p>
            </div>
        </div>
    )
}

export default Glob_card