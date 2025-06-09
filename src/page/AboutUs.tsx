import React from 'react'
import Section1 from '../about/Section1'
import Section2 from '../about/Section2'
import Section3 from '../about/Section3'
import Section4 from '../about/Section4'
import Section5 from '../about/Section5'
import Section9 from '../components/Section9'
import MobAbout from '../about/MobAbout'

const AboutUs:React.FC = () => {
  return (
    <main>
      <main className='hidden sm:block'>
      <div id='about'>
      <Section1/>
      </div>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section9/>
      </main>
      <main className='sm:hidden'>
        <MobAbout/>
      </main>
    </main>
  )
}

export default AboutUs