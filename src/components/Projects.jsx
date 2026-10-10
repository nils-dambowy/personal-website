import Header from "./Header";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import Placeholder from "../assets/GRAPH.png";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: "openbouldermap",
      title: "openbouldermap",
      description:
        "A full-stack web application that lets users discover, map, and share bouldering spots worldwide!",
      tags: ["React", "Full-Stack", "Maps", "Web"],
      github: "https://github.com/nils-dambowy/openbouldermap",
      image: Placeholder,
      accent: "bg-blue-600",
    },
    {
      id: "url_shortener",
      title: "URL Shortener",
      description:
        "A fast, lightweight custom URL shortener service built for simplicity and efficiency.",
      tags: ["Python", "Backend", "API"],
      github: "https://github.com/nils-dambowy/url_shortener",
      image: Placeholder,
      accent: "bg-[#ffc229]",
    },
    {
      id: "personal_website",
      title: "Personal Website",
      description:
        "My personal portfolio website built with React, Vite, Framer Motion, and Tailwind CSS in Neo-Brutalist style.",
      tags: ["React", "Vite", "Tailwind", "Framer Motion"],
      github: "https://github.com/nils-dambowy/personal-website",
      image: Placeholder,
      accent: "bg-green-500",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#ffc229] relative z-10 overflow-x-hidden">
      <ParticleBackground />
      <Header />

      <main className="flex-grow py-12 px-4 max-w-7xl mx-auto w-full relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl sm:text-6xl font-black inline-block bg-white text-black px-6 py-3 border-4 border-black shadow-[6px_6px_0px_#000000] rotate-[-1deg]"
          >
            My Projects
          </motion.h1>
          <p className="mt-4 text-lg font-bold text-gray-900 max-w-lg mx-auto bg-white/80 border-2 border-black p-2 shadow-[3px_3px_0px_#000000]">
            Explore open-source software, web tools, and experiments I&apos;ve
            built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_#000000] hover:shadow-[4px_4px_0px_#000000] transition-shadow cursor-default"
            >
              {/* Card Header & Preview Image */}
              <div className="relative border-b-4 border-black h-48 bg-slate-100 flex items-center justify-center p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-md"
                />
                <span
                  className={`absolute top-3 left-3 ${project.accent} text-black font-extrabold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000]`}
                >
                  {project.title}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-2xl font-black text-black tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-black border-2 border-black font-bold text-xs px-2.5 py-0.5 shadow-[1px_1px_0px_#000]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Action Link */}
                <div className="pt-4 border-t-2 border-black">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#ffc229] hover:bg-yellow-300 text-black font-extrabold text-base py-2.5 border-2 border-black shadow-[3px_3px_0px_#000000] hover:shadow-[1px_1px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all w-full"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    </svg>
                    View Repository
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
