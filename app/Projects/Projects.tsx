import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "E-Commerce Web App",
    Description: "Go-Groove is your ultimate destination for premium products across various categories. Whether you're a savvy shopper or a professional, enhance, and simplify your lifestyle—all in one place!",
    Demolink: "https://e-commerce-nextjs-iaman011s-projects.vercel.app/",
    Githublink: "https://github.com/iaman011/e-commerce",
    imgurl: "/images/shiksha_ekikaran.jpg",
  },
  {
    title: "Uber Clone App",
    Description: "An Ai model which makes use of the text to speech and speech to text model to convert the text to video making boring news intresting",
    Demolink: "",
    Githublink: "https://github.com/iaman011/Uber-Clone-App",
    imgurl:"/images/Text_to_video_image.jpg"
  },
  {
    title: "AI-Powered Code Reviewer",
    Description: "Predicting the phenotypic effects of mutations in the oryza sativa genome using deep learning models using genotypic characteristics of the plant . Also Published a Research paper",
    Demolink: "",
    Githublink: "https://github.com/iaman011/AI-Powered-Code-Reviewer",
    imgurl: "/images/agrigenomics1.jpg",
  },
  {
    title:"Melodify-SAAS Platform",
    Description:"An AI model which generates the fashion outfit absed on users parameters like their body shape,color,festival and many other characteristics which makes the user to look more fashionable ",
    Demolink:"",
    Githublink:"https://github.com/iaman011/Melodify-SAAS-platform",
    imgurl:"/images/outfit_generator.jpg",
  }
  
];

type Project = {
  title: string;
  Description: string;
  Demolink: string;
  Githublink: string;
  imgurl: string;
}

function Projects() {
  return (
    <>
      <p className='pb-1 text-4xl font-bold inline border-b-4 border-white rounded-2xl text-blue-500 text-center'>
      Projects <FontAwesomeIcon icon={faBriefcase} className='text-4xl inline text-white h-8 ms-3' />
        &nbsp;
      </p>

      <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 px-4 mt-8'>
        {projects.map((project: Project, index: number) => (
          <div className='w-full md:w-1/2 lg:w-1/3 p-2' key={index}>
            <ProjectCard
              title={project.title}
              Description={project.Description}
              demoLink={project.Demolink}
              githubLink={project.Githublink}
              imageUrl={project.imgurl}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Projects