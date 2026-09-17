export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  shortDescription: string;
  skills: string[];
  image: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "technical-support",
    name: "Member 1",
    role: "Technical Support & Digital Operations Specialist",
    shortDescription:
      "Handles application support, technical troubleshooting, data work, and AI automation workflows.",
    description:
      "I provide application and technical support for existing business applications, helping users resolve issues, analyzing problems, coordinating with technical teams when necessary, and following up issues through resolution.",
    skills: [
      "Application Support",
      "Technical Support",
      "Troubleshooting",
      "Issue Analysis",
      "Excel",
      "Google Sheets",
      "AI",
      "Prompt Engineering",
      "n8n",
      "Automation",
      "API",
      "JSON",
      "HTTP Request",
      "SQL",
      "Database",
      "WordPress",
      "Documentation",
      "SOP",
      "Ticket Handling",
      "Incident Handling",
    ],
    image: "/team/member-1.svg",
    linkedin: "",
  },
  {
    id: "virtual-assistant",
    name: "Member 2",
    role: "Virtual Assistant & English Content Support Specialist",
    shortDescription:
      "Handles virtual assistance, customer support, research, e-commerce, SEO content, and WordPress tasks.",
    description:
      "I provide virtual assistance, English communication, customer support, research, e-commerce support, SEO content and website content assistance for online businesses.",
    skills: [
      "Virtual Assistance",
      "English Communication",
      "Customer Support",
      "Web Research",
      "Lead Generation",
      "Product Research",
      "Product Listing",
      "Canva",
      "Social Media",
      "Excel",
      "Google Sheets",
      "SEO Content Writing",
      "Website Content",
      "Sales Page",
      "WordPress",
      "Yoast SEO",
      "Avada",
      "AI-assisted Tasks",
    ],
    image: "/team/member-2.svg",
    linkedin: "",
  },
];
