export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  skills: string[];
  image: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "technical-va",
    name: "Technical VA",
    role: "Technical Virtual Assistant & AI Automation Specialist",
    description:
      "I focus on technical virtual assistance, data processing, AI workflows, and business automation. I help turn repetitive manual processes into organized and efficient automated workflows. With expertise in API integrations, database management, and workflow automation using tools like n8n, I bridge the gap between technical complexity and practical business solutions.",
    skills: [
      "AI",
      "n8n",
      "Automation",
      "API",
      "JSON",
      "HTTP Request",
      "SQL",
      "Database",
      "Excel",
      "Google Sheets",
      "Technical Support",
    ],
    image: "/team/member-1.svg",
    linkedin: "https://linkedin.com/in/technical-va",
  },
  {
    id: "general-va",
    name: "Virtual Assistant",
    role: "Virtual Assistant & English Customer Support Specialist",
    description:
      "I focus on virtual assistance, English communication, customer support, online research, and e-commerce support. I help businesses stay organized, communicate professionally with international clients, and handle various administrative tasks efficiently. With strong attention to detail and excellent communication skills, I ensure smooth operations and positive client experiences.",
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
      "AI-assisted Tasks",
    ],
    image: "/team/member-2.svg",
    linkedin: "https://linkedin.com/in/virtual-assistant",
  },
];
