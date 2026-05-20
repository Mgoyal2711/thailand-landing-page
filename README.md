# Thailand Landing Page (React)

React + Vite conversion of the **Kingdom of Holidays** Thailand tour landing site. Visual design and content match the original HTML project.

## Run locally

```bash
cd "/Users/mayankgoyal/Downloads/thailand landing page"
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Routes

| Path | Page |
|------|------|
| `/` | Home (main landing) |
| `/about` | About Us |
| `/contact` | Contact Us |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/cancel` | Cancellation Policy |

## Project structure

- `src/pages/Home.jsx` — main landing (converted from `index.html`)
- `src/components/` — package gallery, guide hub, enquiry modal, footer, WhatsApp widget
- `public/` — images (`img/`, `3-nights/`, `destinations/`, etc.)

Original static site: `KOH-LandingPage-main`
