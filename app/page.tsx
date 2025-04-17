import Image from "next/image";
import SidebarContact from "./sidebarcontact";
import Card from "@/app/Skills/Card";
import Skillsshow from "./Skills/Skillsshow";
import Hero from "@/app/Hero/Hero";
import Projects from "./Projects/Projects";
import Stats from "./Stats/Stats";
import Footer from "@/Components/Footer";
import { Overview } from "@/Components/overview";
import { Certifications } from "@/Components/Certifications";
import { Contact } from "@/Components/contact";

export default function Home() {
  return (
    <div>
      
      <div className="relative bg-slate-900 min-h-screen min-w-full py-7">
        <SidebarContact />
        <div className="w-11/12  ms-auto">
          <Hero />
          <Overview />

          <div id="skills-section">
            <Skillsshow />
          </div>

          <div id="project-section">
          <Projects />
          </div>
          <Certifications />
          <Stats />
          <Contact /> 
          <Footer />
        </div>
      </div>
    </div>
  );
}
