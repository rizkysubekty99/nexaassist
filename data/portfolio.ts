export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  status: "demo" | "live";
  shortDescription: string;
  description: string;
  clientScenario?: string;
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
  isDemoProject?: boolean;
  demoNote?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "application-support",
    title: "Application Support & Issue Resolution",
    category: "Application Support",
    status: "demo",
    shortDescription:
      "Example support workflow for an existing business application, demonstrating issue handling from receipt to resolution.",
    description:
      "This demonstration represents an example support workflow for an existing business application. It does not represent development of the application itself.",
    clientScenario:
      "A user reports an issue while using an existing business application. The support team receives the complaint, analyzes the problem, and follows through to resolution.",
    problem:
      "Users experience issues with an existing application, ranging from user errors to system bugs that require technical intervention.",
    objective:
      "Demonstrate a systematic approach to handling application support: receive, identify, analyze, troubleshoot, coordinate, follow up, resolve, and document.",
    approach:
      "This demo shows a structured support workflow designed to handle user issues efficiently, coordinate with technical teams when needed, and ensure proper documentation for future reference.",
    process: [
      "Receive User Complaint",
      "Identify the Problem",
      "Analyze the Issue",
      "Perform Troubleshooting",
      "Coordinate with Technical Team (if needed)",
      "Follow Up",
      "Confirm Resolution",
      "Document the Solution",
    ],
    result:
      "This demonstration showcases a complete support workflow designed for existing applications. The workflow emphasizes clear communication, systematic troubleshooting, and proper escalation procedures.",
    tools: ["Zendesk", "Jira", "Google Sheets", "Excel", "Documentation Tools"],
    skills: [
      "Application Support",
      "Troubleshooting",
      "Issue Analysis",
      "User Communication",
      "Ticket Handling",
      "Incident Handling",
      "Documentation",
    ],
    image: "/portfolio/application-support/cover.svg",
    gallery: [
      "/portfolio/application-support/1-receive.svg",
      "/portfolio/application-support/2-identify.svg",
      "/portfolio/application-support/3-analyze.svg",
      "/portfolio/application-support/4-troubleshoot.svg",
      "/portfolio/application-support/5-coordinate.svg",
      "/portfolio/application-support/6-followup.svg",
      "/portfolio/application-support/7-resolve.svg",
      "/portfolio/application-support/8-document.svg",
    ],
    featured: true,
    isDemoProject: true,
    demoNote:
      "This is a self-created demonstration project designed to showcase our skills, workflow and approach. This demonstration represents an example support workflow for an existing business application. It does not represent development of the application itself.",
  },
  {
    slug: "customer-data-cleaning",
    title: "Customer Data Cleaning & Management",
    category: "Data",
    status: "demo",
    shortDescription:
      "Organized and cleaned messy customer data with validation, deduplication, and structured formatting.",
    description:
      "This project demonstrates a comprehensive approach to cleaning and organizing customer data. The workflow includes data assessment, cleaning, validation, and delivery of structured, actionable data.",
    clientScenario:
      "A business had accumulated customer data with inconsistencies, duplicates, and formatting issues that made reporting and communication difficult.",
    problem:
      "Existing data contained duplicate entries, inconsistent formatting, missing required fields, and invalid email addresses. Manual cleanup was time-consuming.",
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
      "Successfully cleaned and organized customer records with 95% data accuracy. The structured format enabled effective email marketing campaigns and improved customer management.",
    tools: ["Excel", "Google Sheets", "Google Forms", "CSV Tools"],
    skills: [
      "Data Cleaning",
      "Excel Formulas",
      "Data Validation",
      "Data Processing",
      "Documentation",
    ],
    image: "/portfolio/customer-data-cleaning/cover.svg",
    gallery: [
      "/portfolio/customer-data-cleaning/1-assessment.svg",
      "/portfolio/customer-data-cleaning/2-cleaning.svg",
      "/portfolio/customer-data-cleaning/3-validation.svg",
      "/portfolio/customer-data-cleaning/4-result.svg",
    ],
    featured: true,
    isDemoProject: true,
    demoNote:
      "This is a self-created demonstration project designed to showcase our data cleaning skills, workflow and approach.",
  },
  {
    slug: "sales-dashboard",
    title: "Excel Sales Dashboard",
    category: "Data",
    status: "demo",
    shortDescription:
      "Interactive Excel dashboard with dynamic charts, KPIs, and automated reporting for sales performance tracking.",
    description:
      "A comprehensive Excel-based sales dashboard that provides insights into sales performance, trends, and metrics through dynamic charts and automated data updates.",
    clientScenario:
      "A sales team needed an easy-to-use dashboard to track monthly performance, analyze trends, and generate reports without complex BI tools.",
    problem:
      "Manual report generation was time-consuming. Data was scattered across multiple sheets and difficult to consolidate for meaningful analysis.",
    objective:
      "Build an interactive Excel dashboard that consolidates sales data, displays key metrics, and updates automatically with new entries.",
    approach:
      "We created a dynamic Excel workbook with formulas, data validation dropdowns, and professionally designed charts for visual reporting.",
    process: [
      "Requirements Analysis",
      "Data Structure Design",
      "Formula Development",
      "Dashboard Layout",
      "Chart Creation",
      "Testing & Refinement",
    ],
    result:
      "Delivered a fully functional sales dashboard that reduced report generation time. The team can now generate comprehensive reports in minutes instead of hours.",
    tools: ["Excel", "Google Sheets"],
    skills: [
      "Excel Dashboard",
      "Excel Formulas",
      "Data Analysis",
      "Data Visualization",
      "Charts",
    ],
    image: "/portfolio/sales-dashboard/cover.svg",
    gallery: [
      "/portfolio/sales-dashboard/1-overview.svg",
      "/portfolio/sales-dashboard/2-charts.svg",
      "/portfolio/sales-dashboard/3-details.svg",
    ],
    featured: true,
    isDemoProject: true,
    demoNote:
      "This is a self-created demonstration project designed to showcase our Excel dashboard skills, workflow and approach.",
  },
  {
    slug: "web-research",
    title: "Web Research & Lead Generation",
    category: "Virtual Assistance",
    status: "demo",
    shortDescription:
      "Systematic web research and lead generation project to build targeted prospect lists for outreach campaigns.",
    description:
      "A structured lead generation project that involved comprehensive web research, data collection, verification, and organization into actionable prospect lists.",
    clientScenario:
      "A business needed to build a prospect list of potential clients in a specific industry for their outreach campaign.",
    problem:
      "Building a quality prospect list manually would take weeks. Data scattered across various websites needed to be systematically collected and verified.",
    objective:
      "Efficiently research, collect, verify, and organize business leads into a structured format for outreach campaigns.",
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
      "Successfully generated a verified list of qualified leads with contact information, company details, and relevant context for personalized outreach.",
    tools: ["Google", "LinkedIn", "Hunter.io", "Google Sheets", "Excel"],
    skills: [
      "Web Research",
      "Lead Generation",
      "Data Verification",
      "Data Organization",
      "Communication",
    ],
    image: "/portfolio/web-research/cover.svg",
    gallery: [
      "/portfolio/web-research/1-criteria.svg",
      "/portfolio/web-research/2-collection.svg",
      "/portfolio/web-research/3-verification.svg",
    ],
    featured: false,
    isDemoProject: true,
    demoNote:
      "This is a self-created demonstration project designed to showcase our research skills, workflow and approach.",
  },
  {
    slug: "customer-support",
    title: "E-commerce Customer Support",
    category: "Virtual Assistance",
    status: "demo",
    shortDescription:
      "Professional customer support system handling inquiries, complaints, and order-related communications.",
    description:
      "A demonstration of professional customer support management for e-commerce businesses, handling inquiries, order issues, refunds, and general questions with consistent quality.",
    clientScenario:
      "An e-commerce store was receiving customer inquiries via email and needed a professional support system.",
    problem:
      "Slow response times and inconsistent replies were leading to customer dissatisfaction. There was no standardized process for handling common issues.",
    objective:
      "Establish an efficient customer support system with quick response times, professional communication, and consistent quality.",
    approach:
      "We created a comprehensive support workflow with templates for common scenarios, a system for tracking, and quality assurance processes.",
    process: [
      "Inbox Assessment",
      "Template Creation",
      "Categorization System",
      "Response Workflow",
      "Quality Checks",
      "Reporting Setup",
    ],
    result:
      "Established a professional support system with efficient response times. Customer satisfaction improved with consistent, helpful responses.",
    tools: ["Gmail", "Google Sheets", "Trello", "Zendesk"],
    skills: [
      "Customer Service",
      "Email Communication",
      "Problem Solving",
      "Documentation",
      "Response Templates",
    ],
    image: "/portfolio/customer-support/cover.svg",
    gallery: [
      "/portfolio/customer-support/1-workflow.svg",
      "/portfolio/customer-support/2-templates.svg",
      "/portfolio/customer-support/3-reports.svg",
    ],
    featured: false,
    isDemoProject: true,
    demoNote:
      "This is a self-created demonstration project designed to showcase our customer support skills, workflow and approach.",
  },
  {
    slug: "product-research",
    title: "E-commerce Product Research",
    category: "E-commerce",
    status: "demo",
    shortDescription:
      "Comprehensive product research for e-commerce marketplace including demand analysis and profitability assessment.",
    description:
      "A detailed product research project analyzing potential products for an e-commerce store, including market demand, competition analysis, and profitability calculations.",
    clientScenario:
      "A business wanted to launch new products and needed data-driven insights to choose products with the best market potential.",
    problem:
      "Without proper research, launching products could lead to inventory losses and wasted budget on products with low demand or high competition.",
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
      "Provided research reports for potential products with detailed analysis. Recommended products that showed optimal balance of demand, competition, and profitability.",
    tools: ["Google Trends", "Canva", "Excel", "Google Sheets"],
    skills: [
      "Market Research",
      "Data Analysis",
      "E-commerce",
      "Canva",
      "Reporting",
    ],
    image: "/portfolio/product-research/cover.svg",
    gallery: [
      "/portfolio/product-research/1-market.svg",
      "/portfolio/product-research/2-analysis.svg",
      "/portfolio/product-research/3-results.svg",
    ],
    featured: true,
    isDemoProject: true,
    demoNote:
      "This is a self-created demonstration project designed to showcase our product research skills, workflow and approach.",
  },
  {
    slug: "product-listing",
    title: "E-commerce Product Listing",
    category: "E-commerce",
    status: "demo",
    shortDescription:
      "Professional product listings with optimized titles, descriptions, and SEO for maximum visibility.",
    description:
      "A project focused on creating high-quality, SEO-optimized product listings that drive visibility and conversions on e-commerce platforms.",
    clientScenario:
      "A business needed help creating professional product listings for new products across multiple categories.",
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
      "Created optimized listings with strong SEO scores. Demonstrates systematic approach to product listing creation and optimization.",
    tools: ["Canva", "Google Sheets", "Amazon Seller", "Shopify"],
    skills: [
      "SEO Writing",
      "Product Listings",
      "Canva",
      "E-commerce",
      "Keyword Research",
    ],
    image: "/portfolio/product-listing/cover.svg",
    gallery: [
      "/portfolio/product-listing/1-research.svg",
      "/portfolio/product-listing/2-optimized.svg",
      "/portfolio/product-listing/3-review.svg",
    ],
    featured: false,
    isDemoProject: true,
    demoNote:
      "This is a self-created demonstration project designed to showcase our product listing skills, workflow and approach.",
  },
  {
    slug: "seo-content",
    title: "SEO Content & Blog Optimization",
    category: "SEO & Content",
    status: "demo",
    shortDescription:
      "SEO content workflow including keyword research, content brief, article optimization, and on-page SEO implementation.",
    description:
      "A demonstration of SEO content workflow for website content and blog posts. Shows the complete process from keyword research to on-page SEO implementation.",
    clientScenario:
      "A business needed help creating SEO-optimized content for their website and blog to improve search visibility.",
    problem:
      "Existing content was not optimized for search engines, resulting in low organic traffic and poor search rankings.",
    objective:
      "Create a systematic SEO content workflow that produces optimized content for better search visibility and user engagement.",
    approach:
      "We developed a complete SEO content workflow including keyword research, content brief creation, writing, and on-page SEO implementation.",
    process: [
      "Keyword Research",
      "Content Brief Creation",
      "SEO Article Writing",
      "Meta Title Optimization",
      "Meta Description Optimization",
      "Heading Structure Review",
      "Internal Linking",
      "Image Alt Text",
      "Final Review",
    ],
    result:
      "Demonstrates complete SEO content workflow. The process ensures all content is properly optimized for search engines and user experience.",
    tools: ["WordPress", "Yoast SEO", "Google Sheets", "Canva", "AI-assisted Writing"],
    skills: [
      "SEO Content Writing",
      "Keyword Research",
      "On-Page SEO",
      "Yoast SEO",
      "Meta Optimization",
      "Internal Linking",
    ],
    image: "/portfolio/seo-content/cover.svg",
    gallery: [
      "/portfolio/seo-content/1-keyword.svg",
      "/portfolio/seo-content/2-brief.svg",
      "/portfolio/seo-content/3-article.svg",
      "/portfolio/seo-content/4-seo.svg",
    ],
    featured: true,
    isDemoProject: true,
    demoNote:
      "This is a self-created demonstration project designed to showcase our SEO content workflow and approach.",
  },
  {
    slug: "wordpress-sales-page",
    title: "WordPress Sales Page & SEO Setup",
    category: "WordPress",
    status: "demo",
    shortDescription:
      "Sales page creation workflow using WordPress and Avada with SEO optimization using Yoast SEO.",
    description:
      "A demonstration of sales page creation workflow using WordPress, Avada Builder, and Yoast SEO. Shows the complete process from requirements to published page.",
    clientScenario:
      "A business needed a professional sales page created on their WordPress website to convert visitors into customers.",
    problem:
      "The existing pages were not designed for conversion and lacked proper SEO optimization for search visibility.",
    objective:
      "Create a high-converting sales page with professional layout, compelling copy, and proper SEO implementation.",
    approach:
      "We developed a systematic approach to sales page creation using WordPress, Avada Builder, and Yoast SEO.",
    process: [
      "Requirement Gathering",
      "Content Structure Planning",
      "Headline & Benefits",
      "Features Section",
      "Social Proof Section",
      "Call-to-Action",
      "WordPress Implementation",
      "Avada Builder Layout",
      "Yoast SEO Optimization",
      "Final Review & Testing",
    ],
    result:
      "Demonstrates complete sales page creation workflow. The process ensures professional design, conversion-focused content, and proper SEO implementation.",
    tools: ["WordPress", "Avada", "Avada Builder", "Yoast SEO", "Canva"],
    skills: [
      "WordPress",
      "Avada Builder",
      "Sales Page",
      "Landing Page",
      "Yoast SEO",
      "On-Page SEO",
      "Content Structure",
    ],
    image: "/portfolio/wordpress-sales-page/cover.svg",
    gallery: [
      "/portfolio/wordpress-sales-page/1-structure.svg",
      "/portfolio/wordpress-sales-page/2-content.svg",
      "/portfolio/wordpress-sales-page/3-avada.svg",
      "/portfolio/wordpress-sales-page/4-seo.svg",
    ],
    featured: true,
    isDemoProject: true,
    demoNote:
      "This is a self-created demonstration project designed to showcase our WordPress and sales page creation workflow and approach.",
  },
  {
    slug: "ai-automation",
    title: "AI-Powered VA & n8n Automation",
    category: "AI & Automation",
    status: "demo",
    shortDescription:
      "Automated workflow using n8n, AI, Google Forms, and Google Sheets for intelligent data processing and task automation.",
    description:
      "An intelligent automation system demonstration using n8n workflow automation, AI processing, and integrations with common business tools.",
    clientScenario:
      "A business wanted to automate repetitive tasks and improve efficiency using AI and workflow automation tools.",
    problem:
      "Manual, repetitive tasks were consuming too much time and prone to human error. There was no efficient way to process and route information automatically.",
    objective:
      "Build automated workflows that reduce repetitive manual work, improve accuracy, and streamline business processes.",
    approach:
      "We designed n8n workflows that integrate with business tools, use AI for processing, and automate routine tasks.",
    process: [
      "Requirements Analysis",
      "Workflow Design",
      "n8n Setup",
      "API Integration",
      "AI Processing Setup",
      "Testing",
      "Documentation",
    ],
    result:
      "Demonstrates complete workflow automation approach. Shows how n8n, AI, and API integrations can automate repetitive business tasks.",
    tools: ["n8n", "Google Forms", "Google Sheets", "OpenAI API", "JSON", "API"],
    skills: [
      "n8n",
      "AI Integration",
      "API",
      "JSON",
      "Workflow Automation",
      "Google Sheets",
      "Prompt Engineering",
    ],
    image: "/portfolio/ai-automation/cover.svg",
    gallery: [
      "/portfolio/ai-automation/1-design.svg",
      "/portfolio/ai-automation/2-workflow.svg",
      "/portfolio/ai-automation/3-n8n.svg",
      "/portfolio/ai-automation/4-result.svg",
    ],
    featured: true,
    isDemoProject: true,
    demoNote:
      "This is a self-created demonstration project designed to showcase our automation skills, workflow and approach.",
  },
];

export const portfolioCategories = [
  "All",
  "Application Support",
  "Virtual Assistance",
  "Data",
  "E-commerce",
  "SEO & Content",
  "WordPress",
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

export function getRelatedPortfolio(
  currentSlug: string,
  limit: number = 3
): PortfolioItem[] {
  const current = getPortfolioBySlug(currentSlug);
  if (!current) return [];

  return portfolioItems
    .filter((item) => item.slug !== currentSlug)
    .slice(0, limit);
}
