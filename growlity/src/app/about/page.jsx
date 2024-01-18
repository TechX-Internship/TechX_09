import React from 'react'
import Our_client from '../componants/Our_client'
import Cust_say from '../componants/Cust_say'
import Our_blog from '../componants/Our_blog'
import FAQ from '../componants/FAQ'
import Get_in_touch from '../componants/Get_in_touch'
import Page_title from '../componants/Page_title'
import About from '../componants/About'
import Globle_team from '../componants/Globle_team'
import Service_card from '../componants/Service_card'
import abt_1 from '@/assets/image/abt_1.png'
import abt_2 from '@/assets/image/abt_2.png'
import abt_3 from '@/assets/image/abt_3.png'

const s_card = [
    { img: abt_1, title: "Our Purpose", disc: "To create positive, sustainable development in the world." },
    { img: abt_2, title: "Our Mission", disc: "Enable Businesses to achieve Growth with Sustainability." },
    { img: abt_3, title: "Our Vision", disc: "To be trusted advisor for global business who does good to." }
];

const page = () => {
    return (
        <main>
            <Page_title heading={"About Us"} isWhite={true} />
            <About />
            <section className='container'>
                <div className={`d-flex justify-content-center gap-3`} style={{ margin: '0 10rem' }}>{
                    s_card.map((item) => (
                        <Service_card img={item.img} title={item.title} disc={item.disc} />
                    ))
                }
                </div>
            </section>
            <Globle_team />
            <Our_client />
            <Cust_say />
            <Our_blog />
            <FAQ />
            <Get_in_touch />
        </main>
    )
}

export default page