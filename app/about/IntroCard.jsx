import { Card } from "./page";
import { useState } from "react";
import Image from 'next/image';

export default function IntroCard({ cardType }) {
  const [blur, setBlur] = useState(true);

  const handleBlur = () => {
    setBlur((prev) => !prev);
  };

  if (cardType === Card.UNDERGRADUATE) {
    return (
      <div className="flex flex-col items-center justify-start h-full w-full gap-8 text-black bg-white font-bold top-10 relative">
        <div className="text-center text-4xl">
          North China Electricity Power University
        </div>
        <div className="flex items-start justify-center w-full gap-8 px-24">
          <img src="/me.jpg" alt="me" className="w-[280px]" />
          <div className="flex flex-col items-start justify-start gap-4 h-full">
            <div className="text-3xl">
              Bachelor of Enginner,
              <br />
              <br />
              Information System and Information Management
            </div>
            <div className="text-xl">
              Sep 2019 - Jul 2023
              <br />
              <br />
              GPA: 86.3/100
              <br />
              <br />
              Prize:
              <ul className="list-disc list-inside">
                <li>
                  Excellent Scholarship for Technological Innovation (2021-2022)
                </li>
                <li>
                  Scholarship for Outstanding Academic Achievement (2022-2023)
                </li>
                <li>
                  Provincial Second Prize in National College Students’
                  Mathematical Modeling Contest (2022)
                </li>
              </ul>
              <br />
              Core Courses:
              <ul className="list-disc list-inside">
                <li>Large Database Applications</li>
                <li>Web Development Technologies</li>
                <li>Big Data Processing and Applications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (cardType === Card.INTERNSHIP_1) {
    return (
      <div className="flex flex-col items-start justify-start h-full w-full gap-4 text-black bg-white font-bold top-10 relative px-16">
        <div className="text-4xl max-w-[700px]">
          Beijing Megvii Technology Co., Ltd. Megvii Intelligence
        </div>
        <div className="text-3xl max-w-[800px] flex">
          <div className="max-w-[540px]">
            Backend Developer Intern, Automatic Driving Department
          </div>
          <span className="text-xl mt-auto ml-auto">
            {" "}
            April 2024 - July 2024
          </span>
        </div>
        <div className="flex items-start justify-start w-full gap-12">
          <img src="/maichi.jpg" alt="me" className="max-w-[540px]" />
          <div className="flex flex-col items-start justify-start gap-4 h-full text-xl">
            <ul className="list-disc list-inside">
              <li>
                Developed and optimized backend solutions for a data management
                platform using FastAPI + mysql + postgressql + mongoDB
              </li>
              <li>
                Implemented APIs and statistical charts, enhancing interface
                performance using Redis, and maintained system through CI/CD
                integrations.
              </li>
              <li>
                Assisted in the development and operational maintenance of a
                data labeling platform using SpringBoot, including requirement
                iterations.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (cardType === Card.PROJECT) {
    return (
      <div className="flex flex-col items-start justify-start h-full w-full gap-4 text-black bg-white font-bold p-16">
        <h2 className="text-4xl max-w-[700px] mb-4">
          Solar Power Generation Prediction and Anomaly Detection Using Deep Learning
        </h2>
        <div className="flex flex-wrap items-start gap-8">
          <Image
            src="/thesis.png"
            alt="Thesis project visualization"
            width={600}
            height={300}
            className="float-left mr-8 mb-4"
          />
          <p className="flex-1 max-w-[300px] text-xl">
            Conducted data cleaning and preliminary EDA to explore inter-feature
            relationships within photovoltaic power generation data, used LOF
            for anomaly detection and labeling, and employed PCA for
            dimensionality reduction and Random Forest for classification,
            followed by LSTM for predicting future power generation.
          </p>
        </div>
      </div>
    );
  } else if (cardType === Card.INTERNSHIP_2) {
    return (
      <div
        onClick={handleBlur}
        className="flex flex-col items-start justify-start h-full w-full gap-4 text-black bg-white font-bold"
      >
        <img
          src="/heartbyte.jpg"
          alt="me"
          className={`w-full ${blur ? "blur-md" : ""}`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full py-16 px-24 flex items-center justify-center gap-4 ${blur ? "" : "hidden"}`}
        >
          <div className="flex flex-col items-start justify-start gap-16 max-w-[320px]">
            <div className="text-4xl">HeartByte AI Technology</div>
            <div className="text-3xl">
              Full Stack Developer Intern
              <br /> <span className="text-xl">July 2024 - Sept 2024</span>
            </div>
          </div>
          <ul className="list-disc list-inside text-2xl max-w-[540px]">
            <li>
              Developed an AI article creation tool using React + TailwindCSS +
              Framer Motion + Next.js + Firebase
            </li>
            <li>
              Collaborated with UI designers to design and implement
              well-structured, maintainable, and responsive code.
            </li>
            <li>
              Led the design and development of the article editing module,
              including the web interface for creating new articles and the
              corresponding data structure and storage solutions.
            </li>
          </ul>
        </div>
        <div className="text-xl text-center absolute bottom-0 left-0 w-full pb-4 opacity-50">
          click to see how it looks like
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1>Card</h1>
    </div>
  );
}
