import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/profile.png"
import { motion, transform } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div id="home" className="border-b border-neutral-900 pb-16 lg:mb-35">
            <div className="flex flex-wrap items-center">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Arup Patra
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl md:text-4xl tracking-tight text-transparent font-medium"
                        >
                            Full Stack Developer & Competitive Programmer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-neutral-400 text-lg leading-relaxed text-justify"
                        >
                            {HERO_CONTENT}
                        </motion.p>

                        <motion.div
                            variants={container(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="flex gap-4"
                        >
                            <a href="#projects" className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-neutral-300 transition-all">
                                View My Work
                            </a>
                            <a href="#contact" className="border border-neutral-700 px-6 py-3 rounded-full font-bold hover:bg-neutral-800 transition-all">
                                Contact Me
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-12">
                    <div className="flex justify-center relative">
                        {/* Abstract Tech Visual (Replacement for Personal Pic) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                            className="relative w-72 h-72 md:w-96 md:h-96"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full animate-pulse"></div>

                            {/* Modern Abstract Shape (Temporary until image works) */}
                            <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-cyan-500/30 rounded-3xl border border-white/10 backdrop-blur-3xl flex items-center justify-center p-8 overflow-hidden shadow-2xl">
                                <div className="grid grid-cols-4 gap-4 opacity-50">
                                    {[...Array(16)].map((_, i) => (
                                        <div key={i} className="w-12 h-12 border border-white/20 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/20 text-9xl font-bold select-none">{"</>"}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero
