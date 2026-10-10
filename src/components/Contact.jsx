import Header from "./Header";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "nils.dambowy@googlemail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactLinks = [
    {
      title: "GitHub",
      subtitle: "@nils-dambowy",
      href: "https://github.com/nils-dambowy",
      external: true,
      color: "bg-slate-100 hover:bg-slate-200",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        </svg>
      ),
    },
    {
      title: "LinkedIn",
      subtitle: "Nils Dambowy",
      href: "https://www.linkedin.com/in/nils-dambowy-6a2584249/",
      external: true,
      color: "bg-blue-50 hover:bg-blue-100",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      title: "CV / Resume",
      subtitle: "Download PDF",
      href: "/CV.pdf",
      external: true,
      color: "bg-yellow-50 hover:bg-yellow-100",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          className="w-8 h-8"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" x2="12" y1="15" y2="3"></line>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#ffc229] relative z-10 overflow-x-hidden">
      <ParticleBackground />
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 max-w-4xl mx-auto w-full relative z-10">
        {/* Title */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-7xl font-black bg-white text-black px-6 py-3 border-4 border-black shadow-[6px_6px_0px_#000000] rotate-[-1deg] inline-block">
            Contact Me!
          </h1>
          <p className="mt-4 text-base sm:text-xl font-bold bg-white/90 border-2 border-black p-2 shadow-[3px_3px_0px_#000000]">
            Feel free to reach out for collaborations, questions, or just a
            chat.
          </p>
        </motion.div>

        {/* Copy E-Mail Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full bg-white border-4 border-black p-6 shadow-[8px_8px_0px_#000000] mb-8 text-center work-grid-bg"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 border-3 border-black p-4 shadow-[4px_4px_0px_#000000]">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#ffc229] border-2 border-black rounded-full shadow-[2px_2px_0px_#000]">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <div className="text-left">
                <span className="text-xs uppercase font-bold text-gray-500 block">
                  Direct E-Mail
                </span>
                <span className="text-lg sm:text-2xl font-black text-black break-all">
                  {email}
                </span>
              </div>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              <a
                href={`mailto:${email}`}
                className="flex-1 sm:flex-initial bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-4 py-2 border-2 border-black shadow-[2px_2px_0px_#000] text-center"
              >
                Send Mail
              </a>
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-initial bg-[#ffc229] hover:bg-yellow-300 text-black font-extrabold px-4 py-2 border-2 border-black shadow-[2px_2px_0px_#000] transition-all"
              >
                {copied ? "Copied!" : "Copy E-mail"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Links Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contactLinks.map((item, idx) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              whileHover={{ y: -4, x: -2 }}
              className={`flex flex-col items-center justify-center p-6 border-4 border-black ${item.color} shadow-[6px_6px_0px_#000000] hover:shadow-[3px_3px_0px_#000000] transition-[box-shadow,background-color] text-center group`}
            >
              <div className="p-3 bg-white border-2 border-black rounded-full shadow-[3px_3px_0px_#000] group-hover:bg-[#ffc229] transition-colors mb-3">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-black">{item.title}</h3>
              <span className="text-sm font-semibold text-gray-700 mt-1">
                {item.subtitle}
              </span>
            </motion.a>
          ))}
        </div>
      </main>

      {/* Copy notification toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 z-50 bg-black text-[#ffc229] font-extrabold text-lg px-6 py-3 border-4 border-white shadow-[6px_6px_0px_#000000] flex items-center gap-2"
          >
            <span>E-Mail address copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
