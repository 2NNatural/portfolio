"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  const isExternal = project.linkType === "external";
  const isShowcase = project.linkType === "showcase";
  const [imageError, setImageError] = useState(false);

  const CardContent = (
    <div
      className={cn(
        "group relative flex flex-col rounded-xl border overflow-hidden h-full",
        "transition-all duration-200"
      )}
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(0,229,160,0.4)";
        el.style.transform = "translateY(-2px) scale(1.01)";
        el.style.boxShadow = "0 8px 32px var(--accent-glow)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border)";
        el.style.transform = "translateY(0) scale(1)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Thumbnail */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "16/9",
          backgroundColor: "var(--bg-tertiary)",
        }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          unoptimized={project.thumbnail.endsWith(".svg")}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            setImageError(true);
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,10,10,0.04) 0%, rgba(10,10,10,0.12) 62%, rgba(10,10,10,0.28) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,229,160,0.08) 100%)",
          }}
        />
        {/* Placeholder overlay when no image */}
        {imageError && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ color: "var(--border-hover)" }}
            aria-hidden="true"
          >
            <div className="text-center">
              <div
                className="text-4xl font-black mb-1"
                style={{
                  fontFamily: "CabinetGrotesk, system-ui, sans-serif",
                  color: "var(--border-hover)",
                }}
              >
                {project.title.charAt(0)}
              </div>
            </div>
          </div>
        )}

        {/* Featured badge */}
        {featured && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md z-10"
            style={{
              backgroundColor: "var(--accent)",
              color: "#0a0a0a",
            }}
          >
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3
            className="text-lg font-bold leading-tight"
            style={{ fontFamily: "CabinetGrotesk, system-ui, sans-serif" }}
          >
            {project.title}
          </h3>
          <div
            className="flex-shrink-0 mt-0.5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ color: "var(--text-muted)" }}
          >
            {isExternal ? <ExternalLink size={15} /> : <ArrowRight size={15} />}
          </div>
        </div>

        <p
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-md font-medium"
              style={{
                backgroundColor: "var(--bg-tertiary)",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
        aria-label={`${project.title} — opens in new tab`}
      >
        {CardContent}
      </a>
    );
  }

  if (isShowcase) {
    return (
      <Link href={project.link} className="block h-full">
        {CardContent}
      </Link>
    );
  }

  return <div className="h-full">{CardContent}</div>;
}
