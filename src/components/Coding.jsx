import { useRef } from "react";
import { CODING_PLATFORMS } from "../constants";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const CodingCard = ({ platform, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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

    // Brand color mapping
    const getBrandColor = (name) => {
        switch (name) {
            case "LeetCode": return "from-amber-400 to-orange-600";
            case "Codeforces": return "from-blue-500 to-red-500";
            case "CodeChef": return "from-yellow-700 to-yellow-900";
            case "GeeksforGeeks": return "from-green-500 to-emerald-800";
            case "Coding Ninjas": return "from-orange-400 to-orange-600";
            case "AtCoder": return "from-gray-400 to-gray-600";
            default: return "from-purple-400 to-cyan-400";
        }
    };

    const brandColor = getBrandColor(platform.name);

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col items-center bg-neutral-900/40 p-6 rounded-2xl border border-neutral-800 hover:border-white/20 transition-all overflow-hidden"
        >
            {/* Dynamic Brand Glow */}
            <div className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${brandColor} opacity-5 blur-3xl rounded-full group-hover:opacity-15 transition-opacity`}></div>

            {/* Logo Container */}
            <div className="h-14 w-full flex items-center justify-center mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:translate-z-10" style={{ transform: "translateZ(50px)" }}>
                <img
                    src={platform.logo}
                    alt={platform.name}
                    className="max-h-full max-w-[140px] object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                />
            </div>

            {/* Platform Name */}
            <h3 className="text-lg font-bold text-white mb-4 tracking-tight" style={{ transform: "translateZ(30px)" }}>
                {platform.name}
            </h3>

            {/* Glassmorphism Stats Container */}
            <div className="w-full bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 mb-6 relative overflow-hidden group-hover:border-white/20 transition-all" style={{ transform: "translateZ(20px)" }}>
                <div className="flex items-center justify-around relative z-10">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Max Rating</span>
                        <span className={`text-md font-black bg-gradient-to-br ${brandColor} bg-clip-text text-transparent`}>
                            {platform.maxRating}
                        </span>
                    </div>
                    <div className="w-[1px] h-8 bg-white/10"></div>
                    <div className="flex flex-col items-center relative">
                        <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Solved</span>
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-md font-bold text-white leading-none">{platform.totalSolved}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* View Profile Button */}
            <a
                href={platform.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-2.5 text-center rounded-lg bg-neutral-800 text-white font-bold text-[11px] tracking-widest uppercase border border-neutral-700 hover:bg-gradient-to-r ${brandColor} hover:border-transparent transition-all duration-300 shadow-xl`}
                style={{ transform: "translateZ(40px)" }}
            >
                View Profile
            </a>
        </motion.div>
    );
};

const Coding = () => {
    return (
        <div id="coding" className="border-b border-neutral-900 pb-20 overflow-hidden">
            {/* Animating Shimmer Header */}
            <div className="mt-20 mb-12 flex justify-center">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -20 }}
                    className="relative text-center group"
                >
                    <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-white/20 flex items-center justify-center gap-4">
                        <span className="text-neutral-700 font-light">{"<"}</span>
                        <span className="relative inline-block text-white overflow-hidden bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                            Coding Journey
                        </span>
                        <span className="text-neutral-700 font-light">{"/>"}</span>
                    </h1>
                    <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-2"></div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto py-2">
                {CODING_PLATFORMS.map((platform, index) => (
                    <CodingCard key={index} platform={platform} index={index} />
                ))}
            </div>

        </div>
    );
};

export default Coding;
