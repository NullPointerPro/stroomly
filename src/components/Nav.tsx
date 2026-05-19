"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #ede9e3" : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 3px rgba(26,26,24,0.04)" : "none",
        transition:
          "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a href="#top" onClick={(e) => handleAnchor(e, "top")}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 20,
              color: "#1a1a18",
              letterSpacing: "-0.02em",
            }}
          >
            Stroom<span style={{ color: "#e8622a" }}>ly</span>
          </span>
        </a>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          <a
            href="#hoe-het-werkt"
            onClick={(e) => handleAnchor(e, "hoe-het-werkt")}
            className="nav-link"
            style={{
              color: "#7a7670",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            Hoe het werkt
          </a>
          <a
            href="#prijzen"
            onClick={(e) => handleAnchor(e, "prijzen")}
            className="nav-link"
            style={{
              color: "#7a7670",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            Prijzen
          </a>
          <a
            href="#contact"
            onClick={(e) => handleAnchor(e, "contact")}
            style={{
              backgroundColor: "#1a1a18",
              color: "#ffffff",
              fontSize: 13,
              fontWeight: 500,
              padding: "9px 18px",
              borderRadius: 100,
              fontFamily: "var(--font-body)",
              transition: "transform 0.15s ease, background-color 0.15s ease",
              display: "inline-block",
            }}
          >
            Plan een gesprek
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-link { display: none; }
        }
      `}</style>
    </motion.nav>
  );
}
