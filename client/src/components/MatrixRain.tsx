/**
 * MatrixRain — Animated background component
 * Design: SAMUEL_OS Cyberpunk Terminal
 * Renders cascading code characters in cyan/purple on dark background
 */
import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]()<>/\\|;:.,!@#$%^&*";
    const fontSize = 13;
    let columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const colors = [
      "rgba(0, 245, 255, 0.8)",
      "rgba(0, 245, 255, 0.5)",
      "rgba(123, 47, 255, 0.6)",
      "rgba(0, 245, 255, 0.3)",
    ];

    let animId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 15, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      columns = Math.floor(canvas.width / fontSize);
      while (drops.length < columns) drops.push(1);

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;
        ctx.font = `${fontSize}px JetBrains Mono, monospace`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.15, zIndex: 0 }}
    />
  );
}
