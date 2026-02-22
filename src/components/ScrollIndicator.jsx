import { motion, useScroll, useSpring } from "framer-motion";

const ScrollIndicator = () => {
    const { scrollYProgress } = useScroll();

    // Smooth the progress with spring physics
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-[1000] origin-left"
            style={{ scaleX }}
        >
            {/* Glossy Glow Effect */}
            <div className="absolute top-0 right-0 h-full w-20 bg-white/20 blur-md"></div>
            <div className="absolute top-0 left-0 h-full w-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        </motion.div>
    );
};

export default ScrollIndicator;
