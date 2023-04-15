import React, { useCallback, useEffect, useRef, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import ReactCanvasConfetti from "react-canvas-confetti";

export default function Hero() {
  // const colors_hey = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  const colors_hey = ["rgb(117 191 255 / 50%)", "rgb(238 252 72 / 61%)", "#ff77b6b0", "#3B82F6"];
  const [fire, setFire] = useState(false);
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const myTimeout = setTimeout(myGreeting, 3000);

  function myGreeting() {
    setFire(false)
    stopAnimation()
  }

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
  }, [intervalId, nextTickAnimation]);

  // const pauseAnimation = useCallback(() => {
  //   clearInterval(intervalId);
  //   setIntervalId(null);
  // }, [intervalId]);

  const stopAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    refAnimationInstance.current && refAnimationInstance.current.reset();
  }, [intervalId]);

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    setFire(true)
    startAnimation()
  }, []);

  return (
    <div className="justify-center flex flex-col md:flex-row my-1 md:my-0 text-center" onClick={() => { setFire(!fire) }}>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} colors={['#A020F0']} />

      {/* Text container*/}
      <div className="mx-auto text-center md:text-center px-4 lg:p-0">
        <h1 className="text-3xl md:text-4xl font-600 text-black dark:text-white my-1">
          Services We Provide
        </h1>
        {/* <h1 className="text-md md:text-xl font-400 text-black dark:text-white my-1"> */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 p-10 md:py-20 ">

{userData?.services?.map(
  (proj,idx)=>{
    return(
      <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
    )
  }
)}
     </div>    
      </div>
    </div>
  );
}

//INFO: following functions are for the confetti

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0
};

function getAnimationSettings(originXA, originXB) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2
    }
  };
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