# EventNest — University Event Discovery & Registration Platform

> **Discover. Explore. Experience.**  
> Browser Tab Title: `EventNest | Discover Events`  
> A premium, responsive university event discovery and digital ticketing platform engineered with HTML5, CSS3, Vanilla JavaScript, and LocalStorage data persistence.

---

## 🧭 Visual Identity & Editorial Design

**EventNest** is styled with an international festival and cultural symposium aesthetic. Moving away from generic dark dashboards, the design features a warm, tactile editorial canvas with bold Swiss/Grotesk typography, zero-overlap asymmetric photo compositions, and electric blue and coral accents.

### Color Palette

| Color Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Warm Off-White** | `#F6F4EF` | Primary page canvas, warm editorial background |
| **Midnight Navy** | `#172C50` | Primary bold headings, high-contrast dark accents, footer background |
| **Electric Blue** | `#2449D8` | Primary CTA buttons (*"Discover Events"*, *"Register Now"*), active pill indicator |
| **Coral Orange** | `#F06443` | Dynamic highlights, hero focal point (`UNFORGETTABLE.`), status badges |
| **Soft Lavender** | `#EDE9FA` | Pill background, subtle tags, badge surfaces |
| **Pure White** | `#FFFFFF` | Card surfaces, modal sheets, input backgrounds |
| **Body Text** | `#555C66` | Clean, readable neutral body typography |

### Typography

- **Headings**: [`Space Grotesk`](https://fonts.google.com/specimen/Space+Grotesk) — Bold, geometric, tight letter-spacing (`-0.03em`), uppercase editorial styling.
- **Body & UI**: [`DM Sans`](https://fonts.google.com/specimen/DM+Sans) — Highly legible, modern humanist sans-serif with natural proportions.

---

## 📋 University Assignment Requirements Audit

| # | Requirement | Status | Implementation Details |
| :-: | :--- | :---: | :--- |
| **1** | Modern homepage with an attractive hero section | ✅ Complete | Two-column hero with oversized typography, concert photograph, live countdown timer, and **zero-overlap** layout. |
| **2** | Upcoming and featured events | ✅ Complete | Asymmetric editorial showcase (*Resonance Music Fest*, *TechNova*, *Clash of Titans*) + 10 upcoming events in the catalog. |
| **3** | Event cards with name, date, venue, image & description | ✅ Complete | Reusable cards featuring high-res imagery, date, venue, category badge, excerpt, and action buttons. |
| **4** | Event search functionality | ✅ Complete | Live client-side search by title with instant keystroke filtering and one-click clear button. |
| **5** | Working category filters | ✅ Complete | Interactive filter pills: All, Technology, Music, Education, Business, Cultural, Sports with dynamic counters. |
| **6** | Event details view when an event is selected | ✅ Complete | Accessible modal dialog with high-res photo banner, organizer, agenda highlights, and Web Share API integration. |
| **7** | Registration option for each event | ✅ Complete | "Register" buttons on cards, in event details modal, in the hero countdown card, and in featured banners. |
| **8** | Registration form (Full Name, Email, Phone, Event) | ✅ Complete | Validated modal form with pre-filled event selection, full name, email, and 10-digit phone inputs. |
| **9** | JavaScript form validation | ✅ Complete | Non-empty checks, RFC 5322 regex for email, Indian 10-digit regex (`/^[6-9]\d{9}$/`), and inline error messages. |
| **10** | Successful registration confirmation | ✅ Complete | Printable digital ticket pass modal with unique ID (`EN-2026-XXXX`), gate QR code, tear notch, and toast alert. |
| **11** | Responsive design (desktop, tablet, mobile) | ✅ Complete | Tested and fluid across 1440px, 1024px, 768px, and 375px viewports with slide-in mobile navigation drawer. |
| **12** | GitHub-ready project structure and complete README | ✅ Complete | Clean directory structure, zero build dependencies, comprehensive documentation, and Git-ready files. |

---

## 🛠️ Key Platform Features

- **Zero Overlap Hero Section**: Strict vertical spacing between the hero festival photograph and the floating TechNova event countdown card across all screen resolutions (1440px, 1024px, 768px, 375px).
- **LocalStorage Persistence**:
  - `eventnest_registrations`: Saved passes remain intact after page reload.
  - `eventnest_theme`: Remembers the user's light/dark mode preference.
  - Backward compatibility: Seamlessly reads legacy storage keys if present.
- **Self-Service "My Passes" Portal**: View all booked passes in a clean modal, print individual digital tickets, or cancel reservations with instant UI update.
- **Duplicate Registration Prevention**: Prevents reserving the same event more than once with the same email address.
- **Accessible UI**: Full keyboard support, `aria-*` roles and labels, semantic HTML5 landmarks, and high-contrast color ratios.
- **Contact Form Demo Notice**: Explicitly notifies users that inquiries are validated locally as a frontend demonstration without sending data to a remote server.
- **Universal Image Fallback**: In the event an external image fails to load, cards gracefully fall back to an embedded SVG placeholder without broken image icons.
- **Micro-Interactions & Hover Polish**: 200–220ms subtle hover lift and shadow elevation on all event cards for responsive tactile feedback.
- **Gentle Viewport Animations**: Smooth fade-in scroll reveals as sections enter view, respecting `prefers-reduced-motion` and ensuring 100% content visibility even if JavaScript is disabled.
- **Floating Back to Top**: Elegant circular quick-return button that smoothly appears after scrolling past the hero.

---

## 💻 How to Run & Test Locally

No build tools, bundlers, or backend servers are required.

### Option 1: Direct File Launch
Double-click [`index.html`](file:///c:/Users/KIIT/Desktop/K-Explore/index.html) in your file manager to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

### Option 2: VS Code Live Server
1. Open the project folder in VS Code.
2. Click **Go Live** on the bottom status bar.
3. Open `http://127.0.0.1:5500/index.html`.

### Option 3: Local HTTP Server (PowerShell / Terminal)
```powershell
cd c:\Users\KIIT\Desktop\K-Explore
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

---

## 📂 Project Structure

```text
K-Explore/
├── index.html        # Main HTML5 structure, semantic sections, modals
├── style.css         # Complete editorial styling, responsive design, dark mode
├── script.js         # Event catalog, search/filter engine, validation, LocalStorage
└── README.md         # Documentation, assignment audit, and usage instructions
```

---

*Engineered for the EventNest University Showcase. Designed for student discovery and community engagement.*
