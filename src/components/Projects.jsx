import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";
import { Link } from "react-router-dom";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div id="projects" className="pb-20">
      <div className="mt-20 mb-12 flex justify-center">
        <div className="relative text-center group">
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter flex items-center justify-center gap-3">
            <span className="relative inline-block text-white">
              Featured Projects
            </span>
          </h1>
          <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-2"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {PROJECTS.slice(0, 3).map((project, index) => (
          <div
            key={index}
            onClick={() => openModal(project)}
            className="group relative bg-neutral-900/40 rounded-3xl border border-neutral-800 overflow-hidden hover:border-purple-500/50 transition-all flex flex-col h-full cursor-pointer"
          >
            {/* Project Image Container with Glass Glow Border */}
            <div className="relative aspect-video overflow-hidden border-b border-neutral-800 ring-1 ring-white/10 shadow-2xl shadow-purple-500/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* View Details Overlay */}
              <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-6 py-2 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
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
                      onClick={(e) => e.stopPropagation()}
                      className="group relative flex-1 py-2 flex items-center justify-center rounded-lg font-bold text-sm overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-purple-600 group-hover:bg-transparent transition-all"></span>
                      <span className="absolute inset-0 border border-purple-600 scale-0 group-hover:scale-100 rounded-lg transition-transform duration-300"></span>
                      <span className="relative text-white group-hover:text-purple-400 transition-colors">Live</span>
                    </a>
                  )}
                  <a
                    href={project.sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="group relative flex-1 py-2 flex items-center justify-center rounded-lg font-bold text-sm overflow-hidden border border-neutral-700"
                  >
                    <span className="absolute inset-0 bg-transparent group-hover:bg-white transition-all scale-x-0 group-hover:scale-x-100 origin-left"></span>
                    <span className="relative text-white group-hover:text-black transition-colors">Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          to="/projects"
          className="group relative flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm overflow-hidden"
        >
          <span className="absolute inset-0 border-2 border-purple-500 rounded-full group-hover:bg-purple-500 transition-all duration-300"></span>
          <span className="relative text-purple-500 group-hover:text-white transition-colors flex items-center gap-2">
            Explore More Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </span>
        </Link>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Projects;
