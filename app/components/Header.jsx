import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <>
      <div
        id="home"
        className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
      >
        {/* <div>
          <Image
            src={assets.profile_img}
            alt="profile image"
            className="rounded-full w-32"
          />
        </div> */}
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Roboto_Slab">
          Hi! My name is Matheus
          <Image src={assets.hand_icon} alt="profile image" className="w-6" />
        </h3>
        <h1 className="text-3xl leading-16 sm:text-6xl lg:text-[66px] font-Roboto">
          Software Developer based in Boston
        </h1>
        <p>
          I am a software developer based in Boston, MA. I have a passion for
          coding and love to create new things. I am always looking for new
          opportunities to learn and grow as a developer. I am currently seeking
          a full-time position as a software developer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <a
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-myGreen hover:border-myGreen hover:-translate-y-0.5 duration-500"
          >
            Contact Me
            <Image
              src={assets.right_arrow_white}
              alt="right arrow white"
              className="w-4"
            />
          </a>

          <a
            href="/sample-resume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-myGreen hover:border-myGreen hover:-translate-y-0.5 duration-500"
          >
            My Resume
            <Image
              src={assets.download_icon}
              alt="download icon"
              className="w-4"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
