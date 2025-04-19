import Image from 'next/image';
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  Description: string; // Changed to lowercase 'd'
  demoLink: string;
  certificateLink: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, Description, demoLink, certificateLink, imageUrl }) => {
  return (
    <div className='bg-blue-950 rounded-lg shadow-lg p-4'>
      <div className='h-52 w-full relative'>
        <Image src={imageUrl} alt={title} layout='fill' objectFit='contain' className='rounded-lg' />
      </div>
      <div className='text-xl font-semibold mt-4 text-yellow-100'>{title}</div>
      <div className='text-slate-100 mt-2'>{Description}</div>
      <div className='mt-4 flex gap-4'>
        {demoLink && (
          <a href={demoLink} target='_blank' rel='noopener noreferrer' className='text-blue-500 font-semibold '>
            Demo
          </a>
        )}
        {certificateLink && (
          <a href={certificateLink} target='_blank' rel='noopener noreferrer' className='text-orange-500 font-semibold flex gap-2'>
            Certificate <FaPaperPlane />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;