"use client";

import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  radius: number;
  r: number;
  g: number;
  b: number;
  alpha: number;
  freqX: number;
  freqY: number;
  ampX: number;
  ampY: number;
  phase: number;
  centerX: number;
  centerY: number;
}

function createBlobs(width: number, height: number, count: number): Blob[] {
  const configs = [
    { r: 0, g: 229, b: 160, alpha: 0.12, radius: 0.45 },   // accent green
    { r: 0, g: 120, b: 90, alpha: 0.09, radius: 0.4 },     // dark teal
    { r: 0, g: 60, b: 45, alpha: 0.07, radius: 0.5 },      // deep forest
    { r: 0, g: 200, b: 140, alpha: 0.08, radius: 0.35 },   // mid green
    { r: 0, g: 150, b: 100, alpha: 0.06, radius: 0.55 },   // another teal
    { r: 10, g: 80, b: 60, alpha: 0.05, radius: 0.38 },    // very dark
  ];

  return configs.slice(0, count).map((cfg, i) => ({
    x: (width / count) * i + width / (count * 2),
    y: height / 2,
    centerX: (width / count) * i + width / (count * 2),
    centerY: height * (0.3 + Math.random() * 0.4),
    radius: Math.min(width, height) * cfg.radius,
    r: cfg.r,
    g: cfg.g,
    b: cfg.b,
    alpha: cfg.alpha,
    ampX: width * (0.15 + Math.random() * 0.15),
    ampY: height * (0.1 + Math.random() * 0.1),
    freqX: 0.0002 + Math.random() * 0.0003,
    freqY: 0.0001 + Math.random() * 0.0002,
    phase: (Math.PI * 2 * i) / count,
  }));
}

export default function MeshGradientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const rafRef = useRef<number>(0);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const blobCount = isMobile ? 3 : 6;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      blobsRef.current = createBlobs(canvas.width, canvas.height, blobCount);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw(timestamp: number) {
      if (!canvas || !ctx) return;

      // Throttle to ~30fps
      frameRef.current++;
      if (frameRef.current % 2 !== 0 && !prefersReduced) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "source-over";

      const blobs = blobsRef.current;
      blobs.forEach((blob) => {
        // Update position using Lissajous curves
        if (!prefersReduced) {
          blob.x =
            blob.centerX +
            blob.ampX * Math.sin(timestamp * blob.freqX + blob.phase);
          blob.y =
            blob.centerY +
            blob.ampY * Math.cos(timestamp * blob.freqY + blob.phase * 1.3);
        }

        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        gradient.addColorStop(
          0,
          `rgba(${blob.r}, ${blob.g}, ${blob.b}, ${blob.alpha})`
        );
        gradient.addColorStop(
          0.5,
          `rgba(${blob.r}, ${blob.g}, ${blob.b}, ${blob.alpha * 0.5})`
        );
        gradient.addColorStop(1, `rgba(${blob.r}, ${blob.g}, ${blob.b}, 0)`);

        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!prefersReduced) {
        rafRef.current = requestAnimationFrame(draw);
      }
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
