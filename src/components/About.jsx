import aboutPic from "../assets/about.jpg";
import { ABOUT_CONTENT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div id="about" className="border-b border-neutral-900 pb-20">
            <div className="mt-20 mb-16 flex justify-center">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative text-center group"
                >
                    <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center justify-center gap-3">
                        <span className="relative inline-block text-white overflow-hidden bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                            About Me
                        </span>
                    </h1>
                    <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-2"></div>
                </motion.div>
            </div>

            <div className="flex flex-wrap items-center justify-center max-w-7xl mx-auto px-4">
                {/* Image Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/3 flex justify-center lg:justify-end mb-12 lg:mb-0 lg:pr-12"
                >
                    <div className="relative group perspective-1000">
                        <motion.div
                            whileHover={{ rotateY: -10, rotateX: 5, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="relative overflow-hidden rounded-3xl ring-1 ring-white/20 shadow-2xl shadow-purple-500/20"
                        >
                            <img
                                src={aboutPic}
                                alt="About Me"
                                className="w-80 h-80 object-cover rounded-3xl transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />
                        </motion.div>
                        {/* Decorative background glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-30 transition-opacity" />
                    </div>
                </motion.div>

                {/* Text Content Section */}
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-2/3"
                >
                    <div className="relative p-8 md:p-12 bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-3xl ring-1 ring-white/10 shadow-2xl">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <span className="text-8xl font-black italic select-none">"</span>
                        </div>

                        <p className="text-lg md:text-xl leading-relaxed text-neutral-300 font-light tracking-wide text-justify md:text-left">
                            {ABOUT_CONTENT}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 opacity-60">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-white">Logic Driven</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-white">Innovation Focused</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
