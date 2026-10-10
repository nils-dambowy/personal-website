import Header from "./Header";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Logs() {
  // One entry per post. The post itself lives in its own file:
  // src/components/Logs/Log<id>.jsx, reachable at /logs/<id>.
  const posts = [
    {
      id: 1,
      date: "2026-10-10",
      title: "New terminal setup: Ghostty, fish and LazyVim",
      description:
        "I moved my daily setup to Ghostty with the fish shell and Neovim running LazyVim.",
      tags: ["Neovim", "Terminal", "Tooling"],
    },
  ];

  const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

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
            Logs
          </motion.h1>
          <p className="mt-4 text-lg font-bold text-gray-900 max-w-lg mx-auto bg-white/80 border-2 border-black p-2 shadow-[3px_3px_0px_#000000]">
            Posts and notes on what I build and learn.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_#000000] hover:shadow-[4px_4px_0px_#000000] transition-shadow overflow-hidden"
            >
              {/* The whole tile is the link to the post */}
              <Link to={`/logs/${post.id}`} className="flex flex-col flex-grow">
                {/* Card Header */}
                <div className="border-b-4 border-black bg-slate-100 px-6 py-3">
                  <span className="bg-[#ffc229] text-black font-extrabold text-xs px-3 py-1 border-2 border-black shadow-[2px_2px_0px_#000]">
                    {post.date}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <h3 className="text-2xl font-black text-black tracking-tight mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-black border-2 border-black font-bold text-xs px-2.5 py-0.5 shadow-[1px_1px_0px_#000]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
