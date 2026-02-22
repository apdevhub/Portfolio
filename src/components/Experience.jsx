import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    // Group experiences by company to show growth like LinkedIn
    const groupedExperiences = EXPERIENCES.reduce((acc, exp) => {
        const lastGroup = acc[acc.length - 1];
        if (lastGroup && lastGroup.company === exp.company) {
            lastGroup.roles.push(exp);
        } else {
            acc.push({
                company: exp.company,
                roles: [exp]
            });
        }
        return acc;
    }, []);

    return (
        <div id="experience" className="pb-20">
            <div className="mt-20 mb-12 flex justify-center">
                <div className="relative text-center group">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center justify-center gap-3">
                        <span className="relative inline-block text-white">
                            Professional Experience
                        </span>
                    </h1>
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-2"></div>
                </div>
            </div>

            <div className="mx-auto max-w-4xl px-4 flex flex-col gap-12">
                {groupedExperiences.map((group, gIndex) => (
                    <div key={gIndex} className="relative">
                        {/* Company Header */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-neutral-900 rounded-xl border border-neutral-800 flex items-center justify-center overflow-hidden">
                                {group.roles[0].logo ? (
                                    <img
                                        src={group.roles[0].logo}
                                        alt={group.company}
                                        className="w-full h-full object-contain p-2"
                                    />
                                ) : (
                                    <span className="text-purple-400 font-black italic">{group.company[0]}</span>
                                )}
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-white tracking-tight">{group.company}</h2>
                            </div>
                        </div>

                        {/* Roles with Growth Line */}
                        <div className="relative ml-6 pl-10 border-l-2 border-neutral-800 space-y-12">
                            {group.roles.map((role, rIndex) => (
                                <div key={rIndex} className="relative">
                                    {/* Indicator Dot */}
                                    <div className="absolute -left-[49px] top-1 w-4 h-4 bg-neutral-950 border-2 border-purple-500 rounded-full z-10 box-content shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                        <div className="absolute inset-1 bg-purple-500 rounded-full animate-pulse"></div>
                                    </div>

                                    {/* Role Content */}
                                    <div className="group relative">
                                        <div className="flex flex-col md:flex-row justify-between mb-4 items-start md:items-center gap-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                                    {role.role}
                                                </h3>
                                                <span className="text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">{role.year}</span>
                                            </div>
                                        </div>

                                        <p className="text-neutral-400 text-sm leading-relaxed mb-6 text-justify max-w-3xl font-light">
                                            {role.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {role.technologies.map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className="px-2 py-0.5 bg-neutral-800/50 text-purple-300 text-[10px] rounded-md border border-neutral-700/50 uppercase font-black tracking-tighter"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
