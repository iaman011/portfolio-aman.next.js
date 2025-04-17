import Image from 'next/image'
import SidebarContact from './sidebarcontact'
import Card from '@/app/Skills/Card'
import Skillsshow from './Skills/Skillsshow'
import Hero from '@/app/Hero/Hero'
import Projects from './Projects/Projects'
import Stats from './Stats/Stats'
import { Navbar } from '@/Components/navbar'
import Footer from '@/Components/Footer'

export default function Home() {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div className='relative bg-slate-900 min-h-screen min-w-full py-7'>
      <SidebarContact/> 
      <div className='w-11/12  ms-auto'>

      <Hero />
      
      <Skillsshow/>
      <Projects/>
      <Stats/>
      <Footer />
      </div>

    </div>
    </div>
  )
}
