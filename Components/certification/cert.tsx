import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import CertifactionCard from '@/Components/certification/certCard';


const Certifications = [
  {
    title: "Maste in DSA using C++",
    description: "This comprehensive 6-month offline program, guided by expert mentor Abhishek Srivastava at Coding Blocks, is meticulously designed to build strong foundational and advanced skills in Data Structures and Algorithms (DSA) using C++.",
    demoLink: "",
    certificateLink: "https://drive.google.com/file/d/1yjMLZcNOD0a_gqejsSmfgjCfsfnf3cn4/view?usp=sharing",
    imgurl: "/assets/cb-classroomdark.webp",
  },

  {
    title: "Maste in DSA using C++",
    description: "This comprehensive 6-month offline program, guided by expert mentor Abhishek Srivastava at Coding Blocks, is meticulously designed to build strong foundational and advanced skills in Data Structures and Algorithms (DSA) using C++.",
    demoLink: "",
    certificateLink: "https://drive.google.com/file/d/1yjMLZcNOD0a_gqejsSmfgjCfsfnf3cn4/view?usp=sharing",
    imgurl: "/assets/cb-classroomdark.webp",
  },

  {
    title: "Maste in DSA using C++",
    description: "This comprehensive 6-month offline program, guided by expert mentor Abhishek Srivastava at Coding Blocks, is meticulously designed to build strong foundational and advanced skills in Data Structures and Algorithms (DSA) using C++.",
    demoLink: "",
    certificateLink: "https://drive.google.com/file/d/1yjMLZcNOD0a_gqejsSmfgjCfsfnf3cn4/view?usp=sharing",
    imgurl: "/assets/cb-classroomdark.webp",
  },

  {
    title: "Maste in DSA using C++",
    description: "This comprehensive 6-month offline program, guided by expert mentor Abhishek Srivastava at Coding Blocks, is meticulously designed to build strong foundational and advanced skills in Data Structures and Algorithms (DSA) using C++.",
    demoLink: "",
    certificateLink: "https://drive.google.com/file/d/1yjMLZcNOD0a_gqejsSmfgjCfsfnf3cn4/view?usp=sharing",
    imgurl: "/assets/cb-classroomdark.webp",
  },
 
];

type Project = {
  title: string;
  description: string;
  demoLink: string;
  certificateLink: string;
  imgurl: string;
};

function Projects() {
  return (
    <>
      <p className='pb-1 text-4xl font-bold inline border-b-4 border-white rounded-2xl text-blue-500 text-center'>
        Certification & Courses <FontAwesomeIcon icon={faBriefcase} className='text-4xl inline text-white h-8 ms-3' />
      </p>

      <div className='flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 px-4 mt-8'>
        {Certifications.map((project: Project, index: number) => (
          <div className='w-full md:w-1/2 lg:w-1/3 p-2' key={index}>
            <CertifactionCard
              title={project.title}
              Description={project.description}
              demoLink={project.demoLink}
              certificateLink={project.certificateLink}
              imageUrl={project.imgurl}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
