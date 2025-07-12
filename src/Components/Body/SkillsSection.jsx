import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaPython, FaAws, FaDocker, FaJava
} from 'react-icons/fa';
import { DiJenkins } from 'react-icons/di'; // ✅ Correct source
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import { FaGithub, FaLink, FaStackOverflow  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


const icons = [
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  SiExpress, SiMongodb, SiTailwindcss, FaGitAlt, FaPython,
  FaJava, FaAws, FaDocker, DiJenkins
  
];

const names = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js',
  'Express', 'MongoDB', 'Tailwind CSS', 'Git', 'Python',
  'Java', 'AWS', 'Docker', "Jenkins"
];

const colors = [
  'text-orange-500', 'text-blue-500', 'text-yellow-400', 'text-cyan-400', 'text-green-600',
  'text-gray-300', 'text-green-500', 'text-sky-400', 'text-red-500', 'text-yellow-500',
  'text-red-600', 'text-orange-400', 'text-blue-400','text-white-600'
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const SkillsCircle = () => {
  const iconCount = icons.length;

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-16 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-24">
      
      {/* Text Section */}
      <motion.div
        className="max-w-xl text-center lg:text-left space-y-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={fadeInUp}
        custom={0.2}
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Explore My Skills
        </h2>
        <p className="text-gray-300 text-lg">
          I have experience with both frontend and backend technologies, including React, Node.js, MongoDB, and Python.
        </p>
        <p className="text-gray-400 text-md">
          Check out the visual orbit on the right showcasing my top skills!
        </p>

        <div className="flex justify-center lg:justify-start gap-6 pt-4">
  <div className="relative group">
    <a
      href="https://github.com/Harirajhari/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-white text-3xl transition duration-300"
      title="GitHub"
    >
      <FaGithub />
    </a>
    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
      GitHub
    </span>
  </div>

  <div className="relative group">
    <a
      href="https://leetcode.com/u/21ita16/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-orange-400 text-3xl transition duration-300"
      title="LeetCode"
    >
      <SiLeetcode />
    </a>
    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-white bg-gray-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
      LeetCode
    </span>
  </div>

  <div className="relative group">
    <a
      href="https://stackoverflow.com/users/24775302/hariraj-k"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-yellow-400 text-3xl transition duration-300"
      title="Stack Overflow"
    >
      <FaStackOverflow />
    </a>
    <span className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm text-white bg-gray-800 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
  Stack Overflow
</span>
  </div>
</div>


      </motion.div>

      {/* Orbit Circle */}
      <motion.div
        className="relative w-[clamp(300px,70vw,600px)] h-[clamp(300px,70vw,600px)]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}      >
        {/* Pulsing Ring */}
        <div className="absolute w-full h-full rounded-full border border-purple-500/20 animate-pulse blur-sm" />

        {/* Center Label */}
        <div className="absolute top-1/2 left-1/2 w-[clamp(80px,15vw,190px)] h-[clamp(80px,15vw,190px)] transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-900 flex items-center justify-center text-center shadow-lg border-4 border-purple-500/50 hover:shadow-purple-700/60 transition-all duration-500">
          <h2 className="text-sm sm:text-md md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            Technologies
          </h2>
        </div>

        <motion.div
  className="absolute w-full h-full top-0 left-0"
  animate={{ rotate: 360 }}
  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
>
  {icons.map((Icon, index) => {
    const angle = (360 / iconCount) * index;
    const angleRad = (angle * Math.PI) / 180;
    const radius = 35;
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);

    return (
      <motion.div
        key={index}
        className="group absolute w-[clamp(40px,6vw,80px)] h-[clamp(40px,6vw,80px)] rounded-full bg-[#111827] flex items-center justify-center shadow-xl hover:scale-125 transition-transform duration-300 hover:shadow-[0_0_20px] hover:shadow-purple-500"
        style={{
          top: `calc(50% + ${y}% - clamp(20px, 3vw, 40px))`,
          left: `calc(50% + ${x}% - clamp(20px, 3vw, 40px))`,
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        viewport={{ amount: 0.3 }}
      >
        <Icon className={`${colors[index]} text-[clamp(1.5rem,2.5vw,2.5rem)]`} />
        <div className="absolute top-full mt-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-max px-2 bg-gray-800 rounded">
          {names[index]}
        </div>
      </motion.div>
    );
  })}
</motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsCircle;
