import { motion } from "framer-motion";
import { FaRocket, FaLayerGroup, FaCode } from "react-icons/fa";

const Services = () => {
    const tiers = [
        {
            title: "MVP Concept",
            icon: <FaRocket />,
            price: "From $199",
            features: ["High-speed Landing Page", "Responsive UI Design", "Animations & Interactivity", "SEO Optimization"],
            color: "from-cyan-500/20 to-blue-500/20",
            borderColor: "group-hover:border-cyan-500/50"
        },
        {
            title: "Full-Stack Solution",
            icon: <FaLayerGroup />,
            price: "From $499",
            features: ["Custom Web Application", "Secure User Auth & DB", "API Integrations", "Admin Dashboard"],
            color: "from-purple-500/20 to-pink-500/20",
            borderColor: "group-hover:border-purple-500/50"
        },
        {
            title: "Performance logic",
            icon: <FaCode />,
            price: "From $249",
            features: ["Complex Algorithmic Solutions", "Database Optimization", "Code Documentation", "Technical Consultation"],
            color: "from-emerald-500/20 to-teal-500/20",
            borderColor: "group-hover:border-emerald-500/50"
        }
    ];

    return (
        <div id="services" className="pb-20">
            <div className="mt-20 mb-16 flex justify-center">
                <div className="relative text-center group">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center justify-center gap-3 italic">
                        <span className="relative inline-block text-white">
                            Project Commissions
                        </span>
                    </h2>
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-2"></div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
                {tiers.map((tier, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className={`group relative p-8 rounded-3xl border border-neutral-800 bg-gradient-to-br ${tier.color} transition-all duration-500 ${tier.borderColor}`}
                    >
                        <div className="text-3xl text-white mb-6 bg-neutral-900/50 w-14 h-14 flex items-center justify-center rounded-2xl ring-1 ring-white/10">
                            {tier.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                        <p className="text-cyan-400 font-mono text-sm mb-6">{tier.price}</p>

                        <ul className="space-y-4 mb-8">
                            {tier.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-3 text-neutral-400 text-sm">
                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            className="block w-full text-center py-3 rounded-xl bg-neutral-900 border border-white/5 text-white font-bold text-sm group-hover:bg-white group-hover:text-black transition-all"
                        >
                            Book This tier
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Services;
