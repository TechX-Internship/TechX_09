import React from 'react'
import style from '../styles/globle_team.module.css'
import Section_title_img from './Section_title_img'
import Glob_card from './Glob_card'
import Learn_more from './Learn_more'
import member_1 from '@/assets/image/member_1.png'
import member_2 from '@/assets/image/member_2.png'
import member_3 from '@/assets/image/member_3.png'
import member_4 from '@/assets/image/member_4.png'


const g_card = [
    { img: member_1, member_name: "Zain Passaquindici", post: "Manager", disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lectus eget." },
    { img: member_2, member_name: "Lindsey Geidt", post: "Manager", disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lectus eget." },
    { img: member_3, member_name: "Cheyenne Aminoff", post: "Manager", disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lectus eget." },
    { img: member_4, member_name: "Cooper Workman", post: "Manager", disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur lectus eget." },
]

const Globle_team = () => {
    return (
        <section className={style.glob_team}>
            <div className="container">
                <div className={`text-center ${style.glob_team_head}`}>
                    {<Section_title_img title={"Our Globle Team"}/>}
                </div>
                <div className={style.glob_card_box}>
                    <div className={`${style.globle_cards} row gap-3`}>
                        {
                            g_card.map((item) => (
                                <Glob_card img={item.img} member_name={item.member_name} post={item.post} disc={item.disc} />
                            ))
                        }
                    </div>
                </div>
                <div className={`text-center`}>
                    <Learn_more />
                </div>
            </div>
        </section>
    )
}

export default Globle_team