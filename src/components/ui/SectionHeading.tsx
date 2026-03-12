import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={align === "center" ? "text-center" : ""}>
      <div
        className={`mb-12 ${align === "center" ? "flex flex-col items-center" : ""}`}
      >
        <div
          className="h-px w-12 mb-4"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight"
          style={{ fontFamily: "CabinetGrotesk, system-ui, sans-serif" }}
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-lg" style={{ color: "var(--text-secondary)" }}>
            {subtitle}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
