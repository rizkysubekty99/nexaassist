import Link from "next/link";
import { ArrowRight, Globe, Users, Zap, Shield, CheckCircle, Clock, BookOpen } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NexaAssist</h1>
            <p className="text-lg text-muted-foreground">
              Remote digital support for growing businesses. We help businesses handle
              digital operations, application support, research, e-commerce tasks,
              content, SEO, WordPress and automation.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  NexaAssist is a remote digital support team that helps businesses
                  with various technical and operational needs. We work as a team,
                  combining complementary skills to provide comprehensive support.
                </p>
                <p>
                  Our focus is on supporting existing applications and business processes
                  rather than building new applications from scratch. We handle everything
                  from troubleshooting user issues to managing digital workflows.
                </p>
                <p>
                  Whether you need help with application support, data management,
                  e-commerce operations, content creation, or workflow automation,
                  we have the skills to help.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 rounded-full mb-4">
                  <Globe className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Remote Team</h3>
                <p className="text-muted-foreground text-sm">
                  Working remotely to serve businesses worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Users,
                  title: "Team-Based Support",
                  description: "Two complementary skill sets working together to handle diverse tasks efficiently.",
                },
                {
                  icon: Clock,
                  title: "Organized Workflow",
                  description: "Systematic approach to tasks with clear communication and documentation.",
                },
                {
                  icon: Zap,
                  title: "Technology-Driven",
                  description: "Using AI and automation to improve efficiency and reduce repetitive work.",
                },
                {
                  icon: Shield,
                  title: "Professional",
                  description: "Clear communication, attention to detail, and reliable delivery.",
                },
                {
                  icon: CheckCircle,
                  title: "Quality-Focused",
                  description: "Every task receives careful attention to ensure accuracy and completeness.",
                },
                {
                  icon: BookOpen,
                  title: "Continuous Learning",
                  description: "Staying updated with latest tools and best practices.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-6"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Support */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What We Support</h2>
            <p className="text-muted-foreground mb-8">
              We provide support across various digital operations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                "Application Support & Troubleshooting",
                "Virtual Assistance & Administrative Tasks",
                "Data Entry, Cleaning & Reporting",
                "E-commerce Support & Product Management",
                "SEO Content & Website Content",
                "WordPress Content Management",
                "AI-assisted Workflows & Automation",
                "Research & Lead Generation",
                "Customer Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card border rounded-xl"
                >
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-6">
              Let&apos;s discuss how we can help support your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/team"
                className="px-6 py-3 border border-border font-medium rounded-lg hover:bg-muted transition-all"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
