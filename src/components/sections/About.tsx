"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillTag from "@/components/ui/SkillTag";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SKILLS } from "@/data/skills-data";

export default function About() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="about"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About"
          subtitle="The quick version."
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                USC Marshall student graduating May 2026, studying Business
                with a focus on Finance. I use AI to build — from full-stack
                apps to marketing campaigns to ML models.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                My focus is on shipping fast: agent orchestration, vibe coding,
                and turning ideas into working products in hours, not months.
                I&apos;ve led the Blockchain at USC chapter to $10M+ in governance
                delegations and built outreach systems that improved response
                rates by 3000%.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I work at the intersection of technology and business — where
                the tools are changing faster than anyone can keep up, and that
                gap is exactly where I operate.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="pt-4 flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "TypeScript",
                  "Python",
                  "Supabase",
                  "Claude API",
                  "Framer Motion",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono rounded-md border"
                    style={{
                      borderColor: "var(--border-hover)",
                      color: "var(--text-muted)",
                      backgroundColor: "var(--bg-secondary)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Skills bento grid */}
          <div>
            <div className="grid grid-cols-2 gap-3">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.07,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  viewport={{ once: true, amount: 0.1 }}
                >
                  <SkillTag skill={skill} index={i} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
