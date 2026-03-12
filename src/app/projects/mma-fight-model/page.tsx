"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Check, X, Lock } from "lucide-react";
import StatsCard from "@/components/ui/StatsCard";
import { mmaShowcaseData } from "@/data/mma-showcase-data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MMAShowcasePage() {
  const prefersReduced = useReducedMotion();
  const data = mmaShowcaseData;

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen pt-24 pb-16 px-6"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm mb-10 transition-colors duration-200"
              style={{ color: "var(--text-muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              <ArrowLeft size={15} />
              Back to projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {["Machine Learning", "Data Science", "Sports Analytics"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md font-medium"
                  style={{
                    backgroundColor: "var(--bg-tertiary)",
                    color: "var(--text-muted)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1
              className="text-5xl md:text-6xl font-black leading-tight mb-4"
              style={{ fontFamily: "CabinetGrotesk, system-ui, sans-serif" }}
            >
              MMA Fight Prediction Model
            </h1>
            <p
              className="text-lg max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
            >
              A proprietary machine learning model for predicting UFC fight outcomes.
              Select outputs and accuracy metrics are showcased below — the model
              itself is private.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
          >
            <StatsCard
              value={data.overallAccuracy}
              suffix="%"
              label="Overall Accuracy"
              decimals={1}
            />
            <StatsCard
              value={data.totalPredictions}
              label="Total Predictions"
            />
            <div className="col-span-2 md:col-span-1">
              <div
                className="h-full p-6 rounded-xl border text-center flex flex-col items-center justify-center"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="text-2xl font-black mb-1"
                  style={{
                    fontFamily: "CabinetGrotesk, system-ui, sans-serif",
                    color: "var(--accent)",
                  }}
                >
                  {data.recentForm}
                </div>
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Recent Form
                </p>
              </div>
            </div>
          </motion.div>

          {/* Methodology */}
          <motion.section
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "CabinetGrotesk, system-ui, sans-serif" }}
            >
              Methodology
            </h2>
            <div className="space-y-4">
              {data.methodology.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </motion.section>

          {/* Weight class breakdown */}
          <motion.section
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: "CabinetGrotesk, system-ui, sans-serif" }}
            >
              Accuracy by Weight Class
            </h2>
            <div className="space-y-4">
              {data.weightClassBreakdown
                .sort((a, b) => b.accuracy - a.accuracy)
                .map((wc, i) => (
                  <motion.div
                    key={wc.weightClass}
                    initial={prefersReduced ? {} : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-sm font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {wc.weightClass}
                      </span>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-xs"
                          style={{ color: "var(--text-muted)" }}
                        >
                          n={wc.sampleSize}
                        </span>
                        <span
                          className="text-sm font-bold"
                          style={{ color: "var(--accent)" }}
                        >
                          {wc.accuracy.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: "var(--bg-tertiary)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${wc.accuracy}%` }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.08,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: "var(--accent)" }}
                      />
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.section>

          {/* Sample predictions table */}
          <motion.section
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2
              className="text-2xl font-bold mb-8"
              style={{ fontFamily: "CabinetGrotesk, system-ui, sans-serif" }}
            >
              Sample Predictions
            </h2>
            <div
              className="rounded-xl border overflow-hidden"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      {["Event", "Fight", "Prediction", "Actual", "Result"].map((col) => (
                        <th
                          key={col}
                          className="px-5 py-3.5 text-left text-xs font-semibold tracking-wider uppercase"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.samplePredictions.map((pred, i) => (
                      <motion.tr
                        key={i}
                        initial={prefersReduced ? {} : { opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        style={{
                          backgroundColor: pred.correct
                            ? "rgba(0, 229, 160, 0.04)"
                            : "transparent",
                          borderBottom:
                            i < data.samplePredictions.length - 1
                              ? "1px solid var(--border)"
                              : "none",
                        }}
                      >
                        <td
                          className="px-5 py-4 text-xs font-mono whitespace-nowrap"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {pred.event}
                        </td>
                        <td
                          className="px-5 py-4 font-medium"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {pred.fight}
                        </td>
                        <td
                          className="px-5 py-4 text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {pred.prediction}
                        </td>
                        <td
                          className="px-5 py-4 text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {pred.actual}
                        </td>
                        <td className="px-5 py-4">
                          {pred.correct ? (
                            <span
                              className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded"
                              style={{
                                backgroundColor: "rgba(0,229,160,0.1)",
                                color: "var(--accent)",
                              }}
                            >
                              <Check size={11} />
                              Correct
                            </span>
                          ) : (
                            <span
                              className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded"
                              style={{
                                backgroundColor: "rgba(239,68,68,0.1)",
                                color: "#ef4444",
                              }}
                            >
                              <X size={11} />
                              Miss
                            </span>
                          )}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          {/* Licensing CTA */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl border text-center"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
          >
            <Lock
              size={24}
              className="mx-auto mb-4"
              style={{ color: "var(--accent)" }}
            />
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "CabinetGrotesk, system-ui, sans-serif" }}
            >
              Model is Private
            </h3>
            <p
              className="text-sm mb-6 max-w-md mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              The full model architecture, feature set, and live prediction feed
              are not publicly available. Licensing inquiries welcome.
            </p>
            <a
              href="mailto:noahneri2@gmail.com?subject=MMA%20Model%20Licensing%20Inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{
                backgroundColor: "var(--accent)",
                color: "#0a0a0a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              Licensing Inquiry
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
