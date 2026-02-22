import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-neutral-800/50 hover:bg-neutral-700/50 rounded-full text-white transition-colors"
                        >
                            <FaTimes />
                        </button>

                        {/* Left Side: Image */}
                        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent md:hidden" />
                        </div>

                        {/* Right Side: Details */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                            <h2 className="text-3xl font-black text-white mb-4 bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent italic">
                                {project.title}
                            </h2>

                            <p className="text-neutral-400 leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="mb-8">
                                <h4 className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-neutral-800 text-white text-[10px] rounded-full border border-white/5 font-bold uppercase tracking-wider"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 mt-auto">
                                {project.previewLink && (
                                    <a
                                        href={project.previewLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 group relative py-3 flex items-center justify-center gap-2 rounded-xl font-bold text-sm bg-purple-600 overflow-hidden"
                                    >
                                        <span className="relative z-10 flex items-center gap-2 text-white">
                                            Live Demo <FaExternalLinkAlt size={12} />
                                        </span>
                                        <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-10" />
                                    </a>
                                )}
                                <a
                                    href={project.sourceCodeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 group relative py-3 flex items-center justify-center gap-2 rounded-xl font-bold text-sm bg-neutral-800 border border-white/10 overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center gap-2 text-white">
                                        View Code <FaGithub size={14} />
                                    </span>
                                    <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left opacity-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
