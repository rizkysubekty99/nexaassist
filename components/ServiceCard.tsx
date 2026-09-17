import Link from "next/link";
import {
  Headphones,
  Monitor,
  Database,
  ShoppingBag,
  Search,
  FileText,
  Cpu,
} from "lucide-react";
import type { Service } from "@/data/services";

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

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Monitor;
  const colorClass = colorMap[service.icon] || "from-blue-500 to-cyan-500";

  return (
    <div className="bg-card border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 group">
      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {service.title}
      </h3>

      {/* Short Description */}
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {service.shortDescription}
      </p>

      {/* Key Features */}
      <div className="space-y-2 mb-4">
        <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Key Skills:
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {service.features.slice(0, 4).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded"
            >
              {feature}
            </span>
          ))}
          {service.features.length > 4 && (
            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded">
              +{service.features.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* View Service Link */}
      <Link
        href={`/services#${service.id}`}
        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}
