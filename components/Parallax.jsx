import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import ExperienceCard from "./ExperienceCard";

export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [hookedYPostion, setHookedYPostion] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPostion(latest);
  });

  const curveHeight = 192;
  
  // Separate progress for top and bottom curves
  const topCurveProgress = useTransform(scrollYProgress, [0, 0.3], [0, curveHeight]);
  const bottomCurveProgress = useTransform(scrollYProgress, [0.7, 1], [0, curveHeight]);

  const topCurveVariants = {
    initial: `M0 ${curveHeight} Q${window.innerWidth / 2} ${curveHeight} ${window.innerWidth} ${curveHeight}`,
    animate: useTransform(topCurveProgress, (progress) => 
      `M0 ${curveHeight} Q${window.innerWidth / 2} ${curveHeight - progress} ${window.innerWidth} ${curveHeight}`
    ),
  };

  const bottomCurveVariants = {
    initial: `M0 0 Q${window.innerWidth / 2} 0 ${window.innerWidth} 0`,
    animate: useTransform(bottomCurveProgress, (progress) => 
      `M0 0 Q${window.innerWidth / 2} ${progress} ${window.innerWidth} 0`
    ),
  };

  const educationData = [
    {
      type: 'education',
      data: {
        imageSrc: "/school_banner1.png",
        university: "North China Electricity Power University, Beijing",
        degree: "Bachelor of Engineering, Information System and Information Management",
        duration: "2020.9 - 2024.7",
        marginRight: "500px",
        link: "/about#undergraduate"
      }
    },
    {
      type: 'education',
      data: {
        imageSrc: "/school_banner2.png",
        university: "Chinese University of Hong Kong, Hong Kong",
        degree: "Master of Engineering, System Engineering and Engineering Management",
        duration: "2024.9 - 2025.7",
        marginRight: "500px",
        link: "/about#postgraduate"
      }
    }
  ];

  const workData = [
    {
      type: 'work',
      data: {
        title: "School Broadcast Station",
        company: "Promotion Department",
        duration: "2020.9 - 2021.0",
        link: "/about#undergraduate",
        marginLeft: "500px"
      }
    },
    {
      type: 'work',
      data: {
        title: "Backend Developer Intern",
        company: "Beijing Megvii Technology Co., Ltd",
        department: "Automatic Driving Department",
        duration: "2024.4 - 2024.7",
        link: "/about#internship1",
        marginLeft: "500px"
      }
    },
    {
      type: 'work',
      data: {
        title: "Degree Dissertation",
        company: "Solar Power Generation Prediction and Anomaly Detection Using Deep Learning",
        duration: "2024.5 - 2024.7",
        link: "/about#dissertation",
        marginLeft: "500px",
        maxWidth: "400px"
      }
    },
    {
      type: 'work',
      data: {
        title: "Fullstack Developer Intern",
        company: "HeartByte AI Technology",
        duration: "2024.7 - 2024.9",
        link: "/about#internship2",
        marginLeft: "500px"
      }
    }
  ];

  return (
    <div
      ref={ref}
      className={`bg-black text-white flex flex-col justify-start items-center relative`}
      style={{ minHeight: `calc(150vh + ${2 * curveHeight}px)` }}
    >
      <motion.div
        style={{ scaleY }}
        className={`w-4 h-full top-0 absolute bg-white origin-top rounded-b-lg`}
      ></motion.div>
      
      <svg className={`top-0 w-full h-[${curveHeight}px] bg-white`}>
        <motion.path
          d={topCurveVariants.animate}
          initial={topCurveVariants.initial}
          fill="black"
        />
      </svg>

      <motion.div className="flex flex-col justify-start items-center h-full w-full p-12 gap-12">
        <p className="text-center rounded-lg text-2xl font-bold self-start ml-[100px]">
          Experience
        </p>
        <div className="flex flex-col w-full h-auto gap-8 items-center">
          {educationData.map((item, index) => (
            <ExperienceCard key={`edu-${index}`} {...item} />
          ))}
          {workData.map((item, index) => (
            <ExperienceCard key={`work-${index}`} {...item} />
          ))}
        </div>
      </motion.div>

      <svg className={`bottom-0 w-full h-[${curveHeight}px] bg-white mt-auto`}>
        <motion.path
          d={bottomCurveVariants.animate}
          initial={bottomCurveVariants.initial}
          fill="black"
        />
      </svg>
    </div>
  );
}
