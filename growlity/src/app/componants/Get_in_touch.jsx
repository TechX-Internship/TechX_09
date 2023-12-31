import React from 'react'
import style from '../styles/get_in_touch.module.css'
import Section_title_img from './Section_title_img'
import Learn_more from './Learn_more'

const Get_in_touch = () => {
    return (
        <section className={style.get_in_touch}>
            <div className="container">
                <div className="d-flex">
                    <div className={style.gt_left}></div>
                    <div className={style.gt_right}>
                        <div className={style.gt_right_data}>
                            <div className={style.gt_right_data_head}>
                                {<Section_title_img title={"Get In Touch"}/>}
                            </div>
                            <form className={style.form} action="">
                                <input type="text" name="" placeholder='Name' id="name" />
                                <input type="email" name="" placeholder='E-mail ID' id="email" />
                                <input type="tel" name="" placeholder='Contact' id="contact" />
                                <textarea name="" placeholder='Message' id="" cols="30" rows="1"></textarea>
                            </form> 
                            <Learn_more />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Get_in_touch