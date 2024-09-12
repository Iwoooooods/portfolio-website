"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "white",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "white",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const links = [
    { href: "/", title: "Home" },
    { href: "/about", title: "AboutMe" },
    { href: "/contact", title: "Contact" },
  ];

  const pathname = usePathname();
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex items-center h-24 gap-2.5 px-2.5 sm:px-5 lg:px-10">
      <div className="flex items-center gap-2.5">
        <Image src="/peanut.png" alt="" width={48} height={48} />
        <span className="font-serif italic text-xl hidden sm:inline">
          Huaisen
        </span>
      </div>
      <div className="flex items-center gap-2.5 ml-auto">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={`${pathname === link.href ? "bg-black text-white" : ""} rounded-xl p-2 font-bold hidden sm:inline`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="items-center hidden sm:flex">
        <Link href="">
          <Image src="/github.png" alt="social" width={24} height={24} />
        </Link>
      </div>

      <div className="sm:hidden z-30">
        <button
          className="w-10 h-8 flex flex-col justify-between relative"
          onClick={() => setOpened((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={opened ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={opened ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={opened ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
      </div>
      {opened && (
        <motion.div
          variants={listVariants}
          initial="closed"
          animate="opened"
          className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col
                     items-center justify-center gap-8 text-4xl z-20 sm:hidden"
        >
          {links.map((link) => (
            <motion.div key={link.title} variants={listItemVariants}>
              <Link href={link.href}>{link.title}</Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
