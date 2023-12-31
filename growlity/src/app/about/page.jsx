import React from 'react'
import Our_client from '../componants/Our_client'
import Cust_say from '../componants/Cust_say'
import Our_blog from '../componants/Our_blog'
import FAQ from '../componants/FAQ'
import Get_in_touch from '../componants/Get_in_touch'
import Page_title from '../componants/Page_title'
import About from '../componants/About'

const page = () => {
    return (
        <div>
            <Page_title heading={"About Us"} isWhite={true}/>
            <About/>
            <Our_client />
            <Cust_say />
            <Our_blog />
            <FAQ />
            <Get_in_touch />
        </div>
    )
}

export default page