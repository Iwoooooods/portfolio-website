import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const popupVariants = {
    animate: {
      opacity: [0, 1, 1],
      scale: [0, 1.1, 1],
    },
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.66, 0.1],
    },
  };

  const introVariants = {
    hidden: {
      opacity: 0,
      // y: 100,
    },
    visible: {
      opacity: 1,
      // y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const textVaraints = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div className="h-[calc(100vh-192px)] flex flex-col items-center gap-12 pt-12">
      <motion.div
        variants={popupVariants}
        animate="animate"
        className="w-[192px] h-[192px]"
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
        variants={introVariants}
        initial="hidden"
        animate="visible"
        className="text-center text-xl p-2.5 flex flex-col items-center gap-1 h-full"
      >
        <motion.p variants={textVaraints}>
          Hello, My name is{" "}
          <span className="font-bold text-xl">Huaisen He</span>.
        </motion.p>
        <motion.p variants={textVaraints}>
          I am a postgraduate student in{" "}
          <span className="font-bold text-xl">
            Chinese University of Hong Kong.
          </span>
        </motion.p>
        <motion.p variants={textVaraints}>
          Welcome to my portolio website,{" "}
        </motion.p>
        <motion.p variants={textVaraints}>
          I will tell you more about myself!
        </motion.p>
        <motion.img
          src="/down-arrow.png"
          alt=""
          width={24}
          height={24}
          variants={textVaraints}
          className="animate-bounce rounded-full mt-auto"
        ></motion.img>
      </motion.div>
    </motion.div>
  );
}
