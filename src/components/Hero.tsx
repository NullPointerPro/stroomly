"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="top"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        paddingTop: 140,
        paddingBottom: 100,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          maskImage:
            "radial-gradient(ellipse 65% 65% at 50% 50%, transparent 25%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 65% at 50% 50%, transparent 25%, black 100%)",
          overflow: "hidden",
        }}
      >
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.07 }}
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#e8622a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />

          <g stroke="#e8622a" strokeWidth="1" fill="none" opacity="0.4">
            <path d="M0 120 Q200 80 400 140 T800 120 T1200 100 T1600 130" />
            <path d="M0 200 Q300 160 500 220 T900 190 T1300 210 T1600 200" />
            <path d="M0 320 Q250 280 450 340 T850 300 T1200 330 T1600 310" />
            <path d="M0 440 Q200 400 500 460 T900 420 T1300 450 T1600 430" />
            <path d="M0 560 Q300 520 600 570 T1000 540 T1400 560 T1600 545" />
          </g>
        </svg>
      </div>

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "#fef3ee",
            border: "1px solid #f4c4aa",
            color: "#e8622a",
            fontSize: 11,
            fontWeight: 500,
            padding: "6px 14px",
            borderRadius: 100,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              position: "relative",
              display: "inline-flex",
              width: 6,
              height: 6,
            }}
          >
            <span
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                backgroundColor: "#e8622a",
                opacity: 0.6,
                animation: "stroomly-pulse 1.6s ease-out infinite",
              }}
            />
            <span
              style={{
                position: "relative",
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#e8622a",
              }}
            />
          </span>
          Workflow automatisering voor het Nederlandse MKB
        </motion.div>

        <motion.h1
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="hero-title"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            color: "#1a1a18",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            margin: 0,
          }}
        >
          Jouw bedrijf op automatische piloot
          <br />
          <span style={{ color: "#e8622a" }}>Zonder extra personeel.</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: 19,
            color: "#7a7670",
            maxWidth: 480,
            margin: "24px auto 0",
            lineHeight: 1.7,
          }}
        >
          Stroomly automatiseert de repetitieve processen in jouw bedrijf —
          zodat jij je richt op wat écht telt.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginTop: 36,
          }}
        >
          <a
            href="#contact"
            onClick={(e) => handleAnchor(e, "contact")}
            style={{
              backgroundColor: "#e8622a",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: 500,
              padding: "13px 22px",
              borderRadius: 100,
              fontFamily: "var(--font-body)",
            }}
          >
            Plan een gratis gesprek →
          </a>
          <a
            href="#hoe-het-werkt"
            onClick={(e) => handleAnchor(e, "hoe-het-werkt")}
            style={{
              backgroundColor: "#ffffff",
              color: "#1a1a18",
              border: "1px solid #ede9e3",
              fontSize: 14,
              fontWeight: 500,
              padding: "12px 22px",
              borderRadius: 100,
              fontFamily: "var(--font-body)",
            }}
          >
            Hoe het werkt ↓
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes stroomly-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .hero-title { font-size: 64px; }
        @media (max-width: 640px) {
          .hero-title { font-size: 36px; }
        }
      `}</style>
    </section>
  );
}
