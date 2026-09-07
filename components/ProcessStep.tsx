import { ArrowRight } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({
  number,
  title,
  description,
  isLast = false,
}: ProcessStepProps) {
  return (
    <div className="relative flex gap-4">
      {/* Number */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
          {number}
        </div>
        {!isLast && (
          <div className="w-0.5 h-full bg-border mt-2">
            <ArrowRight className="h-4 w-4 text-muted-foreground mx-auto mt-2 rotate-90" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pb-8 flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
