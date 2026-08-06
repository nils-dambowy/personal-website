# Nils Dambowy - Personal Website

Personal portfolio website built with React, Vite, TailwindCSS, and Framer Motion.

Cloud IT Trainee @ HZD | M.Sc. Computer Science Student @ TU Darmstadt.

---

## Features

- Fast build setup with Vite and React 18
- Responsive Neo-Brutalist user interface
- Interactive canvas background and Framer Motion transitions
- Automated CI/CD build and GitHub Pages deployment workflow

---

## Tech Stack

- Framework: React 18, React Router v6
- Build Tool: Vite
- Styling: TailwindCSS, PostCSS
- Motion: Framer Motion
- Infrastructure: GitHub Actions, Docker, Kubernetes

---

## Local Development

### Installation

```bash
git clone https://github.com/nils-dambowy/personal-website.git
cd personal-website
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build & Lint

```bash
npm run lint
npm run build
npm run preview
```

---

## CI/CD Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/ci-cd.yml`). On every push to `main`, it runs code verification, builds the static production bundle, and deploys it to GitHub Pages.

---

## License

MIT License.
