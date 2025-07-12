import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import myimages from './myimages.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: 40, transition: { duration: 0.5 } },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white px-2 sm:px-4 py-20 flex items-center justify-center"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full opacity-30 blur-3xl z-0"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-3xl z-0 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Main Content with AnimatePresence */}
      <AnimatePresence>
        <motion.div
          className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={fadeInUp}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Profile Image */}
          <div className="w-full md:w-[45%] flex justify-center order-2 md:order-1">
            <div className="p-[4px] rounded-2xl mt-12 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 shadow-lg">
              <img
                src={myimages}
                alt="Hariraj"
                className="rounded-2xl w-80 h-96 object-cover bg-white dark:bg-gray-900"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-[55%] text-center md:text-left mt-10 order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-lg leading-relaxed">
              Hey! I’m <span className="font-semibold text-violet-500">Hariraj</span> — a passionate full stack developer who enjoys building sleek, powerful web applications. From responsive frontend UIs to solid backend logic, I bring ideas to life through clean and efficient code.
              <br /><br />
              I also work with clients as a <span className="font-semibold text-violet-500">freelancer</span>, helping them launch real products that blend great design with solid functionality. I love collaborating on ideas and turning them into user-focused, real-world solutions.
              <br /><br />
              On the operations side, I’m experienced with tools and practices that ensure smooth deployment, automation, and scalability — making sure what we build not only works, but lasts.
              <br /><br />
              Always curious, always coding — I’m here to build, grow, and create tech that makes an impact.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
