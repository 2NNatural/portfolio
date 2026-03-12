"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["hero", "about", "projects", "resume", "contact"];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "color-mix(in srgb, var(--bg-primary) 90%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="font-bold text-xl tracking-tight transition-opacity hover:opacity-70"
            style={{
              fontFamily: "CabinetGrotesk, system-ui, sans-serif",
              color: "var(--accent)",
            }}
            aria-label="Go to top"
          >
            NN
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(sectionId)}
                  className="relative text-sm font-medium transition-colors duration-200 pb-0.5 group"
                  style={{
                    color: isActive ? "var(--accent)" : "var(--text-secondary)",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px transition-all duration-300"
                    style={{
                      backgroundColor: "var(--accent)",
                      width: isActive ? "100%" : "0%",
                    }}
                  />
                </button>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg transition-opacity hover:opacity-70"
              style={{ color: "var(--text-secondary)" }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 z-40 flex flex-col pt-20 px-6 pb-8"
            style={{ backgroundColor: "var(--bg-primary)" }}
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.href}
                    onClick={() => {
                      scrollTo(sectionId);
                      setMobileOpen(false);
                    }}
                    className="text-left py-4 text-2xl font-semibold border-b transition-colors duration-200"
                    style={{
                      fontFamily: "CabinetGrotesk, system-ui, sans-serif",
                      color: isActive ? "var(--accent)" : "var(--text-primary)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto">
              <a
                href="mailto:noahneri2@gmail.com"
                className="text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                noahneri2@gmail.com
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
