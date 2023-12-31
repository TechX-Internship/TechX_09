import React from 'react'
import style from '../styles/about.module.css'
import Section_title_img from './Section_title_img'
import Learn_more from './Learn_more'
import Image from 'next/image'
import about from '../../../public/about_left.png'
import about_img_right from '../../../public/about_img_right.png'

const About = () => {
    return (
        <section className={`${style.about}`}>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Image className={`${style.about_img_left}`} src={about} alt="" />
                    </div>
                    <div className="col-6">
                        <div className={`text-start ${style.abt_data}`}>
                            {<Section_title_img title={"About Us"} />}
                            <p className={`${style.about_disc}`}>We work out closely with clients to converge on the areas where they make a difference. By taking a research based joint-team approach, we assist them to put out the infernos, create stability in their critical business processes and then employ appropriate Sustainability Solutions to achieve the Growth with Sustainability. Our domain experts never force to fit “synthetic solutions” or impose improvement tools and techniques that are incompatible for the client’s environment. Instead, we take pride in our ability to develop and tailor adequate roadmap with clear vision of Growth with Sustainability.</p>
                            <Image className={`${style.about_img_right}`} src={about_img_right} alt="" />
                            <Learn_more />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About