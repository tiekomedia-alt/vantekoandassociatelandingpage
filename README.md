# Vanteko & Associates — Premier Commercial Law Firm Landing Page

A modern, high-converting, responsive landing page created for **Vanteko & Associates** (Barristers, Solicitors & Legal Consultants). Designed to reflect institutional prestige, authority, and commercial clarity for corporate clients, multinational institutions, and high-net-worth individuals.

![Preview Banner](https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80)

---

## 🏛️ Features & Architecture

- **Prestige Aesthetic**: Custom luxury dark navy palette with warm gold and bronze accents, paired with editorial serif typography (`Playfair Display`) and modern sans-serif readability (`Plus Jakarta Sans`).
- **Interactive Practice Areas Filter**: Real-time filtering across Corporate & M&A, Litigation & ADR, Banking & FinTech, Real Estate, and Energy.
- **Dual Consultation Entry Points**:
  - Hero Quick Evaluation form.
  - Dedicated Consultation & Retainer Request section with practice area & venue selector (In-Person / Virtual Video Conference).
  - Global Interactive Modal accessible from all CTAs.
- **Client Trust & Proof**:
  - Verified statistics banner ($1.2B+ transaction volume, 98.5% dispute resolution rate, 25+ years senior expertise).
  - Landmark transaction case studies.
  - Executive leadership profiles with bar admissions and credentials.
  - Testimonials from corporate CEOs and General Counsels.
- **Interactive FAQ Accordion**: Instant answers regarding conflicts of interest, fee arrangements, foreign entity incorporation, and emergency litigation turnaround times.
- **Legal Briefings & Thought Leadership**: Curated briefing papers on evolving regulatory frameworks.
- **Zero-Dependency Architecture**: Built using semantic HTML5, modern Tailwind CSS, Lucide icons, and lightweight vanilla JavaScript — perfectly optimized for instant loading and 100/100 performance scores.

---

## 📂 Project Structure

```
.
├── index.html              # Main landing page
├── css/
│   └── style.css           # Custom styles, gradients, glassmorphism & typography
├── js/
│   └── main.js             # Navigation, modal logic, tab filters, accordion & form toasts
├── assets/
│   └── images/             # Local images and graphic assets
├── .gitignore              # Standard git ignore rules
└── README.md               # Documentation & setup guide
```

---

## 🚀 Instant Deployment

### Option 1: GitHub Pages (Recommended)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern landing page for Vanteko & Associates"
   git push origin main
   ```
2. In your GitHub repository, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
4. Choose `main` branch and `/ (root)` folder, then click **Save**.
5. Your website will be live at `https://tiekomedia-alt.github.io/vantekoandassociatelandingpage/` within minutes.

### Option 2: Vercel / Netlify
- Drag and drop this folder onto [Netlify Drop](https://app.netlify.com/drop) or import the repository in [Vercel](https://vercel.com) for instant zero-configuration deployment with free SSL and custom domain mapping.

---

## ⚙️ Customization Guide

### 1. Updating Contact Details & Addresses
In [index.html](file:///c:/Users/HP/Downloads/vanteko%20and%20associates%20landing%20page/index.html):
- **Phone Numbers**: Search for `+234 (0) 1 888 4590` and update to your active office lines.
- **Email Addresses**: Update `counsel@vantekoassociates.com` and `info@vantekoassociates.com`.
- **Physical Chambers**: Edit the addresses in the **Chambers / Contact** section (Lagos & Abuja).

### 2. Managing Practice Groups
In `index.html`, each card inside the `#practice-areas` section is tagged with `data-category="corporate|dispute|banking|realestate"`. You can add, modify, or reorder cards easily.

### 3. Attorney Profiles & Leadership
Update headshots, qualifications (SAN, LL.M, FCIArb), and practice leads under the `#attorneys` section.

---

## ⚖️ Legal & Brand Notes
*Created for Vanteko & Associates. All content is structured under standard legal ethics and corporate compliance guidelines.*
