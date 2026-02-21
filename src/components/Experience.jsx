import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div id="experience" className="border-b border-neutral-900 pb-20">
            <div className="mt-20 mb-12 flex justify-center">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    className="relative text-center group"
                >
                    <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center justify-center gap-3">
                        <span className="relative inline-block text-white overflow-hidden bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                            Professional Experience
                        </span>
                    </h1>
                    <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-2"></div>
                </motion.div>
            </div>

            <div className="mx-auto max-w-4xl px-4 flex flex-col gap-6">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className="w-full p-6 md:p-8 bg-neutral-900/40 rounded-2xl border border-neutral-800 hover:border-purple-500/50 transition-all group"
                    >
                        <div className="flex flex-col md:flex-row justify-between mb-3 gap-1">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                    {experience.role}
                                </h3>
                                <h4 className="text-md font-medium text-neutral-300 italic">
                                    {experience.company}
                                </h4>
                            </div>
                            <div className="text-purple-400 font-medium text-xs md:text-right uppercase tracking-wider">
                                {experience.year}
                            </div>
                        </div>

                        <p className="text-neutral-400 text-sm leading-relaxed mb-4 text-justify max-w-3xl">
                            {experience.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIdx) => (
                                <span
                                    key={techIdx}
                                    className="px-2 py-0.5 bg-neutral-800 text-purple-300 text-[10px] rounded-md border border-neutral-700 uppercase font-bold"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
