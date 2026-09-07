import Image from "next/image";
import { Linkedin } from "lucide-react";
import { Linkedin as LinkedInIcon } from "./Icons";
import type { TeamMember } from "@/data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-card border rounded-lg overflow-hidden">
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/20">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-sm text-muted-foreground">{member.role}</p>
          </div>
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
          )}
        </div>

        <p className="text-muted-foreground mb-4">{member.description}</p>

        {/* Skills */}
        <div>
          <h4 className="text-sm font-medium mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
