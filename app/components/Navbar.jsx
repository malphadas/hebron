import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 r-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="bg" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white shadow-sm bg-opacity-50 backdrop-blur-lg" : ""
        }`}
      >
        <a href="#home">
          <Image
            src={assets.logo}
            alt="logo"
            className="w-38 cursor-pointer mr-14"
          />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
          <li>
            <a className="font-Roboto_Slab" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="font-Roboto_Slab" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="font-Roboto_Slab" href="#experience">
              Experience
            </a>
          </li>
          <li>
            <a className="font-Roboto_Slab" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="font-Roboto_Slab" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt="moon icon"
              className="w-6 cursor-pointer"
            />
          </button>

          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:border-myGreen hover:bg-myGreen hover:-translate-y-0.5 duration-500"
            href="#contact"
          >
            {" "}
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              alt="arrow icon"
              className="w-3"
            />{" "}
          </a>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu black" className="w-6" />
          </button>
        </div>

        {/*---------- Mobile Menu ----------*/}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 bg-rose-50 transition duration-300 ease-in-out"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt="close black"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a onClick={closeMenu} className="font-Roboto_Slab" href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-Roboto_Slab" href="#about">
              About
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="font-Roboto_Slab"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="font-Roboto_Slab"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-Roboto_Slab" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
