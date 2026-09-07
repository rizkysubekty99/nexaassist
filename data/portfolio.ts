export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  status: "demo" | "live";
  shortDescription: string;
  description: string;
  clientScenario: string;
  problem: string;
  objective: string;
  approach: string;
  process: string[];
  result: string;
  tools: string[];
  skills: string[];
  image: string;
  gallery: string[];
  demoUrl?: string;
  fileUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  featured: boolean;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "customer-data-cleaning",
    title: "Customer Data Cleaning & Management",
    category: "Data & Excel",
    status: "demo",
    shortDescription: "Organized and cleaned messy customer data with validation, deduplication, and structured formatting.",
    description:
      "This project demonstrates a comprehensive approach to cleaning and organizing customer data. The workflow includes data assessment, cleaning, validation, and delivery of structured, actionable data.",
    clientScenario:
      "A small business had accumulated years of customer data with inconsistencies, duplicates, and formatting issues that made reporting and customer communication difficult.",
    problem:
      "The existing data contained duplicate entries, inconsistent formatting, missing required fields, and invalid email addresses. Manual cleanup was time-consuming and error-prone.",
    objective:
      "Create a systematic approach to clean, validate, and organize customer data into a structured format suitable for marketing campaigns and customer management.",
    approach:
      "We developed a multi-step data cleaning process using Excel and Google Sheets with formulas, data validation, and conditional formatting to identify and fix issues efficiently.",
    process: [
      "Raw Data Assessment",
      "Remove Duplicates",
      "Format Standardization",
      "Email Validation",
      "Data Enrichment",
      "Final Review",
      "Structured Delivery",
    ],
    result:
      "Successfully cleaned and organized over 5,000 customer records with 95% data accuracy. The structured format enabled effective email marketing campaigns and improved customer management.",
    tools: ["Excel", "Google Sheets", "Google Forms", "CSV Tools"],
    skills: ["Data Cleaning", "Excel Formulas", "Data Validation", "Documentation"],
    image: "/portfolio/customer-data-cleaning/cover.svg",
    gallery: [
      "/portfolio/customer-data-cleaning/1-dashboard.svg",
      "/portfolio/customer-data-cleaning/2-cleaning.svg",
      "/portfolio/customer-data-cleaning/3-validation.svg",
    ],
    featured: true,
  },
  {
    slug: "sales-dashboard",
    title: "Excel Sales Dashboard",
    category: "Data & Reporting",
    status: "demo",
    shortDescription: "Interactive Excel dashboard with dynamic charts, KPIs, and automated reporting for sales performance tracking.",
    description:
      "A comprehensive Excel-based sales dashboard that provides real-time insights into sales performance, trends, and metrics through dynamic charts and automated data updates.",
    clientScenario:
      "A sales team needed an easy-to-use dashboard to track monthly performance, analyze trends, and generate reports without complex BI tools.",
    problem:
      "Manual report generation was time-consuming. Data was scattered across multiple sheets and difficult to consolidate for meaningful analysis.",
    objective:
      "Build an interactive Excel dashboard that consolidates sales data, displays key metrics, and updates automatically with new entries.",
    approach:
      "We created a dynamic Excel workbook with pivot tables, SUMIFS formulas, data validation dropdowns, and professionally designed charts for visual reporting.",
    process: [
      "Requirements Analysis",
      "Data Structure Design",
      "Formula Development",
      "Dashboard Layout",
      "Chart Creation",
      "Testing & Refinement",
    ],
    result:
      "Delivered a fully functional sales dashboard that reduced report generation time by 80%. The team can now generate comprehensive reports in minutes instead of hours.",
    tools: ["Excel", "Google Sheets", "Data Visualization"],
    skills: ["Excel Dashboard", "Pivot Tables", "Data Analysis", "Formulas", "Charts"],
    image: "/portfolio/sales-dashboard/cover.svg",
    gallery: [
      "/portfolio/sales-dashboard/1-overview.svg",
      "/portfolio/sales-dashboard/2-charts.svg",
      "/portfolio/sales-dashboard/3-details.svg",
    ],
    featured: true,
  },
  {
    slug: "web-research",
    title: "Web Research & Lead Generation",
    category: "Research",
    status: "demo",
    shortDescription: "Systematic web research and lead generation project to build targeted prospect lists for B2B outreach.",
    description:
      "A structured lead generation project that involved comprehensive web research, data collection, verification, and organization into actionable prospect lists.",
    clientScenario:
      "A startup needed to build a prospect list of 500+ potential clients in a specific industry for their cold outreach campaign.",
    problem:
      "Building a quality prospect list manually would take weeks. Data scattered across various websites needed to be systematically collected and verified.",
    objective:
      "Efficiently research, collect, verify, and organize business leads into a structured format for email outreach campaigns.",
    approach:
      "We developed a systematic research workflow using search operators, professional networking platforms, and data verification tools to build accurate prospect lists.",
    process: [
      "Define Target Criteria",
      "Initial Research",
      "Data Collection",
      "Verification Process",
      "Data Enrichment",
      "Quality Check",
      "Final Delivery",
    ],
    result:
      "Successfully generated a verified list of 500+ qualified leads with complete contact information, company details, and relevant context for personalized outreach.",
    tools: ["Google", "LinkedIn", "Hunter.io", "Apollo.io", "Google Sheets", "Excel"],
    skills: ["Web Research", "Lead Generation", "Data Verification", "Communication"],
    image: "/portfolio/web-research/cover.svg",
    gallery: [
      "/portfolio/web-research/1-research.svg",
      "/portfolio/web-research/2-data.svg",
      "/portfolio/web-research/3-results.svg",
    ],
    featured: false,
  },
  {
    slug: "customer-support",
    title: "E-commerce Customer Support",
    category: "Virtual Assistant",
    status: "demo",
    shortDescription: "Professional customer support system handling inquiries, complaints, and order-related communications via email.",
    description:
      "A demonstration of professional customer support management for e-commerce businesses, handling inquiries, order issues, refunds, and general questions with consistent quality.",
    clientScenario:
      "An e-commerce store was receiving 50+ customer inquiries daily via email but lacked the capacity to respond promptly and professionally.",
    problem:
      "Slow response times and inconsistent replies were leading to customer dissatisfaction and lost sales. There was no standardized process for handling common issues.",
    objective:
      "Establish an efficient customer support system with quick response times, professional communication, and consistent quality across all interactions.",
    approach:
      "We created a comprehensive support workflow with templates for common scenarios, a ticketing system for tracking, and quality assurance processes.",
    process: [
      "Inbox Assessment",
      "Template Creation",
      "Categorization System",
      "Response Workflow",
      "Quality Checks",
      "Reporting Setup",
    ],
    result:
      "Established a professional support system with average response time under 2 hours. Customer satisfaction improved by 40% with consistent, helpful responses.",
    tools: ["Gmail", "Zendesk", "Shopify", "Google Sheets", "Trello"],
    skills: ["Customer Service", "Email Communication", "Problem Solving", "Documentation"],
    image: "/portfolio/customer-support/cover.svg",
    gallery: [
      "/portfolio/customer-support/1-workflow.svg",
      "/portfolio/customer-support/2-templates.svg",
      "/portfolio/customer-support/3-reports.svg",
    ],
    featured: false,
  },
  {
    slug: "product-research",
    title: "E-commerce Product Research",
    category: "E-commerce",
    status: "demo",
    shortDescription: "Comprehensive product research for e-commerce marketplace including demand analysis, competition review, and profitability assessment.",
    description:
      "A detailed product research project analyzing potential products for an e-commerce store, including market demand, competition analysis, and profitability calculations.",
    clientScenario:
      "An entrepreneur wanted to launch a new product line but needed data-driven insights to choose products with the best market potential.",
    problem:
      "Without proper research, launching products could lead to inventory losses and wasted marketing budget on products with low demand or high competition.",
    objective:
      "Conduct comprehensive product research to identify high-potential products with good demand, manageable competition, and healthy profit margins.",
    approach:
      "We used multiple data sources, analytical frameworks, and market indicators to evaluate potential products across multiple criteria.",
    process: [
      "Market Overview",
      "Demand Analysis",
      "Competition Review",
      "Supplier Research",
      "Profitability Calculation",
      "Risk Assessment",
      "Final Recommendations",
    ],
    result:
      "Provided research reports for 15 potential products with detailed analysis. Recommended 3 products that showed optimal balance of demand, competition, and profitability.",
    tools: ["Jungle Scout", "Helium 10", "Google Trends", "Canva", "Excel", "Google Sheets"],
    skills: ["Market Research", "Data Analysis", "E-commerce", "Canva", "Reporting"],
    image: "/portfolio/product-research/cover.svg",
    gallery: [
      "/portfolio/product-research/1-market.svg",
      "/portfolio/product-research/2-analysis.svg",
      "/portfolio/product-research/3-results.svg",
    ],
    featured: true,
  },
  {
    slug: "product-listing",
    title: "E-commerce Product Listing",
    category: "E-commerce",
    status: "demo",
    shortDescription: "Professional product listings with optimized titles, descriptions, images, and SEO for maximum visibility and conversion.",
    description:
      "A project focused on creating high-quality, SEO-optimized product listings that drive visibility and conversions on e-commerce platforms.",
    clientScenario:
      "An e-commerce seller needed help creating professional product listings for 50+ new products across multiple categories.",
    problem:
      "Poorly optimized listings with generic titles, basic descriptions, and no SEO strategy were resulting in low visibility and minimal sales.",
    objective:
      "Create optimized product listings with keyword-rich titles, compelling descriptions, structured data, and professional presentation.",
    approach:
      "We developed a systematic approach to product listing optimization using keyword research, SEO best practices, and professional writing frameworks.",
    process: [
      "Keyword Research",
      "Competitor Analysis",
      "Title Optimization",
      "Description Writing",
      "Image Guidelines",
      "SEO Implementation",
      "Quality Review",
    ],
    result:
      "Created 50+ optimized listings with average SEO score of 90%. Within 30 days, organic search traffic increased by 150% for new products.",
    tools: ["Canva", "Helium 10", "Google Sheets", "Amazon Seller", "Shopify"],
    skills: ["SEO Writing", "Product Listings", "Canva", "E-commerce", "Keyword Research"],
    image: "/portfolio/product-listing/cover.svg",
    gallery: [
      "/portfolio/product-listing/1-research.svg",
      "/portfolio/product-listing/2-optimized.svg",
      "/portfolio/product-listing/3-results.svg",
    ],
    featured: false,
  },
  {
    slug: "social-media",
    title: "Social Media Assistant",
    category: "Social Media",
    status: "demo",
    shortDescription: "End-to-end social media management including content creation, scheduling, engagement, and performance tracking.",
    description:
      "A comprehensive social media management project covering content planning, creation, scheduling, community engagement, and analytics reporting.",
    clientScenario:
      "A small business owner needed consistent social media presence but lacked time and design skills to manage multiple platforms effectively.",
    problem:
      "Irregular posting, inconsistent branding, and lack of engagement strategy were resulting in poor social media performance and missed opportunities.",
    objective:
      "Establish a professional social media presence with consistent posting, engaging content, and measurable results.",
    approach:
      "We created a content strategy, design system, and workflow that enables efficient social media management while maintaining quality and consistency.",
    process: [
      "Platform Analysis",
      "Content Strategy",
      "Design System Creation",
      "Content Calendar",
      "Scheduling Setup",
      "Engagement Management",
      "Analytics Review",
    ],
    result:
      "Established consistent presence on Instagram and LinkedIn with 3 posts per week. Engagement rate increased by 200% over 3 months with growing follower base.",
    tools: ["Canva", "Later", "Buffer", "Google Sheets", "Instagram", "LinkedIn"],
    skills: ["Social Media", "Canva", "Content Creation", "Engagement", "Analytics"],
    image: "/portfolio/social-media/cover.svg",
    gallery: [
      "/portfolio/social-media/1-content.svg",
      "/portfolio/social-media/2-calendar.svg",
      "/portfolio/social-media/3-analytics.svg",
    ],
    featured: false,
  },
  {
    slug: "ai-automation",
    title: "AI-Powered Virtual Assistant & Automation",
    category: "AI & Automation",
    status: "demo",
    shortDescription: "Automated workflow using n8n, Google Forms, and AI for intelligent lead classification and email routing.",
    description:
      "An intelligent automation system that captures leads from web forms, processes them with AI for classification, and routes them to appropriate team members.",
    clientScenario:
      "A consulting business received leads from multiple sources but had no efficient way to categorize and route them to the right team member.",
    problem:
      "Manual lead processing was slow and inconsistent. Important leads were sometimes missed or routed to the wrong person, delaying response times.",
    objective:
      "Build an automated lead processing system that captures submissions, classifies them using AI, and routes them to the appropriate team member.",
    approach:
      "We designed a n8n workflow that integrates Google Forms, AI processing, and email routing to create a fully automated lead management system.",
    process: [
      "Customer Inquiry",
      "Google Form Submission",
      "Webhook Trigger",
      "n8n Workflow",
      "AI Classification",
      "Email Routing",
      "Team Notification",
    ],
    result:
      "Implemented fully automated lead processing that reduced response time from 24 hours to under 1 hour. AI classification accuracy achieved 92%.",
    tools: ["n8n", "Google Forms", "Google Sheets", "OpenAI API", "Gmail", "JSON"],
    skills: ["n8n", "AI Integration", "API", "JSON", "Workflow Automation", "Google Sheets"],
    image: "/portfolio/ai-automation/cover.svg",
    gallery: [
      "/portfolio/ai-automation/1-workflow.svg",
      "/portfolio/ai-automation/2-n8n.svg",
      "/portfolio/ai-automation/3-results.svg",
    ],
    featured: true,
  },
];

export const portfolioCategories = [
  "All",
  "Data & Excel",
  "Data & Reporting",
  "Research",
  "Virtual Assistant",
  "E-commerce",
  "Social Media",
  "AI & Automation",
];

export function getPortfolioBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug);
}

export function getPortfolioByCategory(category: string): PortfolioItem[] {
  if (category === "All") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}

export function getFeaturedPortfolio(): PortfolioItem[] {
  return portfolioItems.filter((item) => item.featured);
}
