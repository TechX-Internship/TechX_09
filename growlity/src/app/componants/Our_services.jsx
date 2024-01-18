import React from 'react'
import style from '../styles/our_services.module.css'
import Section_title_img from './Section_title_img'
import Service_card from './Service_card'
import card_1 from '@/assets/image/card_1.png'
import card_2 from '@/assets/image/card_2.png'
import card_3 from '@/assets/image/card_3.png'
import card_4 from '@/assets/image/card_4.png'

const s_card = [
    { img: card_1, title: "Strategy", disc: "We evolve an agreed framework to focus investment and drive performance, as well as engage internal and external stakeholders." },
    { img: card_2, title: "Consulting", disc: "We help our clients to identify and harness climate innovation, embed sustainability at scale into their business, and capture the value." },
    { img: card_3, title: "Reporting", disc: "Our services include preparing, measuring and analysing the impact through organizational sustainability reporting as against." },
    { img: card_4, title: "Training", disc: "Our professional instructors draw from their own experience in sustainability, carbon management, responsible." },
];

const Our_services = () => {

    return (
        <section className={`${style.our_services}`}>
            <div className="container">
                <div className={`${style.our_services_title}`}>
                    {<Section_title_img title={"Our Services"}/>}
                </div>
                <p className={`${style.our_services_disc} text-center`}>Our multidisciplinary teams can help companies understand the risks and opportunities arising from climate change and materiality issues to achieve growth wi th sustainability.</p>
                <div className="d-flex gap-3">{
                        s_card.map((item) => (
                            <Service_card img={item.img} title={item.title} disc={item.disc} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Our_services