import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const experiences = [
  {
    icon: <Briefcase size={20} className="text-white" />,
    title: "Full Stack Developer Intern – Infoziant IT Solutions",
    desc: "Redesigned company website, worked with React & Tailwind, integrated APIs, and created smooth animations.",
  },
  {
    icon: <GraduationCap size={20} className="text-white" />,
    title: "Undergraduate – Karpagam Institute of Technology (2021 - 2025)",
    desc: "Pursuing B.Tech in Information Technology. Built real-world projects including a Lorry Sales App and AI-based fish detection system.",
  },
  {
    icon: <GraduationCap size={20} className="text-white" />,
    title: "Schooling – Bhagavan Higher Secondary School (2019 - 2021)",
    desc: "Completed higher secondary education with a strong foundation in Mathematics and Computer Science.",
  },
];

const Experience = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-violet-100 py-20 px-4">
      {/* Decorative Gradient Blobs */}
      {/* Top Left Blob */}
<div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-fuchsia-500 via-rose-400 to-amber-300 rounded-full opacity-40 blur-3xl z-0 pointer-events-none hidden sm:block" />

{/* Bottom Right Blob */}
<div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-cyan-400 via-sky-500 to-lime-300 rounded-full opacity-40 blur-3xl z-0 pointer-events-none hidden sm:block" />

{/* Top Right Blob */}
<div className="absolute top-10 right-10 w-60 h-60 bg-gradient-to-bl from-pink-500 via-purple-500 to-indigo-400 rounded-full opacity-40 blur-3xl z-0 pointer-events-none hidden sm:block" />

{/* Bottom Left Blob */}
<div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-tl from-yellow-300 via-orange-400 to-red-400 rounded-full opacity-40 blur-3xl z-0 pointer-events-none hidden sm:block" />

      {/* Section Heading */}
      <h3 className="text-4xl font-extrabold text-center mb-16 text-violet-700 tracking-tight relative z-10">
        My Experience Timeline
      </h3>

      <div className="relative w-full max-w-6xl mx-auto z-10">
        {/* Vertical Timeline Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400 to-purple-600 rounded-full origin-top"
        />

        {/* Timeline Cards */}
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`relative mb-14 md:mb-10 flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
          >
            {/* Connector Dot */}
            <div className="w-5 h-5 bg-violet-500 border-4 border-white rounded-full z-20 absolute left-1/2 transform -translate-x-1/2 shadow-md" />

            {/* Experience Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className={`w-full md:w-[47%] p-6 rounded-2xl backdrop-blur-lg bg-white border border-gray-200 shadow-lg transition-all duration-300 ${
                i % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="bg-gradient-to-br from-violet-500 to-purple-600 p-3 rounded-full shadow-lg"
                >
                  {exp.icon}
                </motion.div>
                <h4 className="text-xl font-semibold text-violet-800">{exp.title}</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
