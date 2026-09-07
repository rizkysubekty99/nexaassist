import { Metadata } from "next";
import { Users, Globe, MessageSquare, Brain, Clock, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about NexaAssist - a remote two-person team providing virtual assistance, research, e-commerce support, and AI-powered automation.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero - Enhanced */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                NexaAssist
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A remote two-person team providing virtual assistance, research, e-commerce support,
              and AI-powered automation for growing businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  NexaAssist was established as a remote team dedicated to helping businesses
                  streamline their operations through professional virtual assistance and
                  intelligent automation.
                </p>
                <p>
                  We understand the challenges that growing businesses face - limited time,
                  repetitive tasks, and the need for reliable support. Our team combines
                  complementary skills to address these challenges effectively.
                </p>
                <p>
                  Whether you need help with administrative tasks, e-commerce operations,
                  data management, or business automation, we work with precision and
                  attention to detail to deliver results that matter.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  href="/team" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                >
                  Meet Our Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Globe, label: "Remote-First", desc: "Work across time zones" },
                { icon: MessageSquare, label: "Clear Communication", desc: "Professional English" },
                { icon: Brain, label: "AI-Powered", desc: "Modern workflows" },
                { icon: Clock, label: "Detail-Oriented", desc: "Accurate results" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-primary/5 transition-all"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our work"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Accuracy",
                description: "We believe in getting things right. Every task, every data point, every deliverable receives careful attention.",
              },
              {
                title: "Organization",
                description: "Clear systems and processes ensure that work is structured, documented, and easy to follow.",
              },
              {
                title: "Communication",
                description: "Professional, clear, and timely communication builds trust with international clients.",
              },
              {
                title: "Efficiency",
                description: "We continuously look for better ways to complete tasks, using tools and automation where appropriate.",
              },
              {
                title: "Reliability",
                description: "Consistent delivery and follow-through on commitments builds lasting working relationships.",
              },
              {
                title: "Growth",
                description: "We stay updated with latest tools and techniques to provide modern solutions.",
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Our Approach"
            subtitle="How we work with clients"
          />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  title: "Understand Your Needs",
                  description: "We start by understanding your business, processes, and specific requirements to provide tailored support.",
                },
                {
                  title: "Plan Together",
                  description: "Clear planning ensures both parties have aligned expectations about deliverables, timelines, and communication.",
                },
                {
                  title: "Execute with Precision",
                  description: "We work efficiently while maintaining the quality standards you expect.",
                },
                {
                  title: "Communicate Transparently",
                  description: "Regular updates and clear documentation keep you informed throughout the project.",
                },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 group hover:bg-muted/30 p-4 rounded-xl transition-all"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
