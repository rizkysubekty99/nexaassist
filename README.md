# NexaAssist

Virtual Assistance. E-commerce Support. AI Automation.

A professional portfolio website for NexaAssist - a remote two-person team providing virtual assistance, research, e-commerce support, and AI-powered automation services.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **ESLint**: Next.js ESLint configuration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

### Run Linter

```bash
npm run lint
```

## Project Structure

```
nexaassist/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/          # Portfolio page
│   │   └── [slug]/        # Dynamic portfolio detail
│   ├── team/              # Team page
│   ├── how-we-work/       # Process page
│   ├── faq/               # FAQ page
│   └── contact/           # Contact page
├── components/            # Reusable React components
├── config/                 # Site configuration
├── data/                   # Data files (services, portfolio, team, FAQ)
├── public/                 # Static assets
│   ├── portfolio/         # Portfolio images
│   └── team/              # Team member images
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## How to Edit Content

### 1. Site Information (Brand, Contact, Social Links)

Edit `config/site.ts`:

```typescript
export const siteConfig = {
  name: "NexaAssist",
  tagline: "Virtual Assistance. E-commerce Support. AI Automation.",
  description: "Your description here...",
  email: "your-email@example.com",
  links: {
    linkedin: "https://linkedin.com/in/yourprofile",
    upwork: "https://upwork.com/freelancer/yourprofile",
    fiverr: "https://fiverr.com/yourusername",
    github: "https://github.com/yourusername"
  }
};
```

### 2. Services

Edit `data/services.ts`:

- Add, remove, or modify services
- Update features, tools, and related portfolio links

### 3. Portfolio

Edit `data/portfolio.ts`:

To add a new portfolio project:

1. Create folder in `public/portfolio/your-project/`

2. Add images:
   - `cover.svg` or `cover.png` (main image)
   - `1-name.svg`, `2-name.svg`, etc. (gallery images)

3. Add project to `data/portfolio.ts`:

```typescript
{
  slug: "your-project-slug",
  title: "Your Project Title",
  category: "Data & Excel", // Match existing category or add new
  status: "demo", // or "live"
  shortDescription: "Brief description...",
  description: "Full description...",
  clientScenario: "...",
  problem: "...",
  objective: "...",
  approach: "...",
  process: ["Step 1", "Step 2", "Step 3"],
  result: "...",
  tools: ["Tool1", "Tool2"],
  skills: ["Skill1", "Skill2"],
  image: "/portfolio/your-project/cover.svg",
  gallery: [
    "/portfolio/your-project/1-name.svg",
    "/portfolio/your-project/2-name.svg"
  ],
  demoUrl: "", // Optional
  fileUrl: "", // Optional - Google Drive, PDF, etc.
  githubUrl: "", // Optional
  videoUrl: "", // Optional
  featured: false
}
```

### 4. Team Members

Edit `data/team.ts`:

```typescript
{
  id: "unique-id",
  name: "Member Name",
  role: "Job Title",
  description: "Profile description...",
  skills: ["Skill1", "Skill2", "Skill3"],
  image: "/team/member-image.svg",
  linkedin: "https://linkedin.com/in/profile"
}
```

To change team member images:
1. Replace `public/team/member-1.svg` or `member-2.svg`
2. Or update the `image` path in `data/team.ts`

### 5. FAQ

Edit `data/faq.ts`:

```typescript
{
  id: "unique-id",
  question: "Your question?",
  answer: "Your answer..."
}
```

## Adding Portfolio Images

### Option 1: SVG Placeholders

Create SVG files in `public/portfolio/project-name/`:

```svg
<svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Your SVG content -->
</svg>
```

### Option 2: PNG/JPG Images

1. Place images in `public/portfolio/project-name/`
2. Update the `image` and `gallery` paths in `data/portfolio.ts`

### Image Guidelines

- Cover images: 800x400px or similar aspect ratio
- Gallery images: 800x500px or similar aspect ratio
- Use consistent styling across images
- Ensure text is readable

## Adding External Links

### Demo URL

If the portfolio has a live demo, add to `data/portfolio.ts`:

```typescript
demoUrl: "https://yourdemo.com"
```

### File URL

For downloadable samples (Excel, PDF, etc.):

```typescript
fileUrl: "https://drive.google.com/..."
```

### GitHub URL

For technical projects:

```typescript
githubUrl: "https://github.com/yourrepo"
```

### Video URL

For demo videos:

```typescript
videoUrl: "https://youtube.com/watch?v=..."
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms

Build the project first:
```bash
npm run build
```

The built files will be in `.next/`.

## Dark Mode

Dark mode is enabled by default. The theme toggle is in the navigation bar.

Users can switch between light and dark themes, and their preference is saved in localStorage.

## SEO

Metadata is configured for each page:
- Title
- Description
- Open Graph tags
- Twitter cards

Update `app/layout.tsx` for global metadata.

## Accessibility

- Semantic HTML
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Focus states

## Troubleshooting

### Build Errors

Run lint first:
```bash
npm run lint
```

### Missing Images

Ensure image paths in `data/portfolio.ts` match actual file paths in `public/`.

### TypeScript Errors

Check that all imports are correct and data structures match the interfaces defined in the data files.

## License

© 2026 NexaAssist. All rights reserved.
