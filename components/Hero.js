import React, { useCallback, useEffect, useRef, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import ReactCanvasConfetti from "react-canvas-confetti";

export default function Hero() {
  // const colors_hey = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  const colors_hey = ["rgb(224 255 33 / 91%)", "#FF9800", "#ff77b6b0", "#3B82F6"];
  const [fire, setFire] = useState(false);
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);




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

  const pauseAnimation = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

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

  return (
    <div className="justify-center flex my-10 " onClick={() => { setFire(!fire) }}>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} colors={['#A020F0']} />

      {/* Text container*/}
      <div className="mx-auto text-center md:text-center lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors_hey[1]}>
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 my-2">
              <button
              //  onClick={pauseAnimation}
              >breathe in...breathe out....</button>
            </h1>
          </RainbowHighlight>
          {!fire ?
            <RainbowHighlight color={colors_hey[0]}>
              <h3 className="text-4xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 my-2 px-5 ">
                <button onClick={startAnimation}>Now, wanna see something fun? Click me!</button>
              </h3>
            </RainbowHighlight>
            :

            <RainbowHighlight color={colors_hey[2]}>
              <h1 className="text-4xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 my-2">
                <button onClick={stopAnimation}>Click to Stop, Thanks!</button>
              </h1>
            </RainbowHighlight>}
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      {/* <div className="hidden lg:block relative lg:w-1/2 md:w-1/2 -mr-40  ">

        <div className="w-3/4  border-spacing-7 border-l-pink-700 ">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow rounded-full  border-t-8 border-b-8 border-t-pink-700 border-b-red-500" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</p>
            </div>
          </div>
        </div>
      </div> */}

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
