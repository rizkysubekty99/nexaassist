import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/data/portfolio";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
            {item.category}
          </span>
        </div>
        {item.status === "demo" && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-secondary/90 text-secondary-foreground text-xs font-medium rounded">
              Demo Project
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.shortDescription}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-1 mb-4">
          {item.tools.slice(0, 3).map((tool, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded"
            >
              {tool}
            </span>
          ))}
          {item.tools.length > 3 && (
            <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
              +{item.tools.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/portfolio/${item.slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          View Case Study
          <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
