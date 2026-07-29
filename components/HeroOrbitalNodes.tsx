'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'cio-cdo', label: 'CIO / CDO\nAdvisory', href: '/services/cio-cdo-services', angle: 270 },
  { id: 'erp', label: 'ERP\nAdvisory', href: '/services/erp-advisory', angle: 330 },
  { id: 'digital', label: 'Digital\nTransformation', href: '/services/digital-transformation', angle: 30 },
  { id: 'ai', label: 'AI\nAdvisory', href: '/services/ai-advisory', angle: 90 },
  { id: 'shop-floor', label: 'Shop-Floor\nDigitization', href: '/services/digital-transformation', angle: 150 },
  { id: 'it-gov', label: 'IT\nGovernance', href: '/services/cio-cdo-services', angle: 210 },
];

export default function HeroOrbitalNodes() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Geometry parameters
  const size = 380;
  const center = size / 2;
  const radius = 135;

  return (
    <div className="relative w-full max-w-[420px] lg:max-w-[460px] aspect-square mx-auto flex items-center justify-center select-none group">
      {/* Background Ambient Glow */}
      <div className="absolute inset-4 rounded-full bg-brand-gold/5 blur-2xl pointer-events-none" />

      {/* Rotating Orbit Container (Rotates SVG spokes & node circles together) */}
      <motion.div
        className="relative w-full h-full z-10"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 45,
          ease: 'linear',
        }}
        style={{
          animationPlayState: hoveredNode ? 'paused' : 'running',
        }}
      >
        {/* SVG Canvas inside rotating container so lines & nodes NEVER detach */}
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        >
          <defs>
            <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Orbital Track Circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="#D4AF37"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity="0.3"
          />

          {/* Radiating Spokes connecting Hub to Nodes (Always Gold) */}
          {nodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x2 = center + radius * Math.cos(rad);
            const y2 = center + radius * Math.sin(rad);
            const isHighlighted = hoveredNode === node.id;

            return (
              <g key={`spoke-${node.id}`}>
                {/* Glowing stroke underlayer when node is hovered */}
                {isHighlighted && (
                  <line
                    x1={center}
                    y1={center}
                    x2={x2}
                    y2={y2}
                    stroke="#D4AF37"
                    strokeWidth="5"
                    strokeOpacity="0.8"
                    filter="url(#gold-glow)"
                  />
                )}
                {/* Primary Spoke Line */}
                <line
                  x1={center}
                  y1={center}
                  x2={x2}
                  y2={y2}
                  stroke="#D4AF37"
                  strokeWidth={isHighlighted ? '2.5' : '1.5'}
                  strokeOpacity={isHighlighted ? '1' : '0.65'}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}
        </svg>

        {/* 6 Orbiting Outer Node Circles */}
        {nodes.map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const leftPercent = 50 + (radius / (size / 2)) * 50 * Math.cos(rad);
          const topPercent = 50 + (radius / (size / 2)) * 50 * Math.sin(rad);

          const isHovered = hoveredNode === node.id;

          return (
            <div
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
              style={{
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
              }}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Counter-rotating text container so text stays upright */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  repeat: Infinity,
                  duration: 45,
                  ease: 'linear',
                }}
                style={{
                  animationPlayState: hoveredNode ? 'paused' : 'running',
                }}
              >
                <Link
                  href={node.href}
                  className={`w-26 h-26 sm:w-28 sm:h-28 rounded-full flex items-center justify-center p-2.5 text-center transition-all duration-300 backdrop-blur-md block ${
                    isHovered
                      ? 'bg-brand-navy-dark border-2 border-brand-gold scale-105 shadow-md'
                      : 'bg-brand-navy-dark/95 border border-brand-gold/40 hover:border-brand-gold shadow-md'
                  }`}
                >
                  <span
                    className={`font-sans text-[10px] sm:text-[11px] leading-snug uppercase tracking-normal transition-colors whitespace-pre-line block ${
                      isHovered ? 'text-brand-gold font-bold' : 'text-slate-200 font-semibold'
                    }`}
                  >
                    {node.label}
                  </span>
                </Link>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Central Hub (Operational Excellence) */}
      <Link
        href="/services/operational-excellence"
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-brand-navy-dark border-2 border-brand-gold flex items-center justify-center p-4 text-center z-30 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.4)] ${
          hoveredNode === 'center'
            ? 'scale-105 shadow-[0_0_40px_rgba(212,175,55,0.75)]'
            : ''
        }`}
        onMouseEnter={() => setHoveredNode('center')}
        onMouseLeave={() => setHoveredNode(null)}
      >
        <span className="font-serif font-bold text-sm sm:text-base text-white leading-tight uppercase tracking-wide">
          operational
          <br />
          excellence
        </span>
      </Link>
    </div>
  );
}
