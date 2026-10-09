# Upthrust Landing Page — Webflow & Architecture Diagram

This document illustrates the complete user workflow, component hierarchy, data flow, and state transitions of the Upthrust landing page project.

---

## 1. Complete User & Page Navigation Workflow

```mermaid
flowchart TD
    A[🌐 Visitor Enters Landing Page: /] --> B[Hero Section]
    
    subgraph HERO ["Hero Section (Above the Fold)"]
        B --> B1["Navbar: Brand Rocket Logo & CONTACT US Button"]
        B --> B2["Headline: BOLD DESIGN THAT PERFORMS"]
        B --> B3["3D Venus Bust: Auto-rotating GLB Model / Poster Fallback"]
        B --> B4["Hand-Drawn Annotations: Strategy is Cheaper / Motion / Comfortable is Expensive"]
    end
    
    HERO --> C[Social Proof Bar]
    
    subgraph PROOF ["Social Proof Section"]
        C --> C1["Stat Badge: 100+ Brands trusted us"]
        C --> C2["Client Logos: Zomato, Bosch, L'Oréal, Vega, Dell"]
    end
    
    PROOF --> D[Services Section]
    
    subgraph SERVICES ["Services Showcase (Horizontal Slider)"]
        D --> D1["Dynamic 3D Curve Line Background: Continuous Auto-Rotation"]
        D --> D2["Wavy Wireframe Mesh SVG Layer"]
        D --> D3{"Horizontal Slider (Touch / Mouse Wheel / Dots)"}
        D3 --> S1["Slide 1: Strategy & Insight"]
        D3 --> S2["Slide 2: Brand & Visual Identity"]
        D3 --> S3["Slide 3: Product & Digital Experience"]
        D3 --> S4["Slide 4: Creative & Campaign Production"]
    end
    
    SERVICES --> E[Footer Section]
    
    subgraph FOOTER ["Footer & Conversion Section"]
        E --> E1["FitText Headline: UPTHRUST ✦ DESIGN (Anton 200px / Responsive)"]
        E --> E2["Agency Channels & Email Links: upthrust.agency / upthrust.io"]
        E --> E3["Newsletter Signup Form"]
        E --> E4["Social & Legal Footer Links"]
    end
    
    E3 --> F{"User Fills Newsletter Form"}
    F -->|Validation Fails| G["Show Inline Error Alert (role='alert')"]
    F -->|Validation Passes| H["POST /api/newsletter"]
    
    subgraph BACKEND ["Backend Persistence & Tracking"]
        H --> H1["Save Record in data/submissions.json"]
        H --> H2["Push GTM DataLayer Event: form_submit"]
        H --> H3["Show Success Banner in UI"]
    end
```

---

## 2. Component Hierarchy & System Architecture

```mermaid
graph TD
    AppLayout["app/layout.tsx (SEO, Metadata, Schema.org JSON-LD, Fonts)"]
    AppPage["app/page.tsx (Page Assembly)"]

    AppLayout --> AppPage

    AppPage --> HeroGrid["HeroGridBackground.tsx (Blueprint Grid)"]
    AppPage --> Nav["Navbar.tsx (Logo + CONTACT US)"]
    AppPage --> Hero["HeroSection.tsx (Main Layout)"]
    AppPage --> Social["SocialProofBar.tsx (Client Logos)"]
    AppPage --> Serv["ServicesSection.tsx (Horizontal Slider)"]
    AppPage --> Foot["FooterSection.tsx (UPTHRUST DESIGN + Channels)"]

    Hero --> Bust["Statue3DViewer.tsx (<model-viewer> auto-rotate)"]
    Hero --> Marks["HandDrawnMarks.tsx (Oval, Underline, Squiggle SVGs)"]

    Social --> Logos["BrandLogos.tsx (Zomato, Bosch, Dell SVGs)"]

    Serv --> ServBg["ServicesBackground.tsx (Wavy Wireframe SVG)"]
    Serv --> Board["ServiceMockupBoard.tsx (High-fidelity UI mockups)"]

    Foot --> Fit["FitText.tsx (Proportional Scaled Headline)"]
    Foot --> Form["NewsletterForm.tsx (Interactive Form + GTM)"]
    Form --> API["/api/newsletter (Serverless Route Handler)"]
    API --> JSON["data/submissions.json (Disk Persistence)"]
```

---

## 3. Form Submission & Conversion Tracking Flow

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant Form as NewsletterForm.tsx
    participant API as /api/newsletter Route
    participant Storage as data/submissions.json
    participant GTM as window.dataLayer

    User->>Form: Enters Email & Checks Consent Box
    User->>Form: Clicks 'Submit' Button
    Form->>Form: Executes Client Validation (Regex + Consent)
    alt Validation Fails
        Form-->>User: Displays Red Warning Alert
    else Validation Passes
        Form->>API: POST { email, consent }
        API->>API: Server Validation & IP/User-Agent Tagging
        API->>Storage: Append Submission Record
        Storage-->>API: Confirm Disk Write
        API-->>Form: 200 OK Response { status: 'success' }
        Form->>GTM: window.dataLayer.push({ event: 'form_submit', ... })
        Form-->>User: Displays Green Success Banner & Reset Link
    end
```

---

## 4. CMS Content Data Flow (`siteContent.ts`)

```mermaid
flowchart LR
    CMS["Central Content Store\n(app/content/siteContent.ts)"]
    
    CMS --> |Headlines & Copy| Hero["HeroSection.tsx"]
    CMS --> |Service Items & Cards| Services["ServicesSection.tsx"]
    CMS --> |Logos & Stat Badge| Social["SocialProofBar.tsx"]
    CMS --> |Channels, Emails & Legal| Footer["FooterSection.tsx"]

    subgraph NON_DEV ["Non-Developer Editing Capability"]
        E1[Edit Headlines / Subtitles]
        E2[Update Image Asset URLs]
        E3[Modify Capabilities & CTA Links]
        E4[Manage Channel Domain & Email Links]
    end

    NON_DEV -.-> |Hot-Reloads / CMS Feed| CMS
```

---

## 5. Responsive Breakpoint Layout Strategy

| Screen Breakpoint | Target Device | Key Responsive Adaptations |
| :--- | :--- | :--- |
| **`< 768px`** | Mobile (375px) | <ul><li>Single-column vertical stacking</li><li>Touch-swipe horizontal Services slider</li><li>Compact 90px "THAT" SVG and 10px note typography</li><li>FitText scales text down smoothly to 32px</li></ul> |
| **`768px - 1024px`** | Tablet (768px) | <ul><li>Side-by-side split cards for Services (`md:w-[46%]`)</li><li>2-column Footer channels grid (`sm:grid-cols-2`)</li><li>Intermediate font scaling for hero annotations</li></ul> |
| **`>= 1024px`** | Desktop (1440px) | <ul><li>Max 1440px container alignment (`max-w-[1440px] mx-auto`)</li><li>Full 12-column Footer layout (`lg:grid-cols-12`) with 61.6% left / 38.4% right split</li><li>Full 200px Anton typography for **UPTHRUST DESIGN**</li><li>Interactive mouse wheel horizontal slide scrolling</li></ul> |

---

## 6. Verification & Interview Checklist

- [x] **Live Webflow Verification:** Open `http://localhost:3000` to interact with the complete flow.
- [x] **Live Data Persistence:** Inspect `data/submissions.json` or visit `http://localhost:3000/api/newsletter`.
- [x] **GTM Event Verification:** Open DevTools Console and inspect `window.dataLayer`.
- [x] **3D Rotation Verification:** Statue and 3D curve line background auto-rotate smoothly in real-time.
