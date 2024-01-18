import React from 'react'
import style from '../styles/our_client.module.css'
import Section_title_img from './Section_title_img'
import Client_link from './Client_link'
import client_1 from '@/assets/image/client_1.png'
import client_2 from '@/assets/image/client_2.png'
import client_3 from '@/assets/image/client_3.png'
import client_4 from '@/assets/image/client_4.png'
import client_5 from '@/assets/image/client_5.png'
import client_6 from '@/assets/image/client_6.png'
import Link from 'next/link'

const c_links = [
    { img: client_1 },
    { img: client_2 },
    { img: client_3 },
    { img: client_4 },
    { img: client_5 },
    { img: client_6 }
];

const Our_client = () => {
    return (
        <section className={style.our_client}>
            <div className="container">
                <div className={`text-center ${style.our_client_head}`}>
                    {<Section_title_img title={"Our Clients"}/>}
                </div>
                <Link href={"/"} className={`d-flex gap-3`}>
                    {
                        c_links.map((item) => (
                            <Client_link img={item.img}/>
                        ))
                    }
                </Link>
            </div>
        </section>
    )
}

export default Our_client