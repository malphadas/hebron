import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Roboto_Slab">
        Introductions first
      </h4>
      <h2 className="text-center text-5xl font-Roboto">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 ">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Roboto_Slab">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Cras parturient
            dignissim egestas nisl sollicitudin sem. Habitant lectus congue;
            magna praesent bibendum viverra pretium. Elit suscipit nisi
            ultricies enim tempus tristique tristique. Nulla rhoncus ex bibendum
            lectus condimentum neque curabitur ante. Integer cursus neque mi
            quam aliquam eu bibendum.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-myGreen hover:border-myGreen hover:-translate-y-1 hover:shadow-myLightGreyS duration-500"
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 text-gray-700 font-Roboto">{title}</h3>
                <p className=" text-gray-600 text-sm font-Roboto_Slab">
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Roboto_Slab">Tools I use</h4>
            <ul className="flex items-center gap-3 sm:gap-5">
              {toolsData.map((tool, index) => (
                <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-myLightGreyS hover:-translate-y-1 duration-500"
                key={index}>
                <Image src={tool} alt='tool' className="w-7 sm:w-7" />
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
