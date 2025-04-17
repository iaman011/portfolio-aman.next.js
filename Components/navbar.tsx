"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);   //for hamburger option while using it in mobile 
  

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
    <nav className="sticky top-0 z-50 bg-neutral-500 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-neutral-900 font-bold text-2xl">
          iaman011
        </Link>
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/Skillsshow" className="hover:text-blue-600 text-white">
            Skills
          </Link>
          <Link href="/checkout" className="hover:text-blue-600 text-white">
            Experience
          </Link>
          <Link href="/Projects" className="hover:text-blue-600 text-white">
            Projects
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* <Link href="/checkout" className="relative"> */}
            {/* <ShoppingCartIcon className="h-6 w-6 text-white hover:text-blue-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" />
            )}
          </Button> */}
        </div>
      </div>
      {mobileOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="block hover:text-blue-600">
                Checkout
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};