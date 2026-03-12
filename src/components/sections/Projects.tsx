"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="Things I've shipped."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              viewport={{ once: true, amount: 0.1 }}
              className={
                project.featured
                  ? "md:col-span-1 lg:col-span-1"
                  : ""
              }
            >
              <ProjectCard project={project} featured={project.featured} />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={prefersReduced ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-sm text-center"
          style={{ color: "var(--text-muted)" }}
        >
          More projects coming soon.
        </motion.p>
      </div>
    </section>
  );
}
