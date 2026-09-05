<<<<<<< HEAD
# 🚀 Hariom Upadhyay — Portfolio Website

[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

Official portfolio repository of **Hariom Upadhyay** — Full Stack MERN Developer & Data Analyst, based in Azamgarh, Uttar Pradesh, India. Built with React, TypeScript, Tailwind CSS v4, and Framer Motion.

---

## ✨ Key Features

- 🌗 **8 Switchable Themes** — 4 dark (Emerald, Ocean, Violet, Sunset) + 4 light (Crimson, Arctic, Mint, Amber), all controlled at runtime via CSS custom properties and picked from a palette switcher in the Navbar.
- 🌐 **Bilingual — English & Hindi** — Every section (Hero, About, Skills, Services, Projects, Certifications, FAQ, Contact, Footer) is fully translated, toggled instantly from the Navbar and persisted in `localStorage`.
- ⚡ **Editorial Hero & Typewriter Ticker** — Smooth readiness entrance animations using Framer Motion and rotating Typewriter headings.
- 💼 **Live "In Progress" Project Showcase** — Highlights the current MERN-stack E-Commerce Platform build with a detailed feature breakdown and tech stack.
- 🎓 **Certifications & Education** — Interactive slider for Meta Front-End Developer, Python & Machine Learning, and Complete Web Development certifications.
- ✉️ **Serverless Resend Contact Form** — Powered by Vercel Serverless Functions (`/api/contact.ts`) and a Vite dev API middleware for safe, instant email delivery.
- ❓ **Interactive FAQ Section** — Accordion UI, bilingual, optimized for visitors and AI answer engines.
- 🔍 **Complete SEO & Structured Data** — Schema.org JSON-LD (`Person`), canonical meta, `sitemap.xml`, `robots.txt`, Open Graph, and Twitter Cards.
- 🎨 **Textured, Animated Background** — Floating accent-colored dots, a diagonal-scratch texture layer, and film-grain noise overlay, all theme-aware.
- ✍️ **Custom Typography** — Oswald (bold, condensed, uppercase) for headings, Inter for body text, JetBrains Mono for labels/badges.
- 🖱️ **Custom Cursor** — Smooth spring-follow ring cursor on fine-pointer (desktop) devices.
- 📱 **100% Mobile & Responsive** — Optimized typography and layouts across mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack & Tooling

| Layer | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, JavaScript (ES6+) |
| **Styling & UI** | Tailwind CSS v4, Framer Motion, Lucide Icons, React Icons |
| **State & Theming** | React Context (Theme + Language), CSS custom properties, `localStorage` persistence |
| **Backend & APIs** | Vercel Serverless Functions (`api/contact.ts`), Resend SDK |
| **Notifications** | React Toastify |
| **Tooling & Build** | Vite, PostCSS, Git |
| **Deployment** | Vercel |

---

## 📁 Project Architecture

```text
Hariom Portfolio/
├── api/
│   └── contact.ts               # Vercel Serverless Function (Resend Email Dispatch)
├── public/
│   ├── favicon.png              # Site Favicon
│   ├── og-image.jpg             # Open Graph Social Preview Image
│   ├── robots.txt               # Search Engine Crawler Directives
│   └── sitemap.xml              # XML Sitemap
├── src/
│   ├── assets/                  # Profile Photo & Resume PDF
│   ├── lib/
│   │   ├── theme.tsx            # Theme Context — 8 themes, localStorage persistence
│   │   ├── language.tsx         # Language Context — EN/HI toggle, localStorage persistence
│   │   └── utils.ts             # Shared utilities (cn helper)
│   ├── components/
│   │   ├── ui/
│   │   │   ├── hero-04.tsx      # Main Hero Component
│   │   │   ├── button.tsx       # Themed Button Component
│   │   │   └── typewriter.tsx   # Reusable Typewriter Component
│   │   ├── About.tsx            # Background & Education
│   │   ├── CapabilityStrip.tsx  # Marquee Capability Strip
│   │   ├── Contact.tsx          # Contact Section Container
│   │   ├── ContactInfo.tsx      # Direct Touchpoints (WhatsApp, Phone, Email, Socials)
│   │   ├── CustomCursor.tsx     # Custom Ring Cursor
│   │   ├── FAQ.tsx              # Interactive FAQ Accordion
│   │   ├── FloatingDots.tsx     # Animated Background Dots Layer
│   │   ├── Footer.tsx           # Footer Links & Copyright
│   │   ├── Form.tsx             # Contact Form Component
│   │   ├── Hero.tsx             # Hero Wrapper
│   │   ├── LoadingScreen.tsx    # Entrance Loading Overlay
│   │   ├── Navbar.tsx           # Responsive Header, Theme & Language Switchers
│   │   ├── Philosophy.tsx       # Services Section
│   │   ├── Projects.tsx         # Featured / In-Progress Work
│   │   ├── Skills.tsx           # Tech Stack & Category Filter
│   │   └── Testimonials.tsx     # Certifications & Education
│   ├── App.tsx                  # Main Root Component
│   └── main.tsx                 # Entry Point (Theme + Language Providers)
├── index.html                   # HTML Entry with SEO & JSON-LD Schema
├── vite.config.ts               # Vite Configuration & Local Dev API Middleware
└── package.json                 # Dependencies & Build Scripts
```

---

## ⚡ Getting Started (Local Development)

### 1. Prerequisites
Ensure you have **Node.js** (v18+ recommended) and **npm** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/hariiomupadhyay/hariiom-portfolio.git
cd hariiom-portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Setup Environment Variables
Create a `.env` file in the project root:
```env
RESEND_API_KEY=re_your_resend_api_key_here
```

### 5. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 📦 Building for Production

To create an optimized production bundle:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

---

## 🎨 Theme System

Themes are driven entirely by CSS custom properties defined in `src/index.css` and switched at runtime by setting a `data-theme` attribute on `<html>` (see `src/lib/theme.tsx`). Available themes:

| Mode | Themes |
| :--- | :--- |
| **Dark** | Emerald, Ocean, Violet, Sunset |
| **Light** | Crimson (default), Arctic, Mint, Amber |

## 🌐 Language System

English and Hindi content is colocated with each component via `useLanguage()` from `src/lib/language.tsx`. The active language is persisted in `localStorage` and reflected on the `<html lang>` attribute for accessibility and SEO.

---

## 📬 Contact & Connect

- **Email**: [hariiomupadhyay@outlook.com](mailto:hariiomupadhyay@outlook.com)
- **WhatsApp**: [+91 6387768909](https://wa.me/916387768909)
- **Phone**: [+916387768909](tel:+916387768909)
- **GitHub**: [@hariiomupadhyay](https://github.com/hariiomupadhyay)
- **LinkedIn**: [hariiomupadhyay](https://www.linkedin.com/in/hariiomupadhyay)
- **X (Twitter)**: [@hariiomupadhyay](https://x.com/hariiomupadhyay)
- **Instagram**: [@iam.hariiom](https://www.instagram.com/iam.hariiom)

---

*© 2026 Hariom Upadhyay. All rights reserved.*
=======
# hariiom_portfolio
My Personal web developer-folio built with React and Vite.
>>>>>>> 861126992234ec461a509b78d788394d4b6c6f4c
