import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "framer-motion";

const About = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-center mb-2 text-lg font-Roboto_Slab"
      >
        Introductions first
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-center text-5xl font-Roboto"
      >
        About Me
      </motion.h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 ">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <div className="flex-1">
          <motion.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10 max-w-2xl mt-5 font-Roboto_Slab"
          >
            I'm a Computer Science and Economics student at Boston University,
            passionate about creating innovative solutions through technology.
            With experience in both front-end and back-end development, I enjoy
            building responsive web applications and robust APIs. My internships
            at Hebron Holdings and Primeo Bank have given me hands-on experience
            with modern tech stacks and best practices in software development.
            I'm always eager to learn new technologies and take on challenging
            projects that push my boundaries.
          </motion.p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gentleGreen hover:border-myGreen hover:shadow-myGreenS hover:-translate-y-1  duration-500 dark:border-white dark:hover:bg-gentlePink dark:hover:border-myPink dark:hover:shadow-myPinkS dark:hover:-translate-y-1"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 text-gray-900 font-Roboto dark:text-white">
                  {title}
                </h3>
                <p className=" text-gray-800 text-sm font-Roboto_Slab dark:text-white/80 whitespace-pre-line">
                  {description}
                </p>
              </motion.li>
            ))}
          </ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="my-6 text-gray-700 font-Roboto_Slab dark:text-white/80"
          >
            Tools I use
          </motion.h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-myLightGreyS hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-7 sm:w-7" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
