import { motion } from "framer-motion";

const Section = ({ children, id, className = "" }) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1
            }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ willChange: "opacity, transform" }}
            className={`relative ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default Section;
