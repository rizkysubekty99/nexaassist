"use client";

import { useState } from "react";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import PortfolioCard from "@/components/PortfolioCard";
import SectionTitle from "@/components/SectionTitle";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              Sample projects demonstrating our skills, workflow, and approach.
              These are demonstration projects designed to showcase what we can do.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Project Notice */}
      <section className="py-8 bg-blue-50 border-y border-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-blue-800">
              <strong>Demo Projects:</strong> These are self-created demonstration
              projects designed to showcase our skills, workflow and approach. They
              do not represent actual client work.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="py-8 sticky top-16 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Note about Demo Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">About Our Portfolio</h2>
            <p className="text-muted-foreground mb-6">
              Our portfolio features demonstration projects that showcase our skills,
              workflow, and approach to various tasks. These projects are designed to
              illustrate how we would handle similar work for actual clients.
            </p>
            <p className="text-sm text-muted-foreground">
              Each project demonstrates our systematic approach, attention to detail,
              and commitment to quality work.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
