import React from 'react'
import style from '../styles/our_blog.module.css'
import Link from 'next/link'
import Image from 'next/image'
import go_ahead from '@/assets/image/go_ahead.svg' 

const Blog_data = ({index, title, disc, isClass}) => {
    return (
        <div className={`${isClass ? style.blog_2 : style.blog_1}`}>
            <div className={`${style.blog_data} ${style.blog_1_data}`}>
                <h2>{index}</h2>
                <span>{title}</span>
            </div>
            <p className={`${style.blog_disc}`}>{disc}</p>
            <Link className={`${style.go_ahead}`} href={"/"}><Image src={go_ahead} alt="" /></Link>
        </div>
    )
}

export default Blog_data
