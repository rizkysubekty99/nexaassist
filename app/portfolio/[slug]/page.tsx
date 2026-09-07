import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, ExternalLink, FileDown, Github, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import { getPortfolioBySlug, portfolioItems } from "@/data/portfolio";
import SectionTitle from "@/components/SectionTitle";

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) return { title: "Project Not Found" };

  return {
    title: item.title,
    description: item.shortDescription,
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);

  if (!item) {
    notFound();
  }

  // Get related projects (same category, excluding current)
  const relatedProjects = portfolioItems
    .filter((p) => p.category === item.category && p.slug !== item.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {item.category}
              </span>
              {item.status === "demo" && (
                <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Demo Project
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{item.title}</h1>

            {/* Short Description */}
            <p className="text-lg text-muted-foreground mb-6">{item.shortDescription}</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              {item.demoUrl && (
                <a
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Demo
                </a>
              )}
              {item.githubUrl && (
                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-border font-medium rounded-lg hover:bg-muted transition-all flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
              {item.videoUrl && (
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-border font-medium rounded-lg hover:bg-muted transition-all flex items-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Watch Video
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Cover Image */}
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Demo Notice */}
              {item.status === "demo" && (
                <div className="p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-amber-600">Sample Project:</span> This is a
                    self-created demonstration project designed to showcase our skills and workflow.
                  </p>
                </div>
              )}

              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground">{item.description}</p>
              </div>

              {/* Case Study Details */}
              <div className="space-y-6">
                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Client Scenario</h3>
                  <p className="text-muted-foreground">{item.clientScenario}</p>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Problem</h3>
                  <p className="text-muted-foreground">{item.problem}</p>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Objective</h3>
                  <p className="text-muted-foreground">{item.objective}</p>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Approach</h3>
                  <p className="text-muted-foreground">{item.approach}</p>
                </div>

                <div className="bg-card border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Process</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.process.map((step, index) => (
                      <div key={index} className="flex items-center">
                        <span className="px-3 py-1 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full text-sm font-medium">
                          {step}
                        </span>
                        {index < item.process.length - 1 && (
                          <ArrowRight className="h-4 w-4 mx-2 text-muted-foreground" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">Result</h3>
                  <p className="text-muted-foreground">{item.result}</p>
                </div>
              </div>

              {/* Gallery */}
              {item.gallery.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {item.gallery.map((img, index) => (
                      <div
                        key={index}
                        className="relative h-48 bg-muted rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <Image
                          src={img}
                          alt={`${item.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Deliverables */}
              <div className="bg-card border rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Deliverables</h3>
                <div className="space-y-3">
                  {item.demoUrl && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <ExternalLink className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">View Demo</span>
                    </a>
                  )}
                  {item.fileUrl && (
                    <a
                      href={item.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <FileDown className="h-5 w-5 text-emerald-600" />
                      <span className="text-sm font-medium">Download Sample</span>
                    </a>
                  )}
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <Github className="h-5 w-5 text-gray-600" />
                      <span className="text-sm font-medium">View GitHub</span>
                    </a>
                  )}
                  {item.videoUrl && (
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <Play className="h-5 w-5 text-red-600" />
                      <span className="text-sm font-medium">Watch Demo Video</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-card border rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="bg-card border rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Skills Applied</h3>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-6 text-primary-foreground">
                <h3 className="text-lg font-semibold mb-2">Interested in similar work?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Let&apos;s discuss how we can help with your project.
                </p>
                <Link
                  href="/contact"
                  className="block w-full px-4 py-2 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors text-center"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-primary/5 to-purple-500/5 relative">
          <div className="absolute inset-0 bg-dots-pattern opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <SectionTitle title="Related Projects" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="bg-card border rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1"
                >
                  <div className="relative h-40 bg-gradient-to-br from-primary/20 to-purple-500/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-muted-foreground">{project.category}</span>
                    <h3 className="font-semibold mt-1">{project.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
