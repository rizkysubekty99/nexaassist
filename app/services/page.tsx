import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Cog, Workflow, Database, Headphones, ShoppingCart, Search, Bot } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our comprehensive services - Virtual Assistance, E-commerce Support, Research & Data, and AI & Automation for growing businesses.",
};

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor: Cog,
  ShoppingBag: ShoppingCart,
  Search: Search,
  Cpu: Bot,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">What We Offer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Services
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive support solutions designed to help your business grow
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon] || Cog;
              return (
                <div key={service.id} className="space-y-6">
                  <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional Details */}
                  <div className="bg-card border border-border/50 rounded-2xl p-6 space-y-6">
                    {/* What We Can Help With */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Workflow className="w-4 h-4 text-primary" />
                        What We Can Help With:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Database className="w-4 h-4 text-primary" />
                        Tools We Use:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Related Portfolio */}
                    {service.relatedPortfolio.length > 0 && (
                      <div className="pt-4 border-t border-border/50">
                        <Link
                          href={`/portfolio/${service.relatedPortfolio[0]}`}
                          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                        >
                          View Related Case Study
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Our Process"
            subtitle="How we deliver each project"
          />
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Understand" },
                { step: "02", title: "Plan" },
                { step: "03", title: "Execute" },
                { step: "04", title: "Review" },
                { step: "05", title: "Deliver" },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1"
                >
                  <div className="text-2xl font-bold bg-gradient-to-br from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                    {item.step}
                  </div>
                  <p className="text-sm font-medium">{item.title}</p>
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
