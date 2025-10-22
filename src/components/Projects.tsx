import React, { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "ARC-1 Handmade Puzzle Solvers",
      description:
        "An interactive web showcase of three manually coded ARC-1 puzzles, built entirely with HTML, CSS, and JavaScript. Each solver loads real ARC JSON data, visualizes input and output grids, and applies rule-based transformations to mimic human-style reasoning — no AI or ML required.",
      technologies: ["JavaScript", "HTML5", "CSS3", "JSON", "ARC Dataset"],
      image: "../public/arc-display.png", 
      githubUrl: "https://github.com/BrendanGoddard/ARC-1-Puzzle-Solver",
      liveUrl: "https://arc-1-puzzle-solver.vercel.app/",
      featured: true,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const projectId = parseInt(
              entry.target.getAttribute("data-project-id") || "0"
            );
            setVisibleProjects((prev) => [...new Set([...prev, projectId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
          Featured Project
        </h2>

        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => (projectRefs.current[index] = el)}
            data-project-id={project.id}
            className={`flex flex-col lg:flex-row items-center gap-10 transform transition-all duration-1000 ${
              visibleProjects.includes(project.id)
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {/* Image Section */}
            <div className="flex-1 relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 space-y-6">
              <div>
                {project.featured && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-full mb-3">
                    Featured Project
                  </span>
                )}
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
              </div>

              <div
                className={`p-6 rounded-xl ${
                  darkMode ? "bg-gray-800/50" : "bg-gray-50"
                } backdrop-blur-sm`}
              >
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg hover:from-blue-600 hover:to-green-600 transition-all duration-200"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
