"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const JumpScreen = ({ isVisible }) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 w-full h-full bg-black z-50"
        />
      )}
    </AnimatePresence>
  );
};

export default JumpScreen;