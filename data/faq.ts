export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "international-clients",
    question: "Do you work with international clients?",
    answer:
      "Yes, we regularly work with international clients. As a remote team, we are comfortable with virtual collaboration across different time zones. We communicate in English and use common collaboration tools like email, Slack, Zoom, and project management platforms to ensure smooth working relationships regardless of location.",
  },
  {
    id: "team-work",
    question: "Can you work as a team?",
    answer:
      "Yes, NexaAssist is a two-person team with complementary skill sets. We can work together on larger projects or assign tasks based on individual expertise. Our combined skills cover administrative tasks, e-commerce support, data management, and technical automation, allowing us to handle diverse requirements efficiently.",
  },
  {
    id: "task-types",
    question: "What type of tasks can you handle?",
    answer:
      "We handle a wide range of tasks including: Virtual assistance and administrative support, E-commerce support (product research, listings, customer service), Data entry, cleaning, and management, Web research and lead generation, Excel and Google Sheets work, Social media assistance, AI-assisted workflows and automation (n8n, Zapier), and more. If you have specific tasks in mind, feel free to discuss them with us.",
  },
  {
    id: "recurring-tasks",
    question: "Can you handle recurring tasks?",
    answer:
      "Absolutely. We are well-suited for recurring tasks and ongoing support. We can establish efficient workflows and maintain consistency across tasks. Many of our services work well on a retainer or subscription basis where we provide regular support on a scheduled basis.",
  },
  {
    id: "ai-automation",
    question: "Can you work with AI and automation?",
    answer:
      "Yes, one of our team members specializes in AI workflows and automation. We can help set up n8n workflows, integrate APIs, create AI-assisted processes, and automate repetitive business tasks. From simple automations to complex multi-step workflows, we can design and implement solutions to streamline your operations.",
  },
  {
    id: "pricing-model",
    question: "Do you offer hourly or project-based work?",
    answer:
      "We offer flexible pricing options to suit different needs. For ongoing work and recurring tasks, we can discuss hourly or retainer arrangements. For specific projects with defined scope, we can provide project-based pricing. We always aim to provide transparent pricing and will discuss the best arrangement based on your requirements and preferences.",
  },
];
