# Samiksha Wararkar Portfolio

A bold, editorial portfolio website for Samiksha Wararkar, a digital marketing fresher from Nagpur. The site presents her work and practical experience across SEO, WordPress, social media, graphic design, and Google Ads.

## Features

- Responsive single-page portfolio layout
- Hero, about, selected work, certificates, journey, resume, and contact sections
- Animated reveals, cursor lighting, magnetic links, and tilt interactions
- SEO metadata for the home page
- Reusable UI primitives built with Radix UI and Tailwind CSS

## Tech Stack

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS 4
- Radix UI primitives
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm, pnpm, yarn, or Bun

### Installation

```bash
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Then open the URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the project with ESLint |
| `npm run format` | Format project files with Prettier |

## Project Structure

```text
src/
├── components/site/   Portfolio sections and shared site primitives
├── components/ui/     Reusable Radix-based UI components
├── routes/            TanStack Router route definitions
├── hooks/              Shared React hooks
├── lib/                Utilities and error handling
├── router.tsx          Router configuration
└── styles.css          Global styles and design tokens
public/assets/          Images and other static assets
```

## Assets

Static images and other public files belong in `public/assets/`. The portfolio currently references the profile image at `public/assets/profile.jpg`.

## Production Build

Build the application and preview it locally before deployment:

```bash
npm run build
npm run preview
```
