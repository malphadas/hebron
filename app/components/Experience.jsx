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

import { serviceData, toolsData, assets } from "@/assets/assets";


const Experience = () => {
  return (
    <div id="experience" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Roboto_Slab">
        Where I've been
      </h4>
      <h2 className="text-center text-5xl font-Roboto">Experience</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Roboto_Slab">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Cras parturient
        dignissim egestas nisl sollicitudin sem. Habitant lectus congue.
      </p>

      <div className="flex flex-col gap-10">
        {serviceData.map(({ company,time, title, description }, index) => (
          <Card key={index} className="shadow-md hover:border-myGreen hover:shadow-myGreenS hover:-translate-y-1  duration-500  dark:bg-darkHover/10 dark:shadow dark:border-white dark:shadow-white dark:hover:bg-darkHover/50">
            <CardHeader className="flex flex-row justify-between text-center gap-3">
            <div className="flex flex-col my-4 text-left text-gray-700 font-Roboto dark:text-white">
              <CardTitle className="mb-2 ">{company}</CardTitle>
              <CardTitle>{title}</CardTitle>
            </div>
              <p className="pt-4 text-gray-600 dark:text-gray-400 text-sm font-Roboto_Slab">{time}</p>
            </CardHeader>
            <CardContent> 
              <CardDescription className='dark:text-white/80'>{description}</CardDescription>
            </CardContent>
            <CardFooter>
              <ul className="flex items-center gap-3 sm:gap-5">
                            {toolsData.map((tool, index) => (
                              <li className="flex items-center justify-center w-12 sm:w-10 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-myLightGreyS hover:-translate-y-1 duration-500"
                              key={index}>
                              <Image src={tool} alt='tool' className="w-7 sm:w-6" />
                              </li>
                            ))}
                          </ul>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Experience;
