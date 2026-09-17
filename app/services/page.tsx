import Link from "next/link";
import {
  Headphones,
  Monitor,
  Database,
  ShoppingBag,
  Search,
  FileText,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Headphones,
  Monitor,
  Database,
  ShoppingBag,
  Search,
  FileText,
  Cpu,
};

const colorMap: Record<string, string> = {
  Headphones: "from-blue-500 to-cyan-500",
  Monitor: "from-emerald-500 to-teal-500",
  Database: "from-amber-500 to-orange-500",
  ShoppingBag: "from-purple-500 to-pink-500",
  Search: "from-blue-500 to-indigo-500",
  FileText: "from-pink-500 to-rose-500",
  Cpu: "from-violet-500 to-purple-500",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive digital support solutions for growing businesses.
              From application support to AI automation, we help you handle the
              technical and operational aspects of your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Monitor;
              const colorClass = colorMap[service.icon] || "from-blue-500 to-cyan-500";
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-6`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        What We Can Help With:
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-sm"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Tools We Use:
                      </h3>
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
                  </div>

                  {/* Visual */}
                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-2xl p-8 aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <div
                          className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4`}
                        >
                          <Icon className="h-12 w-12 text-white" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Service Categories"
            subtitle="Browse our services by category"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Monitor;
              const colorClass = colorMap[service.icon] || "from-blue-500 to-cyan-500";

              return (
                <Link
                  key={service.id}
                  href={`#${service.id}`}
                  className="group bg-card border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all hover:-translate-y-1"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
