import Header from "./Header";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import { motion } from "framer-motion";

export default function Uses() {
  const dotfiles = "https://github.com/nils-dambowy/dotfiles";

  // Edit these lists to match your setup. "detail" is optional.
  const setup = [
    {
      category: "Hardware",
      items: [
        { name: "MacBook Air (M1, 2020)", detail: "16 GB memory" },
        { name: "KOORUI 27-inch 4K", detail: "external display" },
        { name: "Logitech MX Keys", detail: "keyboard" },
        { name: "Logitech MX Master 3", detail: "mouse" },
        {
          name: "VPS",
          detail: "4 vCPUs and 8 GB memory, for this site and my own services",
        },
      ],
    },
    {
      category: "Audio",
      items: [
        { name: "Yamaha HS5", detail: "studio monitors" },
        {
          name: "beyerdynamic DT 990 PRO",
          detail: "open-back studio headphones",
        },
        { name: "AirPods Pro", detail: "wireless earbuds" },
        { name: "PreSonus AudioBox USB 96", detail: "audio interface" },
      ],
    },
    {
      category: "OS",
      items: [
        { name: "macOS", detail: "kept on the latest release" },
        { name: "Debian 13", detail: "on the server" },
      ],
    },
    {
      category: "Editor",
      items: [
        {
          name: "Neovim",
          detail:
            "with LazyVim as the base config and lazy.nvim managing plugins",
        },
        { name: "Monokai Pro (classic)", detail: "colour theme" },
        {
          name: "Language servers",
          detail:
            "gopls, Pyright and Ruff, terraform-ls, yaml-language-server, helm-ls, vtsls",
        },
        {
          name: "Formatters and linters",
          detail:
            "gofumpt, goimports, golangci-lint, Prettier, ESLint, shfmt, hadolint, tflint",
        },
      ],
    },
    {
      category: "Terminal",
      items: [
        { name: "Ghostty", detail: "terminal emulator" },
        { name: "fish", detail: "shell" },
        {
          name: "zoxide",
          detail: "jumps to a folder from a fragment of its name",
        },
        { name: "lazygit", detail: "Git without leaving the terminal" },
        { name: "ripgrep, fd, fzf", detail: "searching files and text" },
        { name: "JetBrainsMono Nerd Font", detail: "font" },
        { name: "Homebrew", detail: "package manager" },
      ],
    },
    {
      category: "Infrastructure",
      items: [
        {
          name: "kubectl, Helm, k3d",
          detail: "working with Kubernetes and running local clusters",
        },
        { name: "Rancher Desktop", detail: "containers on the Mac" },
        { name: "GitLab CI/CD", detail: "pipelines" },
        { name: "ArgoCD and FluxCD", detail: "GitOps deployments" },
        {
          name: "Terraform and Ansible",
          detail: "provisioning and configuration",
        },
        { name: "HashiCorp Vault", detail: "secrets" },
        { name: "Caddy", detail: "serves this site with automatic HTTPS" },
        {
          name: "Self-hosted GitLab",
          detail: "repositories and container registry",
        },
      ],
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
            Uses
          </motion.h1>
          <p className="mt-4 text-lg font-bold text-gray-900 max-w-lg mx-auto bg-white/80 border-2 border-black p-2 shadow-[3px_3px_0px_#000000]">
            The hardware and software I work with every day.
          </p>
        </div>

        {/* Setup by category */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              <ul className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed space-y-1">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="font-extrabold text-black">
                      {item.name}
                    </span>
                    {item.detail ? `: ${item.detail}` : ""}
                  </li>
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
