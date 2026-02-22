import { motion } from "framer-motion";

const Logo = () => {
    return (
        <motion.div
            className="relative flex items-center justify-center w-12 h-12 group cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Outer Rotating Hexagon/Frame */}
            <motion.div
                className="absolute inset-0 border-2 border-cyan-500/30 rounded-xl"
                animate={{
                    rotate: [0, 90, 180, 270, 360],
                    borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Secondary Glow Frame */}
            <motion.div
                className="absolute inset-1 border border-purple-500/40 rounded-lg"
                animate={{
                    rotate: [360, 270, 180, 90, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            {/* The Monogram */}
            <div className="relative font-black text-xl flex items-center justify-center">
                <span className="bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    A
                </span>
                <span className="text-white -ml-0.5 group-hover:text-cyan-400 transition-colors duration-300">
                    P
                </span>

                {/* Subtle dot beneath */}
                <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>

            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
};

export default Logo;
