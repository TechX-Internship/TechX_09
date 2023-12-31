import React from 'react'
import style from '../styles/our_blog.module.css'
import Section_title_img from './Section_title_img'
import Learn_more from './Learn_more'
import Blog_data from './Blog_data'

const blog_card = [
    {index: "01", title: "Announcement", disc: "Our multidisciplinary teams can help companies understand the risks and opportunities arising from climate change and materiality issues to achieve growth wi th sustainability."},
    {index: "02", title: "Latest News!", disc: "Our multidisciplinary teams can help companies understand the risks and opportunities arising from climate change and materiality issues to achieve growth wi th sustainability."}
]

const Our_blog = () => {
    return (
        <section className={style.our_blog}>
            <div className="container">
                <div className={`text-center ${style.our_blog_head}`}>
                    {<Section_title_img title={"Our blogs"}/>}
                </div>
                <div className={`d-flex gap-3 ${style.blog}`}>
                    {
                        blog_card.map((item, i) => (
                            <Blog_data index={item.index} title={item.title} disc={item.disc} isClass={i === 1}/>
                        ))
                    }
                </div>
                <div className={style.l_more}>
                    <Learn_more />
                </div>
            </div>
        </section>
    )
}

export default Our_blog