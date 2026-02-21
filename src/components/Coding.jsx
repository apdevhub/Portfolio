import { CODING_PLATFORMS } from "../constants";
import { motion } from "framer-motion";

const Coding = () => {
    return (
        <div id="coding" className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl font-bold"
            >
                <span className="text-neutral-500 font-light">{"< "}</span>
                Coding <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
                <span className="text-neutral-500 font-light">{" />"}</span>
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
                {CODING_PLATFORMS.map((platform, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800 hover:border-purple-500/30 transition-all group overflow-hidden relative"
                    >
                        {/* Subtle Background Glow */}
                        <div className="absolute -right-16 -top-16 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full group-hover:bg-purple-500/10 transition-all"></div>

                        {/* Logo Container - More compact height */}
                        <div className="h-14 w-full flex items-center justify-center mb-4">
                            <img
                                src={platform.logo}
                                alt={platform.name}
                                className="max-h-full max-w-[140px] object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Platform Name - Smaller font */}
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                            {platform.name}
                        </h3>

                        {/* Stats Section - More compact spacing */}
                        <div className="flex flex-col items-center gap-1 mb-5">
                            <div className="flex items-center gap-3 text-neutral-400">
                                <div className="flex flex-col items-center">
                                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Max Rating</span>
                                    <span className="text-md font-bold text-purple-400">{platform.maxRating}</span>
                                </div>
                                <div className="w-[1px] h-6 bg-neutral-800"></div>
                                <div className="flex flex-col items-center">
                                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Solved</span>
                                    <span className="text-md font-bold text-cyan-400">{platform.totalSolved}</span>
                                </div>
                            </div>
                        </div>

                        {/* Achievements - Only render if not empty/commented */}
                        {platform.achievements && platform.achievements.some(a => a.trim().length > 0) && (
                            <div className="w-full text-center mb-6">
                                <ul className="space-y-0.5">
                                    {platform.achievements.map((item, idx) => (
                                        item.trim().length > 0 && (
                                            <li key={idx} className="text-[11px] text-neutral-500 italic">
                                                {item}
                                            </li>
                                        )
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* View Profile Button - Slimmer padding */}
                        <a
                            href={platform.profileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2.5 text-center rounded-lg bg-neutral-800 text-white font-bold text-[11px] tracking-widest uppercase border border-neutral-700 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                        >
                            View Profile
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Coding;
