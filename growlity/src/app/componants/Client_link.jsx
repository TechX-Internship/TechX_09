import React from 'react'
import Image from 'next/image'
import style from '../styles/our_client.module.css'

const Client_link = ({ img }) => {
    return (
        <div className={`text-center ${style.c_links}`}>
            <Image className={style.c_links_img} src={img} alt="" />
        </div>
    )
}

export default Client_link