import Link from "next/link";
import { ArrowRight, MessageSquare, Lightbulb, PenTool, Eye, Package, RefreshCw } from "lucide-react";
import CTASection from "@/components/CTASection";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Understand",
    description: "Understand the task, problem or business requirement. We ask questions and gather all necessary information to ensure we fully understand what you need.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Plan",
    description: "Define scope, deliverables and workflow. We outline the approach, timeline, and how we will tackle the task systematically.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Execute",
    description: "Perform the task carefully and systematically. We work through the task methodically, keeping your requirements in mind throughout.",
  },
  {
    number: "04",
    icon: Eye,
    title: "Review",
    description: "Check accuracy, quality and completeness. We review our work to ensure it meets your standards and requirements.",
  },
  {
    number: "05",
    icon: Package,
    title: "Deliver",
    description: "Deliver the result with clear communication and documentation. We provide the completed work along with any relevant documentation.",
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Follow Up",
    description: "For support tasks, follow up after delivery when necessary. We ensure everything is working as expected and address any issues.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h1>
            <p className="text-lg text-muted-foreground">
              Our systematic approach ensures quality work and clear communication
              throughout every project. Here&apos;s how we work with clients.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative"
                >
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-primary/20 to-primary/5 hidden md:block" />
                  )}

                  <div className="flex gap-6">
                    {/* Number Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold mb-2">{step.title}</h2>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Key Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                {
                  title: "Clear Communication",
                  description: "We communicate clearly and regularly, keeping you informed of progress and any issues.",
                },
                {
                  title: "Organized Process",
                  description: "We follow a systematic approach to ensure nothing is missed and quality is maintained.",
                },
                {
                  title: "Documentation",
                  description: "We document our work and processes for future reference and continuity.",
                },
                {
                  title: "Quality First",
                  description: "We prioritize quality over speed, ensuring deliverables meet your standards.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-6"
                >
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Working Together */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-8">
              We follow this systematic approach with every project to ensure consistent
              quality and clear communication. Let&apos;s discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-border font-medium rounded-lg hover:bg-muted transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
