import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { DiJava } from "react-icons/di";
// import { DiHtml5 } from "react-icons/di";
// import { DiCss3 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { animate, motion } from "framer-motion";

const Technologies = () => {
    const techsRow1 = [
        { icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
        { icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
        { icon: SiExpress, color: "text-white", name: "Express" },
        { icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
        { icon: SiMysql, color: "text-sky-700", name: "MySQL" },
        { icon: SiJavascript, color: "text-yellow-400", name: "JavaScript" },
    ];

    const techsRow2 = [
        { icon: DiJava, color: "text-red-600", name: "Java" },
        { icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind" },
        { icon: SiBootstrap, color: "text-purple-500", name: "Bootstrap" },
        { icon: SiGit, color: "text-orange-600", name: "Git" },
        { icon: SiPostman, color: "text-orange-500", name: "Postman" },
        { icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
    ];

    const MarqueeRow = ({ items, direction = "left", speed = 25 }) => (
        <div className="relative flex overflow-hidden py-4">
            <motion.div
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex whitespace-nowrap gap-8"
            >
                {[...items, ...items].map((tech, index) => (
                    <div key={index} className="group relative flex-shrink-0">
                        <div className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-4 hover:border-purple-500/50 hover:bg-neutral-800/80 transition-all duration-300 backdrop-blur-sm">
                            <tech.icon className={`text-3xl md:text-4xl ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
                        </div>
                        {/* Tooltip on hover */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-neutral-800 text-[10px] px-2 py-1 rounded text-white font-bold uppercase tracking-widest z-20 pointer-events-none">
                            {tech.name}
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );

    return (
        <div id="technologies" className="border-b border-neutral-900 pb-32 pt-16 relative overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="mb-20 text-center text-4xl font-bold"
            >
                Technical <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Stack</span>
            </motion.h1>

            <div className="max-w-7xl mx-auto space-y-8 relative">
                {/* Edge Fading Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent z-10 pointer-events-none"></div>

                {/* Row 1: Left to Right */}
                <MarqueeRow items={techsRow1} direction="left" speed={30} />

                {/* Row 2: Right to Left */}
                <MarqueeRow items={techsRow2} direction="right" speed={35} />
            </div>

            <motion.p
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center mt-16 text-neutral-500 text-sm font-medium tracking-widest uppercase"
            >
                Constantly learning and expanding my toolkit
            </motion.p>
        </div>
    );
};

export default Technologies;
