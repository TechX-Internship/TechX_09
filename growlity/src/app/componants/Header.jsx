"use client"
import React from 'react'
import style from '../styles/header.module.css'
import Image from 'next/image'
import icon from '@/assets/image/Icon.jpg'
import Header_nav_list from './Header_nav_list'
import { usePathname } from 'next/navigation'

const nav_list = [
    { link: "/", title: "Home" },
    { link: "/about", title: "About Us" },
    { link: "/services", title: "Services" },
    { link: "/our_clients", title: "Our Clients" },
    { link: "/review", title: "Review" },
    { link: "/blog", title: "Blog" },
];

const Header = () => {
    const pathname = usePathname()
    return (
        <header>
            <nav className="container">
                <div className={`${style.nav}`}>
                    <div className={`${style.icon}`}>
                        <Image src={icon} alt="" />
                    </div>
                    <ul className={`${style.nav_list}`}>
                        {
                            nav_list.map((item) => (
                                <Header_nav_list isActive={pathname === item.link} link={item.link} title={item.title} />
                            ))
                        }
                    </ul>
                    <button className={`${style.contact_us}`}>
                        Contact Us
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
