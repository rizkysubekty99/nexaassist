import Link from "next/link";
import Image from "next/image";
import { Users, ArrowRight, Linkedin } from "lucide-react";
import { teamMembers } from "@/data/team";
import CTASection from "@/components/CTASection";

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the NexaAssist Team</h1>
            <p className="text-lg text-muted-foreground">
              Two complementary skill sets working as one remote team.
              We combine technical expertise with operational efficiency to support your business.
            </p>
          </div>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-8 bg-blue-50 border-y border-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-blue-800">
              <strong>Remote Team:</strong> NexaAssist is a remote team, not a single freelancer.
              We work collaboratively to provide comprehensive digital support services.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <div className="relative h-72 bg-gradient-to-br from-primary/10 to-secondary/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-6">{member.description}</p>

                  {/* Skills */}
                  <div>
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Skills & Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Strength */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Two Complementary Skill Sets</h2>
            <p className="text-muted-foreground mb-6">
              Member 1 focuses on technical support, data work, and AI automation.
              Member 2 focuses on virtual assistance, content, and e-commerce support.
              Together, we can handle a wide range of business support needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all"
              >
                View Our Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-border font-medium rounded-lg hover:bg-muted transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
