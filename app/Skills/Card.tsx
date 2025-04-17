'use client';
import React from 'react';
import ReactParallaxTilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  img: string;
  title: string;
  // shadowColor: string;
  index:number
}


const Card: React.FC<CardProps> = ({ img, title,index }) => {
  return (
    <ReactParallaxTilt className='h-32 w-32 ms-6'>
      <motion.div
        initial={{  opacity: 0 ,scale:0.5}}
        animate={{ opacity: 1 ,scale:1}}
        exit={{ x: 1000 }}
        transition={{ duration: 0.5, staggerChildren: index*0.5 }}
        className='card h-32 w-32 bg-slate-800 rounded-lg shadow-lg flex flex-col justify-center items-center'
        whileHover={{ scale: 1.15, transition: { duration: 0.5 } }}
        // style={{ boxShadow: `0 4px 8px ${shadowColor}` }}
      >
        <div>
          <Image src={img} alt={title} width={200} height={200} />
        </div>
        <div className='text-center text-lg text-slate-100 h-12 flex items-center justify-center pt-2'>
          {title}
        </div>
      </motion.div>
    </ReactParallaxTilt>
  );
};

export default Card;
