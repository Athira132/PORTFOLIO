"use client";

import React, { useEffect, useRef } from "react";

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check if the user prefers reduced motion (accessibility/performance win)
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mouse coordinates for interactive grid distortion
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Glowing blur particles (mesh circles)
    const glowCircles = [
      { x: width * 0.2, y: height * 0.2, radius: 250, vx: 0.1, vy: 0.15, color: "rgba(47, 128, 255, 0.06)" }, // Electric blue
      { x: width * 0.8, y: height * 0.7, radius: 300, vx: -0.15, vy: -0.1, color: "rgba(112, 0, 255, 0.04)" }, // Purple
      { x: width * 0.5, y: height * 0.4, radius: 200, vx: 0.08, vy: -0.12, color: "rgba(0, 242, 254, 0.04)" }, // Soft cyan
    ];

    // Minimalistic code rain particles
    const codeParticles: { x: number; y: number; text: string; speed: number; opacity: number }[] = [];
    const characters = "0101<>{}[]_+-*/=;()ATHIRA.DEV";
    
    // Initialize code particles (limit to 25 for better CPU usage)
    const maxParticles = prefersReducedMotion ? 0 : 25;
    for (let i = 0; i < maxParticles; i++) {
      codeParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: characters.charAt(Math.floor(Math.random() * characters.length)),
        speed: 0.3 + Math.random() * 0.8,
        opacity: 0.02 + Math.random() * 0.04,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. Draw glowing background circles
      glowCircles.forEach((circle) => {
        if (!prefersReducedMotion) {
          circle.x += circle.vx;
          circle.y += circle.vy;

          // Wall collisions
          if (circle.x - circle.radius < 0 || circle.x + circle.radius > width) circle.vx *= -1;
          if (circle.y - circle.radius < 0 || circle.y + circle.radius > height) circle.vy *= -1;
        }

        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius);
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw subtle interactive grid lines (highly optimized loops)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.012)";
      ctx.lineWidth = 1;
      const gridSize = 80; // Larger grid size (80px instead of 60px) reduces overall grid counts by 40%
      const stepSize = 30; // Larger step size (30px instead of 10px) reduces calculation loops by 66%
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < height; y += stepSize) {
          let offsetX = 0;
          
          if (!prefersReducedMotion) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const distSq = dx * dx + dy * dy;
            
            // Bounding box distance check: avoid Math.sqrt, Math.sin, etc. unless close to mouse
            if (distSq < 14400) { // 120 * 120 = 14400
              const dist = Math.sqrt(distSq);
              const force = (120 - dist) / 120;
              offsetX = Math.sin(y * 0.01 + force * 2) * force * 12;
            }
          }

          if (y === 0) ctx.moveTo(x + offsetX, y);
          else ctx.lineTo(x + offsetX, y);
        }
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < width; x += stepSize) {
          let offsetY = 0;

          if (!prefersReducedMotion) {
            const dx = mouse.x - x;
            const dy = mouse.y - y;
            const distSq = dx * dx + dy * dy;

            if (distSq < 14400) {
              const dist = Math.sqrt(distSq);
              const force = (120 - dist) / 120;
              offsetY = Math.cos(x * 0.01 + force * 2) * force * 12;
            }
          }

          if (x === 0) ctx.moveTo(x, y + offsetY);
          else ctx.lineTo(x, y + offsetY);
        }
        ctx.stroke();
      }

      // 3. Draw subtle code particle stream
      if (!prefersReducedMotion && codeParticles.length > 0) {
        ctx.font = "9px Courier New, monospace";
        codeParticles.forEach((p) => {
          ctx.fillStyle = `rgba(47, 128, 255, ${p.opacity})`;
          ctx.fillText(p.text, p.x, p.y);

          p.y += p.speed;
          
          if (Math.random() < 0.01) {
            p.text = characters.charAt(Math.floor(Math.random() * characters.length));
          }

          if (p.y > height) {
            p.y = -20;
            p.x = Math.random() * width;
          }
        });
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 bg-transparent pointer-events-none" />;
}
