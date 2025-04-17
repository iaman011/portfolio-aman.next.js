'use client';
import React from 'react';
import { SocialIcon } from 'react-social-icons/component';
import { useState } from 'react';

import 'react-social-icons/twitter';
import 'react-social-icons/instagram';
import 'react-social-icons/linkedin';
import 'react-social-icons/github';
import 'react-social-icons/leetcode';
import 'react-social-icons/google';
import 'react-social-icons/mailto';

const socialMediaLinks = [
  { url: 'https://twitter.com/cryptic_fiazuh', bgColor: '#F5F8FA', fgColor: '#1DA1F2', label: 'Twitter', c: 'text-white' },
  { url: 'mailto:huzaif.demha@gmail.com', bgColor: '#D44638', fgColor: '#ffffff', label: 'Email', c: 'text-orange-500' }, // Corrected label and bgColor
  { url: 'https://www.linkedin.com/in/mohammed-huzaif-ahmed-71048a255/', bgColor: '#0077b5', fgColor: '#ffffff', label: 'Linkedin', c: 'text-blue-500' },
  { url: 'https://github.com/Huzaif-Ahmed', bgColor: '#000000', fgColor: '#ffffff', label: 'Github', c: 'text-slate-300' },
  { url: 'https://leetcode.com/rexhuzaifahmed/', bgColor: '#F5F8FA', fgColor: '#FF5733', label: 'Leetcode', c: 'text-yellow-500' },
];

const resumeLink = [
  { url: 'https://drive.google.com/file/d/11w74W0090CQ9Cofdn_WAkCBGuOnhyPQZ/view?usp=sharing', bgColor: '#F5F8FA', fgColor: '#FF5733', label: 'Resume', c: 'text-yellow-500' },
];

const SidebarContact = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className='text-lg text-blue-500 w-24 font-semibold px-4 py-2 rounded-lg top-52 sticky z-10 float-start'>
      {resumeLink.map((link, index) => (
        <div
          key={index}
          className={`flex p-2 bg-blue-800 group  rounded-t-lg`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div style={{
              transition: 'transform 0.3s ease-in-out',
              transform: `scale(${hoveredIndex === index ? '1.2' : '1'})`,
            }}>
            <SocialIcon url={link.url} bgColor={link.bgColor} fgColor={link.fgColor} className='h-5' />
          </div>
          <div
            style={{
              transition: 'transform 0.3s ease-in-out',
              transform: `translateX(${hoveredIndex === index ? '15%' : '-10%'})`,
            }}
            className={`text-2xl pt-2 ms-2 hidden group-hover:inline bg-blue-900 px-3 py-2 rounded-lg ${link.c}`}
          >
            {link.label}
          </div>
        </div>
      ))}
      {socialMediaLinks.map((link, index) => (
        <div
          key={index}
          className={`flex p-2 bg-blue-800 group  ${index === socialMediaLinks.length - 1 ? 'rounded-b-lg' : ''}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            style={{
              transition: 'transform 0.3s ease-in-out',
              transform: `scale(${hoveredIndex === index ? '1.2' : '1'})`,
            }}
          >
            <SocialIcon url={link.url} bgColor={link.bgColor} fgColor={link.fgColor} className='h-5' />
          </div>
          <div
            style={{
              transition: 'transform 0.3s ease-in-out',
              transform: `translateX(${hoveredIndex === index ? '15%' : '-10%'})`,
            }}
            className={`text-2xl pt-2 ms-2 hidden group-hover:inline bg-blue-900 px-3 py-2 rounded-lg ${link.c}`}
          >
            {link.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarContact;
