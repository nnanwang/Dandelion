# The Dandelion Project

 [Dandelion Website](https://dandelion-omega.vercel.app/)

The Dandelion Project is a bilingual English / Chinese public health education website for the Dandelion Initiative. It presents the project's field-based vaccine education work, research background, decision-making framework, timeline, field observations, volunteer recruitment, team structure, and donation information.

The site is designed to communicate evidence-based vaccine education and preventive health work in rural communities with a calm, editorial, nonprofit visual language.


## Overview

The website introduces the Dandelion Initiative as a public health education project focused on vaccine awareness, preventive care, and rural community outreach.

It includes:

- Project introduction and origin story
- Research background and field observations
- The interactive Dandelion Decision Framework
- Project snapshot metrics
- Timeline/roadmap
- Field Notes from Zhangcao Village
- Volunteer recruitment
- Leadership and team page
- Dedicated donation page with partner foundation information

The goal is to make preventive health communication feel understandable, trustworthy, and actionable.

## Tech Stack

This project uses:

- [React 18](https://react.dev/) for UI components
- [Vite 5](https://vitejs.dev/) for development and production builds
- [Tailwind CSS 3](https://tailwindcss.com/) for styling
- [React Router DOM 6](https://reactrouter.com/) for `/`, `/team`, and `/donate` routes
- JavaScript / JSX
- PostCSS and Autoprefixer through the Tailwind build pipeline
- Static assets from `public/images`
- Vercel for deployment

The project does not currently use TypeScript, Framer Motion, Lucide React, or a backend service.

## Project Structure

```text
.
├── public/
│   └── images/                 # Hero, field, QR, and project images
├── src/
│   ├── components/
│   │   ├── layout/             # Header, footer, language toggle
│   │   ├── sections/           # Homepage and page sections
│   │   └── ui/                 # Reusable UI components
│   ├── data/
│   │   └── siteContent.js      # Central bilingual content source
│   ├── pages/
│   │   ├── DonatePage.jsx
│   │   └── TeamPage.jsx
│   ├── styles/
│   │   └── globals.css         # Tailwind imports and shared component classes
│   ├── App.jsx                 # Routes and page composition
│   └── main.jsx                # React entry point
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Main Sections

### Home

The homepage begins with a full-width image hero, bilingual headline, credibility metadata, and calls to explore the framework and timeline.
<img width="1294" height="774" alt="image" src="https://github.com/user-attachments/assets/63f73e1b-dbad-48bd-94fe-172dc2680177" />

### Project Snapshot

A metric band under the hero summarizes active years, media views, funds raised, village targets, volunteer doctor targets, and research design.
<img width="1296" height="701" alt="image" src="https://github.com/user-attachments/assets/f1ef3ab4-99fd-4f41-8880-5366c0f30b97" />

### About

The About area introduces the project origin, founder context, academic research reference, core insight, and high-level “What We Do” pillars.
<img width="1294" height="922" alt="image" src="https://github.com/user-attachments/assets/b83eee1c-b40a-4f40-97e2-9419a671134c" />

### Decision Framework

The Dandelion Decision Framework explains how Trust, Perception, and Access influence decision readiness and chosen prevention. The diagram is editable React/Tailwind UI and includes subtle hover highlighting.
<img width="1294" height="920" alt="image" src="https://github.com/user-attachments/assets/aa272437-8f65-41cf-b843-adfe1e84a0f2" />
<img width="1289" height="680" alt="image" src="https://github.com/user-attachments/assets/1ab1c6cb-f30a-4987-9f4d-d4e06c112d27" />


### Field Notes

The Field Notes section restores field observations from Zhangcao Village, including a documentary-style image collage and observation blocks.
<img width="1294" height="922" alt="image" src="https://github.com/user-attachments/assets/551df5e3-6b20-48c0-a8c4-1a58a568495b" />

### Timeline

The Timeline section shows the project roadmap from the 2025 Zhangcao Village pilot through 2026 research and 2027 scale-up planning.
<img width="1297" height="917" alt="image" src="https://github.com/user-attachments/assets/61523e23-432b-479b-918b-993ba7482424" />

### Volunteer

The Volunteer section invites participation in doctor training, community education, research support, and field coordination. The CTA links to a volunteer email workflow.
<img width="1292" height="827" alt="image" src="https://github.com/user-attachments/assets/b3ee6628-26d0-482e-9274-ea6e8c4671c9" />

### Team

The `/team` page includes a Founder Leadership section and a bilingual team grid. Team bios are expandable to keep cards compact.
<img width="1296" height="921" alt="image" src="https://github.com/user-attachments/assets/e2dcf0eb-5ecf-4702-a0b2-5970a6c0fdb1" />

### Donate

The `/donate` page includes a short hero, Renze Foundation donation CTA, WeChat QR code, institutional partner details, and 2027 budget transparency information.
<img width="1289" height="917" alt="image" src="https://github.com/user-attachments/assets/c9445de4-71b2-428e-83e6-fa6413f2b769" />


## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print a local URL in the terminal, usually:

```text
http://localhost:5173/
```

Open that URL in a browser to view the site.

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is intended for deployment on Vercel.

## License

MIT License.

Unless a separate license file is added, this project may be used, modified, and shared under the MIT License.
