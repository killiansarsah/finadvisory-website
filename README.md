# FinAdvisory Chartered Accountants — Corporate Web Application

A modern, responsive multi-page web platform for **FinAdvisory Chartered Accountants**, a premier professional accounting, tax, audit, and advisory firm operating in Accra, Ghana.

Built with **React**, **Vite**, **React Router v6**, **Lucide Icons**, and a bespoke executive design system adhering to strict corporate branding (Midnight Navy `#021226` & Royal Ghanaian Gold `#c59b27`).

---

## 🌟 Key Features

- **Multi-Page Architecture**:
  - `/` — Homepage with executive hero showcase, 8 core service cards, regulatory compliance preview, firm narrative, and direct consultation CTA.
  - `/about` — Firm history, core values (Accuracy, Integrity, Professionalism), credentials, leadership, and partner accreditations.
  - `/services` — Detailed service catalogue (Audit & Assurance, Accountancy, Payroll Management, Corporate Tax Advisory, Management Consultancy, Statutory Compliance).
  - `/compliance` — Ghana statutory filing schedules (GRA Corporate Tax & e-VAT, Registrar-General's Department annual returns, SSNIT, zero-penalty assurance).
  - `/insights` — Thought leadership articles and tax calendar guides for SMEs and enterprises in Ghana.
  - `/contact` — Contact details (Accra, Ghana), telephone lines, interactive consultation booking form, and firm locations.
- **Corporate Branding**:
  - High-resolution vector-quality corporate emblem & typography.
  - Automatic light/dark logo adaptation (standard navy/gold logo for light headers, crisp white/gold logo for dark midnight footers).
  - Clean typography and executive visual polish.
- **Interactive Modals**:
  - Consultation booking modal with pre-filled service selection.
  - Detailed service breakdown drawers.
  - Full article reader modals for insights.
  - Legal, privacy policy, and client confidentiality modals.
- **Scroll Convergence Motion**:
  - Smooth scroll reveal animations powered by lightweight intersection observers.
  - Smooth page-transition scrolling via `<ScrollToTop />`.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `yarn` / `pnpm`

### Installation

```bash
# Clone the repository
git clone <your-github-repo-url>
cd finadvisory-react

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📦 Production Build

```bash
# Compile and optimize production bundle
npm run build

# Preview production build locally
npm run preview
```

The production output is generated in the `dist/` directory, ready to deploy to Vercel, Netlify, Cloudflare Pages, AWS Amplify, or any static web host.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS3 with CSS Custom Properties (Variables), Flexbox, CSS Grid, and responsive clamp styling.

---

## 📄 License

Private & Confidential — © FinAdvisory Chartered Accountants. All rights reserved.
