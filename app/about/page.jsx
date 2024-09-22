"use client";

import Image from "next/image";
import { motion, spring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import JumpScreen from "@/components/JumpScreen";
import { AnimatePresence } from "framer-motion";
import IntroCard from "@/app/about/IntroCard";

export const Card = {
  UNDERGRADUATE: "Undergraduate",
  POSTGRADUATE: "Postgraduate",
  INTERNSHIP_1: "Internship1",
  INTERNSHIP_2: "Internship2",
  PROJECT: "Project",
  EXTRACURRICULAR: "Extracurricular",
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const [cardType, setCardType] = useState(null);

  const handleClick = (event, cardType) => {
    setShowCard(true);
    setCardType(cardType);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the children animations
        duration: 1, // Set duration for the container
        delay: 1, // Add a 1 second delay before the animation starts
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden and slightly below
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1,
        // Add breathing animation
        scale: {
          repeat: Infinity,
          // repeatType: "reverse",
          // from: 1,
          // to: 1.05,
          // duration: 2,
          ease: "easeInOut"
        }
      }
    },
  };

  useEffect(() => {
    if (showCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCard]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowCard(false);
    }
  };

  return (
    <>
      <JumpScreen isVisible={showSplash} />
      <motion.div
        className={`flex flex-col items-center justify-start md:grid md:grid-cols-12 md:grid-rows-12 min-h-[100vh] w-full mb-20 ${showCard ? "blur-sm" : ""} z-10`}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="col-start-6 col-end-8 row-start-5 row-end-8 items-center justify-center hidden lg:flex"
          variants={childVariants} // Apply child variants
          // animate={{scale: [1,1.1,1]}}
          // transition={{repeat: Infinity, duration: 2}}
        >
          <Image
            src="/manga-head.jpg"
            alt=""
            width={192}
            height={192}
            className="rounded-full bg-white"
          />
        </motion.div>
        <motion.div
          className="col-start-8 col-end-12 row-start-2 row-end-5 bg-black p-5 text-white font-bold w-full md:max-w-[300px] text-3xl xl:text-4xl hover:!scale-105 cursor-pointer" // Responsive text size and hover effect
          variants={childVariants} // Apply child variants
          animate={{scale: [1,1.05,1]}}
          transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}
          onClick={(e) => handleClick(e, Card.UNDERGRADUATE)} // Click handler
        >
          North China Electricity Power University
        </motion.div>
        <motion.div
          className="col-start-9 col-end-12 row-start-6 row-end-12 bg-black px-5 py-10 text-white font-bold w-full md:max-w-[300px] max-h-[360px] text-3xl xl:text-4xl hover:!scale-105 cursor-pointer" // Responsive text size and hover effect
          variants={childVariants} // Apply child variants
          animate={{scale: [1,1.05,1]}}
          transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}
          onClick={(e) => handleClick(e, Card.INTERNSHIP_1)} // Click handler
        >
          <p>Megvii Technology, Beijing</p>
          <br />
          <p>Backend Developer Intern</p>
        </motion.div>
        <motion.div
          className="col-start-6 col-end-9 row-start-8 row-end-13 bg-black p-5 text-white font-bold w-full md:max-w-[300px] max-h-[340px] my-4 text-3xl xl:text-4xl hover:!scale-105 cursor-pointer" // Responsive text size and hover effect
          variants={childVariants} // Apply child variants
          animate={{scale: [1,1.05,1]}}
          transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}
          onClick={(e) => handleClick(e, Card.PROJECT)} // Click handler
        >
          Solar Power Generation Prediction and Anomaly Detection Using Deep
          Learning
        </motion.div>
        <motion.div
          className="col-start-2 col-end-6 row-start-9 row-end-13 bg-black p-5 text-white font-bold flex flex-col w-full md:max-w-[300px] max-h-[270px] mr-4 text-3xl xl:text-4xl hover:!scale-105 cursor-pointer" // Responsive text size and hover effect
          variants={childVariants} // Apply child variants
          animate={{scale: [1,1.05,1]}}
          transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}
          onClick={(e) => handleClick(e, Card.INTERNSHIP_2)} // Click handler
        >
          <p>Full-Stack Developer Intern</p>
          <p className="mt-auto text-right">HeartByte AI Technology</p>
        </motion.div>
        <motion.div
          className="col-start-2 col-end-6 row-start-5 row-end-8 bg-black p-5 text-white font-bold w-full md:max-w-[300px] max-h-[225px] text-3xl xl:text-4xl hover:!scale-105 cursor-pointer" // Responsive text size and hover effect
          variants={childVariants} // Apply child variants
          animate={{scale: [1,1.05,1]}}
          transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}
          onClick={(e) => handleClick(e, Card.EXTRACURRICULAR)} // Click handler
        >
          School Broadcast Station
        </motion.div>
        <motion.div
          className="col-start-4 col-end-7 row-start-2 row-end-6 bg-black p-5 text-white font-bold w-full md:max-w-[300px] max-h-[180px] text-3xl xl:text-4xl hover:!scale-105 cursor-pointer" // Responsive text size and hover effect
          variants={childVariants} // Apply child variants
          animate={{scale: [1,1.05,1]}}
          transition={{repeat: Infinity, duration: 2, ease: "easeInOut"}}
          onClick={(e) => handleClick(e, Card.POSTGRADUATE)} // Click handler
        >
          Chinese University of Hong Kong
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {showCard && (
          <div 
            onClick={handleBackdropClick} 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 overflow-y-auto"
          >
            <IntroCard cardType={cardType} setShowCard={setShowCard} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
