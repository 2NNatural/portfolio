"use client";

import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-6 border-t"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className="text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          © {year} Noah Neri. Built with Next.js &amp; AI.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/noah-neri-14a975251/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            aria-label="LinkedIn"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:noahneri2@gmail.com"
            className="p-2 rounded-lg transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            aria-label="Email"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
