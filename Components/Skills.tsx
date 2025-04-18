import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
  SiGreensock,
  SiGit,
  SiFigma,
  SiPostman,
  SiAmazonaws,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";

const skills = [
  { icon: <SiNextdotjs size={48} />, name: "NextJs" },
  { icon: <SiReact size={48} />, name: "ReactJs" },
  { icon: <SiTypescript size={48} />, name: "TypeScript" },
  { icon: <SiNodedotjs size={48} />, name: "NodeJs" },
  { icon: <SiExpress size={48} />, name: "ExpressJs" },
  { icon: <SiMongodb size={48} />, name: "MongoDB" },
  { icon: <SiPostgresql size={48} />, name: "PostgreSQL" },
  { icon: <SiPrisma size={48} />, name: "Prisma" },
  { icon: <SiCplusplus size={48} />, name: "C++" },
  { icon: <SiJavascript size={48} />, name: "Javascript" },
  { icon: <SiTailwindcss size={48} />, name: "Tailwind" },
  { icon: <SiGreensock size={48} />, name: "GSAP" },
  { icon: <SiGit size={48} />, name: "Git" },
  { icon: <SiFigma size={48} />, name: "Figma" },
  { icon: <SiPostman size={48} />, name: "Postman" },
  { icon: <SiAmazonaws size={48} />, name: "AWS" },
];

const SkillsSection = () => {
  return (
    <section className="py-6 bg-slate-900 text-white text-center">
    

<div className="mb-8 flex items-center gap-3">
  <h2 className="border-b-4 border-white rounded-2xl text-4xl font-bold text-blue-500 inline-block p-1">
    Skills
  </h2>
  <HiOutlineCode size={40} className="text-white" />
</div>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center px-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            {skill.icon}
            <p className="text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
