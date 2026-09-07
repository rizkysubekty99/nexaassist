import { Metadata } from "next";
import { Workflow, Sparkles, MessageSquare, Clock, CheckCircle, ArrowRight, Settings, Users, Zap } from "lucide-react";
import ProcessStep from "@/components/ProcessStep";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Learn about NexaAssist's working process - from understanding requirements to delivering completed work.",
};

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "We start by understanding your requirements, business processes, and specific needs. Clear communication ensures we&apos;re aligned from the beginning.",
  },
  {
    number: "02",
    title: "Plan",
    description: "We define tasks, deliverables, timeline, and communication approach. Planning together sets realistic expectations and ensures smooth execution.",
  },
  {
    number: "03",
    title: "Execute",
    description: "We complete the work carefully and efficiently, following the agreed plan. Regular check-ins keep you updated on progress.",
  },
  {
    number: "04",
    title: "Review",
    description: "Before delivery, we review the work to ensure quality and accuracy. This step catches any issues and ensures you receive polished results.",
  },
  {
    number: "05",
    title: "Deliver",
    description: "We deliver the completed work with clear documentation. We welcome feedback and are ready to make adjustments as needed.",
  },
];

const principles = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Professional, timely communication in English. We keep you informed throughout every project.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Settings,
    title: "Organized Workflow",
    description: "Structured processes and documentation ensure work is trackable and easy to understand.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CheckCircle,
    title: "Quality First",
    description: "We focus on accuracy and attention to detail. Every deliverable goes through quality checks.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Flexible Approach",
    description: "We adapt to your preferred tools and working style. Communication happens via your preferred channels.",
    color: "from-amber-500 to-orange-500",
  },
];

const tools = ["Email", "Slack", "Zoom", "Google Meet", "Trello", "Notion", "Asana", "Monday.com"];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Decorative Elements */}
        <div className="absolute top-40 left-[15%] w-4 h-4 bg-primary/40 rotate-45 animate-float" />
        <div className="absolute top-60 right-[25%] w-3 h-3 bg-purple-400/50 rounded-full animate-float delay-200" />
        <div className="absolute bottom-40 left-[20%] w-5 h-5 bg-cyan-400/40 rotate-12 animate-float delay-300" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Workflow className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Process</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                We Work
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A structured approach to delivering quality work and building lasting working relationships
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground">
                From initial understanding to final delivery
              </p>
            </div>

            <div className="space-y-0">
              {processSteps.map((step, index) => (
                <ProcessStep
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isLast={index === processSteps.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Working Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The values that guide our work and interactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {principles.map((item, index) => (
              <div 
                key={index} 
                className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Communication & Collaboration</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We work primarily remotely and are comfortable with asynchronous collaboration
                  across different time zones.
                </p>
                <p>
                  Our communication tools include email, project management platforms, and video
                  calls when needed. We adapt to your preferred channels and establish regular
                  check-in schedules.
                </p>
                <p>
                  Whether you need daily updates or weekly summaries, we adjust our communication
                  frequency to match your preferences and project needs.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-lg">Tools We Commonly Use</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((tool) => (
                  <div key={tool} className="flex items-center gap-2 text-sm p-2 bg-card/50 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
