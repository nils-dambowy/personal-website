import Header from "./Header";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";

export default function About() {
  const technologies = [
    { name: "JavaScript", color: "bg-yellow-400" },
    { name: "Python", color: "bg-blue-500 text-white" },
    { name: "C++", color: "bg-indigo-600 text-white" },
    { name: "ReactJS", color: "bg-cyan-400" },
    { name: "TailwindCSS", color: "bg-sky-400" },
    { name: "Git", color: "bg-orange-500 text-white" },
    { name: "Docker", color: "bg-blue-600 text-white" },
    { name: "PyTorch", color: "bg-red-500 text-white" },
  ];

  return (
    <div className="flex flex-col h-screen max-h-screen bg-[#ffc229] relative z-10 overflow-x-hidden overflow-y-auto lg:overflow-y-hidden justify-between">
      <ParticleBackground />
      <Header />

      <main className="flex-grow flex flex-col justify-between py-2 relative z-10 overflow-hidden">
        {/* Name & Title Bar */}
        <div className="bg-white border-b-2 border-t-2 border-black py-2 px-4 shadow-[0px_3px_0px_#000000]">
          <div className="max-w-6xl mx-auto flex flex-row items-center justify-around gap-4">
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="bg-blue-700 text-white font-extrabold text-lg lg:text-3xl px-3 py-0.5 border-2 border-black inline-block shadow-[2px_2px_0px_#000000]">
                nils dambowy
              </p>
              <span className="text-xs lg:text-base font-bold ml-2">(he/him)</span>
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-center"
            >
              <p className="bg-[#ffc229] text-black font-extrabold text-lg lg:text-3xl px-3 py-0.5 border-2 border-black inline-block shadow-[2px_2px_0px_#000000]">
                computer science student
              </p>
              <span className="text-xs lg:text-base font-bold ml-2">tu darmstadt</span>
            </motion.div>
          </div>
        </div>

        {/* Professional & Personal Sections */}
        <div className="personal w-full py-3 px-4 flex-grow flex items-center">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full">
            
            {/* Professional Card */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col bg-white border-2 border-black w-full lg:w-1/2 shadow-[5px_5px_0px_#000000]"
            >
              <div className="border-b-2 border-black bg-slate-100 font-extrabold text-base lg:text-lg flex items-center px-4 h-10">
                <span>Professional</span>
                <div className="flex ml-auto space-x-2">
                  <div className="w-3.5 h-3.5 bg-red-400 about-icons"></div>
                  <div className="w-3.5 h-3.5 bg-yellow-400 about-icons"></div>
                  <div className="w-3.5 h-3.5 bg-green-400 about-icons"></div>
                </div>
              </div>
              <div className="p-4 text-xs lg:text-sm leading-relaxed space-y-2.5 font-medium text-gray-900">
                <p>
                  I first dabbled in programming back in school, but it wasn’t until my computer science studies at Goethe University in Frankfurt that I truly found my passion for development and artificial intelligence. Now, I’m pursuing my master’s degree in computer science at TU Darmstadt.
                </p>
                <p>
                  I’m driven by a desire to build things that make life easier – not just for me, but for the people who use them. The less we have to think about the mundane tasks of daily life, the more time we have to work on bigger, cooler, and more meaningful projects.
                </p>
                <p className="bg-yellow-100 p-2 border-l-4 border-black font-semibold text-xs lg:text-sm">
                  <span className="font-bold">Dream job:</span> A role that bridges software development and AI, solving real-world problems in innovative ways.
                </p>
              </div>
            </motion.div>

            {/* Personal Card */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col bg-white border-2 border-black w-full lg:w-1/2 shadow-[5px_5px_0px_#000000]"
            >
              <div className="border-b-2 border-black bg-slate-100 font-extrabold text-base lg:text-lg flex items-center px-4 h-10">
                <span>Personal</span>
                <div className="flex ml-auto space-x-2">
                  <div className="w-3.5 h-3.5 bg-red-400 about-icons"></div>
                  <div className="w-3.5 h-3.5 bg-yellow-400 about-icons"></div>
                  <div className="w-3.5 h-3.5 bg-green-400 about-icons"></div>
                </div>
              </div>
              <div className="p-4 text-xs lg:text-sm leading-relaxed space-y-2.5 font-medium text-gray-900">
                <p>
                  Outside of work, I’m a passionate athlete. Whether it’s climbing, cycling, or running – I love staying active, clearing my mind, and sharing these experiences with others.
                </p>
                <p>
                  I believe that activities like these are not just about fitness but about building connections — some of my best ideas and friendships have come while out on a run or tackling a bouldering problem together.
                </p>
                <p>
                  I grew up in Bruchköbel, completed my studies in Frankfurt, and later decided to pursue my master&apos;s at TU Darmstadt. When I’m not programming, you’ll likely find me planning my next trip, making music, or enjoying the outdoors.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="tech bg-white border-t-2 border-b-2 border-black py-2 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-stretch border-2 border-black shadow-[5px_5px_0px_#000000] bg-white overflow-hidden">
            
            {/* Seamless Full-Height Blue Sidebar */}
            <div className="bg-blue-600 text-white flex flex-col items-center justify-between p-3 border-b-2 md:border-b-0 md:border-r-2 border-black w-full md:w-1/4 text-center">
              <svg
                className="w-12 h-8 text-white opacity-80"
                viewBox="0 0 350 175"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M350 23.4242H231.552L315.306 107.179L282.179 140.306L198.424 56.5516V175H151.576V56.5516L67.821 140.306L34.6936 107.179L118.446 23.4242H0V-23.427H118.446L34.6936 -107.179L67.821 -140.309L151.576 -56.5543V-175H198.424V-56.5543L282.179 -140.309L315.306 -107.179L231.552 -23.427H350V23.4242Z"
                  fill="currentColor"
                />
              </svg>
              <h2 className="text-xl lg:text-2xl font-black tracking-wider uppercase my-1">Technical</h2>
              <svg
                className="w-12 h-8 text-white opacity-80"
                viewBox="0 0 350 175"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_tech)">
                  <g clipPath="url(#clip1_tech)">
                    <path
                      d="M350 151.576H231.552L315.306 67.821L282.179 34.6936L198.424 118.448V0H151.576V118.448L67.821 34.6936L34.6936 67.821L118.446 151.576H0V198.427H118.446L34.6936 282.179L67.821 315.309L151.576 231.554V350H198.424V231.554L282.179 315.309L315.306 282.179L231.552 198.427H350V151.576Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_tech">
                    <rect width="350" height="175" fill="white"></rect>
                  </clipPath>
                  <clipPath id="clip1_tech">
                    <rect width="350" height="350" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>

            {/* Badges Grid */}
            <div className="w-full md:w-3/4 p-4 grid grid-cols-2 gap-2.5 items-center">
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.02, x: 2 }}
                  className="flex items-center p-2 border-2 border-black bg-slate-50 shadow-[2px_2px_0px_#000000] hover:shadow-[1px_1px_0px_#000000] transition-all cursor-default"
                >
                  <div className={`w-3.5 h-3.5 rounded-full border border-black mr-2.5 ${tech.color}`}></div>
                  <span className="font-extrabold text-xs lg:text-base">{tech.name}</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
