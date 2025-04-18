import React from 'react'
import Image from 'next/image'
import { Bitter as BitterFont } from 'next/font/google';
import myimg from '@/public/images/myimg.jpg'

const Bitter = BitterFont({
  weight: '600',
  subsets: ['latin']
});
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

function Hero() {
  return (
    <div>
    <p className='pb-1 text-4xl font-bold inline border-b-4 border-white rounded-2xl text-blue-500  mb-12'>
                Profile  
            &nbsp;
            </p >
    <div className='w-10/12 border-slate-200 min-h-32 text-white rounded-md ms-12 me-12 py-10 px-10 flex justify-between'>
      <div className='inline-block '>

        <Image src={myimg} height={200} width={200} alt='Aman Singh' className='rounded-2xl ' />
      </div>
      <div className='inline-block w-9/12  py-1 ps-4'>
        <p className={`text-3xl text-indigo-100 font-sans m-3 font-bo ${Bitter.className}`}>
        Hi, I'm Aman<br /><br />
        Full Stack Developer,<br />
        Building Scalable Web Applications

        </p>
        
      </div>
    </div>
    </div>
  )
}

export default Hero