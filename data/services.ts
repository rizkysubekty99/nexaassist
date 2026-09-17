export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  tools: string[];
}

export const services: Service[] = [
  {
    id: "application-support",
    title: "Application & Technical Support",
    shortDescription:
      "Support for existing business applications, handling user issues, troubleshooting, and coordinating with technical teams.",
    description:
      "We support existing business applications by handling user issues, analyzing problems, coordinating with technical teams, and following up until the issue is resolved. Focus on existing applications — not application development.",
    icon: "Headphones",
    features: [
      "Application Support",
      "User Support",
      "Complaint Handling",
      "Troubleshooting",
      "Issue Analysis",
      "Solution Finding",
      "Ticket Handling",
      "Incident Follow-up",
      "Technical Coordination",
      "Issue Documentation",
      "SOP Documentation",
    ],
    tools: [
      "Zendesk",
      "Jira",
      "Freshdesk",
      "Excel",
      "Google Sheets",
      "Documentation Tools",
    ],
  },
  {
    id: "virtual-assistance",
    title: "Virtual Assistance",
    shortDescription:
      "Administrative support, data entry, web research, lead generation, email support, and customer service.",
    description:
      "Professional virtual assistance to handle your day-to-day business operations efficiently. From data entry to customer support, we help you stay organized and productive.",
    icon: "Monitor",
    features: [
      "Data Entry",
      "Administrative Support",
      "Web Research",
      "Lead Generation",
      "Email Support",
      "Customer Support",
      "Data Organization",
      "Repetitive Administrative Tasks",
    ],
    tools: [
      "Google Workspace",
      "Microsoft Office",
      "Slack",
      "Trello",
      "Notion",
      "Zoom",
    ],
  },
  {
    id: "data-reporting",
    title: "Data & Reporting",
    shortDescription:
      "Microsoft Excel, Google Sheets, data cleaning, data validation, reporting, and dashboard creation.",
    description:
      "Structured data work including cleaning, validation, reporting, and dashboard creation. We help you turn raw data into actionable insights.",
    icon: "Database",
    features: [
      "Microsoft Excel",
      "Google Sheets",
      "Data Cleaning",
      "Data Validation",
      "Reporting",
      "Dashboard",
      "Data Processing",
      "Data Organization",
    ],
    tools: ["Microsoft Excel", "Google Sheets", "Google Forms", "CSV Tools"],
  },
  {
    id: "ecommerce-support",
    title: "E-commerce Support",
    shortDescription:
      "Product research, product listing, product data management, customer support, and marketplace assistance.",
    description:
      "Comprehensive e-commerce support to help you manage your online store efficiently. From product research to customer service.",
    icon: "ShoppingBag",
    features: [
      "Product Research",
      "Product Listing",
      "Product Data Management",
      "Product Description",
      "Customer Support",
      "Marketplace Assistance",
    ],
    tools: [
      "Shopify",
      "Amazon Seller",
      "Canva",
      "Excel",
      "Google Sheets",
      "Oberlo",
    ],
  },
  {
    id: "seo-content",
    title: "SEO & Content",
    shortDescription:
      "SEO content writing, blog content, keyword research, on-page SEO, meta tags, and content optimization.",
    description:
      "Support for SEO content and website content workflows. We help create and optimize content for better search visibility and user engagement.",
    icon: "Search",
    features: [
      "SEO Content Writing",
      "Blog Content",
      "Keyword Research",
      "On-Page SEO",
      "Content Optimization",
      "Meta Title",
      "Meta Description",
      "Internal Linking",
      "Image Alt Text",
      "Content Updating",
      "Website Content",
    ],
    tools: [
      "Yoast SEO",
      "Google Sheets",
      "Canva",
      "AI-assisted Writing",
      "WordPress",
    ],
  },
  {
    id: "wordpress-sales-page",
    title: "WordPress & Sales Page",
    shortDescription:
      "WordPress content management, sales page creation, landing page content, and on-page SEO.",
    description:
      "WordPress content and SEO support. We help manage WordPress sites, create sales pages, and optimize content for better performance.",
    icon: "FileText",
    features: [
      "WordPress Content Management",
      "WordPress Page Editing",
      "WordPress Content Upload",
      "Sales Page",
      "Landing Page Content",
      "Website Copy",
      "Product Description",
      "CTA",
      "Yoast SEO",
      "On-Page SEO",
      "Avada",
      "Avada Builder",
      "Basic WordPress Maintenance",
    ],
    tools: ["WordPress", "Avada", "Yoast SEO", "Avada Builder", "Canva"],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    shortDescription:
      "AI-assisted tasks, prompt engineering, n8n workflow automation, API integrations, and repetitive task automation.",
    description:
      "Use AI and automation to reduce repetitive work. We help design and implement automated workflows using n8n and AI tools.",
    icon: "Cpu",
    features: [
      "AI-assisted Tasks",
      "Prompt Engineering",
      "n8n Workflow Automation",
      "Workflow Automation",
      "API Integration",
      "JSON",
      "HTTP Request",
      "AI Workflow",
      "Repetitive Task Automation",
    ],
    tools: ["n8n", "OpenAI API", "Zapier", "Make.com", "JSON", "REST APIs", "SQL"],
  },
];

export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
