import Link from "next/link";
import { ArrowRight, Users, Clock, Globe, Zap, Shield, CheckCircle, Sparkles, Rocket, Target, Handshake } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { getFeaturedPortfolio } from "@/data/portfolio";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import CTASection from "@/components/CTASection";
import SectionTitle from "@/components/SectionTitle";

export default function HomePage() {
  const featuredPortfolio = getFeaturedPortfolio();

  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-grid-pattern opacity-50" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow delay-200" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-float" />
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 left-[15%] w-4 h-4 bg-primary/40 rotate-45 animate-float" />
        <div className="absolute top-48 left-[25%] w-3 h-3 bg-blue-400/50 rounded-full animate-float delay-100" />
        <div className="absolute bottom-40 right-[20%] w-5 h-5 bg-purple-400/40 rotate-12 animate-float delay-300" />
        <div className="absolute top-60 right-[30%] w-3 h-3 bg-cyan-400/50 rounded-full animate-float delay-200" />

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wider">
                {siteConfig.name.toUpperCase()}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Reliable Remote Support for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Growing Businesses
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We help businesses stay organized, save time, and streamline repetitive tasks
              through virtual assistance, research, e-commerce support, and AI-powered automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="group px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
              >
                View Our Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border-2 border-primary/20 font-medium rounded-lg hover:bg-primary/5 transition-all bg-background/50 backdrop-blur-sm"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </div>

          {/* Visual Stats Cards */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Users, label: "2-Person Team", color: "from-blue-500 to-cyan-500" },
              { icon: Globe, label: "Remote Ready", color: "from-purple-500 to-pink-500" },
              { icon: Zap, label: "AI Powered", color: "from-amber-500 to-orange-500" },
              { icon: Shield, label: "Professional", color: "from-emerald-500 to-teal-500" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive support solutions tailored to your business needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us - Enhanced */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Why Work With Us"
            subtitle="What makes NexaAssist the right choice for your business"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Two-Person Team",
                description: "Two complementary skill sets working together to handle diverse tasks efficiently.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Clock,
                title: "Detail-Oriented",
                description: "We focus on accuracy, organization, and clear documentation in everything we do.",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: Globe,
                title: "English Communication",
                description: "Professional communication for international clients across different time zones.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Zap,
                title: "Technology-Driven",
                description: "We use AI and automation to improve repetitive workflows and increase efficiency.",
                color: "from-amber-500 to-orange-500",
              },
              {
                icon: Shield,
                title: "Flexible Support",
                description: "From administrative tasks to technical automation, we adapt to your needs.",
                color: "from-rose-500 to-red-500",
              },
              {
                icon: CheckCircle,
                title: "Reliable Partnership",
                description: "Committed to delivering quality work and building long-term working relationships.",
                color: "from-indigo-500 to-blue-500",
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-card border rounded-xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
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

      {/* Featured Portfolio */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Featured Work"
            subtitle="Sample projects showcasing our skills and approach"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPortfolio.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View All Portfolio
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Target, title: "Quality First", desc: "Every task receives careful attention to detail" },
              { icon: Rocket, title: "Fast Delivery", desc: "Efficient workflows for timely results" },
              { icon: Handshake, title: "Long-term Partnership", desc: "Building lasting working relationships" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
