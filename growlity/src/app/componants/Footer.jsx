import React from 'react'
import style from '../styles/footer.module.css'
import Image from 'next/image'
import icon from '@/assets/image/Favicon.png'
import location from '@/assets/image/location.svg'
import phone from '@/assets/image/phone.svg'
import s_media_1 from '@/assets/image/s_media_1.png'
import s_media_2 from '@/assets/image/s_media_2.png'
import s_media_3 from '@/assets/image/s_media_3.png'
import s_media_4 from '@/assets/image/s_media_4.png'
import foot from '@/assets/image/foot.png'

const Footer = () => {
    return (
        <section className={style.footer}>
            <div className="container">
                <div className={`row ${style.footer_all}`}>
                    <div className={`col-4`}>
                        <Image className={`img`} src={icon} alt="" />
                        <div className={`d-flex m-3 ${style.location}`}>
                            <div className={`me-3`}>
                                <Image src={location} alt="" />
                            </div>
                            <div className={` ${style.location_data}`}>
                                <span>GROWLITY, INC.</span>
                                <span>30 N GOULD ST STE R</span>
                                <span>SHERIDAN, WY 82801, USA</span>
                            </div>
                        </div>
                        <div className={`d-flex mt-3 mx-3 mb-5 ${style.phone}`}>
                            <div className={`me-3`}>
                                <Image src={phone} alt="" />
                            </div>
                            <div className={` ${style.phone_data}`}>
                                <span>+91 (960) 131 0999</span>
                            </div>
                        </div>
                    </div>
                    <div className={`col-8 d-flex ${style.footer_right}`}>
                        <div className={`w-100 ${style.foot_parts}`}>
                            <h2>Address-2</h2>
                            <ul>
                                <li className={style.add_2}>
                                    <p>GROWLITY, INC.
                                       30 N GOULD ST STE R
                                       SHERIDAN, WY 82801, USA</p>
                                </li>
                                <li>+1 (718) 690 929</li>
                            </ul>
                        </div>
                        <div className={`w-100 ${style.foot_parts}`}>
                            <h2>Company </h2>
                            <ul>
                                <li>About Us</li>
                                <li>Careers</li>
                                <li>FAQs</li>
                                <li>Teams</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className={`w-100 ${style.foot_parts}`}>
                            <h2>Support</h2>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms of Use</li>
                                <li>Sales and Refunds</li>
                                <li>Legal</li>
                                <li>Site Map</li>
                            </ul>
                        </div>
                        <div className={`w-100 ${style.foot_parts}`}>
                            <h2>Follow us</h2>
                            <div className={`d-flex ${style.s_media}`}>
                                <Image src={s_media_1} alt="" />
                                <Image src={s_media_2} alt="" />
                                <Image src={s_media_3} alt="" />
                                <Image src={s_media_4} alt="" />
                            </div>
                        </div>
                    </div>
                    <Image className={`${style.foot_ab}`} src={foot} alt="" />
                </div>
                <div className={`${style.copy_right}`}>
                    <h2>© 2021 All Rights Reserved</h2>
                </div>
            </div>
        </section>
    )
}

export default Footer