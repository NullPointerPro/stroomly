"use client";

import { useEffect, useRef, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { motion, useSpring, useTransform } from "framer-motion";

type Sector = "Makelaardij" | "Installatie" | "Retail" | "Anders";

const SECTORS: { id: Sector; context: string }[] = [
  {
    id: "Makelaardij",
    context: "Denk aan bezichtigingen, dossiers en mailafhandeling.",
  },
  {
    id: "Installatie",
    context: "Denk aan offertes, planning en facturatie.",
  },
  {
    id: "Retail",
    context: "Denk aan voorraad, orders en klantvragen.",
  },
  {
    id: "Anders",
    context: "Denk aan terugkerende administratie en handmatig overtypen.",
  },
];

function AnimatedNumber({
  value,
  format,
}: {
  value: number;
  format: (n: number) => string;
}) {
  const spring = useSpring(value, { stiffness: 90, damping: 18, mass: 0.6 });
  const display = useTransform(spring, (latest) => format(latest));
  const [text, setText] = useState(format(value));

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsub = display.on("change", (v) => setText(v));
    return () => unsub();
  }, [display]);

  return <span>{text}</span>;
}

const fmtHours = (n: number) =>
  `${n.toLocaleString("nl-NL", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })} uur`;

const fmtEuro = (n: number) =>
  `€ ${Math.round(n).toLocaleString("nl-NL")}`;

export default function ROICalculator() {
  const [sector, setSector] = useState<Sector>("Makelaardij");
  const [tasks, setTasks] = useState(25);
  const [minutes, setMinutes] = useState(20);
  const [wage, setWage] = useState(30);

  const hoursPerWeek = (tasks * minutes) / 60;
  const savingsMonth = hoursPerWeek * 4.33 * wage * 0.7;
  const savingsYear = savingsMonth * 12;

  const sectorContext = SECTORS.find((s) => s.id === sector)?.context ?? "";

  return (
    <section
      id="calculator"
      style={{
        backgroundColor: "#faf8f4",
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
          style={{ textAlign: "center", marginBottom: 40 }}
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
            ROI Calculator
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
            Bereken jouw besparing
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
            Schuif de sliders en zie direct hoeveel tijd en geld
            automatisering jou oplevert.
          </p>
        </motion.div>

        <div className="roi-grid">
          {/* Controls */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  color: "#7a7670",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: 10,
                  fontWeight: 500,
                }}
              >
                Sector
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                {SECTORS.map((s) => {
                  const active = s.id === sector;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSector(s.id)}
                      style={{
                        backgroundColor: active ? "#e8622a" : "#ffffff",
                        color: active ? "#ffffff" : "#7a7670",
                        border: active
                          ? "1px solid #e8622a"
                          : "1px solid #ede9e3",
                        fontSize: 12,
                        fontWeight: 500,
                        padding: "8px 16px",
                        borderRadius: 100,
                        fontFamily: "var(--font-body)",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {s.id}
                    </button>
                  );
                })}
              </div>
            </div>

            <ControlSlider
              label="Repetitieve taken per week"
              value={tasks}
              min={5}
              max={100}
              step={1}
              onChange={setTasks}
              suffix=""
              context={sectorContext}
            />
            <ControlSlider
              label="Gemiddelde tijd per taak (minuten)"
              value={minutes}
              min={5}
              max={60}
              step={1}
              onChange={setMinutes}
              suffix=" min"
            />
            <ControlSlider
              label="Bruto uurloon medewerker (€)"
              value={wage}
              min={15}
              max={75}
              step={1}
              onChange={setWage}
              prefix="€ "
            />
          </div>

          {/* Output card */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #ede9e3",
              borderRadius: 16,
              padding: 36,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Metric label="Uren bespaard per week">
              <AnimatedNumber value={hoursPerWeek} format={fmtHours} />
            </Metric>
            <div
              style={{
                height: 1,
                backgroundColor: "#ede9e3",
                margin: "20px 0",
              }}
            />
            <Metric label="Besparing per maand">
              <AnimatedNumber value={savingsMonth} format={fmtEuro} />
            </Metric>
            <div
              style={{
                height: 1,
                backgroundColor: "#ede9e3",
                margin: "20px 0",
              }}
            />
            <Metric label="Besparing per jaar">
              <AnimatedNumber value={savingsYear} format={fmtEuro} />
            </Metric>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                color: "#7a7670",
                fontStyle: "italic",
                marginTop: 24,
                lineHeight: 1.55,
              }}
            >
              Gebaseerd op 70% automatisering van de geselecteerde taken.
              Werkelijke besparing afhankelijk van jouw processen.
            </p>
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
                marginTop: 14,
                display: "inline-block",
              }}
            >
              Wil je weten wat het écht is? Plan een gratis gesprek →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .roi-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        @media (min-width: 860px) {
          .roi-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
            align-items: start;
          }
        }
      `}</style>
    </section>
  );
}

function ControlSlider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  prefix = "",
  suffix = "",
  context,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
  prefix?: string;
  suffix?: string;
  context?: string;
}) {
  const lastContext = useRef(context);
  useEffect(() => {
    lastContext.current = context;
  }, [context]);

  return (
    <div>
      {context && (
        <div
          style={{
            fontSize: 11,
            color: "#7a7670",
            marginBottom: 8,
            fontStyle: "italic",
            lineHeight: 1.4,
          }}
        >
          {context}
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 10,
        }}
      >
        <label
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 13,
            color: "#1a1a18",
            fontWeight: 500,
          }}
        >
          {label}
        </label>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            color: "#e8622a",
            fontSize: 16,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {prefix}
          {value}
          {suffix}
        </span>
      </div>
      <Slider.Root
        className="SliderRoot"
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(v[0])}
        aria-label={label}
      >
        <Slider.Track className="SliderTrack">
          <Slider.Range className="SliderRange" />
        </Slider.Track>
        <Slider.Thumb className="SliderThumb" />
      </Slider.Root>
    </div>
  );
}

function Metric({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "#7a7670",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          fontWeight: 500,
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: 38,
          color: "#e8622a",
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
        }}
      >
        {children}
      </div>
    </div>
  );
}
