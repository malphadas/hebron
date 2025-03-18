import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <>
      <div
        id="home"
        className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
      >
        <motion.h3
          initial={{ y:-20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Roboto_Slab"
        >
          Hi! My name is Matheus
          <Image src={assets.hand_icon} alt="profile image" className="w-6" />
        </motion.h3>

        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-3xl leading-16 sm:text-6xl lg:text-[66px] font-Roboto"
        >
          Software Developer based in Boston
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-lg md:text-xl font-Roboto_Slab"
        >
          I am a software developer based in Boston, MA. I have a passion for
          coding and love to create new things. I am always looking for new
          opportunities to learn and grow as a developer. I am currently seeking
          a full-time position as a software developer.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
          <motion.a
            href="#contact"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-gentleGreen hover:border-myGreen hover:-translate-y-0.5 duration-500 dark:bg-transparent dark:hover:border-myPink dark:hover:bg-gentlePink dark:border-white/50"
          >
            Contact Me
            <Image
              src={assets.right_arrow_white}
              alt="right arrow white"
              className="w-4"
            />
          </motion.a>

          <motion.a
            href="/sample-resume.pdf"
            download
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gentleGreen hover:border-myGreen hover:-translate-y-0.5 duration-500 bg-white dark:text-black dark:hover:border-myPink dark:hover:bg-gentlePink dark:border-white/50"
          >
            My Resume
            <Image
              src={assets.download_icon}
              alt="download icon"
              className="w-4"
            />
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Header;
