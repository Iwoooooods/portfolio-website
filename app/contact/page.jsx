"use client";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SplashScreen from "@/app/components/SplashScreen";

const AnimatedSection = ({ children, className }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Contact() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-[calc(100vh-192px)] bg-gray-100 flex flex-col justify-center items-center">
      <SplashScreen isVisible={showSplash} />
      <div className="container mx-auto px-4 py-8">
        <AnimatedSection>
          <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        </AnimatedSection>

        <AnimatedSection className="mb-8">
          <p className="text-lg">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </AnimatedSection>

        <AnimatedSection className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <ul className="space-y-2">
              <li>
                <strong>Email:</strong> hhs849924587@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +852 59563754 / +86 15388014287
              </li>
              <li>
                <strong>Location:</strong> Hong Kong
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/Iwoooooods/" className="text-blue-600 hover:underline">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/huaisen-he-690921328/" className="text-blue-600 hover:underline">GitHub</a>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}