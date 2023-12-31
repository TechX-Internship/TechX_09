import React from 'react'
import Our_client from '../componants/Our_client'
import Cust_say from '../componants/Cust_say'
import Our_blog from '../componants/Our_blog'
import FAQ from '../componants/FAQ'
import Get_in_touch from '../componants/Get_in_touch'
import Page_title from '../componants/Page_title'

const page = () => {
    return (
        <main>
            <Page_title heading={"Our client"} isWhite={true}/>
            <Our_client />
            <Cust_say />
            <Our_blog />
            <FAQ />
            <Get_in_touch />
        </main>
    )
}

export default page