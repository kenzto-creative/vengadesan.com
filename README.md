# Vengat R. — Portfolio

Production-ready personal portfolio built from the [Saphal AI Figma design](https://www.figma.com/design/vdLoLVNlxjnxhRNfIoreVF/Saphal-AI), implementing the bento-grid home layout and all 24 Page 5 screens (About, Stack, Projects, Tutorials, Contact, Dashboard, Profile, Mega Menu, Images/Videos, and more).

## Tech Stack

- **Next.js 16** (App Router)
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
git clone https://github.com/kenzto-creative/vengadesan.com.git
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

## Routes

| Route | Figma screen |
|-------|----------------|
| `/` | Home (Black / White / Menu Close) |
| `/dashboard` | Dashboard |
| `/profile` | Profile (Bio, Image flip) |
| `/profile/objective` | Profile (Objective) |
| `/profile/post` | Profile (Post-Image) |
| `/profile/post/video` | Profile (Post-Video) |
| `/profile/friends` | Profile (Friends) |
| `/menu` | Mega Menu |
| `/images`, `/images/[id]` | Images Listing, Image Preview |
| `/videos`, `/videos/[id]` | Video Listing, Full/Short Preview |
| `/about` | About Me |
| `/stack` | Stack |
| `/projects`, `/projects/[slug]` | Projects Listing, Project Landing |
| `/tutorials`, `/tutorials/[slug]` | Tutorials Listing, Tutorial Landing |
| `/contact` | Contact |
| `/cv` | CV preview + download |

## Project Structure

```
app/                    # App Router pages
components/
  ui/                   # Button, ArrowButton
  layout/               # Sidebar, Header, MainLayout, MediaLayout
  cards/                # Bento, grid, and listing cards
  sections/             # Page sections and lightboxes
lib/
  constants.ts          # Nav, social, site config
  content.ts            # Listing data, filters, helpers
hooks/
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

1. Push the repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected).
4. Deploy — no extra env vars required.

## Customization

- Update profile copy in `lib/constants.ts` and `lib/content.ts`
- Replace images in `public/images/`
- Add your CV as `public/cv.pdf`
- Adjust social URLs in `lib/constants.ts`

## License

Private portfolio — all rights reserved.
