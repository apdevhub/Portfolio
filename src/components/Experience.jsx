import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div id="experience" className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl font-bold"
            >
                Experience
            </motion.h1>

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
