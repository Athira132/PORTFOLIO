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
      { x: width * 0.2, y: height * 0.2, radius: 250, vx: 0.2, vy: 0.3, color: "rgba(47, 128, 255, 0.08)" }, // Electric blue
      { x: width * 0.8, y: height * 0.7, radius: 300, vx: -0.3, vy: -0.2, color: "rgba(112, 0, 255, 0.06)" }, // Purple
      { x: width * 0.5, y: height * 0.4, radius: 200, vx: 0.15, vy: -0.25, color: "rgba(0, 242, 254, 0.05)" }, // Soft cyan
    ];

    // Minimalistic code rain particles
    const codeParticles: { x: number; y: number; text: string; speed: number; opacity: number }[] = [];
    const characters = "0101<>{}[]_+-*/=;()ATHIRA.DEV";
    
    // Initialize code particles
    for (let i = 0; i < 40; i++) {
      codeParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        text: characters.charAt(Math.floor(Math.random() * characters.length)),
        speed: 0.5 + Math.random() * 1.2,
        opacity: 0.02 + Math.random() * 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // 1. Draw glowing background circles
      glowCircles.forEach((circle) => {
        circle.x += circle.vx;
        circle.y += circle.vy;

        // Wall collisions
        if (circle.x - circle.radius < 0 || circle.x + circle.radius > width) circle.vx *= -1;
        if (circle.y - circle.radius < 0 || circle.y + circle.radius > height) circle.vy *= -1;

        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius);
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw subtle interactive grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 60;
      
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        for (let y = 0; y < height; y += 10) {
          // Add a subtle wave distortion near mouse
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const force = Math.max(0, 120 - dist) / 120; // force multiplier up to 1
          const offsetX = Math.sin(y * 0.01 + force * 2) * force * 15;

          if (y === 0) ctx.moveTo(x + offsetX, y);
          else ctx.lineTo(x + offsetX, y);
        }
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 10) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const force = Math.max(0, 120 - dist) / 120;
          const offsetY = Math.cos(x * 0.01 + force * 2) * force * 15;

          if (x === 0) ctx.moveTo(x, y + offsetY);
          else ctx.lineTo(x, y + offsetY);
        }
        ctx.stroke();
      }

      // 3. Draw subtle code particle stream (editorial tech-inspired)
      ctx.font = "10px Courier New, monospace";
      codeParticles.forEach((p) => {
        ctx.fillStyle = `rgba(47, 128, 255, ${p.opacity})`;
        ctx.fillText(p.text, p.x, p.y);

        p.y += p.speed;
        
        // Randomly alter character
        if (Math.random() < 0.01) {
          p.text = characters.charAt(Math.floor(Math.random() * characters.length));
        }

        // Reset if it goes off screen
        if (p.y > height) {
          p.y = -20;
          p.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 bg-transparent pointer-events-none" />;
}
