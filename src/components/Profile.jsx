import Potrait from "../assets/potrait.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="profile flex flex-col items-center justify-center flex-grow py-8 px-4 relative z-10 my-auto">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center max-w-3xl w-full text-center"
      >
        {/* Avatar / Portrait with Neo-Brutalist Frame */}
        <div className="relative mb-6 group">
          <div className="absolute inset-0 bg-blue-600 rounded-full border-4 border-black translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>
          <img
            src={Potrait}
            alt="Nils Dambowy Portrait"
            className="relative z-10 w-40 h-40 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-white rounded-full border-4 border-black object-cover p-2"
          />
        </div>

        {/* Heading & Bio */}
        <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_#000000] w-full">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-black"
          >
            I&apos;m <span className="bg-blue-700 text-white px-3 py-1 inline-block border-2 border-black rotate-[-1deg] shadow-[3px_3px_0px_#000]">Nils Dambowy</span>
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg sm:text-2xl lg:text-3xl font-bold flex flex-wrap items-center justify-center gap-2"
          >
            <span className="bg-[#ffc229] border-2 border-black px-3 py-1 shadow-[2px_2px_0px_#000]">
              Cloud IT Trainee
            </span>
            <span className="text-gray-700">@</span>
            <span className="bg-white border-2 border-black px-3 py-1 shadow-[2px_2px_0px_#000]">
              HZD
            </span>
            <span className="text-gray-500 text-sm sm:text-lg font-semibold block w-full mt-1">
              M.Sc. Computer Science Student @ TU Darmstadt
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-sm sm:text-base lg:text-lg text-gray-800 leading-relaxed font-medium max-w-xl mx-auto"
          >
            Specializing in Cloud Infrastructure, Container Orchestration (Kubernetes, Docker), DevOps (GitLab CI/CD), Linux Systems, and AI-driven solutions.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/projects"
              className="bg-[#ffc229] text-black font-extrabold text-base sm:text-xl px-6 py-3 border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-block"
            >
              Explore Projects
            </Link>

            <Link
              to="/about"
              className="bg-white text-black font-extrabold text-base sm:text-xl px-6 py-3 border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-block"
            >
              About Me
            </Link>

            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-extrabold text-base sm:text-xl px-6 py-3 border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-block"
            >
              CV (PDF)
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
