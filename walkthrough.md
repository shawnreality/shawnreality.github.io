# Walkthrough: Portfolio Refactor

I have successfully refactored your personal homepage from static HTML/CSS/JS to a modern **React + Vite + TypeScript** application.

## 🚀 Quick Start

### Development
Run the development server locally:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view the site.

### Build
Build the project for production:
```bash
npm run build
```
The output will be in the `dist/` directory.

### Deployment
I have added a GitHub Actions workflow in `.github/workflows/deploy.yml`.
- Pushing to the `main` branch will automatically build and deploy the site to GitHub Pages.
- Ensure your repository settings have GitHub Pages enabled and set to deploy from the `gh-pages` branch (or `github-pages` environment).

## 📂 Project Structure

```
src/
├── assets/          # Images and icons (migrated from legacy)
├── components/
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Hero, About, Experience, Projects, Contact
│   └── ui/          # Reusable UI components (Modal)
├── data/            # Content extracted from HTML (edit this to update text!)
├── App.tsx          # Main application component
└── main.tsx         # Entry point
```

## 🛠️ Key Changes

### Tech Stack
- **Vite**: Fast build tool and dev server.
- **React**: Component-based UI library.
- **TypeScript**: Type-safe code.
- **Tailwind CSS v4**: Utility-first styling using the modern `@tailwindcss/vite` plugin (no PostCSS config needed).

### Features
- **Responsive Design**: Mobile-first approach with a custom hamburger menu.
- **Smooth Scrolling**: Native smooth scrolling for navigation links.
- **Modals**: Project details open in a clean, accessible modal.
- **Data-Driven**: Content is separated from code in `src/data/index.ts`, making it easy to update text, links, and projects without touching the React components.

### Legacy Files
Your original files have been moved to the `legacy/` directory for reference. You can delete this folder once you are comfortable with the new version.
