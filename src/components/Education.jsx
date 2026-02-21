import { EDUCATIONS } from "../constants";
import { motion } from "framer-motion";


const Education = () => {
  return (
    <div id="education" className="border-b border-neutral-900 pb-20">
      <div className="mt-20 mb-12 flex justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          className="relative text-center group"
        >
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center justify-center gap-3">
            <span className="relative inline-block text-white overflow-hidden bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
              Education
            </span>
          </h1>
          <div className="h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-2"></div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-4xl px-4 flex flex-col gap-6">
        {EDUCATIONS.map((edu, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative p-6 md:p-8 bg-neutral-900/40 rounded-2xl border border-neutral-800 hover:border-purple-500/30 transition-all group overflow-hidden w-full"
          >
            {/* Decorative Glow */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-14 h-14 object-contain rounded-xl bg-neutral-800 p-2"
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-purple-400 font-medium tracking-wide text-xs uppercase">
                    {edu.year}
                  </p>
                </div>
              </div>
              <div className="text-left md:text-right">
                <p className="text-purple-500 font-bold text-lg">{edu.perc}</p>
              </div>
            </div>

            <div className="md:pl-18">
              <p className="text-md text-neutral-200 font-semibold mb-1">{edu.degree}</p>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4 max-w-2xl">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.subjects.map((subj, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 bg-neutral-800 text-neutral-400 text-[10px] rounded-md uppercase font-bold tracking-wider border border-neutral-700/50"
                  >
                    {subj}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
