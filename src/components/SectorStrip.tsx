"use client";

import { motion } from "framer-motion";

const SECTORS = [
  "Makelaardij",
  "Installatiebedrijven",
  "Retail",
  "Financiële dienstverlening",
  "Zorg",
];

export default function SectorStrip() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: "#faf8f4",
        borderTop: "1px solid #ede9e3",
        borderBottom: "1px solid #ede9e3",
        paddingTop: 22,
        paddingBottom: 22,
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            color: "#7a7670",
            textTransform: "uppercase",
            fontSize: 10,
            letterSpacing: "0.08em",
            fontWeight: 500,
          }}
        >
          Populair bij
        </span>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
          }}
        >
          {SECTORS.map((s) => (
            <span
              key={s}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #ede9e3",
                color: "#7a7670",
                fontSize: 12,
                borderRadius: 100,
                padding: "6px 16px",
                whiteSpace: "nowrap",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
