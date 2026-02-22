import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Spring physics for smooth trailing effect
    const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
    const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

    useEffect(() => {
        const moveMouse = (e) => {
            cursorX.set(e.clientX - 16); // Center of the ring
            cursorY.set(e.clientY - 16);
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const checkHover = () => {
            const hoveredElement = document.querySelectorAll(
                "a, button, [role='button'], .group"
            );

            hoveredElement.forEach((el) => {
                el.addEventListener("mouseenter", () => setIsHovered(true));
                el.addEventListener("mouseleave", () => setIsHovered(false));
            });
        };

        window.addEventListener("mousemove", moveMouse);
        checkHover();

        // Re-check hover status if DOM changes (optional but good for SPAs)
        const observer = new MutationObserver(checkHover);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            observer.disconnect();
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-purple-500 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? "rgba(168, 85, 247, 0.2)" : "transparent",
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
            />

            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: mousePos.x - 3,
                    y: mousePos.y - 3,
                    scale: isHovered ? 0 : 1,
                }}
            />
        </>
    );
};

export default CustomCursor;
