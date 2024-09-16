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
    <div className="min-h-[100vh] bg-gray-100">
      <JumpScreen isVisible={showSplash} />
      <div className="flex flex-col px-16 py-8 gap-8">
        <AnimatedSection className="flex gap-4 items-center">
          <img
            src="/intro.jpg"
            alt=""
            className="hidden lg:block rounded-lg ml-16 lg:h-[450px] xl:h-[500px]"
          />
          <div className="text-xl font-bold flex flex-col justify-center p-12">
            Hi! I&apos;m Huaisen. I&apos;m currently a postgraduate student at the Chinese
            University of Hong Kong. I was born in Changshag, the capital of
            Hunan Province, China. I finished my high school in Changsha, and
            went to North China Electric Power University for my undergraduate
            study, learning information system and information management.
            <br />
            <br />
            I&apos;m a tech enthusiast and a full stack developer. I&apos;m interested in
            web development. I started my programming journey in the second year
            of my undergraduate study, learning backend development knowledge
            like database and Java. And I had my fist internship as a backend
            developer in Beijing Megvii Technology, Which is quite a big company
            and I learnt a lot of things from there like general workflow with
            git, basic knowledge of CI/CD platform, and how to deploy a web app.
            <br />
            <br />
            After that, I tried to learn something about frontend development,
            and I found that I really enjoy the progress of building things in
            my mind with code. I&apos;m comfortable with both front-end and back-end
            development. I think I will keep learning and put my enthusiasm in
            this field.
          </div>
        </AnimatedSection>
        <div className="flex flex-col justify-start gap-4">
          <AnimatedSection id="undergraduate">
            <div className="text-2xl font-bold px-4 flex">
              <span>North China Electricity Power University</span>
              <span className="text-xl ml-auto">2020.09 - 2024.07</span>
            </div>
            <ul className="px-8 py-4 border-4 bg-black text-white text-lg rounded-xl">
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
            <div className="px-8 py-4 border-4 bg-black text-white text-lg rounded-xl">
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
            <div className="px-8 py-4 border-4 bg-black text-white text-lg rounded-xl">
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
            <div className="px-8 py-4 border-4 bg-black text-white text-lg rounded-xl">
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
            <div className="px-8 py-4 border-4 font-bold text-xl text-center bg-black text-white rounded-xl">
              Brand new chapter in my life. I will keep moving on!
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
