import { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, MessageSquare, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with NexaAssist for virtual assistance, e-commerce support, research, or AI automation services.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Decorative Elements */}
        <div className="absolute top-40 left-[20%] w-4 h-4 bg-primary/40 rotate-45 animate-float" />
        <div className="absolute top-60 right-[25%] w-3 h-3 bg-purple-400/50 rounded-full animate-float delay-200" />
        <div className="absolute bottom-40 right-[15%] w-5 h-5 bg-cyan-400/40 rotate-12 animate-float delay-300" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Get Started</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Work Together
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a task, project, or repetitive process that needs support? Tell us what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  We&apos;re here to help with your virtual assistance, research, e-commerce, and automation needs.
                  Reach out and let&apos;s discuss how we can support your business.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                  { icon: MapPin, label: "Location", value: "Remote - Available Worldwide", href: null },
                  { icon: Clock, label: "Response Time", value: "Usually within 24 hours", href: null },
                  { icon: MessageSquare, label: "Languages", value: "English", href: null },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 bg-card border rounded-xl hover:shadow-lg hover:shadow-primary/5 transition-all"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{item.label}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-2xl border border-primary/20">
                <h3 className="font-semibold mb-4">Why Work With Us?</h3>
                <div className="space-y-3">
                  {[
                    "Detail-oriented approach",
                    "Clear English communication",
                    "Flexible to your needs",
                    "Professional delivery",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border rounded-2xl p-8 shadow-xl shadow-primary/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Links */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-purple-500/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Connect on Platforms</h2>
            <p className="text-muted-foreground mb-6">
              You can also reach out through these freelance platforms
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {siteConfig.links.upwork && (
                <a
                  href={siteConfig.links.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all flex items-center gap-2"
                >
                  <span>Upwork</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
              {siteConfig.links.fiverr && (
                <a
                  href={siteConfig.links.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all flex items-center gap-2"
                >
                  <span>Fiverr</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all flex items-center gap-2"
                >
                  <span>LinkedIn</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
