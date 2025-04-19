import Image from "next/image";
import SidebarContact from "./sidebarcontact";
import Hero from "@/app/Hero/Hero";
import Projects from "./Projects/Projects";
import Stats from "./Stats/Stats";
import Footer from "@/Components/Footer";
import { Overview } from "@/Components/overview";
import { Contact } from "@/Components/contact";
import SkillsSection from "@/Components/Skills";
import { Experience } from "@/Components/Experience";
import Certifications from "@/Components/certification/cert";

export default function Home() {
  return (
    <div>
      <div className="relative bg-teal-950 min-h-screen min-w-full py-7">
        <SidebarContact />
        <div className="w-11/12  ms-auto">
          
          <div id="Home-section">
          <Hero />
          
          </div>
          <Overview />

          <div id="skills-section">
            <SkillsSection />
          </div>

          <div id="Experience-section">
          <Experience />
          </div>
          

          <div id="project-section">
            <Projects />
          </div>

          <Certifications />
          <Stats />
          {/* <Contact />  */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
