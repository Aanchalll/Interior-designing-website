import React from "react";
import userData from "@constants/data";

export default function Designs() {

  // className="bg-[#d4a59a] dark:bg-gray-800"
  return (
    <section >
      <div className="max-w-6xl mx-auto h-16 md:h-48  dark:bg-gray-800">
        <h1 className="text-5xl md:text-7xl font-bold py-2 md:py-20 text-center md:text-left">
          Technologies
        </h1>
      </div>
      {/* Grid starts here */}
      <div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10 md:py-20 pb-40 content-center">
        {userData?.services?.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className=" w-[80%] md:w-full block shadow-2xl">
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
