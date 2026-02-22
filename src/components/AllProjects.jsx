import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const AllProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-neutral-950 pt-24 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link to="/" className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-4">
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            Back to Portfolio
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                            All <span className="text-purple-500">Masterpieces</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-500 max-w-md"
                    >
                        A comprehensive gallery of my professional work, experimental labs, and full-stack architecture projects.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => openModal(project)}
                            className="group relative bg-neutral-900/40 rounded-3xl border border-neutral-800 overflow-hidden hover:border-purple-500/50 transition-all flex flex-col h-full cursor-pointer"
                        >
                            <div className="relative aspect-video overflow-hidden border-b border-neutral-800">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="px-6 py-2 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Details
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.slice(0, 3).map((tech, techIdx) => (
                                            <span key={techIdx} className="px-2 py-1 bg-neutral-800 text-purple-300 text-[10px] rounded-md border border-neutral-700 uppercase font-bold tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-[10px] text-neutral-500 pt-1">+{project.technologies.length - 3} more</span>
                                        )}
                                    </div>
                                    <div className="flex gap-3">
                                        {project.previewLink && (
                                            <div className="flex-1 py-2 flex items-center justify-center rounded-lg font-bold text-sm bg-purple-600 text-white">Live</div>
                                        )}
                                        <div className="flex-1 py-2 flex items-center justify-center rounded-lg font-bold text-sm border border-neutral-700 text-white">Code</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default AllProjects;
