# 🌐 Nils Dambowy — Personal Portfolio Website

[![CI/CD Pipeline](https://github.com/nils-dambowy/personal-website/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/nils-dambowy/personal-website/actions/workflows/ci-cd.yml)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Cloud Native](https://img.shields.io/badge/Focus-Cloud%20%26%20DevOps-38BDF8?logo=kubernetes&logoColor=white)](https://kubernetes.io/)

A modern, high-performance personal portfolio website built with a **Neo-Brutalist design aesthetic**, interactive Canvas particle effects, and Framer Motion animations. 

Maintained by **Nils Dambowy** — Cloud IT Trainee @ HZD & M.Sc. Computer Science Student @ TU Darmstadt.

---

## ✨ Features & Architecture

- ⚡ **Lightning Fast**: Built on Vite + React 18 for sub-second build times and instant HMR.
- 🎨 **Neo-Brutalist Aesthetic**: High-contrast borders (`border-2 border-black`), vibrant yellow (`#ffc229`) & blue accents, and retro box shadows (`shadow-[5px_5px_0px_#000]`).
- 🎆 **Interactive Canvas Particles**: Custom particle canvas (`ParticleBackground.jsx`) reacting to mouse movement.
- 🚀 **Cloud & DevOps Ready**: Pre-configured GitHub Actions (`.github/workflows/ci-cd.yml`) and GitLab CI (`.gitlab-ci.yml`) pipelines with linting, automated builds, and optional HashiCorp Vault secrets integration.
- 📱 **Fully Responsive**: Optimized layouts for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 18, React Router v6, Vite |
| **Styling & Motion** | TailwindCSS, Framer Motion, HTML5 Canvas |
| **Cloud & Infrastructure** | Docker, Kubernetes, GitLab CI/CD, GitHub Actions, HashiCorp Vault |
| **Tooling & Quality** | ESLint, PostCSS, Autoprefixer |

---

## 💻 Local Development

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/nils-dambowy/personal-website.git
cd personal-website

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Build & Production

```bash
# Run ESLint code quality checks
npm run lint

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🔐 HashiCorp Vault & Secrets Management Integration

In corporate cloud environments (e.g. HZD infrastructure), sensitive credentials (API tokens, SSH keys, deployment credentials) are managed securely via **HashiCorp Vault**.

### How Secrets are fetched in CI/CD:
1. **OIDC / JWT Authentication**: CI/CD jobs authenticate dynamically against Vault using OIDC tokens without storing static passwords.
2. **Secrets Injection**: Vault injects environment variables dynamically at runtime into the build container.

See `.gitlab-ci.yml` and `.github/workflows/ci-cd.yml` for template jobs configuring Vault authentication.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
