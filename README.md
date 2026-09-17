# NexaAssist - Remote Digital Support Portfolio

A professional portfolio website for NexaAssist, a remote digital support team providing application support, virtual assistance, data, e-commerce, SEO content, WordPress, and AI automation services.

## Project Overview

NexaAssist is a remote team that helps businesses with digital operations, application support, research, e-commerce tasks, content, SEO, WordPress and automation.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd nexaassist
```

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
npm start
```

### Lint Check

```bash
npm run lint
```

## Project Structure

```
nexaassist/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── how-we-work/       # How We Work page
│   ├── portfolio/          # Portfolio pages
│   │   └── [slug]/        # Portfolio detail (dynamic)
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ContactForm.tsx     # Contact form component
│   ├── CTASection.tsx     # CTA section
│   ├── FAQItem.tsx        # FAQ accordion item
│   ├── Footer.tsx         # Site footer
│   ├── Icons.tsx          # Custom icons
│   ├── Navbar.tsx         # Navigation bar
│   ├── PortfolioCard.tsx  # Portfolio card
│   ├── ProcessStep.tsx    # Process step component
│   ├── SectionTitle.tsx   # Section title
│   ├── ServiceCard.tsx    # Service card
│   └── TeamCard.tsx       # Team member card
├── config/                # Configuration
│   └── site.ts           # Site configuration
├── data/                  # Data files
│   ├── faq.ts            # FAQ data
│   ├── portfolio.ts      # Portfolio data
│   ├── services.ts       # Services data
│   └── team.ts           # Team data
├── public/                # Static files
│   ├── portfolio/        # Portfolio images
│   └── team/            # Team member images
├── next.config.mjs       # Next.js config
├── tailwind.config.ts    # Tailwind config
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

## Routes

- `/` - Home page
- `/about` - About NexaAssist
- `/services` - Services overview
- `/portfolio` - Portfolio listing
- `/portfolio/[slug]` - Portfolio detail
- `/team` - Meet the team
- `/how-we-work` - How we work process
- `/faq` - Frequently asked questions
- `/contact` - Contact form

## Customization

### Edit Site Configuration

Edit `config/site.ts`:

```typescript
export const siteConfig = {
  name: "NexaAssist",
  tagline: "Remote Digital Support for Growing Businesses",
  description: "Your description here",
  email: "YOUR_EMAIL@example.com",
  links: {
    linkedin: "",
    upwork: "",
    fiverr: "",
    github: "",
  },
};
```

### Edit Team Members

Edit `data/team.ts`:

```typescript
export const teamMembers: TeamMember[] = [
  {
    id: "member-id",
    name: "Member Name",
    role: "Role Title",
    description: "Member description",
    skills: ["Skill 1", "Skill 2"],
    image: "/team/image.svg",
    linkedin: "https://linkedin.com/in/...",
  },
];
```

### Edit Services

Edit `data/services.ts`:

```typescript
export const services: Service[] = [
  {
    id: "service-id",
    title: "Service Title",
    description: "Service description",
    shortDescription: "Short description",
    icon: "IconName",
    features: ["Feature 1", "Feature 2"],
    tools: ["Tool 1", "Tool 2"],
  },
];
```

### Edit FAQ

Edit `data/faq.ts`:

```typescript
export const faqItems: FAQItem[] = [
  {
    id: "faq-id",
    question: "Question?",
    answer: "Answer text.",
  },
];
```

### Add Portfolio Project

1. Create a new folder in `public/portfolio/your-project/`

2. Add cover image as `cover.svg` or `cover.png`

3. Add gallery images as `1.svg`, `2.svg`, etc.

4. Edit `data/portfolio.ts` and add a new project:

```typescript
export const portfolioItems: PortfolioItem[] = [
  // existing items...
  {
    slug: "your-project",
    title: "Your Project Title",
    category: "Your Category",
    status: "demo",
    shortDescription: "Brief description",
    description: "Full description",
    clientScenario: "Example scenario",
    problem: "Problem statement",
    objective: "Objective",
    approach: "Approach description",
    process: ["Step 1", "Step 2"],
    result: "Result description",
    tools: ["Tool 1", "Tool 2"],
    skills: ["Skill 1", "Skill 2"],
    image: "/portfolio/your-project/cover.svg",
    gallery: [
      "/portfolio/your-project/1.svg",
      "/portfolio/your-project/2.svg",
    ],
    featured: true,
    isDemoProject: true,
    demoNote: "Demo project note",
  },
];
```

5. The portfolio will automatically appear on the portfolio listing page.

### Replace Portfolio Images

1. Replace images in `public/portfolio/[project]/`

2. Supported formats: SVG, PNG, JPG

3. Recommended sizes:
   - Cover: 800x500px
   - Gallery: 800x500px

### Add Team Member Images

1. Add image to `public/team/`

2. Update `data/team.ts` with the new image path

## Features

- Responsive design (mobile, tablet, desktop)
- Dark mode support
- SEO optimized with metadata
- Accessible with semantic HTML
- Modern UI with Tailwind CSS
- Dynamic portfolio system
- Filterable portfolio categories
- Contact form with validation
- FAQ accordion
- Team showcase
- Service overview

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

Build the project first:
```bash
npm run build
```

Then deploy the `.next` folder and configure your hosting provider.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Notes

- Portfolio images are placeholder SVGs that can be replaced with actual images
- Contact form API route needs to be configured with your email service
- Some placeholder links (social media) need to be updated with actual URLs

## License

This is a private project for NexaAssist.
