import { Metadata } from "next";
import { HelpCircle, Sparkles, ArrowRight } from "lucide-react";
import { faqItems } from "@/data/faq";
import FAQItem from "@/components/FAQItem";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about NexaAssist's services, working process, and collaboration approach.",
};

export default function FAQPage() {
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
        <div className="absolute bottom-40 right-[15%] w-5 h-5 bg-cyan-400/40 rotate-12 animate-float delay-300" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 border border-primary/20">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Questions?</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Questions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Common questions about working with NexaAssist
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border rounded-2xl shadow-xl shadow-primary/5 overflow-hidden">
              {faqItems.map((item, index) => (
                <FAQItem key={item.id} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-purple-500/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Feel free to reach out and we&apos;ll get back to you as soon as possible.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
