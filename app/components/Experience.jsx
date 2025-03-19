import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { serviceData, toolsData, assets } from "@/assets/assets";

const Experience = () => {
  return (
    <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-center mb-2 text-lg font-Roboto_Slab"
      >
        Where I've been
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-center text-5xl font-Roboto"
      >
        Experience
      </motion.h2>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Roboto_Slab"
      >
        Here's a glimpse of my professional experience, the technologies I've worked with, and the projects I've contributed to.
      </motion.p>

      <div className="flex flex-col gap-10">
        {serviceData.map(({ company, time, title, description, tech }, index) => (
          <motion.div
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            key={index}
          >
            <Card className="shadow-md border-gray-500 hover:bg-gray-100 hover:border-myGreen hover:shadow-myGreenS hover:-translate-y-1  duration-500  dark:bg-darkHover/10 dark:shadow dark:hover:shadow-myPinkS dark:border-white dark:hover:border-gentlePink dark:shadow-white dark:hover:bg-darkHover/50">
              <CardHeader className="flex flex-row justify-between text-center gap-3">
                <div className="flex flex-col my-4 text-left text-gray-700 font-Roboto dark:text-white">
                  <CardTitle className="mb-2 ">{company}</CardTitle>
                  <CardTitle>{title}</CardTitle>
                </div>
                <p className="pt-4 text-gray-600 dark:text-gray-400 text-sm font-Roboto_Slab">
                  {time}
                </p>
              </CardHeader>
              <CardContent>
                <CardDescription className="dark:text-white/80">
                  {description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <ul className="flex items-center gap-3 sm:gap-5">
                  {tech.map((tool, index) => (
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="flex items-center justify-center w-12 sm:w-10 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-myLightGreyS hover:-translate-y-1 duration-500"
                      key={index}
                    >
                      <Image src={tool} alt="tool" className="w-7 sm:w-6" />
                    </motion.li>
                  ))}
                </ul>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
