import React, { useState } from "react";
import userData from "@constants/data";

export default function Hero() {

  return (
    <div className="justify-center flex flex-col md:flex-row my-1 md:my-0 text-center"
    >
      <div className="mx-auto text-center md:text-center px-4 lg:p-0">
        <h1 className="text-3xl md:text-4xl font-600 text-black dark:text-white my-1">
          Services We Provide
        </h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 p-10 md:py-20 ">
          {userData?.services?.map((proj, idx) => {
            return (
              <ProjectCard
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                number={`${idx + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className=" w-full md:w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-55 md:h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};