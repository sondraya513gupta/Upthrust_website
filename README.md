# Upthrust Landing Page — Development Assignment

A responsive, high-performance landing page translated from the Upthrust Figma design and 3D assets, built with modern frontend architecture, structured CMS content modeling, demonstrable form data storage, and Google Tag Manager conversion event tracking.

---

## 1. Stack Choice & Rationale

* **Next.js 16 (App Router) & React 19**: Server Components minimize client-side JavaScript payloads to maximize Core Web Vitals and SEO rankings.
* **Tailwind CSS v4**: Utility-first CSS ensuring lightweight, responsive design tokens and rapid maintenance.
* **TypeScript**: Strict type definitions for content schemas, API payloads, and component contracts.
* **`next/font` & `next/image`**: Zero Layout Shift (CLS = 0) with Google Fonts (`Syne` & `Plus Jakarta Sans`) and automated responsive asset delivery.

---

## 2. Project Architecture

```
assignment/
├── app/
│   ├── api/
│   │   └── newsletter/
│   │       └── route.ts          # Server API: Validation & JSON persistence
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky header & brand rocket logo
│   │   ├── HeroSection.tsx       # BOLD DESIGN THAT PERFORMS & Venus bust
│   │   ├── HeroGridBackground.tsx# Architectural CAD blueprint & grid
│   │   ├── HandDrawnMarks.tsx    # SVG organic oval, underlines & squiggles
│   │   ├── BrandLogos.tsx        # Vector SVG logos (Zomato, Bosch, L'Oréal...)
│   │   ├── SocialProofBar.tsx    # 100+ trust badge & client logo ribbon
│   │   ├── ServicesSection.tsx   # Side-by-side cards with continuous 3D pipe
│   │   ├── ServiceMockupBoard.tsx# High-fidelity UI & branding showcase boards
│   │   ├── ServicesBackground.tsx# 3D warped perspective wireframe mesh
│   │   ├── FooterSection.tsx     # UPTHRUST.DESIGN headline & agency channels
│   │   └── NewsletterForm.tsx    # Accessible form with GTM dataLayer push
│   ├── content/
│   │   └── siteContent.ts        # Central CMS data store (editable content)
│   ├── globals.css               # Design tokens & typography utilities
│   ├── layout.tsx                # Technical SEO, JSON-LD Schema & font loading
│   └── page.tsx                  # Single-page layout assembly
├── data/
│   └── submissions.json          # Form submission storage (demonstrable)
└── public/
    ├── pic1.png                  # 3D continuous copper coil (Services)
    ├── pic2.png                  # 3D neoclassical Venus bust (Hero)
    └── pic3.png                  # Upthrust 3-petal flower symbol (Footer)
```

---

## 3. How Content Is Edited (CMS / Content Structure)

All website content is decoupled from presentation components and centralized in **[`app/content/siteContent.ts`](file:///c:/Users/sondr/OneDrive/Desktop/Uptrurst_Assignment/assignment/app/content/siteContent.ts)**:
* **Headlines & Micro-copy**: Update `hero.headlineTop`, `hero.leftNote1`, etc.
* **Services**: Add or update cards in `services.items` (titles, descriptions, capabilities).
* **Footer & Channels**: Edit domain links, emails, and social handles in `footer`.
* **Live Demo**: Any change in `siteContent.ts` hot-reloads instantly, demonstrating how a headless CMS (e.g., Sanity, Strapi) would seamlessly feed this website.

---

## 4. Form Handling, Persistence & GTM Tracking

### Form Validation & UX
* **Client-side & Server-side Validation**: Strict email regex and mandatory consent confirmation.
* **Accessible States**: Loading state, inline error alerts (`role="alert"`), and success feedback banner with a reset toggle.

### Demonstrable Data Storage
* Form submissions are POSTed to `/api/newsletter` and stored on disk in **`data/submissions.json`**.
* **Interview Verification**:
  * Open `http://localhost:3000/api/newsletter` in any browser to view stored JSON records.
  * Inspect `data/submissions.json` directly in your code editor.

### Required Conversion Tracking
* Upon successful submission, a custom event is pushed into Google Tag Manager's data layer:
  ```javascript
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submit",
    formId: "footer_newsletter_signup",
    email: submittedEmail,
    timestamp: new Date().toISOString(),
  });
  ```
* DevTools Console also displays a formatted badge logging the exact payload dispatched to `window.dataLayer`.

---

## 5. Technical SEO & Accessibility (A11y)

* **SEO Setup**:
  * Exactly one `<h1>` in the hero section followed by logical `<h2>`/`<h3>` hierarchy.
  * Dynamic Open Graph tags (`og:title`, `og:description`, `og:image`).
  * Schema.org `Organization` JSON-LD structured data.
  * Canonical URL configuration.
* **Accessibility Targets (90+ score)**:
  * Proper descriptive `alt` tags on all images.
  * Semantic HTML5 landmark structure (`<header>`, `<main>`, `<section>`, `<footer>`).
  * Explicit form labels (`<label htmlFor="...">`) and visible focus states.

---

## 6. AI Tools Disclosure

* **Tools Used**: AI pair-programming assistant.
* **Role & Review**: AI assisted in generating initial TypeScript interfaces, SVG paths for architectural/hand-drawn marks, and component boilerplate. All code was reviewed, validated, styled for responsive fidelity, and manually verified for performance and criteria compliance.

---

## 7. Known Limitations & Next Steps

* **Future Enhancements**:
  * Connect `/api/newsletter` to an external CRM/database provider (e.g., Supabase, HubSpot, or Resend).
  * Enhance horizontal service scroll with GSAP / Framer Motion scroll-scrubbing.
