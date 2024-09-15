"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.footer
      className="bg-black text-white py-8 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Huaisen He</h3>
            <p>Full Stack Developer</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Iwoooooods/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/huaisen-he-690921328/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                LinkedIn
              </a>
            </div>
            <div href="" className="hover:text-gray-300">
              Email:  hhs849924587@gmail.com
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {currentYear} Huaisen He. All rights reserved.</p>
        </div>
      </div>
      {isVisible && (
        <motion.button
          className="fixed bottom-8 right-8 bg-white text-black p-3 rounded-full shadow-lg"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image src="/up-arrow.png" alt="" width={24} height={24}></Image>
        </motion.button>
      )}
    </motion.footer>
  );
}
