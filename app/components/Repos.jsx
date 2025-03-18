import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

const username = "malphadas";
const maxPages = 3;
const hideForks = true;

const Repos = ({isDarkMode, setIsDarkMode}) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    getProfile();
    getRepos();
  }, []);

  const getProfile = async () => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setProfile(data);
  };

  const getRepos = async () => {
    let repos = [];
    for (let i = 1; i <= maxPages; i++) {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?&sort=pushed&per_page=100&page=${i}`
      );
      const data = await res.json();
      repos = repos.concat(data);
    }
    repos.sort((a, b) => b.forks_count - a.forks_count);
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    setRepos(repos);
  };

  const filteredRepos = repos.filter((repo) => {
    const matchesName = repo.name.toLowerCase().includes(filter.toLowerCase());
    const matchesTopic = repo.topics.some((topic) =>
      topic.toLowerCase().includes(filter.toLowerCase())
    );
    return (matchesName || matchesTopic) && !(repo.fork && hideForks);
  });

  
  return (
    <div className="flex flex-col items-center gap-4 ">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      {profile && (
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-row max-w-lg gap-4 elevation-4 shadow-lg items-center mt-4 rounded-full border-gray-500 border-2 p-4 hover:bg-gentleGreen hover:border-myGreen dark:border-white dark:bg-darkHover/50 hover:shadow-md hover:-translate-y-0.5 duration-500 dark:hover:bg-gentlePink dark:hover:border-myPink dark:border-white/50">
          <a
            href="https://github.com/malphadas"
            target="_blank"
            className="px-4 sm:px-10 py-3 rounded-full flex items-center text-xl font-bold gap-5 "
          >
            <Image src={isDarkMode ? assets.github_icon_dark : assets.github_icon} alt="githubicon" className="w-10" />
            /
            {profile.login}
          </a>
        </motion.div>
      )}
    <motion.input
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        type="text"
        className="rounded-full border-lightGrey border-2 p-2 w-80 dark:border-gray-400 bg-gray-100 dark:text-black"
        placeholder="Filter repositories by name or topic..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {filteredRepos.map(
            (repo, index) =>
              !(repo.fork && hideForks) && (
                <CarouselItem
                  key={repo.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-1">
                    <Card className=' dark:bg-darkHover/50 dark:border-white'>
                      <CardContent className="flex flex-col w-full text-center items-center justify-center  p-6">
                        <h4 className="text-3xl font-semibold align-center text-Roboto">
                          {repo.name}
                        </h4>
                        <h5 className="text-Roboto_Slab text-gray-700 dark:text-gray-400">
                          {repo.description}
                        </h5>

                        <div className="w-full items-center">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            className="text-myGreen dark:text-myPink flex items-center justify-center gap-3"
                          >
                            <Image
                              src={isDarkMode ? assets.github_icon_dark : assets.github_icon}
                              alt="githubicon"
                              className="w-6 aspect-square bg-grey-700 "
                            />
                            {repo.full_name}
                          </a>
                        </div>

                        <CardFooter className="w-full flex flex-wrap justify-center py-2 gap-2">
                          {repo.topics.map((topic, topicIndex) => (
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 0.3, delay: topicIndex * 0.1 }}
                              key={topic}
                            >
                              <Badge
                                className=" bg-myGreen hover:bg-gentleGreen dark:bg-myPink dark:hover:bg-gentlePink"
                              >
                                {topic}
                              </Badge>
                            </motion.div>
                          ))}
                        </CardFooter>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Repos;
