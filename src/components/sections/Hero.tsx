"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Mail, Phone, ArrowDown } from "lucide-react";
import MeshGradientCanvas from "@/components/hero/MeshGradientCanvas";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/noah-neri-14a975251/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "noahneri2@gmail.com",
    href: "mailto:noahneri2@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "(661) 600-6327",
    href: "tel:+16616006327",
    icon: Phone,
    external: false,
  },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();

  const nameChars = "Noah Neri".split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <MeshGradientCanvas />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <span
              className="h-px w-8"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: "var(--accent)" }}
            >
              Builder · USC Marshall · Class of &apos;26
            </span>
          </motion.div>

          {/* Name */}
          <h1
            className="text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight mb-6"
            style={{ fontFamily: "CabinetGrotesk, system-ui, sans-serif" }}
            aria-label="Noah Neri"
          >
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.04,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="inline-block"
                style={{ color: char === " " ? "transparent" : "var(--text-primary)" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Tagline */}
          <motion.p
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="text-2xl md:text-3xl font-medium mb-10"
            style={{
              color: "var(--text-secondary)",
              fontFamily: "CabinetGrotesk, system-ui, sans-serif",
            }}
          >
            I build with AI{" "}
            <span style={{ color: "var(--accent)" }}>— fast.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="px-7 py-3.5 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{
                backgroundColor: "var(--accent)",
                color: "#0a0a0a",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              View Projects
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-7 py-3.5 text-sm font-semibold rounded-lg border transition-all duration-200"
              style={{
                borderColor: "var(--border-hover)",
                color: "var(--text-primary)",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-hover)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text-primary)";
              }}
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="flex flex-wrap items-center gap-6"
          >
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                <link.icon size={15} />
                <span>{link.label}</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
