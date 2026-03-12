"use client";

import { Skill } from "@/types";
import { cn } from "@/lib/utils";

interface SkillTagProps {
  skill: Skill;
  index: number;
}

export default function SkillTag({ skill, index }: SkillTagProps) {
  const sizeClasses = {
    lg: "col-span-2 row-span-2",
    md: "col-span-2",
    sm: "col-span-1",
  };

  return (
    <div
      className={cn(
        "group relative p-5 rounded-xl border transition-all duration-200 cursor-default overflow-hidden",
        sizeClasses[skill.size]
      )}
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--accent)";
        el.style.boxShadow = "0 0 20px var(--accent-glow)";
        el.style.backgroundColor = "var(--bg-tertiary)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border)";
        el.style.boxShadow = "none";
        el.style.backgroundColor = "var(--bg-secondary)";
      }}
    >
      {/* Index number accent */}
      <div
        className="absolute top-4 right-4 text-xs font-mono opacity-20"
        style={{ color: "var(--accent)" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className={cn("flex flex-col", skill.size === "lg" ? "justify-end h-full" : "")}>
        <h3
          className={cn(
            "font-bold tracking-tight mb-1.5 transition-colors duration-200",
            skill.size === "lg" ? "text-xl" : "text-base"
          )}
          style={{
            fontFamily: "CabinetGrotesk, system-ui, sans-serif",
            color: "var(--text-primary)",
          }}
        >
          {skill.label}
        </h3>
        {skill.description && (
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            {skill.description}
          </p>
        )}
      </div>

      {/* Accent bottom bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full"
        style={{
          backgroundColor: "var(--accent)",
          width: "0%",
        }}
      />
    </div>
  );
}
