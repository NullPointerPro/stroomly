"use client";

import { motion } from "framer-motion";

type Plan = {
  tag: string;
  title: string;
  description: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    tag: "Starter",
    title: "1 automatisering",
    description:
      "Ideaal om te starten met één concreet proces dat direct tijd bespaart.",
    features: [
      "1 workflow naar keuze",
      "Eenmalige setup",
      "Monitoring & support",
    ],
    cta: "Vraag offerte aan →",
  },
  {
    tag: "Meest gekozen",
    title: "Tot 3 automatiseringen",
    description:
      "De combinatie die het meeste oplevert voor groeiende bedrijven.",
    features: [
      "3 workflows op maat",
      "Maandelijkse optimalisatie",
      "Prioriteit support",
    ],
    cta: "Vraag offerte aan →",
    featured: true,
  },
  {
    tag: "Maatwerk",
    title: "Volledig ontzorgd",
    description:
      "Voor bedrijven die hun volledige operatie willen stroomlijnen.",
    features: [
      "Onbeperkt workflows",
      "Dedicated begeleiding",
      "Kwartaal reviews",
    ],
    cta: "Neem contact op →",
  },
];

function Check() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#e8622a"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section
      id="prijzen"
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
          style={{ textAlign: "center", marginBottom: 28 }}
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
            Prijzen
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
            Prijs op maat
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "#7a7670",
              marginTop: 12,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            Iedere situatie is anders. Na ons gesprek ontvang je binnen 24 uur
            een offerte op maat — geen verrassingen.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: "#fef3ee",
            border: "1px solid #f4c4aa",
            borderRadius: 12,
            padding: "14px 18px",
            color: "#c4501e",
            fontSize: 12,
            lineHeight: 1.55,
            maxWidth: 760,
            margin: "0 auto 40px",
            textAlign: "center",
          }}
        >
          De prijs wordt bepaald door het aantal processen, de complexiteit en
          de benodigde integraties. Geen vaste tarieven — wel eerlijke prijzen.
        </motion.div>

        <div className="pricing-grid">
          {PLANS.map((plan, i) => {
            const featured = plan.featured;
            return (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  backgroundColor: featured ? "#fef3ee" : "#ffffff",
                  border: featured
                    ? "1px solid #e8622a"
                    : "1px solid #ede9e3",
                  borderRadius: 16,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    backgroundColor: featured ? "#e8622a" : "transparent",
                    border: featured ? "none" : "1px solid #ede9e3",
                    color: featured ? "#ffffff" : "#7a7670",
                    fontSize: 11,
                    fontWeight: 500,
                    padding: "4px 12px",
                    borderRadius: 100,
                    marginBottom: 16,
                    letterSpacing: 0,
                  }}
                >
                  {plan.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 22,
                    color: "#1a1a18",
                    margin: "0 0 10px",
                    letterSpacing: "-0.015em",
                    lineHeight: 1.2,
                  }}
                >
                  {plan.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "#7a7670",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {plan.description}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "24px 0 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      style={{
                        display: "flex",
                        gap: 10,
                        alignItems: "flex-start",
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        color: "#7a7670",
                        lineHeight: 1.5,
                      }}
                    >
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  style={{
                    color: "#e8622a",
                    fontSize: 13,
                    fontWeight: 500,
                    marginTop: "auto",
                    alignSelf: "flex-start",
                  }}
                >
                  {plan.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 860px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
