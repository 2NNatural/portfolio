"use client";

import { motion, useReducedMotion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface StatsCardProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

function AnimatedNumber({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const inViewRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(inViewRef, { once: true });

  useEffect(() => {
    if (!isInView || prefersReduced) {
      if (ref.current) {
        ref.current.textContent = value.toFixed(decimals) + suffix;
      }
      return;
    }

    const controls = animate(motionValue, value, {
      duration: 1.2,
      ease: "easeOut",
    });

    const unsubscribe = motionValue.on("change", (v) => {
      if (ref.current) {
        ref.current.textContent = v.toFixed(decimals) + suffix;
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, value, suffix, decimals, motionValue, prefersReduced]);

  return (
    <span ref={inViewRef}>
      <span ref={ref}>{prefersReduced ? value.toFixed(decimals) + suffix : "0" + suffix}</span>
    </span>
  );
}

export default function StatsCard({ value, suffix = "", label, decimals = 0 }: StatsCardProps) {
  return (
    <div
      className="p-6 rounded-xl border text-center"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="text-4xl font-black mb-2"
        style={{
          fontFamily: "CabinetGrotesk, system-ui, sans-serif",
          color: "var(--accent)",
        }}
      >
        <AnimatedNumber value={value} suffix={suffix} decimals={decimals} />
      </div>
      <p className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
        {label}
      </p>
    </div>
  );
}
