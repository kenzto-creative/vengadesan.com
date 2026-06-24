<<<<<<< HEAD
# Vengat R. — Portfolio

Production-ready personal portfolio built from the [Saphal AI Figma design](https://www.figma.com/design/vdLoLVNlxjnxhRNfIoreVF/Saphal-AI), implementing the bento-grid home layout and inner pages (About, Stack, Projects, Tutorials, Contact).

## Tech Stack

- **Next.js 15+** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **shadcn/ui-style** components (`Button`, utilities)
- **Lucide React** icons
- **next-themes** dark/light mode
- **Three.js** rotating globe (lazy-loaded)
- **Vercel** deployment ready

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm, yarn, or pnpm

### Installation

```bash
git clone <your-repo-url>
cd vengadesan.com
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Project Structure

```
app/
  page.tsx              # Home — bento grid
  about/page.tsx
  stack/page.tsx
  projects/page.tsx
  tutorials/page.tsx
  contact/page.tsx
components/
  ui/                   # Button, ArrowButton
  layout/               # Sidebar, Header, MainLayout
  cards/                # Bento cards + BentoGrid
  ThemeToggle.tsx
  SocialLinks.tsx
  Globe.tsx
lib/
  constants.ts          # Nav, social, stack data
  utils.ts
hooks/
  useClock.ts
types/
public/images/          # Figma-exported assets
```

## Design Tokens

| Token | Value |
|-------|-------|
| Background | `#000000` (dark) |
| Card | `#111111` |
| Header | `#121212` |
| Stack blue | `#214ADE` |
| Contact yellow | `#F7A307` |
| Muted text | `#B3B3B3` |
| Font | Azeret Mono |
| Card radius | `36px` |
| Header radius | `48px` |
| Button radius | `24px` |

## Deployment (Vercel)

1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy — no extra env vars required for the static portfolio.

```bash
# Optional: deploy via CLI
npm i -g vercel
vercel
```

## Customization

- Update profile copy in `lib/constants.ts`
- Replace images in `public/images/`
- Add your CV as `public/cv.pdf`
- Adjust social URLs in `lib/constants.ts`

## Accessibility

- Semantic landmarks (`nav`, `main`, `header`, `section`)
- ARIA labels on icon-only controls
- Keyboard-navigable links and forms
- Sufficient contrast on primary UI elements

## Performance

- `next/image` for optimized images
- Dynamic import for Three.js globe
- Framer Motion entrance animations with staggered delays

## License

Private portfolio — all rights reserved.
=======
# vengadesan.com
>>>>>>> 71f7c660dbe71b174ee48fe48078d431e7c6c27d
