import React from 'react'
import style from '../styles/faq.module.css'
import Section_title_img from './Section_title_img'
import Learn_more from './Learn_more'

const FAQ = () => {
    return (
        <section className={style.faq}>
            <div className="container">
                <div className={``}>
                    <div className={`d-flex justify-content-between ${style.faq_head}`}>
                        {<Section_title_img title={"Frequently asked questions"} isWhite={true}/>}
                        <Learn_more isTrue={true}/>
                    </div>
                    <p className={`${style.faq_disc}`}>
                        The health of the environment plays a critical role in sustaining life and supporting various ecosystems. Human activities, such as industrialization, deforestation.
                    </p>
                </div>
                <div className={`${style.faq_data}`}>
                    <div className={style.faq_ques}>
                        <div className={`d-flex justify-content-between ${style.ques_bar}`}>
                            <span className={style.question}>This includes the physical elements of the Earth, such as landforms.</span>
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <p className={style.answer}></p>
                    </div>
                    <div className={style.faq_ques}>
                        <div className={`d-flex justify-content-between ${style.ques_bar}`}>
                            <span className={style.question}>This refers to the human-made or constructed elements.</span>
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <p className={style.active_answer}>This aspect of the environment relates to human interactions, cultural norms, and societal structures that influence the way people live, work, and communicate.</p>
                    </div>
                    <div className={style.faq_ques}>
                        <div className={`d-flex justify-content-between ${style.ques_bar}`}>
                            <span className={style.question}>The health of the environment plays a critical role in sustaining life.</span>
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <p className={style.answer}></p>
                    </div>
                    <div className={style.faq_ques}>
                        <div className={`d-flex justify-content-between ${style.ques_bar}`}>
                            <span className={style.question}>supporting various ecosystems. Human activities, such as industrialization.</span>
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <p className={style.answer}></p>
                    </div>
                    <div className={style.faq_ques}>
                        <div className={`d-flex justify-content-between ${style.ques_bar}`}>
                            <span className={style.question}>The concept of environmental conservation and.</span>
                            <i class="ri-arrow-down-s-line"></i>
                        </div>
                        <p className={style.answer}></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQ