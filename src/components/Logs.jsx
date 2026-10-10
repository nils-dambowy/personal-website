import Header from "./Header";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";

export default function Logs() {
  // Add posts here, in any order. The newest date is shown first.
  // {
  //   date: "2026-10-10",
  //   title: "Post title",
  //   text: "What the post is about.",
  //   link: "https://example.com/full-post", // optional
  // },
  const posts = [];

  const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex flex-col min-h-screen bg-[#ffc229] relative z-10 overflow-x-hidden">
      <ParticleBackground />
      <Header />

      <main className="flex-grow py-12 px-4 max-w-4xl mx-auto w-full relative z-10">
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

        {/* Posts */}
        <div className="flex flex-col gap-8">
          {sortedPosts.length === 0 && (
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-6 text-center">
              <p className="text-2xl font-black text-black tracking-tight">
                No posts yet.
              </p>
            </div>
          )}

          {sortedPosts.map((post, index) => (
            <motion.div
              key={`${post.date}-${post.title}`}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-6 space-y-4"
            >
              <div>
                <span className="bg-slate-100 text-black border-2 border-black font-bold text-xs px-2.5 py-0.5 shadow-[1px_1px_0px_#000]">
                  {post.date}
                </span>
                <h3 className="text-2xl font-black text-black tracking-tight mt-3 mb-2">
                  {post.title}
                </h3>
                {post.text && (
                  <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                    {post.text}
                  </p>
                )}
              </div>

              {post.link && (
                <div className="pt-4 border-t-2 border-black">
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#ffc229] hover:bg-yellow-300 text-black font-extrabold text-base py-2.5 border-2 border-black shadow-[3px_3px_0px_#000000] hover:shadow-[1px_1px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all w-full"
                  >
                    Read Post
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
