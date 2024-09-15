"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen({ children }) {
  const fadingTime = 500;
  const entryTime = 1000;

  const splashVariants = {
    entry: {
      y: -100,
      opacity: 0,
      transition: {
        duration: entryTime / 1000,
      },
    },
    splash: {
      y: 0,
      opacity: 1,
      // transition: {
      //   duration: 0.5,
      // },
    },
    fadeAway: {
      opacity: 0,
      transition: {
        duration: fadingTime / 1000,
      },
    },
  };

  const showTime = 2000; // each line shows up for 2 seconds
  const [show, setShow] = useState(false);
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const handleClick = () => {
    setShowButton(false);
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    setTimeout(()=>{
      setShow(false);
    }, 5000);
  };

  useEffect(() => {
    setShow(true);
    setShowLine1(true);
    setTimeout(() => {
      setShowLine1(false);
    }, showTime);
    setTimeout(() => {
      setShowLine2(true);
    }, showTime + fadingTime);
    setTimeout(
      () => {
        setShowLine2(false);
      },
      showTime * 2 + fadingTime
    );
    setTimeout(
      () => {
        setShowButton(true);
      },
      showTime * 2 + fadingTime * 2
    );
  }, []);

  return (
    <>
      {show&&window.innerWidth>=640 ? (
        <div
          className={`h-[100vh] w-full overflow-hidden absolute flex flex-col 
                  justify-center items-center z-40`}
        >
          <AnimatePresence>
            {showLine1 && (
              <motion.div
                id="1"
                variants={splashVariants}
                initial="entry"
                animate="splash"
                exit="fadeAway"
              >
                Hi! This is Huaisen!!
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showLine2 && (
              <motion.div
                id="2"
                variants={splashVariants}
                initial="entry"
                animate="splash"
                exit="fadeAway"
                className="text-center"
              >
                Welcome to my website! <br />
                Here is everything about me!!
              </motion.div>
            )}
          </AnimatePresence>
          {showButton && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-full border-4 border-black bg-white size-14 active:scale-90"
              onClick={handleClick}
            >
              Click
            </motion.button>
          )}
          <AnimatePresence>
            {showSplash && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 2 }}
                transition={{duration:3}}
                className="rounded-full border-4 size-[50vh] bg-white border-black"
              ></motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}
