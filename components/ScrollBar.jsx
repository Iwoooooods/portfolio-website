import { motion, useSpring, useScroll } from "framer-motion";

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="top-0 left-0 right-0 origin-left w-full bg-black h-3 fixed"
      style={{ scaleX }}
    ></motion.div>
  );
}
