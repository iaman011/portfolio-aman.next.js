"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { HiOutlineCode } from "react-icons/hi"; 

gsap.registerPlugin(ScrollToPlugin);

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToHome = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#Home-section", offsetY: 80 },
      ease: "power2.inOut",
    });
  };

  const scrollToSkills = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#skills-section", offsetY: 80 },
      ease: "power2.inOut",
    });
  };

  const scrollToExperience = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#Experience-section", offsetY: 80 },
      ease: "power2.inOut",
    });
  };

  const scrollToProjects = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#project-section", offsetY: 80 },
      ease: "power2.inOut",
    });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-blue-500 shadow">
      <div className="container mx-auto flex items-center justify-between px-2 py-2">
      <Link href="/" className="flex items-center space-x-2 text-black font-semibold text-xl">
      <HiOutlineCode size={25} className="text-white" />
  <p className="text-black">Aman Portfolio</p>
  
</Link>

        <div className="hidden md:flex space-x-6 text-white">
        <button onClick={scrollToHome} className="hover:text-black text-white">
            Home
          </button>
          <button onClick={scrollToSkills} className="hover:text-black text-white">
            Skills
          </button>
          <button onClick={scrollToExperience} className="hover:text-black text-white">
            Experience
          </button>
          <button onClick={scrollToProjects} className="hover:text-black text-white">
            Projects
          </button>
          <button className="hover:text-black text-white">
            Contact
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li><Link href="/" className="block hover:text-blue-600">Home</Link></li>
            <li><Link href="/products" className="block hover:text-blue-600">Products</Link></li>
            <li><Link href="/checkout" className="block hover:text-blue-600">Checkout</Link></li>
          </ul>
        </nav>
      )}
    </nav>
  );
};
