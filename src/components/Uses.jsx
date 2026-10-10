import Header from "./Header";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";

export default function Uses() {
  const dotfiles = "https://github.com/nils-dambowy/dotfiles";

  // Edit these lists to match your setup.
  const setup = [
    {
      category: "Hardware",
      items: ["MacBook Air (Apple silicon)"],
    },
    {
      category: "OS",
      items: ["macOS", "Debian 13 on my server"],
    },
    {
      category: "Editor",
      items: ["Neovim with LazyVim", "Monokai Pro (classic) theme"],
    },
    {
      category: "Terminal",
      items: [
        "Ghostty",
        "fish shell with zoxide",
        "JetBrainsMono Nerd Font",
        "lazygit",
      ],
    },
  ];

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
            Uses
          </motion.h1>
          <p className="mt-4 text-lg font-bold text-gray-900 max-w-lg mx-auto bg-white/80 border-2 border-black p-2 shadow-[3px_3px_0px_#000000]">
            The hardware and software I work with every day.
          </p>
        </div>

        {/* Setup by category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {setup.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_#000000] p-6"
            >
              <h3 className="text-2xl font-black text-black tracking-tight mb-2">
                {group.category}
              </h3>
              <ul className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Dotfiles link */}
        <div className="mt-10 text-center">
          <a
            href={dotfiles}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black font-extrabold text-base sm:text-xl px-6 py-3 border-2 border-black shadow-[4px_4px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 transition-all inline-block"
          >
            My dotfiles
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
