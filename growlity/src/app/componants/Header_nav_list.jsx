import React from 'react'
import Link from 'next/link'
import style from '../styles/header.module.css'

const Header_nav_list = ({link, title, isActive}) => {
  return (
    <li><Link className={`${isActive ? style.nav_home : ''}`}  href={link}>{title}</Link></li>
  )
}

export default Header_nav_list