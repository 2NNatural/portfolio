"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const CONTACTS = [
  {
    label: "Email",
    value: "noahneri2@gmail.com",
    href: "mailto:noahneri2@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "(661) 600-6327",
    href: "tel:+16616006327",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "noah-neri-14a975251",
    href: "https://www.linkedin.com/in/noah-neri-14a975251/",
    icon: Linkedin,
    external: true,
  },
];

export default function Contact() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="h-px w-12 mb-8 mx-auto"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
            style={{ fontFamily: "CabinetGrotesk, system-ui, sans-serif" }}
          >
            Let&apos;s build{" "}
            <span style={{ color: "var(--accent)" }}>something.</span>
          </h2>
          <p
            className="text-lg mb-12 max-w-md mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Open to full-time roles, internships, freelance work, and
            interesting projects.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {CONTACTS.map((contact) => (
            <a
              key={contact.href}
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-200 w-full sm:w-auto"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--accent)";
                el.style.color = "var(--accent)";
                el.style.boxShadow = "0 0 16px var(--accent-glow)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-secondary)";
                el.style.boxShadow = "none";
              }}
            >
              <contact.icon size={18} />
              <div className="text-left">
                <div className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                  {contact.label}
                </div>
                <div className="text-sm font-semibold">{contact.value}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
