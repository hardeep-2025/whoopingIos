"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu, X, ChevronDown, ChevronRight } from "lucide-react";


const Header = () => {

  
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const servicesActive = pathname.startsWith("/services");

console.log(pathname);

  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [digitalOpen, setDigitalOpen] = useState(false);
const closeMenu = () => {
  setMenuOpen(false);
  setServiceOpen(false);
  setDigitalOpen(false);
};
  return (
    <header className="sticky top-0 z-[1000] w-full bg-[#26417D] h-[76px]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
       <Image
  src="/whoppingreact/logo_new.png"
  alt="WhoppingSEO"
  width={190}
  height={42}
    className="object-contain "
/>


        </Link>

        {/* ================= Desktop Menu ================= */}
       {/* ================= Desktop Menu ================= */}
<nav className="hidden items-center gap-8 text-sm font-medium text-white md:flex">

  {/* Home */}
  <Link
    href="/"
    className={`!no-underline ${
      isActive("/")
        ? "font-bold text-[15px] text-white"
        : "text-white hover:!text-[#1A98FF]"
    }`}
  >
    Home
  </Link>

  {/* About */}
  <Link
    href="/about-us"
    className={`!no-underline ${
      isActive("/about-us")
        ? "font-bold text-[15px] text-white"
        : "text-white hover:!text-[#1A98FF]"
    }`}
  >
    About
  </Link>

  {/* ================= Services ================= */}
  <div className="group relative">

    {/* Services Main Link */}
    <Link
      href="/services"
      className={`flex items-center !no-underline ${
        servicesActive
          ? "font-bold text-[15px] text-white"
          : "text-white hover:!text-[#1A98FF]"
      }`}
    >
      Services
    <ChevronDown
  size={16}
  className="ml-2"
/>
    </Link>

    {/* Services Dropdown */}
    <div className="absolute left-0 top-full hidden min-w-[260px] rounded-lg bg-[#111827] py-3 shadow-xl group-hover:block">

      {/* Digital Marketing */}
      <Link
        href="/services/digital-marketing-services"
        className={`block px-4 py-2 !no-underline ${
          isActive("/services/digital-marketing-services")
            ? "font-bold text-white"
            : "text-white hover:!text-[#1A98FF]"
        }`}
      >
        Digital Marketing Service
      </Link>

      {/* SEO */}
      <Link
        href="/services/seo-services"
        className={`block px-4 py-2 !no-underline ${
          isActive("/services/seo-services")
            ? "font-bold text-white"
            : "text-white hover:!text-[#1A98FF]"
        }`}
      >
        SEO Service
      </Link>

      {/* Local SEO */}
      <Link
        href="/services/local-seo-services"
        className={`block px-4 py-2 !no-underline ${
          isActive("/services/local-seo-services")
            ? "font-bold text-white"
            : "text-white hover:!text-[#1A98FF]"
        }`}
      >
        Local SEO Service
      </Link>

      {/* PPC */}
      <Link
        href="/services/ppc-services"
        className={`block px-4 py-2 !no-underline ${
          isActive("/services/ppc-services")
            ? "font-bold text-white"
            : "text-white hover:!text-[#1A98FF]"
        }`}
      >
        PPC Service
      </Link>

      {/* Social Media Marketing */}
      <Link
        href="/services/social-media-marketing-services"
        className={`block px-4 py-2 !no-underline ${
          isActive("/services/social-media-marketing-services")
            ? "font-bold text-white"
            : "text-white hover:!text-[#1A98FF]"
        }`}
      >
        SMM Service
      </Link>

    </div>
  </div>

  {/* Blog */}
  <Link
    href="/blog"
    className={`!no-underline ${
      isActive("/blog")
        ? "font-bold text-[15px] text-white"
        : "text-white hover:!text-[#1A98FF]"
    }`}
  >
    Blog
  </Link>

  {/* Contact Us */}
  <Link
    href="/contact"
    className={`!no-underline ${
      isActive("/contact")
        ? "font-bold text-[15px] text-white"
        : "text-white hover:!text-[#1A98FF]"
    }`}
  >
    Contact Us
  </Link>

</nav>
         
        <div className="hidden!">
        <button className="p-3 border rounded-[8px]! py-2 text-[14px]! font-bold bg-[linear-gradient(90deg,_#1B51CC_0%,_#2B0E66_100%)] border-[#0B1220]!">
         <Link
            href="/contact"
            className="text-white no-underline! hover:text-[#0B1220]"
          >
            Contact Us
          </Link>
        </button>
        </div>

        {/* ================= Mobile Icons ================= */}
        <div className="flex items-center gap-4 md:hidden">
          {/* <button className="text-white">
            <Search size={20} />
          </button> */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      {menuOpen && (
        <div className="border-t border-gray-700 bg-[#0B1220] md:hidden">
          <nav className="flex flex-col px-6 py-4 text-white">

            <Link
              href="/"
              className="py-3 text-white no-underline!"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="py-3 text-white no-underline!"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>

            {/* Services */}
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex items-center justify-between py-3 text-left"
            >
              <span>Services</span>

              <ChevronDown
                size={18}
                className={`transition-transform ${
                  serviceOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {serviceOpen && (
              <div className="ml-4 border-l border-gray-700 pl-4">

                {/* Digital Marketing */}
                
                <Link
                  href="/services/digital-marketing-services/"
                  className="block py-2 text-white no-underline!"
onClick={closeMenu}                >
                  Digital Marketing Service
                </Link>
             

                <Link
                  href="/services/seo-services"
                  className="block py-2 text-white no-underline!"
onClick={closeMenu}                >
                  SEO Service
                </Link>

                <Link
                  href="/services/local-seo-services"
                  className="block py-2 text-white no-underline!"
onClick={closeMenu}                >
                  Local SEO Service
                </Link>

                <Link
                  href="/services/ppc-services"
                  className="block py-2 text-white no-underline!"
onClick={closeMenu}                >
                  PPC Service
                </Link>

                <Link
                  href="/services/social-media-marketing-services"
                  className="block py-2 text-white no-underline!"
onClick={closeMenu}                >
                  SMM Service
                </Link>
              </div>
            )}

            <Link
              href="/blog"
              className="py-3 text-white no-underline!"
onClick={closeMenu}            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="py-3 text-white no-underline!"
onClick={closeMenu}            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;