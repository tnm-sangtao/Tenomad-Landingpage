import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { Search, ArrowUpRight, Clock, Mail, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Cover illustrations ──────────────────────────────────────────── */

function CoverHueCity({ isHovered }: { isHovered?: boolean }) {
  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="600" height="340" fill="#0d1a0e" />
      {/* Sky gradient */}
      <rect width="600" height="200" fill="url(#skyGrad)" />
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a1a2e" />
          <stop offset="100%" stopColor="#1a2e1a" />
        </linearGradient>
      </defs>
      {/* Stars */}
      {[[40, 20], [120, 35], [200, 18], [310, 28], [420, 15], [500, 32], [560, 22], [80, 60], [260, 50], [450, 55]].map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r="1.5"
          fill="white"
          animate={{ opacity: [0.2, 0.9, 0.2] }}
          transition={{
            repeat: Infinity,
            duration: 2 + (i % 3) * 1.5,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        />
      ))}
      {/* Moon */}
      <circle cx="520" cy="50" r="28" fill="#1a3a1a" />
      <circle cx="530" cy="44" r="22" fill="#F59E0B" opacity="0.15" />
      <circle cx="530" cy="44" r="14" fill="#F59E0B" opacity="0.25" />
      {/* Mountains */}
      <path d="M0 220 L80 140 L160 190 L240 110 L320 170 L400 100 L480 155 L560 120 L600 140 L600 220 Z" fill="#143d20" />
      <path d="M0 220 L100 165 L200 200 L300 145 L400 185 L500 150 L600 170 L600 220 Z" fill="#1a5229" />
      {/* Pagoda/temple silhouette */}
      <rect x="260" y="180" width="80" height="40" rx="2" fill="#0d2a10" />
      <polygon points="260,180 300,150 340,180" fill="#0d2a10" />
      <polygon points="270,160 300,138 330,160" fill="#0d2a10" />
      <rect x="292" y="200" width="16" height="20" rx="1" fill="#143d20" />
      {/* River */}
      <path d="M0 260 Q150 240 300 255 Q450 270 600 250 L600 280 Q450 295 300 280 Q150 265 0 285 Z" fill="#0a2030" opacity="0.8" />
      {/* Reflection */}
      <motion.path
        d="M260 262 Q280 258 320 262 Q300 290 260 285 Z"
        fill="#F59E0B"
        animate={isHovered ? {
          opacity: [0.06, 0.18, 0.06],
          scaleY: [1, 1.15, 1],
        } : { opacity: 0.06, scaleY: 1 }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        style={{ transformOrigin: "center top" }}
      />
      {/* Ground */}
      <rect y="270" width="600" height="70" fill="#0d1a0e" />
      {/* Lanterns */}
      {[80, 160, 440, 520].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="240" x2={x} y2="220" stroke="#F59E0B" strokeWidth="1" opacity="0.4" />
          <motion.ellipse
            cx={x}
            cy={215}
            rx={8}
            ry={12}
            fill="#F59E0B"
            animate={isHovered ? {
              cy: [215, 209, 215],
              fill: ["#F59E0B", "#FBBF24", "#F59E0B"],
              opacity: [0.25, 0.55, 0.25]
            } : { cy: 215, fill: "#F59E0B", opacity: 0.25 }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: i * 0.4 }}
          />
          <motion.ellipse
            cx={x}
            cy={215}
            rx={5}
            ry={8}
            fill="#F59E0B"
            animate={isHovered ? {
              cy: [215, 209, 215],
              fill: ["#F59E0B", "#FBBF24", "#F59E0B"],
              opacity: [0.4, 0.75, 0.4]
            } : { cy: 215, fill: "#F59E0B", opacity: 0.4 }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: i * 0.4 }}
          />
        </g>
      ))}
    </svg>
  );
}

function CoverOffshoreMyths({ isHovered }: { isHovered?: boolean }) {
  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="600" height="340" fill="#0a0f1e" />
      {/* Globe outline */}
      <motion.circle
        cx="300"
        cy="170"
        r="130"
        stroke="#1e3a5f"
        strokeWidth="1.5"
        animate={isHovered ? { stroke: ["#1e3a5f", "#3182CE", "#1e3a5f"] } : { stroke: "#1e3a5f" }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="300" cy="170" r="130" stroke="#3182CE" strokeWidth="0.5" opacity="0.4" />
      {/* Latitude lines */}
      {[-60, -30, 0, 30, 60].map((lat, i) => {
        const y = 170 + (lat / 90) * 130;
        const halfW = Math.sqrt(Math.max(0, 130 * 130 - (y - 170) * (y - 170)));
        return <line key={i} x1={300 - halfW} y1={y} x2={300 + halfW} y2={y} stroke="#1e3a5f" strokeWidth="1" />;
      })}
      {/* Longitude lines */}
      {[0, 30, 60, 90, 120, 150].map((lng, i) => (
        <motion.ellipse
          key={i}
          cx="300"
          cy="170"
          rx={130 * Math.abs(Math.cos(lng * Math.PI / 180))}
          ry="130"
          stroke="#1e3a5f"
          strokeWidth="1"
          animate={isHovered ? {
            rx: [130 * Math.abs(Math.cos(lng * Math.PI / 180)), 0, 130 * Math.abs(Math.cos(lng * Math.PI / 180))],
          } : {}}
          transition={{ repeat: Infinity, duration: 8, ease: "linear", delay: i * 0.3 }}
        />
      ))}
      {/* Connection dots */}
      {[
        [210, 130], [380, 110], [260, 200], [340, 220], [180, 190], [420, 160],
      ].map(([x, y], i) => (
        <g key={i}>
          <motion.circle
            cx={x}
            cy={y}
            r={5}
            initial={{ r: 5 }}
            fill="#3182CE"
            animate={isHovered ? { r: [5, 7, 5], fill: ["#3182CE", "#63B3ED", "#3182CE"] } : { r: 5 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.3 }}
          />
          <motion.circle
            cx={x}
            cy={y}
            r={10}
            initial={{ r: 10 }}
            fill="#3182CE"
            animate={isHovered ? { r: [10, 18, 10], opacity: [0.15, 0.4, 0.15] } : { r: 10, opacity: 0.15 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.3 }}
          />
        </g>
      ))}
      {/* Connection lines */}
      {[
        [210, 130, 380, 110], [380, 110, 340, 220], [210, 130, 260, 200],
        [260, 200, 420, 160], [180, 190, 260, 200],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#3182CE"
          strokeWidth="1.25"
          strokeDasharray="4 3"
          animate={isHovered ? { strokeDashoffset: [0, -28] } : { strokeDashoffset: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          opacity="0.4"
        />
      ))}
      {/* "MYTH" crossed out badge */}
      <motion.g
        animate={isHovered ? { x: [-1, 1, -1, 1, 0], y: [1, -1, 1, -1, 0] } : {}}
        transition={{ repeat: Infinity, duration: 0.5, ease: "easeInOut" }}
      >
        <rect x="90" y="60" width="120" height="44" rx="8" fill="#E53E3E" opacity="0.15" />
        <text x="150" y="87" textAnchor="middle" fill="#E53E3E" fontSize="18" fontWeight="700" opacity="0.7">MYTH</text>
        <line x1="96" y1="66" x2="204" y2="98" stroke="#E53E3E" strokeWidth="2.5" opacity="0.6" />
      </motion.g>
      {/* Glow */}
      <circle cx="300" cy="170" r="60" fill="#3182CE" opacity="0.04" />
    </svg>
  );
}

function CoverAI({ isHovered }: { isHovered?: boolean }) {
  const connections = [
    [80, 100, 220, 80], [80, 100, 220, 145], [80, 100, 220, 210],
    [80, 170, 220, 80], [80, 170, 220, 145], [80, 170, 220, 210], [80, 170, 220, 270],
    [80, 240, 220, 145], [80, 240, 220, 210], [80, 240, 220, 270],
    [220, 80, 380, 95], [220, 80, 380, 160], [220, 145, 380, 95], [220, 145, 380, 160], [220, 145, 380, 225],
    [220, 210, 380, 160], [220, 210, 380, 225], [220, 270, 380, 225],
    [380, 95, 520, 140], [380, 160, 520, 140], [380, 160, 520, 200], [380, 225, 520, 200],
  ];

  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="600" height="340" fill="#070d16" />
      {/* Connections */}
      {connections.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3182CE" strokeWidth="0.75" opacity="0.18" />
      ))}

      {/* Active paths */}
      {[
        [80, 170, 220, 145],
        [220, 145, 380, 160],
        [380, 160, 520, 140]
      ].map(([x1, y1, x2, y2], i) => (
        <g key={`flow-${i}`}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#F59E0B" strokeWidth="1.5" opacity="0.6" />
          <motion.line
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#FFF"
            strokeWidth="2.5"
            strokeDasharray="10 40"
            animate={isHovered ? { strokeDashoffset: [0, -50] } : { strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: i * 0.4 }}
            opacity="0.9"
          />
        </g>
      ))}

      {/* Neural network nodes */}
      {[
        // Input layer
        { layer: 0, nodes: [[80, 100], [80, 170], [80, 240]] },
        // Hidden 1
        { layer: 1, nodes: [[220, 80], [220, 145], [220, 210], [220, 270]] },
        // Hidden 2
        { layer: 2, nodes: [[380, 95], [380, 160], [380, 225]] },
        // Output
        { layer: 3, nodes: [[520, 140], [520, 200]] },
      ].map((layerData) =>
        layerData.nodes.map(([x, y], ni) => (
          <g key={`${layerData.layer}-${ni}`}>
            <motion.circle
              cx={x} cy={y} r="14"
              fill="#0d1f3c"
              stroke={isHovered ? "#F59E0B" : "#3182CE"}
              strokeWidth="1.5"
              animate={isHovered ? {
                scale: [1, 1.15, 1],
                stroke: ["#3182CE", "#F59E0B", "#3182CE"]
              } : { scale: 1, stroke: "#3182CE" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: layerData.layer * 0.3 + ni * 0.15 }}
            />
            <motion.circle
              cx={x} cy={y} r={7}
              initial={{ r: 7 }}
              fill={isHovered ? "#F59E0B" : "#3182CE"}
              animate={isHovered ? {
                r: [7, 9, 7],
                fill: ["#3182CE", "#F59E0B", "#3182CE"]
              } : { r: 7, fill: "#3182CE" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: layerData.layer * 0.3 + ni * 0.15 }}
              opacity={0.3 + layerData.layer * 0.15}
            />
          </g>
        ))
      )}
      {/* Label */}
      <rect x="200" y="300" width="200" height="26" rx="6" fill="#0d1f3c" />
      <rect x="208" y="308" width="80" height="8" rx="3" fill="#3182CE" opacity="0.6" />
      <rect x="296" y="308" width="96" height="8" rx="3" fill="#F59E0B" opacity="0.3" />
      {/* Pulse rings */}
      <motion.circle
        cx="520" cy="140"
        r={20}
        initial={{ r: 20 }}
        stroke="#F59E0B"
        strokeWidth="1"
        animate={isHovered ? { r: [20, 35, 20], opacity: [0.2, 0.6, 0.2] } : { r: 20 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.circle
        cx="520" cy="140"
        r={28}
        initial={{ r: 28 }}
        stroke="#F59E0B"
        strokeWidth="1"
        animate={isHovered ? { r: [28, 48, 28], opacity: [0.1, 0.4, 0.1] } : { r: 28 }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.3 }}
      />
    </svg>
  );
}

function CoverReactNative({ isHovered }: { isHovered?: boolean }) {
  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="600" height="340" fill="#0f0f1a" />
      {/* Left phone — React Native */}
      <motion.g
        animate={isHovered ? { y: [0, -6, 0] } : {}}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <rect x="100" y="40" width="160" height="260" rx="20" fill="#1a1a2e" stroke="#61DAFB" strokeWidth="1.5" />
        <rect x="112" y="56" width="136" height="228" rx="12" fill="#0d0d1e" />
        {/* RN label */}
        <g transform="translate(180, 95)">
          <circle cx="0" cy="0" r="18" fill="#61DAFB" opacity="0.08" />
          {/* Orbit 1 */}
          <motion.ellipse
            cx="0" cy="0" rx="20" ry="7"
            fill="none" stroke="#61DAFB" strokeWidth="1.5"
            animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
          {/* Orbit 2 */}
          <motion.ellipse
            cx="0" cy="0" rx="20" ry="7"
            fill="none" stroke="#61DAFB" strokeWidth="1.5"
            transform="rotate(60)"
            animate={isHovered ? { rotate: 420 } : { rotate: 60 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
          {/* Orbit 3 */}
          <motion.ellipse
            cx="0" cy="0" rx="20" ry="7"
            fill="none" stroke="#61DAFB" strokeWidth="1.5"
            transform="rotate(120)"
            animate={isHovered ? { rotate: 480 } : { rotate: 120 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          />
          <circle cx="0" cy="0" r="3.5" fill="#61DAFB" />
        </g>
        <rect x="122" y="130" width="116" height="6" rx="3" fill="#61DAFB" opacity="0.5" />
        <rect x="122" y="142" width="90" height="5" rx="2" fill="#374151" />
        <rect x="122" y="153" width="105" height="5" rx="2" fill="#374151" />
        <rect x="122" y="168" width="116" height="32" rx="6" fill="#1a2a3a" />
        <rect x="130" y="177" width="60" height="5" rx="2" fill="#61DAFB" opacity="0.6" />
        <rect x="130" y="188" width="85" height="5" rx="2" fill="#374151" />
        <rect x="122" y="208" width="116" height="32" rx="6" fill="#1a1a2e" />
        <rect x="130" y="217" width="70" height="5" rx="2" fill="#61DAFB" opacity="0.4" />
        <rect x="130" y="228" width="95" height="5" rx="2" fill="#374151" />
        <rect x="122" y="250" width="55" height="18" rx="5" fill="#61DAFB" opacity="0.2" />
        <rect x="185" y="250" width="53" height="18" rx="5" fill="#61DAFB" />
        <rect x="194" y="256" width="35" height="6" rx="2" fill="#0d0d1e" />
      </motion.g>
      {/* Divider */}
      <line x1="300" y1="40" x2="300" y2="300" stroke="#2d2d3a" strokeWidth="2" strokeDasharray="6 4" />
      <rect x="276" y="155" width="48" height="28" rx="14" fill="#1a1a2e" />
      <text x="300" y="174" textAnchor="middle" fill="#6b7280" fontSize="12" fontWeight="600">vs</text>
      {/* Right phone — Native */}
      <motion.g
        animate={isHovered ? { y: [0, -6, 0] } : {}}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
      >
        <rect x="340" y="40" width="160" height="260" rx="20" fill="#1a1a1a" stroke="#E53E3E" strokeWidth="1.5" />
        <rect x="352" y="56" width="136" height="228" rx="12" fill="#0d0d0d" />
        {/* Swift/Kotlin icon */}
        <rect x="362" y="70" width="116" height="40" rx="8" fill="#1a0a0a" />
        <rect x="370" y="80" width="30" height="20" rx="4" fill="#E53E3E" opacity="0.8" />
        <rect x="408" y="84" width="60" height="5" rx="2" fill="#E53E3E" opacity="0.5" />
        <rect x="408" y="93" width="45" height="5" rx="2" fill="#374151" />
        <rect x="362" y="120" width="116" height="6" rx="3" fill="#E53E3E" opacity="0.3" />
        <rect x="362" y="132" width="90" height="5" rx="2" fill="#374151" />
        <rect x="362" y="144" width="116" height="80" rx="8" fill="#1a0a0a" />
        <rect x="372" y="155" width="96" height="50" rx="5" fill="#2a0a0a" />
        <motion.circle
          cx="420" cy="180" r={18}
          initial={{ r: 18 }}
          fill="#E53E3E"
          animate={isHovered ? { r: [18, 24, 18], opacity: [0.2, 0.4, 0.2] } : { r: 18 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          opacity="0.2"
        />
        <circle cx="420" cy="180" r="10" fill="#E53E3E" opacity="0.5" />
        <rect x="362" y="234" width="116" height="36" rx="6" fill="#1a0a0a" />
        <rect x="372" y="244" width="60" height="5" rx="2" fill="#E53E3E" opacity="0.5" />
        <rect x="372" y="255" width="85" height="5" rx="2" fill="#374151" />
      </motion.g>
    </svg>
  );
}

function CoverDesignSystem({ isHovered }: { isHovered?: boolean }) {
  const componentsList = [
    { x: 40, y: 40, w: 120, h: 60, color: "#8B5CF6", label: "Button" },
    { x: 180, y: 40, w: 80, h: 60, color: "#3182CE", label: "Input" },
    { x: 280, y: 40, w: 140, h: 60, color: "#10B981", label: "Card" },
    { x: 440, y: 40, w: 120, h: 60, color: "#F59E0B", label: "Badge" },
    { x: 40, y: 120, w: 200, h: 80, color: "#8B5CF6", label: "Modal" },
    { x: 260, y: 120, w: 120, h: 80, color: "#E53E3E", label: "Alert" },
    { x: 400, y: 120, w: 160, h: 80, color: "#3182CE", label: "Nav" },
    { x: 40, y: 220, w: 100, h: 60, color: "#F59E0B", label: "Tag" },
    { x: 160, y: 220, w: 180, h: 60, color: "#10B981", label: "Table" },
    { x: 360, y: 220, w: 100, h: 60, color: "#8B5CF6", label: "Icon" },
    { x: 480, y: 220, w: 80, h: 60, color: "#E53E3E", label: "Toast" },
  ];

  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="600" height="340" fill="#0a0a0a" />
      {/* Component tokens grid */}
      {componentsList.map((c, i) => (
        <motion.g
          key={i}
          animate={isHovered ? {
            y: [0, -6, 0],
            strokeOpacity: [0.25, 0.7, 0.25]
          } : { y: 0 }}
          transition={{
            repeat: Infinity,
            duration: 3 + (i % 3),
            ease: "easeInOut",
            delay: i * 0.12
          }}
        >
          <rect x={c.x} y={c.y} width={c.w} height={c.h} rx="8"
            fill={c.color} fillOpacity="0.08" stroke={c.color} strokeOpacity="0.25" strokeWidth="1" />
          <rect x={c.x + 10} y={c.y + 10} width={c.w * 0.5} height="6" rx="3"
            fill={c.color} fillOpacity="0.6" />
          <rect x={c.x + 10} y={c.y + 22} width={c.w * 0.7} height="4" rx="2"
            fill="#374151" fillOpacity="0.6" />
          {c.h > 60 && (
            <rect x={c.x + 10} y={c.y + 34} width={c.w - 20} height="24" rx="4"
              fill={c.color} fillOpacity="0.06" />
          )}
          <text x={c.x + c.w - 10} y={c.y + c.h - 10}
            textAnchor="end" fill={c.color} fontSize="9" fontWeight="700" opacity="0.5">
            {c.label}
          </text>
        </motion.g>
      ))}
      {/* Connection lines between components */}
      <line x1="160" y1="70" x2="180" y2="70" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
      <line x1="260" y1="70" x2="280" y2="70" stroke="#3182CE" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />
    </svg>
  );
}

function CoverFirstDays({ isHovered }: { isHovered?: boolean }) {
  const phases = [
    { x: 60, label: "Day 1", title: "Kickoff", color: "#10B981", w: 100 },
    { x: 200, label: "Week 2", title: "Align", color: "#3182CE", w: 100 },
    { x: 340, label: "Month 2", title: "Build", color: "#F59E0B", w: 110 },
    { x: 490, label: "Day 90", title: "Ship", color: "#10B981", w: 50 },
  ];

  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="600" height="340" fill="#0a0f0a" />
      {/* Timeline line */}
      <line x1="60" y1="170" x2="540" y2="170" stroke="#1a3a1a" strokeWidth="2" />
      {/* Animated signal line on timeline */}
      <motion.line
        x1="60" y1="170" x2="540" y2="170"
        stroke="#10B981"
        strokeWidth="2.5"
        strokeDasharray="20 100"
        animate={isHovered ? { strokeDashoffset: [0, -240] } : { strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        opacity="0.8"
      />
      {/* Phase blocks */}
      {phases.map((p, i) => (
        <g key={i}>
          {/* Above-line block */}
          <motion.g
            animate={isHovered ? { y: [0, -4, 0] } : {}}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: i * 0.4 }}
          >
            <rect x={p.x - 10} y={90} width={p.w} height={64} rx="8" fill={p.color} fillOpacity="0.1" stroke={p.color} strokeOpacity="0.3" strokeWidth="1" />
            <rect x={p.x} y={100} width={p.w * 0.55} height="5" rx="2" fill={p.color} fillOpacity="0.7" />
            <rect x={p.x} y={111} width={p.w * 0.8} height="4" rx="2" fill="#374151" />
            <rect x={p.x} y={121} width={p.w * 0.65} height="4" rx="2" fill="#374151" opacity="0.6" />
          </motion.g>
          {/* Dot on timeline */}
          <motion.circle
            cx={p.x + p.w / 2 - 10} cy={170}
            r="8"
            fill={p.color}
            animate={isHovered ? { scale: [1, 1.25, 1] } : { scale: 1 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: i * 0.3 }}
          />
          <circle cx={p.x + p.w / 2 - 10} cy={170} r="4" fill="#0a0f0a" />
          {/* Below-line label */}
          <text x={p.x + p.w / 2 - 10} y={196} textAnchor="middle" fill={p.color} fontSize="10" fontWeight="700" opacity="0.8">{p.label}</text>
          <text x={p.x + p.w / 2 - 10} y={210} textAnchor="middle" fill="#6b7280" fontSize="9">{p.title}</text>
        </g>
      ))}
      {/* Below-line milestones */}
      {[130, 260, 400].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={170} r="4" fill="#1a3a1a" stroke="#374151" strokeWidth="1" />
          <motion.g
            animate={isHovered ? { y: [0, 3, 0] } : {}}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: i * 0.5 }}
          >
            <rect x={x - 30} y={220} width={60} height={36} rx="6" fill="#111" stroke="#1e3a1e" strokeWidth="1" />
            <rect x={x - 22} y={229} width={44} height="4" rx="2" fill="#374151" />
            <rect x={x - 22} y={238} width={32} height="4" rx="2" fill="#374151" opacity="0.5" />
          </motion.g>
        </g>
      ))}
      {/* Arrow at end */}
      <path d="M530 167 L545 170 L530 173" fill="#10B981" opacity="0.6" />
    </svg>
  );
}

/* ─── Post data ────────────────────────────────────────────────────── */

export const MOCK_POSTS = [
  {
    slug: "hue-city-competitive-advantage",
    title: "Why Hue City became our competitive advantage",
    date: "Oct 12, 2024",
    readTime: "6 min",
    category: "Culture",
    categoryColor: "#10B981",
    excerpt: "Building a global engineering firm in Vietnam's former imperial capital wasn't a compromise — it was a deliberate strategy for deep work.",
    cover: CoverHueCity,
  },
  {
    slug: "offshore-myths-debunked",
    title: "Offshore development myths, debunked",
    date: "Sep 28, 2024",
    readTime: "8 min",
    category: "Engineering",
    categoryColor: "#3182CE",
    excerpt: "Separating the outdated stereotypes from the reality of modern, highly-integrated global development teams.",
    cover: CoverOffshoreMyths,
  },
  {
    slug: "ai-product-development-2024",
    title: "AI in product development: what's actually useful in 2024",
    date: "Sep 15, 2024",
    readTime: "10 min",
    category: "Technology",
    categoryColor: "#8B5CF6",
    excerpt: "Looking past the hype cycle to identify where Large Language Models provide genuine value in consumer applications.",
    cover: CoverAI,
  },
  {
    slug: "react-native-vs-native",
    title: "The enduring debate: React Native vs. True Native",
    date: "Aug 30, 2024",
    readTime: "7 min",
    category: "Engineering",
    categoryColor: "#3182CE",
    excerpt: "When to consolidate your codebase and when to invest in platform-specific perfection.",
    cover: CoverReactNative,
  },
  {
    slug: "designing-for-scale",
    title: "Design systems that actually survive scale",
    date: "Aug 10, 2024",
    readTime: "9 min",
    category: "Design",
    categoryColor: "#8B5CF6",
    excerpt: "Most design systems fall apart at component number 50. Here's how we architect UI to last.",
    cover: CoverDesignSystem,
  },
  {
    slug: "the-first-90-days",
    title: "The first 90 days of an offshore partnership",
    date: "Jul 22, 2024",
    readTime: "5 min",
    category: "Process",
    categoryColor: "#F59E0B",
    excerpt: "A tactical guide to establishing communication, trust, and velocity with a new development team.",
    cover: CoverFirstDays,
  },
];

/* ─── Featured card ────────────────────────────────────────────────── */

/* ─── Unified Asymmetric Grid Cell ────────────────────────────────── */

function BlogGridCell({ post, index }: { post: typeof MOCK_POSTS[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const Cover = post.cover;

  return (
    <Link href={`/blog/${post.slug}`} className="group relative bg-background border-b border-border md:border-r md:even:border-r-0 flex flex-col hover:bg-foreground transition-colors duration-300 overflow-hidden h-full">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex flex-col flex-1 h-full"
      >
        {/* Cover Image Area */}
        <div className="relative border-b border-border overflow-hidden bg-[#050505]" style={{ aspectRatio: "16/9" }}>
          <div className="absolute inset-0 grayscale contrast-[1.05] brightness-[0.95] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <Cover isHovered={isHovered} />
          </div>
          <div className="absolute inset-0 bg-background/80 group-hover:bg-transparent transition-colors duration-500" />

          {/* Date watermark */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-500">
            {post.date}
          </div>
        </div>

        {/* Info strip */}
        <div className="p-8 flex flex-col flex-1">
          <div className="flex items-center gap-4 mb-6">
            <span className="self-start text-[10px] font-bold uppercase tracking-[0.3em] border border-border text-foreground px-3 py-1 rounded-none group-hover:border-background/30 group-hover:text-background transition-colors">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-widest text-foreground/50 group-hover:text-background/50 transition-colors">
              <Clock size={11} strokeWidth={2.5} />
              {post.readTime}
            </span>
          </div>

          <h3 className="font-bold text-2xl uppercase tracking-tighter text-foreground leading-tight mb-4 group-hover:text-background transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-foreground/80 font-light leading-relaxed mb-6 flex-1 group-hover:text-background/90 transition-colors">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-foreground mt-auto pt-2 group-hover:text-background transition-colors">
            <span>Read Article</span>
            <ArrowUpRight size={14} strokeWidth={2} />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ─── Newsletter Form ──────────────────────────────────────────────── */

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1200);
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 bg-accent/10 border border-accent/20 px-6 py-4 rounded-xl text-accent text-xs font-bold uppercase tracking-widest mx-auto"
      >
        <CheckCircle2 size={16} />
        Thank you! You've subscribed successfully.
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <div className="relative flex-1">
        <Input
          type="email"
          placeholder="ENTER YOUR EMAIL..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-12 px-5 text-xs font-bold uppercase tracking-widest bg-background/50 border-border/60 focus-visible:border-accent rounded-xl w-full"
        />
      </div>
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="h-12 px-8 bg-accent text-background font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 cursor-pointer inline-flex items-center justify-center min-w-[140px]"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </motion.button>
    </form>
  );
}

function SidebarNewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1200);
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-3 bg-accent/10 border border-accent/20 px-4 py-3 rounded-xl text-accent text-[10px] font-bold uppercase tracking-widest w-full"
      >
        <CheckCircle2 size={14} />
        Subscribed successfully!
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
      <Input
        type="email"
        placeholder="YOUR EMAIL..."
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11 px-4 text-[10px] font-bold uppercase tracking-widest bg-background/50 border-border/60 focus-visible:border-accent rounded-xl w-full"
      />
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="h-11 w-full bg-accent text-background font-bold text-[10px] uppercase tracking-widest rounded-xl hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 cursor-pointer inline-flex items-center justify-center"
      >
        {isSubmitting ? "Subscribing..." : "Subscribe"}
      </motion.button>
    </form>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */

export default function Blog() {
  const headerRef = useScrollReveal();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Search input refs for autofocus via ⌘K
  const desktopSearchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (window.innerWidth >= 1024 && desktopSearchInputRef.current) {
          desktopSearchInputRef.current.focus();
        } else if (mobileSearchInputRef.current) {
          mobileSearchInputRef.current.focus();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredPosts = MOCK_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const isFiltering = searchQuery !== "" || selectedCategory !== "All";
  const [featured, ...rest] = filteredPosts;

  const categories = ["All", "Culture", "Engineering", "Technology", "Design", "Process"];

  const getCategoryCount = (category: string) => {
    if (category === "All") return MOCK_POSTS.length;
    return MOCK_POSTS.filter(p => p.category === category).length;
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-accent/20 z-50 origin-left">
        <motion.div
          className="h-full bg-accent"
          style={{ scaleX: scrollProgress, transformOrigin: "left" }}
        />
      </div>

      {/* Header */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 container mx-auto px-6 md:px-12 relative overflow-hidden" ref={headerRef as React.RefObject<HTMLDivElement>}>
        {/* Subtle abstract background decoration */}
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-[120px] pointer-events-none" />
        <div className="absolute left-1/3 top-0 w-[300px] h-[300px] rounded-full bg-primary/[0.01] blur-[100px] pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-12">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-foreground mb-8">
              TENOMAD JOURNAL
            </p>
            <h1 className="text-[clamp(3rem,6vw,5rem)] font-bold tracking-tighter uppercase leading-[1.05]">
              Thinking<br />out loud<span className="text-accent">.</span>
            </h1>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-auto lg:min-w-[400px] relative z-10">
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
              Notes on engineering, design, and building products across borders.
            </p>

            {/* Search (Mobile/Tablet only) */}
            <div className="relative w-full mt-2 lg:hidden">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 h-4 w-4" />
              <Input
                ref={mobileSearchInputRef}
                type="search"
                placeholder="Search articles..."
                className="pl-12 pr-12 h-13 text-xs font-bold uppercase tracking-widest bg-background/30 backdrop-blur-sm border-border/60 focus-visible:border-accent rounded-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-muted/60 px-2 py-1 rounded border border-border/40 text-[9px] font-mono font-bold tracking-normal opacity-60">
                <span>⌘</span>
                <span>K</span>
              </div>
            </div>
          </div>
        </div>

        {/* Simplified Category Filters (Mobile/Tablet only) */}
        <div className="flex lg:hidden flex-wrap items-center gap-x-8 gap-y-4 border-b border-border pb-6 relative z-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] font-bold uppercase tracking-[0.2em] pb-2 border-b-2 transition-all cursor-pointer ${isActive
                    ? "border-accent text-accent"
                    : "border-transparent text-foreground/50 hover:text-foreground hover:border-border/40"
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {filteredPosts.length === 0 ? (
        <section className="container mx-auto px-6 md:px-12 text-center py-32 border-t border-border">
          <p className="text-4xl mb-4 text-muted-foreground/30">—</p>
          <p className="text-muted-foreground text-lg font-light">No articles found matching "{searchQuery}".</p>
        </section>
      ) : (
        /* Asymmetric Split Grid Layout */
        <section className="pb-24">
          {searchQuery && (
            <div className="container mx-auto px-6 md:px-12 py-4 mb-8">
              <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
              </p>
            </div>
          )}

          <div className="container mx-auto px-6 md:px-12">
            {/* Split layout: main articles on left (8 cols), sticky sidebar on right (4 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 border-x border-t border-border bg-background">

              {/* LEFT SIDE: 2-column layout for articles */}
              <div className="lg:col-span-8 col-span-12 lg:border-r border-border">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {filteredPosts.map((post, index) => (
                    <BlogGridCell key={post.slug} post={post} index={index} />
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE: Sticky Sidebar */}
              <aside className="lg:col-span-4 col-span-12 p-8 lg:p-10 lg:sticky lg:top-36 h-fit flex flex-col gap-12 bg-background border-t lg:border-t-0 border-border">

                {/* WIDGET 1: Premium Search Box */}
                <div className="flex flex-col gap-3">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-accent/80">
                    Search Articles
                  </h4>
                  <div className="relative w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 h-3.5 w-3.5" />
                    <Input
                      ref={desktopSearchInputRef}
                      type="search"
                      placeholder="SEARCH..."
                      className="pl-11 pr-12 h-11 text-[10px] font-bold uppercase tracking-widest bg-background/50 border-border/60 focus-visible:border-accent rounded-xl"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-muted/60 px-2 py-0.5 rounded border border-border/40 text-[9px] font-mono font-bold tracking-normal opacity-60">
                      <span>⌘</span>
                      <span>K</span>
                    </div>
                  </div>
                </div>

                {/* WIDGET 2: Premium Vertical Category Selection */}
                <div className="flex flex-col gap-4">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-accent/80">
                    Categories
                  </h4>
                  <div className="flex flex-col border-t border-border/40">
                    {categories.map((cat, idx) => {
                      const isActive = selectedCategory === cat;
                      const count = getCategoryCount(cat);
                      const displayIdx = String(idx + 1).padStart(2, "0");

                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className="flex items-center justify-between py-3.5 border-b border-border/30 group/item transition-all text-left cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <span className={`text-[9px] font-mono font-medium ${isActive ? "text-accent" : "text-muted-foreground/40 group-hover/item:text-foreground/40"
                              }`}>
                              {displayIdx}
                            </span>
                            <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive ? "text-accent" : "text-foreground/60 group-hover/item:text-foreground"
                              }`}>
                              {cat}
                            </span>
                          </div>
                          <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded border transition-all ${isActive
                              ? "bg-accent/10 border-accent/20 text-accent"
                              : "bg-muted/30 border-border/40 text-foreground/40 group-hover/item:border-border group-hover/item:text-foreground/70"
                            }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* WIDGET 3: Premium Sidebar Newsletter Form */}
                <div className="border border-border/40 rounded-2xl bg-card/10 backdrop-blur-md p-6 relative overflow-hidden">
                  <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-accent/5 blur-[30px] pointer-events-none" />
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="inline-flex items-center justify-center self-start p-2.5 bg-accent/10 rounded-full border border-accent/20 text-accent">
                      <Mail size={16} strokeWidth={2} />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold uppercase tracking-tight mb-1 text-foreground">
                        Stay in the Loop
                      </h5>
                      <p className="text-[11px] text-muted-foreground font-light leading-relaxed">
                        Get monthly insights on tech, design, and engineering delivered straight to your inbox.
                      </p>
                    </div>
                    <SidebarNewsletterForm />
                  </div>
                </div>

              </aside>

            </div>
          </div>
        </section>
      )}
    </div>
  );
}
