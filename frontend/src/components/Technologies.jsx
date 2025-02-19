import bootstrap from "../Tools/bootsrap.svg";
import javascript from "../Tools/javascript.svg";
import html from "../Tools/html.svg";
import css from "../Tools/css.svg";
import mysql from "../Tools/mysql.svg";
import mongodb from "../Tools/mongodb.svg";
import react from "../Tools/react.svg";
import node from "../Tools/nodejs.svg";
import figma from "../Tools/figma.svg";
import firebase from "../Tools/firsebase.svg";
import tailwind from "../Tools/tailwind.svg";
import github from "../Tools/github-svgrepo-com.svg";
import framer from "../Tools/framer.svg";
import vercel from "../Tools/vecel.svg";
import express from "../Tools/express.svg";
import { motion } from "framer-motion";

const Technologies = () => {
  const technologies = [
    { src: javascript, alt: "JavaScript" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: html, alt: "HTML" },
    { src: css, alt: "CSS" },
    { src: mysql, alt: "MySQL" },
    { src: framer, alt: "Framer" },
    { src: mongodb, alt: "MongoDB" },
    { src: react, alt: "React" },
    { src: node, alt: "Node.js" },
    { src: figma, alt: "Figma" },
    { src: tailwind, alt: "Tailwind" },
    { src: firebase, alt: "Firebase" },
    { src: github, alt: "GitHub" },
    { src: vercel, alt: "Vercel" },
    { src: express, alt: "Express" },
  ];

  return (
    <div className="md:px-40 px-8 lg:mt-9 md:mt-6 mt-4 w-full font-mono">
      <h2 className="text-2xl font-bold dark:text-white">Technologies</h2>
      <div className="min-h-[40vh] rounded-lg flex items-center">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:w-[60vw] ">
          {technologies.map((tech, index) => (
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 1.1, rotate: 360 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              key={index}
              className=" flex items-center justify-center p-2  rounded-xl h-[10vh] w-[10vh]  sm:h-[16vh] sm:w-[16vh] bg-gray-100 dark:bg-[#282120]"
            >
              <img src={tech.src} alt={tech.alt} className="" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
