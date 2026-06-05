# ✒️ Shraddha — Good & Neat Handwriting Institute

A premium, fully responsive **Next.js 15** website for a handwriting-improvement and calligraphy institute.
Two equal program pillars — **Handwriting** and **Calligraphy** — presented with an elegant ink-on-paper aesthetic.

> One Vision. One Academy. Many Learning Paths.

---

## ✨ Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom ink / gold / cream theme)
- **Framer Motion** (scroll + entrance animations)
- 100% **SVG illustrations & icons** — no external image dependencies

## 🎨 Design

| Token | Hex | Use |
|-------|-----|-----|
| Ink (Navy) | `#0A1A55` | Primary brand, dark sections, text |
| Ink Deep | `#06103D` | Footer, deepest backgrounds |
| Gold | `#E0A407` | Accent, calligraphy highlights, CTAs |
| Gold Light | `#FCBB19` | Hover / bright accents |
| Cream | `#FBF8F0` | Section backgrounds (paper feel) |
| Paper | `#FEFCF7` | Cards, base background |

**Fonts:** Fraunces (serif headings) · Dancing Script (calligraphic accents) · Inter (body).

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build
npm start       # serve production build
```

---

## 📁 Project Structure

```
shraddha-academy/
├── app/
│   ├── layout.tsx              # Root layout, metadata, navbar/footer
│   ├── page.tsx                # Homepage (all sections)
│   ├── about/page.tsx          # About the academy
│   ├── gallery/page.tsx        # Calligraphy gallery
│   ├── contact/page.tsx        # Contact + booking form + map
│   └── programs/[slug]/page.tsx# Dynamic course pages (7 programs)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav + mobile menu
│   │   └── Footer.tsx          # Dark ink footer
│   ├── sections/
│   │   ├── Hero.tsx            # Split hero w/ writing-hand SVG
│   │   ├── Stats.tsx           # Animated counters
│   │   ├── Pillars.tsx         # Handwriting vs Calligraphy
│   │   ├── Programs.tsx        # Grouped course grid
│   │   ├── Showcase.tsx        # Before/After + gallery strip
│   │   ├── WhyChooseUs.tsx     # Feature cards
│   │   ├── Testimonials.tsx    # Student stories
│   │   ├── CTABanner.tsx       # Closing call-to-action
│   │   └── BookingForm.tsx     # Validated demo form
│   └── ui/
│       ├── FadeIn.tsx          # Scroll-reveal wrapper
│       ├── SectionHeading.tsx  # Eyebrow + title + pen divider
│       ├── Counter.tsx         # Count-up animation
│       ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│       └── icons.tsx           # Program SVG icon map
├── lib/
│   └── data.ts                 # Programs, stats, testimonials, FAQs
├── styles/
│   └── globals.css             # Tailwind + theme + component classes
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## 🧩 The Two Pillars

The whole site is organised around two equally-weighted offerings:

**Handwriting** (everyday writing) — Kids Handwriting · Cursive Writing · Adult Handwriting & Signature · Speed & Exam Writing

**Calligraphy** (lettering art) — Modern Calligraphy · Classic & Nib Lettering · Invitations & Lettering Art

All seven are data-driven from `lib/data.ts` and rendered through the single dynamic route `app/programs/[slug]/page.tsx`, each with overview, curriculum, benefits, FAQ, and a CTA.

---

## ✏️ Customising

- **Content** (programs, testimonials, contact details, FAQs) → edit `lib/data.ts`
- **Colours / fonts** → `tailwind.config.ts` + `styles/globals.css`
- **Real photos** → the SVG portrait avatars in `Testimonials.tsx`, `Hero.tsx`, and the gallery can be swapped for `<img>` tags pointing at `/public/images/...` once you add licensed photos. Use `object-cover` and keep the same rounded wrappers.

---

## 🔍 SEO

Per-page metadata (title, description, keywords) is defined with the Next.js `Metadata` API in every `page.tsx`, plus Open Graph defaults in `app/layout.tsx`. Program pages generate metadata dynamically from `lib/data.ts`.

---

© 2026 Shraddha. All Rights Reserved.
