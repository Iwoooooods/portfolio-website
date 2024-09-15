import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const techItems = (items) => (
    <motion.div className="flex flex-row flex-wrap justify-start items-center gap-4 ml-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="text-xl bg-black text-white rounded-lg p-2 hover:scale-110 transition-transform"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="min-h-[100vh] flex flex-col justify-start items-start gap-6 py-12"
    >
      <motion.div variants={itemVariants} className="text-4xl font-bold self-start ml-10">
        My Tech Stack
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col justify-start items-start ml-12">
        <div className="text-2xl font-bold mb-2">Frontend</div>
        {techItems(["HTML", "CSS", "React", "Next.js", "JavaScript", "TypeScript", "Framer Motion"])}
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col justify-start items-start ml-12">
        <div className="text-2xl font-bold mb-2">Backend</div>
        {techItems(["Node.js", "Golang", "MongoDB", "PostgreSQL", "Python"])}
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col justify-start items-start ml-12">
        <div className="text-2xl font-bold mb-2">Tools</div>
        {techItems(["Git", "GitHub", "Docker", "CI/CD"])}
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col justify-start items-start ml-12">
        <div className="text-2xl font-bold mb-2">Design</div>
        {techItems(["Photoshop", "Figma"])}
      </motion.div>
    </motion.div>
  );
}
