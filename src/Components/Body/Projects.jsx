import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import BlogProject from "../../assets/blogProject.png"
import EleProject from "../../assets/Eletronic.png"
import Xeroxshop from "../../assets/xeroxshop2.png"
import Fishsholas from "../../assets/Fishsholas.png"
import LorrySales from "../../assets/LorrySales.png"

const projects = [
    {
        title: "Fish Shoal Detection System",
        description:
            "An AI-powered system for detecting fish shoals using sonar and underwater imagery. Built with machine learning models (XGBoost, Random Forest), the platform provides real-time analysis, location tracking, and visualization through a web-based interface.",
        stack: ["React", "FastAPI", "XGBoost", "Random Forest", "Tailwind", "Appwrite"],
        github: "https://github.com/Harirajhari/Fish-Shoal-Detection", // Replace with actual repo link
        demo: "", // Add live link here if available
        image: Fishsholas, // Replace with your image path
    },
    {
        title: "Lorry Sales App",
        description: "A custom-built MERN stack application designed for my father to list lorry details online. Interested buyers can browse the listings, view images, and directly contact my father if they're interested. The app helps attract potential clients and simplifies the sales process.",
        stack: ["React", "Node.js", "Appwrite"],
        github: "https://github.com/Harirajhari/Kamaraj-LorrySales",
        demo: "",
        image: LorrySales,
    },
    {
        title: "Blog Platform",
        description: "It offers easy content management, real-time interactions, and a responsive design for a smooth experience. Our platform ensures data security and encourages community engagement with interactive features.",
        stack: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/Harirajhari/Blog_Application",
        demo: "",
        image: BlogProject,
    },
    {
        title: "Xerox Shop Management",
        description: "I have developed an online book and material ordering website for my college xerox shop. Students can order books or materials through their phones.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
        github: "https://github.com/Harirajhari/Xerox_shop_application",
        demo: "",
        image: Xeroxshop,
    },
    {
        title: "EletroFixNics",
        description: "Connects users with experts to get advice on fixing home electronic gadgets. Using the Gemini for suddent Help. The website ensures a seamless and intuitive experience for users seeking help with their electronics.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Gemini API"],
        github: "https://github.com/Harirajhari/Electrofix",
        demo: "",
        image: EleProject,
    },

    // Add more projects here...
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen bg-black text-white px-6 py-20">
            <motion.h2
                className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={fadeUp}
                custom={0}
            >
                My Projects
            </motion.h2>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-[#1f1f1f] rounded-2xl p-5 shadow-lg border border-gray-700 hover:shadow-purple-500/30 transition-all duration-300 flex flex-col"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ amount: 0.3 }}
                        variants={fadeUp}
                        custom={index + 1}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-400 text-sm flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.stack.map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-purple-800 text-white px-2 py-1 rounded-full text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-4">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaGithub size={20} />
                            </a>

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white"
                                >
                                    <FaExternalLinkAlt size={20} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
