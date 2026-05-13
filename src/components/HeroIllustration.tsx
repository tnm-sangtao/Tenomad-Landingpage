import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Motion values for 3D parallax effect
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth spring physics for fluid movement
  const springConfig = { damping: 30, stiffness: 120, mass: 1 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform coordinates into rotations (Max 8 degrees tilt)
  const rotateX = useTransform(mouseYSpring, [0, 1], [8, -8]);
  const rotateY = useTransform(mouseXSpring, [0, 1], [-8, 8]);

  // Transform sheen/glare positions based on mouse coordinate
  const sheenX = useTransform(mouseXSpring, [0, 1], ["0%", "100%"]);
  const sheenY = useTransform(mouseYSpring, [0, 1], ["0%", "100%"]);

  // Track mouse coordinates over the element
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Relative mouse position within the box (0 to 1)
    const relativeX = (event.clientX - rect.left) / width;
    const relativeY = (event.clientY - rect.top) / height;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  // Reset to center on mouse leave
  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  // Toggle video play/pause
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle video mute/unmute
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Ensure autoplay behaves correctly on mount & fallback setup
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for strict browser policies
        setIsPlaying(false);
      });
    }

    // Safety timeout: if video has not loaded in 3.5 seconds, trigger canvas fallback
    const timer = setTimeout(() => {
      if (!isVideoLoaded) {
        setVideoError(true);
      }
    }, 3500);

    return () => clearTimeout(timer);
  }, [isVideoLoaded]);

  // Interactive Particle network animation loop for video fallback
  useEffect(() => {
    if (!videoError || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];
    const particleCount = 45;

    // Set canvas size dynamically
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * (window.devicePixelRatio || 1);
      canvas.height = rect.height * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? "rgba(226, 176, 76, 0.4)" : "rgba(147, 51, 234, 0.3)", // Amber vs Purple
      });
    }

    // Mouse coordinates relative to canvas
    let mouse = { x: -1000, y: -1000 };
    const handleCanvasMouseMove = (e: MouseEvent) => {
      const canvasRect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - canvasRect.left;
      mouse.y = e.clientY - canvasRect.top;
    };

    const handleCanvasMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleCanvasMouseMove);
    canvas.addEventListener("mouseleave", handleCanvasMouseLeave);

    // Rendering animation
    const render = () => {
      const currentRect = canvas.getBoundingClientRect();
      const width = currentRect.width;
      const height = currentRect.height;

      ctx.clearRect(0, 0, width, height);

      // Draw futuristic ambient dark grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on borders
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Mouse force repulsion
        if (mouse.x > -500) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const force = (100 - dist) / 1000;
            p.x += (dx / dist) * force * 5;
            p.y += (dy / dist) * force * 5;
          }
        }

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw constellation grid lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = ((100 - dist) / 100) * 0.12;
            ctx.strokeStyle = `rgba(226, 176, 76, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw lines to mouse pointer
      if (mouse.x > -500) {
        particles.forEach((p) => {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = ((120 - dist) / 120) * 0.18;
            ctx.strokeStyle = `rgba(147, 51, 234, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleCanvasMouseMove);
      canvas.removeEventListener("mouseleave", handleCanvasMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [videoError]);

  return (
    <div 
      className="relative w-full flex items-center justify-center select-none py-12 px-4 md:px-8" 
      aria-hidden="true"
    >
      {/* ── Ambient Glowing Backdrops ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-80 rounded-full bg-gradient-to-r from-accent/15 via-purple-500/10 to-indigo-500/10 blur-[100px] -z-20 pointer-events-none scale-100 opacity-80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-48 rounded-full bg-accent/10 blur-[80px] -z-20 pointer-events-none scale-90" />

      {/* ── 3D Interactive Mockup Container (Nâng lên w-full max-w-none) ── */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full bg-neutral-950/40 backdrop-blur-xl border border-neutral-800/40 rounded-xl overflow-hidden shadow-2xl shadow-black/90 cursor-pointer group/browser transition-all duration-300"
      >
        {/* Specular glare reflection effect layer */}
        <motion.div
          style={{
            background: useTransform(
              [sheenX, sheenY],
              ([x, y]) => `radial-gradient(circle 320px at ${x} ${y}, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 80%)`
            ),
            pointerEvents: "none",
          }}
          className="absolute inset-0 z-20 mix-blend-overlay"
        />

        {/* ── Browser Window Header ── */}
        <div className="flex items-center justify-between h-11 px-4 border-b border-neutral-800/50 bg-[#0e0e11]/80 backdrop-blur-md select-none z-10 relative">
          {/* Mac OS Traffic Lights */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57] border border-black/10 flex items-center justify-center" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E] border border-black/10 flex items-center justify-center" />
            <span className="w-3 h-3 rounded-full bg-[#27C840] border border-black/10 flex items-center justify-center" />
          </div>

          {/* Secure Address Bar */}
          <div className="flex items-center gap-2 px-3 py-1 bg-neutral-900/60 border border-neutral-800/30 rounded-md text-[11px] text-neutral-400 font-mono w-48 sm:w-64 md:w-80 justify-center">
            {/* Lock SVG Icon */}
            <svg className="w-3 h-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="tracking-wide text-neutral-300 opacity-90">tenomad.com</span>
            <span className="text-neutral-500">/engine</span>
          </div>

          {/* Action Status Badge */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-accent hidden sm:inline-block">LIVE SHOWCASE</span>
          </div>
        </div>

        {/* ── Browser Viewport Area (Video / Canvas & Overlays) ── */}
        <div className="relative aspect-[16/10] w-full bg-[#0a0a0c] overflow-hidden group">
          {/* Subtle Glow in the center for empty screen state */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-purple-500/5 -z-10" />

          {/* 🎥 THE HIGH-END LOOPING VIDEO PLAYER OR CANVAS FALLBACK */}
          {!videoError ? (
            <video
              ref={videoRef}
              src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-background-with-glowing-lines-41865-large.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={() => setVideoError(true)}
              className={`w-full h-full object-cover select-none pointer-events-none transition-opacity duration-1000 ${
                isVideoLoaded ? "opacity-90" : "opacity-0"
              }`}
              style={{ filter: "brightness(0.85) contrast(1.05)" }}
            />
          ) : (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
          )}

          {/* LED / CRT Grid Screen Overlay to make it feel super-engineered */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none opacity-[0.06] z-10" />

          {/* Interactive Player Controls HUD (Visible on Hover) */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
            {/* Play/Pause Button */}
            <button 
              onClick={togglePlay}
              disabled={videoError}
              className={`flex items-center justify-center w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-neutral-800/60 hover:border-accent hover:bg-black/80 transition-all text-neutral-200 hover:text-accent shadow-md active:scale-95 ${
                videoError ? "opacity-50 cursor-not-allowed" : ""
              }`}
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="4" height="16" rx="1" />
                  <rect x="16" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            {/* Showcase Telemetry Label (Tự động đổi tên ENGINE khi chuyển sang canvas) */}
            <div className="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-neutral-800/40 text-[10px] font-mono text-neutral-300">
              <span className="text-accent">●</span>
              <span>RENDER ENGINE: {videoError ? "CANVAS_2D_ACTIVE" : "WEBGL_ACTIVE"}</span>
              <span className="text-neutral-500">|</span>
              <span>PING: 24ms</span>
            </div>

            {/* Mute/Unmute Button */}
            <button 
              onClick={toggleMute}
              disabled={videoError}
              className={`flex items-center justify-center w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-neutral-800/60 hover:border-accent hover:bg-black/80 transition-all text-neutral-200 hover:text-accent shadow-md active:scale-95 ${
                videoError ? "opacity-50 cursor-not-allowed" : ""
              }`}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M23 9l-6 6M17 9l6 6" />
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M11 5L6 9H2v6h4l5 4V5z" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </button>
          </div>

          {/* Outer Glass Ring Border Highlights */}
          <div className="absolute inset-0 border border-white/[0.03] rounded-xl pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
