import { Monitor, ShoppingBag, Search, Cpu } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  ShoppingBag,
  Search,
  Cpu,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Monitor;

  return (
    <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-muted-foreground mb-4">{service.description}</p>
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">What We Can Help With:</h4>
        <ul className="space-y-1">
          {service.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="text-sm text-muted-foreground flex items-center">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
          {service.features.length > 4 && (
            <li className="text-sm text-primary">+{service.features.length - 4} more</li>
          )}
        </ul>
      </div>
    </div>
  );
}
