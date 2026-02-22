import { EDUCATIONS } from "../constants";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="pb-20 px-4">
      <div className="mt-20 mb-16 flex justify-center">
        <div className="relative text-center group">
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center justify-center gap-3">
            <span className="relative inline-block text-white">
              Education
            </span>
          </h1>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-2"></div>
        </div>
      </div>

      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {EDUCATIONS.map((edu, index) => (
          <div
            key={index}
            className="relative p-6 md:p-8 bg-neutral-900/40 rounded-2xl border border-neutral-800 hover:border-purple-500/30 transition-all group overflow-hidden w-full"
          >
            {/* Visual Decoration */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-500/5 blur-3xl rounded-full group-hover:bg-purple-500/10 transition-colors"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-neutral-800 rounded-xl text-cyan-400 border border-neutral-700 shadow-xl group-hover:scale-110 transition-transform">
                  <FaGraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-neutral-400 font-medium">
                    {edu.institution}
                  </p>
                </div>
              </div>
              <div className="px-3 py-1 bg-neutral-800/50 rounded-full border border-neutral-700 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                {edu.year}
              </div>
            </div>

            <div className="mt-4 pl-0 md:pl-16">
              <p className="text-neutral-400 text-sm leading-relaxed border-l-2 border-neutral-800 pl-4 group-hover:border-purple-500/40 transition-colors">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
