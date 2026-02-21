import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Featured Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {PROJECTS.slice(0, 3).map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative bg-neutral-900/40 rounded-3xl border border-neutral-800 overflow-hidden hover:border-purple-500/50 transition-all flex flex-col h-full"
          >
            {/* Project Image Container with Fixed Aspect Ratio */}
            <div className="relative aspect-video overflow-hidden border-b border-neutral-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 bg-neutral-800 text-purple-300 text-[10px] rounded-md border border-neutral-700 uppercase font-bold tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[10px] text-neutral-500 pt-1">+{project.technologies.length - 3} more</span>
                  )}
                </div>

                <div className="flex gap-3">
                  {project.previewLink && (
                    <a
                      href={project.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center py-2 bg-purple-600 text-white text-sm rounded-lg font-bold hover:bg-purple-700 transition-all"
                    >
                      Live
                    </a>
                  )}
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-neutral-700 text-white text-sm rounded-lg font-bold hover:bg-neutral-800 transition-all"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        className="mt-16 flex justify-center"
      >
        <a
          href="https://github.com/aruppatra04"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-500 rounded-full font-bold text-sm hover:bg-purple-500 hover:text-white transition-all duration-300"
        >
          Explore More Projects
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
