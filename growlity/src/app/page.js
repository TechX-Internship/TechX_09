import Hero from './componants/Hero'
import About from './componants/About'
import Our_services from './componants/Our_services'
import Cust_say from './componants/Cust_say'
import Our_client from './componants/Our_client'
import Our_blog from './componants/Our_blog'
import FAQ from './componants/FAQ'
import Globle_team from './componants/Globle_team'
import Get_in_touch from './componants/Get_in_touch'

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Our_services/>
      <Cust_say/>
      <Our_client/>
      <Our_blog/>
      <FAQ/>
      <Globle_team/>
      <Get_in_touch/>
    </main>
  )
}
