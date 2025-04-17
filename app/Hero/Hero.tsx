import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
    <p className='pb-1 text-4xl font-bold inline border-b-4 border-white text-orange-500  mb-12'>
                Profile  
            &nbsp;
            </p >
    <div className='w-10/12 border-slate-200 min-h-32 text-white rounded-md ms-auto me-auto py-6 px-10 flex justify-between'>
      <div className='inline-block '>

        <Image src={myimg} height={200} width={200} alt='Aman Singh' className='rounded-xl ' />
      </div>
      <div className='inline-block w-9/12  py-10 ps-4'>
        <p className={`text-3xl text-blue-400 font-sans m-3 font-bo ${Bitter.className}`}>
        Hi, I'm Aman<br />
        Full Stack Developer,<br />
        Building Scalable Web Applications

        </p>
        <p className='text-orange-400 m-3 text-center text-lg'>
        I am a Full Stack Developer with expertise in Next.js, TypeScript, Tailwindcss and MERN Stack, dedicated to building high-performance, dynamic web applications. With a strong foundation in modern web technologies, I excel at creating efficient, scalable, and maintainable solutions that prioritize both functionality and user experience.

        </p>
      </div>
    </div>
    </div>
  )
}

export default Hero