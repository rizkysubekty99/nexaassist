export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  tools: string[];
  relatedPortfolio: string[];
}

export const services: Service[] = [
  {
    id: "virtual-assistance",
    title: "Virtual Assistance",
    description:
      "Professional virtual assistance to handle your administrative tasks, email management, scheduling, and day-to-day business operations.",
    icon: "Monitor",
    features: [
      "Email management and response",
      "Calendar and scheduling",
      "Data entry and organization",
      "Document preparation",
      "Travel arrangements",
      "Online research",
      "Administrative support",
      "Task management",
    ],
    tools: ["Google Workspace", "Microsoft Office", "Notion", "Slack", "Trello", "Zoom"],
    relatedPortfolio: ["customer-support", "social-media"],
  },
  {
    id: "ecommerce-support",
    title: "E-commerce Support",
    description:
      "Comprehensive e-commerce assistance including product research, listing optimization, customer service, and inventory management.",
    icon: "ShoppingBag",
    features: [
      "Product research and analysis",
      "Product listing creation",
      "Inventory management",
      "Order processing",
      "Customer service",
      "Review management",
      "Product data management",
      "Competitor analysis",
    ],
    tools: ["Shopify", "Amazon Seller", "Canva", "Excel", "Google Sheets", "Oberlo"],
    relatedPortfolio: ["product-research", "product-listing", "customer-support"],
  },
  {
    id: "research-data",
    title: "Research & Data",
    description:
      "In-depth web research, lead generation, data cleaning, and analysis to support your business intelligence needs.",
    icon: "Search",
    features: [
      "Web research and analysis",
      "Lead generation",
      "Data cleaning and validation",
      "Market research",
      "Competitor research",
      "Data entry and formatting",
      "Excel spreadsheet management",
      "Google Sheets automation",
    ],
    tools: ["Google Sheets", "Excel", "LinkedIn Sales Navigator", "Hunter.io", "Apollo.io"],
    relatedPortfolio: ["customer-data-cleaning", "sales-dashboard", "web-research"],
  },
  {
    id: "ai-automation",
    title: "AI & Automation",
    description:
      "Streamline your business processes with AI-assisted workflows, n8n automation, API integrations, and intelligent data processing.",
    icon: "Cpu",
    features: [
      "n8n workflow automation",
      "AI-assisted task processing",
      "API integrations",
      "Business process automation",
      "Data pipeline creation",
      "Custom automation solutions",
      "Zapier workflows",
      "Webhook configurations",
    ],
    tools: ["n8n", "OpenAI API", "Zapier", "Make.com", "JSON", "REST APIs", "SQL"],
    relatedPortfolio: ["ai-automation"],
  },
];
