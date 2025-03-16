import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

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

import { Badge } from "@/components/ui/badge"


const username = "malphadas";
const maxPages = 3;
const hideForks = true;

const Repos = () => {
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

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center gap-4 ">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />

      {profile && (
        <div className="flex flex-row max-w-lg gap-4 elevation-4 shadow-lg items-center mt-4 rounded-full border-myGreen border-2 p-4">
          <img
            src={profile.avatar_url}
            alt="profile image"
            className="w-12 lg:w-20 rounded-full"
          />
          <a
            href="https://github.com/malphadas" target="_blank"
            className="px-4 sm:px-10 py-3 rounded-full flex items-center text-lg font-bold gap-5 hover:bg-myGreen hover:border-myGreen hover:-translate-y-0.5 duration-500"
          >
            <Image src={assets.github_icon} alt="githubicon" className="w-6" />
            /{profile.login}
          </a>
        </div>
      )}
      <input
        type="text"
        className="rounded-full border-lightGrey border-2 p-2 w-80"
        placeholder="Filter repositories..."
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
            (repo) =>
              !(repo.fork && hideForks) && (
                <CarouselItem key={repo.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col w-full text-center items-center justify-center  p-6">
                        <h4 className="text-3xl font-semibold align-center text-Roboto">
                          {repo.name}
                        </h4>
                        <h5 className="text-Roboto_Slab text-gray-700">
                          {repo.description}
                        </h5>

                        <div className="w-full items-center">
                          
                          <a
                            href={repo.html_url}
                            target="_blank"
                            className="text-myGreen hover:text-myGreen flex items-center justify-center gap-2"
                          >
                            <Image src={assets.github_icon} alt="githubicon" className="w-6 aspect-square bg-grey-700 " />
                            {repo.full_name}
                          </a>
                          </div>
                        
                        <CardFooter className="w-full flex flex-wrap justify-center py-2 gap-2">
                        {repo.topics.map((topic) => (
                          <Badge className="hover:bg-gray-400 bg-green-400">{topic}</Badge>
                        ))}
                        </CardFooter>
                        
                      </CardContent>
                    </Card>
                  </div>
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