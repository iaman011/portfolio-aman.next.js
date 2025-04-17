import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  title: string;
  Description: string; // Changed to lowercase 'd'
  demoLink: string;
  githubLink: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, Description, demoLink, githubLink, imageUrl }) => {
  return (
    <div className='bg-slate-800 rounded-lg shadow-lg p-4'>
      <div className='h-52 w-full relative'>
        <Image src={imageUrl} alt={title} layout='fill' objectFit='cover' className='rounded-lg' />
      </div>
      <div className='text-xl font-semibold mt-4 text-yellow-100'>{title}</div>
      <div className='text-slate-100 mt-2'>{Description}</div>
      <div className='mt-4 flex gap-4'>
        {demoLink && (
          <a href={demoLink} target='_blank' rel='noopener noreferrer' className='text-blue-500 font-semibold '>
            Demo
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target='_blank' rel='noopener noreferrer' className='text-blue-500 font-semibold '>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;