"use client";

import { motion } from "framer-motion";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const STROKE = "#e8622a";

const STEPS: Step[] = [
  {
    number: "01",
    title: "Gesprek",
    description:
      "We brengen samen de knelpunten in kaart. Gratis en vrijblijvend.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Wij bouwen",
    description:
      "Volledige inrichting door ons. Jij hoeft niets technisch te doen.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Live",
    description: "Binnen 5 werkdagen draait de automatisering.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Wij blijven",
    description:
      "Monitoring, support en maandelijkse optimalisatie inbegrepen.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={STROKE}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="hoe-het-werkt"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: 72,
        paddingBottom: 72,
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <div
            style={{
              fontSize: 10,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#e8622a",
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            Hoe het werkt
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 42,
              color: "#1a1a18",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Van intake tot live in één week
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "#7a7670",
              marginTop: 12,
              maxWidth: 540,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            Geen IT-project. Geen maanden wachten. Gewoon werkende
            automatisering.
          </p>
        </motion.div>

        <div className="how-grid">
          {STEPS.map((step, i) => (
            <div key={step.number} className="how-cell">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  position: "relative",
                  backgroundColor: "#faf8f4",
                  border: "1px solid #ede9e3",
                  borderRadius: 16,
                  padding: 28,
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 18,
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 40,
                    color: "#ede9e3",
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </span>
                <div style={{ marginBottom: 20 }}>{step.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 15,
                    color: "#1a1a18",
                    margin: "0 0 6px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 400,
                    fontSize: 14,
                    color: "#7a7670",
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>

              {i < STEPS.length - 1 && (
                <span
                  className="how-arrow"
                  aria-hidden="true"
                  style={{
                    color: "#ede9e3",
                    fontSize: 24,
                    fontWeight: 400,
                  }}
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .how-cell {
          position: relative;
        }
        .how-arrow {
          display: none;
        }
        @media (min-width: 900px) {
          .how-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 28px;
          }
          .how-cell {
            display: flex;
            align-items: stretch;
          }
          .how-cell > div:first-child {
            flex: 1;
          }
          .how-arrow {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 50%;
            right: -22px;
            transform: translateY(-50%);
            z-index: 1;
          }
        }
      `}</style>
    </section>
  );
}
