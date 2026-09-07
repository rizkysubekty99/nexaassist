import { Metadata } from "next";
import { Users, Sparkles, Code, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import { teamMembers } from "@/data/team";
import TeamCard from "@/components/TeamCard";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the NexaAssist team - a two-person remote team with complementary skills in virtual assistance, e-commerce, data management, and AI automation.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Decorative Elements */}
        <div className="absolute top-40 left-[15%] w-4 h-4 bg-primary/40 rotate-45 animate-float" />
        <div className="absolute top-60 right-[30%] w-3 h-3 bg-purple-400/50 rounded-full animate-float delay-200" />
        <div className="absolute bottom-40 left-[25%] w-5 h-5 bg-cyan-400/40 rotate-12 animate-float delay-300" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Team
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A two-person remote team with complementary skills, working together to provide comprehensive business support
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="How We Work Together"
            subtitle="Our combined strengths"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, stat: "2", label: "Complementary Skills", color: "from-blue-500 to-cyan-500" },
              { icon: Sparkles, stat: "∞", label: "Flexible Support", color: "from-purple-500 to-pink-500" },
              { icon: Code, stat: "24/7", label: "Async Ready", color: "from-amber-500 to-orange-500" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-primary/5 transition-all hover:-translate-y-1"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className={`text-4xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-2`}>
                  {item.stat}
                </div>
                <p className="text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle
            title="Our Skills Combined"
            subtitle="What we bring to your projects"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Technical VA */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Technical VA & AI Automation</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["AI", "n8n", "Automation", "API", "JSON", "SQL", "Database", "Excel", "Google Sheets", "Technical Support"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-600 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* General VA */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Virtual Assistant & Support</h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Virtual Assistance", "Customer Support", "Web Research", "Lead Generation", "Product Research", "Product Listing", "Canva", "Social Media", "English Communication"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-600 text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss how our combined skills can help your business grow
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
