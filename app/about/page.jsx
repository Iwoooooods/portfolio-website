"use client";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import JumpScreen from "@/components/JumpScreen";
import Image from "next/image";

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

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[100vh]">
      <JumpScreen isVisible={showSplash} />
      <div className="flex flex-col px-16 py-8 gap-4">
        <AnimatedSection className="flex gap-4 items-center">
          <img
            src="/intro.jpg"
            alt=""
            className="hidden lg:block rounded-lg ml-8 lg:h-[560px] xl:h-[640px]"
          />
          <div className="text-xl font-bold flex flex-col justify-center p-12 ml-auto max-w-[640px]">
            Hi! I&apos;m Huaisen, a postgraduate student at the Chinese University of Hong Kong. 
            Originally from Changsha, China, I completed my undergraduate studies at North China 
            Electric Power University in Information Systems and Management.
            <br />
            <br />
            As a tech enthusiast and full stack developer, I&apos;m passionate about web development. 
            My journey began with backend development, leading to an internship at Beijing Megvii 
            Technology where I gained valuable experience in git workflows, CI/CD, and web app deployment.
            <br />
            <br />
            Expanding into frontend development, I discovered my love for bringing ideas to life 
            through code. Comfortable with both front-end and back-end technologies, I&apos;m committed 
            to continuous learning and growth in this exciting field.
          </div>
        </AnimatedSection>
        <div className="flex flex-col justify-start gap-4">
          <AnimatedSection id="undergraduate">
            <div className="text-2xl font-bold px-4 flex">
              <span>North China Electricity Power University</span>
              <span className="text-xl ml-auto">2020.09 - 2024.07</span>
            </div>
            <ul className="px-8 py-4 bg-black text-white text-lg rounded-xl">
              <li>
                Learnt courses including: economics, operation management, data
                structure, mechine learning, etc. In my undergraduate study, I
                gained a very comprehensive understanding of knowledge across
                different fields, which always gives me special insights on how
                different functions work in a system.
              </li>
              <li>GPA: 86.3/100</li>
              <li>
                <span className="font-bold">extracurricular activities</span>:
                member of the school broadcast staion: Created Posters and
                Promotional Videos Using Editing Software Like Photoshop (PS),
                and Filmed Promotional Videos for Various Campus Competitions.
                Managed the daily operations of the campus radio station’s
                WeChat public account and Weibo, as well as the production of a
                campus blog, accumulating over 9,000 followers.
              </li>
              <li>
                <span className="font-bold">Honors and Awards</span>:
                <ul>
                  <li>
                    Excellent Scholarship for Technological Innovation
                    (2021-2022)
                  </li>
                  <li>
                    Scholarship for Outstanding Academic Achievement (2022-2023)
                  </li>
                  <li>
                    Provincial Second Prize in National College Students’
                    Mathematical Modeling Contest (2022)
                  </li>
                </ul>
              </li>
            </ul>
          </AnimatedSection>
          <AnimatedSection id="internship1">
            <div className="text-2xl font-bold px-4 flex">
              <span>Backend Developer Internship</span>
              <span className="text-xl ml-auto">2024.04 - 2024.07</span>
            </div>
            <div className="text-xl px-6">
              Megvii Technology, Automatic Driving Department
            </div>
            <div className="px-8 py-4 bg-black text-white text-lg rounded-xl">
              Developed and optimized backend solutions for a data management
              platform using FastAPI (Python), focusing on storage solutions and
              architectural design. <br />• Implemented APIs and statistical
              charts, enhancing interface performance using Redis, and
              maintained system through CI/CD integrations. <br />• Assisted in
              the development and operational maintenance of a data labeling
              platform using SpringBoot, including requirement iterations.{" "}
              <br />• Collaborated on the design and development of
              synchronization scripts for MongoDB and PostgreSQL, addressing
              vehicle and labeling needs through scheduled statistics and data
              validation scripts.
            </div>
          </AnimatedSection>
          <AnimatedSection id="dissertation">
            <div className="text-2xl font-bold px-4 flex">
              <span>
                Solar Power Generation Prediction and <br />Anomaly Detection Using
                Deep Learning
              </span>
              <span className="text-xl ml-auto">2024.04 - 2024.06</span>
            </div>
            <div className="text-xl px-6">Graduation Project</div>
            <div className="px-8 py-4 bg-black text-white text-lg rounded-xl">
              Conducted data cleaning and preliminary EDA to explore
              inter-feature relationships within photovoltaic power generation
              data, used LOF for anomaly detection and labeling, and employed
              PCA for dimensionality reduction and Random Forest for
              classification, followed by LSTM for predicting future power
              generation.
            </div>
          </AnimatedSection>
          <AnimatedSection id="internship2">
            <div className="text-2xl font-bold px-4 flex">
              <span>Software Developer Internship</span>
              <span className="text-xl ml-auto">2024.07 - 2024.09</span>
            </div>
            <div className="text-xl px-6">Heartbyte AI Technology</div>
            <div className="px-8 py-4 bg-black text-white text-lg rounded-xl">
              Software Engineer Intern Developed an AI article creation tool
              using Next.js (React) integrated with NextUI components,
              TailwindCSS and Firebase for data storage. <br />• Collaborated
              with UI designers to design and implement well-structured,
              maintainable, and responsive code. <br />• Led the design and
              development of the article editing module, including the web
              interface for creating new articles and the corresponding data
              structure and storage solutions. <br />• Implemented monthly
              leaderboard using firebase cloud function as an automated script,
              calculating the top 30 creators and daily update.
            </div>
          </AnimatedSection>
          <AnimatedSection id="postgraduate">
            <div className="text-2xl font-bold px-4 flex">
              <span>Chinese University of Hong Kong</span>
              <span className="text-xl ml-auto">2024.09 - now</span>
            </div>
            <div className="px-8 py-4 font-bold text-xl text-center bg-black text-white rounded-xl">
              Brand new chapter in my life. I will keep moving on!
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
