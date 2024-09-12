"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Opening() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  return (
    <>
      <div
        className={`h-[100vh] w-full overflow-hidden absolute ${!show ? "hidden" : ""}`}
      >
        {" "}
        <motion.div
          className="w-full h-[50vh] absolute bg-gradient-to-b from-red-200 to-white"
          animate={{ y: "-50vh" }}
          transition={{ duration: 3 }}
        ></motion.div>
        <motion.div
          className="w-full h-[50vh] top-[50vh] absolute bg-gradient-to-b from-white to-red-200"
          animate={{ y: "50vh" }}
          transition={{ duration: 3 }}
        ></motion.div>
      </div>
    </>
  );
}
