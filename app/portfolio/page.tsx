"use client";

import { useState } from "react";
import { Sparkles, FolderOpen } from "lucide-react";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import PortfolioCard from "@/components/PortfolioCard";
import SectionTitle from "@/components/SectionTitle";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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
              <FolderOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Portfolio
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Sample projects demonstrating our skills, workflow, and approach to different types of work
            </p>
          </div>
        </div>
      </section>

      {/* Demo Notice */}
      <section className="py-4 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 border-y border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1 font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              Note:
            </span>{" "}
            These are self-created demonstration projects designed to showcase our skills and workflow.
          </p>
        </div>
      </section>

      {/* Filter & Portfolio */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card border border-border hover:border-primary/30 hover:bg-primary/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>

          {/* Empty State */}
          {filteredPortfolio.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
