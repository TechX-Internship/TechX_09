import React from 'react'
import Testimonials from './Testimonials'
import style from '../styles/cust_say.module.css'
import cust_1 from '@/assets/image/cust_1.png'
import cust_2 from '@/assets/image/cust_2.png'
import cust_3 from '@/assets/image/cust_3.png'

const c_card = [
    {img: cust_1, post: "Executive Engineer", name: "Mike Torello", disc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
    {img: cust_2, post: "Executive Engineer", name: "Rick Wright", disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
    {img: cust_3, post: "Executive Engineer", name: "Jessica", disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."},
];

const Cust_say = () => {
  return (
    <section className={`${style.cust_say}`}>
        <div className={`container ${style.Cust_say_main}`}>
            <h2 className={`${style.cust_say_title}`}>
                What Our Customers Say
            </h2>
            <p className={`${style.Cust_say_disc}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per.
            </p>
            <div className='d-flex gap-3'>
                {
                    c_card.map((item) => (
                        <Testimonials img={item.img} disc={item.disc} name={item.name} post={item.post}/>
                    ))
                }
            </div>
            <div className={style.pagination}>
                <span className={`${style.forword}`}><i class="ri-arrow-left-s-line"></i></span>
                <span className={`${style.backword}`}><i class="ri-arrow-right-s-line"></i></span>
            </div>
        </div>
    </section>
  )
}

export default Cust_say