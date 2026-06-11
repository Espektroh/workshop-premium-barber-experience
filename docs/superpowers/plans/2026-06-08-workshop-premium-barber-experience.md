# Workshop Premium Barber Experience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build, verify, publish, and deploy a premium conversion landing page for the Workshop Premium Barber Experience on Sunday, November 8, 2026.

**Architecture:** Use a static Vite + TypeScript application with semantic HTML, one central event configuration module, isolated countdown and occupancy helpers, and CSS organized around design tokens and responsive sections. Keep the first release backend-free, with visually active but inert CTA buttons.

**Tech Stack:** Vite, TypeScript, Vitest, semantic HTML, modern CSS, GitHub CLI, Vercel CLI.

---

## File Structure

- `index.html`: SEO shell and application mount point.
- `src/main.ts`: assembles the page, initializes countdown, FAQ, mobile CTA, and reveal behavior.
- `src/config.ts`: stores event date, venue, capacity, occupied seats, price, CTA URL, and external URLs.
- `src/countdown.ts`: pure countdown calculation and renderer.
- `src/occupancy.ts`: pure occupancy percentage calculation.
- `src/styles.css`: design tokens, editorial layout, responsive rules, animation, and accessibility states.
- `src/countdown.test.ts`: tests countdown states.
- `src/occupancy.test.ts`: tests occupancy boundaries.
- `public/assets/*`: optimized Kaua, venue, texture, and social preview images.
- `package.json`: scripts and dependencies.
- `vite.config.ts`: Vitest and build configuration.
- `.gitignore`: ignores dependencies, build output, Vercel metadata, and local QA artifacts.
- `README.md`: content-editing, development, build, and deployment instructions.

### Task 1: Scaffold and configuration

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `.gitignore`
- Create: `src/config.ts`

- [ ] **Step 1: Create package scripts**

Define `dev`, `build`, `preview`, and `test` scripts using Vite, TypeScript, and Vitest.

- [ ] **Step 2: Install dependencies**

Run: `npm install`

Expected: dependency installation completes and `package-lock.json` is created.

- [ ] **Step 3: Add central event configuration**

Export a typed object containing:

```ts
export const eventConfig = {
  dateIso: "2026-11-08T09:00:00-03:00",
  dateLabel: "Domingo, 08 de novembro de 2026",
  endLabel: "Encerramento até as 18h",
  venue: "Cervejaria Imperatriz",
  city: "Sorocaba, SP",
  address: "Av. José Marcelino Barbosa, 173 - Vila Haro",
  capacity: 75,
  occupiedSeats: 0,
  price: 300,
  ctaUrl: "",
  instagramUrl: "https://www.instagram.com/kauahausman/",
  venueUrl: "https://cervejariasorocaba.com.br/"
} as const;
```

### Task 2: Test the dynamic event helpers

**Files:**
- Create: `src/countdown.test.ts`
- Create: `src/occupancy.test.ts`
- Create: `src/countdown.ts`
- Create: `src/occupancy.ts`

- [ ] **Step 1: Write failing countdown tests**

Test days/hours/minutes/seconds before the event and the completed state after the event.

- [ ] **Step 2: Write failing occupancy tests**

Test zero occupancy, partial occupancy, full occupancy, and clamping invalid values.

- [ ] **Step 3: Run tests and confirm failure**

Run: `npm test`

Expected: FAIL because helper implementations do not exist.

- [ ] **Step 4: Implement pure helpers**

Create `getCountdown(target, now)` and `getOccupancy(capacity, occupied)` with deterministic return values.

- [ ] **Step 5: Run tests**

Run: `npm test`

Expected: all tests pass.

### Task 3: Prepare production imagery

**Files:**
- Create: `public/assets/kaua-hero.webp`
- Create: `public/assets/kaua-editorial.webp`
- Create: `public/assets/kaua-stage.webp`
- Create: `public/assets/venue-room.webp`
- Create: `public/assets/venue-detail.webp`
- Create: `public/assets/luxury-texture.webp`

- [ ] **Step 1: Copy approved public Kaua imagery into the project**

Use the approved profile and event photographs already collected from the official profile.

- [ ] **Step 2: Extract representative venue frames**

Use the supplied venue video to create clean stills showing the room and event structure.

- [ ] **Step 3: Copy the approved Image Gen texture**

Use the generated dark editorial texture as a supporting background, never as a substitute for real event imagery.

- [ ] **Step 4: Optimize images**

Convert images to responsive WebP assets with stable dimensions and no unnecessary metadata.

### Task 4: Implement the semantic landing page

**Files:**
- Create: `index.html`
- Create: `src/main.ts`
- Create: `src/styles.css`

- [ ] **Step 1: Build the hero**

Implement navigation, headline, Kaua image, event facts, R$ 300 price, countdown, and inert CTA.

- [ ] **Step 2: Build all approved sections**

Implement the market rationale, Kaua profile, learning outcomes, before/after comparison, premium experience, audience fit, scarcity, FAQ, and final CTA in the approved order.

- [ ] **Step 3: Add interactions**

Initialize the live countdown, accessible FAQ accordion, configurable occupancy bar, smooth anchor navigation, reveal animations, and mobile fixed CTA.

- [ ] **Step 4: Add accessibility and SEO**

Provide semantic headings, meaningful alt text, focus states, reduced-motion behavior, metadata, Open Graph tags, and keyboard-operable controls.

### Task 5: Verify locally

**Files:**
- Modify as needed based on QA.

- [ ] **Step 1: Run automated checks**

Run: `npm test`

Expected: all tests pass.

Run: `npm run build`

Expected: Vite production build completes with no TypeScript errors.

- [ ] **Step 2: Start the development server**

Run: `npm run dev -- --host 127.0.0.1`

Expected: site is available on a local URL.

- [ ] **Step 3: Verify with Browser/IAB**

Inspect desktop and mobile viewports, scroll through all sections, open every FAQ item, test all anchors, verify the CTA remains inert, and confirm there is no horizontal overflow or overlap.

- [ ] **Step 4: Compare visual references**

Capture the implementation at desktop and mobile sizes. Inspect the accepted editorial concept and the current screenshots with `view_image`, then fix mismatches in copy, hierarchy, palette, imagery, spacing, and responsive behavior.

### Task 6: Documentation and source publication

**Files:**
- Create: `README.md`

- [ ] **Step 1: Document operation**

Explain local commands and the exact fields in `src/config.ts` used to update occupancy, CTA URL, date, price, venue, and links.

- [ ] **Step 2: Commit implementation**

Stage only project files and commit with a concise message.

- [ ] **Step 3: Create GitHub repository and push**

Create a public GitHub repository under the authenticated account, add it as `origin`, and push the production branch.

Expected: repository URL is available and the remote branch matches the verified local commit.

### Task 7: Production deployment

**Files:**
- Vercel project metadata remains ignored.

- [ ] **Step 1: Deploy to Vercel**

Run: `npx vercel@latest deploy --prod --yes`

Expected: production deployment reaches READY and returns a public HTTPS URL.

- [ ] **Step 2: Verify the production URL**

Open the production URL in Browser/IAB and verify the hero, images, countdown, FAQ, mobile CTA, and external links.

- [ ] **Step 3: Report delivery**

Provide the GitHub repository, production URL, commit, checks, and any intentionally deferred commercial integrations.
