import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/profile.png"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});



const HeroVisual = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="relative w-72 h-72 md:w-96 md:h-96 group"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full animate-pulse group-hover:bg-cyan-500/20 transition-colors duration-700"></div>

            {/* Modern Abstract Shape */}
            <div className="w-full h-full bg-neutral-900/40 rounded-3xl border border-white/10 backdrop-blur-3xl flex items-center justify-center p-8 overflow-hidden shadow-2xl group-hover:border-purple-500/30 transition-all duration-500">
                <div className="grid grid-cols-4 gap-4 opacity-30 group-hover:opacity-50 transition-opacity" style={{ transform: "translateZ(20px)" }}>
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-12 h-12 border border-white/20 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(50px)" }}>
                    <span className="text-white/10 group-hover:text-cyan-400/20 transition-colors text-9xl font-bold select-none drop-shadow-2xl">{"</>"}</span>
                </div>
            </div>
        </motion.div>
    );
};

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
                            className="pb-6 text-6xl font-black tracking-tighter lg:mt-16 lg:text-8xl"
                        >
                            <span className="relative inline-block text-white overflow-hidden bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                                Arup Patra
                            </span>
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-3xl md:text-4xl tracking-tight text-transparent font-bold"
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
                            className="flex flex-wrap gap-4 mt-4"
                        >
                            {/* Premium Flip Button - Primary */}
                            <a href="#projects" className="group relative px-8 py-3 flex items-center justify-center rounded-full font-bold overflow-hidden transition-all duration-300">
                                <span className="absolute inset-0 bg-white group-hover:bg-transparent transition-all"></span>
                                <span className="absolute inset-0 border-2 border-white scale-0 group-hover:scale-100 rounded-full transition-transform duration-300"></span>
                                <span className="relative text-black group-hover:text-white transition-colors">View My Work</span>
                            </a>

                            {/* Premium Flip Button - Secondary */}
                            <a href="#contact" className="group relative px-8 py-3 flex items-center justify-center rounded-full font-bold overflow-hidden transition-all duration-300 border-2 border-neutral-700 hover:border-purple-500">
                                <span className="absolute inset-0 bg-transparent group-hover:bg-purple-500 transition-all scale-x-0 group-hover:scale-x-100 origin-left"></span>
                                <span className="relative text-white group-hover:text-white transition-colors">Contact Me</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-12">
                    <div className="flex justify-center relative">
                        <HeroVisual />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero
