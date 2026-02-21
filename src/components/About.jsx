import aboutPic from "../assets/about.jpg";
import { ABOUT_TEXT1 } from "../constants";
import { ABOUT_TEXT2 } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div id="about" className="border-b border-neutral-900 pb-20">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="my-20 text-center text-4xl font-bold"
            >
                About <span className="text-purple-500">Me</span>
            </motion.h1>

            <div className="flex flex-wrap items-center">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 lg:p-12 mb-10 lg:mb-0"
                >
                    <div className="flex items-center justify-center">
                        <div className="relative p-2 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl">
                            <div className="bg-neutral-950 rounded-[1.4rem] p-8">
                                <p className="text-lg leading-relaxed text-neutral-300 text-justify">
                                    {ABOUT_TEXT1}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2 lg:p-12"
                >
                    <div className="flex items-center justify-center">
                        <div className="bg-neutral-900/50 p-8 rounded-3xl border border-neutral-800 backdrop-blur-sm">
                            <p className="text-lg leading-relaxed text-neutral-400 text-justify">
                                {ABOUT_TEXT2}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
