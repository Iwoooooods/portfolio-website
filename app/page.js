"use client";
import { motion } from "framer-motion";
import ScrollBar from "@/components/ScrollBar";
import Hero from "@/components/Hero";
import Parallax from "@/components/Parallax";
import TechStack from "@/components/TechStack";

export default function Home() {
  return <motion.div initial={{opacity:0}} animate={{opacity:1}} className="w-full" style={{minHeight:"calc(100vh - 96px)"}}>
    <ScrollBar />
    <Hero />
    <Parallax />
    <TechStack />
  </motion.div>;
}
