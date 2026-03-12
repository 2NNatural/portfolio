import { ResumeEntry } from "@/types";

interface TimelineItemProps {
  entry: ResumeEntry;
  isLast?: boolean;
}

export default function TimelineItem({ entry, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-3 top-3 w-px"
          style={{
            height: "calc(100% + 2rem)",
            backgroundColor: "var(--border)",
          }}
        />
      )}

      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center"
        style={{
          borderColor: "var(--accent)",
          backgroundColor: "var(--bg-primary)",
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
        />
      </div>

      {/* Content */}
      <div className="pb-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
          <div>
            <h4
              className="font-bold text-base leading-tight"
              style={{
                fontFamily: "CabinetGrotesk, system-ui, sans-serif",
                color: "var(--text-primary)",
              }}
            >
              {entry.title}
            </h4>
            <p
              className="text-sm font-medium mt-0.5"
              style={{ color: "var(--accent)" }}
            >
              {entry.organization}
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
            <span
              className="text-xs font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              {entry.startDate} — {entry.endDate}
            </span>
            {entry.highlight && (
              <span
                className="inline-block px-2 py-0.5 text-xs font-semibold rounded"
                style={{
                  backgroundColor: "var(--accent-glow)",
                  color: "var(--accent)",
                  border: "1px solid var(--accent-glow-strong)",
                }}
              >
                {entry.highlight}
              </span>
            )}
          </div>
        </div>

        {entry.location && (
          <p
            className="text-xs mb-3"
            style={{ color: "var(--text-muted)" }}
          >
            {entry.location}
          </p>
        )}

        {entry.bullets.length > 0 && (
          <ul className="space-y-2">
            {entry.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
