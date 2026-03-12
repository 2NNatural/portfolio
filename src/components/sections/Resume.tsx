"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { resumeSections } from "@/data/resume-data";

export default function Resume() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="resume"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <SectionHeading
            title="Resume"
            subtitle="The highlights."
          />
          <motion.a
            initial={prefersReduced ? {} : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            href="/Noah_Neri_resume.pdf"
            download="Noah_Neri_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border transition-all duration-200 self-start sm:self-auto flex-shrink-0"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "var(--accent)";
              el.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = "var(--accent)";
            }}
          >
            <Download size={15} />
            Download PDF
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {resumeSections.map((section, si) => (
            <div key={section.id}>
              <motion.h3
                initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: si * 0.1 }}
                viewport={{ once: true }}
                className="text-xs font-semibold tracking-widest uppercase mb-8"
                style={{ color: "var(--text-muted)" }}
              >
                {section.label}
              </motion.h3>

              <div>
                {section.entries.map((entry, ei) => (
                  <motion.div
                    key={entry.id}
                    initial={prefersReduced ? {} : { opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: si * 0.05 + ei * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    viewport={{ once: true, amount: 0.1 }}
                  >
                    <TimelineItem
                      entry={entry}
                      isLast={ei === section.entries.length - 1}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
