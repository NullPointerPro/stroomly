"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Verzenden mislukt.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Er ging iets mis, probeer het opnieuw."
      );
    }
  }

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#1a1a18",
        paddingTop: 88,
        paddingBottom: 88,
        textAlign: "center",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
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
            Contact
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 42,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Klaar om te starten?
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "#7a7670",
              marginTop: 12,
              lineHeight: 1.6,
            }}
          >
            Plan een gratis gesprek van 20 minuten. Wij kijken samen waar de
            winst zit.
          </p>
        </motion.div>

        <div style={{ marginTop: 36 }}>
          {status === "success" ? (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                color: "#ffffff",
                fontFamily: "var(--font-body)",
                fontSize: 16,
                maxWidth: 400,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Bedankt! We nemen binnen 24 uur contact op.
            </motion.p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                maxWidth: 440,
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                textAlign: "left",
              }}
            >
              <Field name="name" type="text" placeholder="Naam" required />
              <Field
                name="email"
                type="email"
                placeholder="E-mailadres"
                required
              />
              <Field
                name="company"
                type="text"
                placeholder="Bedrijf & sector"
                required
              />
              <Field
                name="message"
                placeholder="Waar loop je tegenaan?"
                required
                textarea
              />

              {status === "error" && (
                <p
                  style={{
                    color: "#ff8b66",
                    fontSize: 12,
                    fontFamily: "var(--font-body)",
                    margin: 0,
                  }}
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                style={{
                  backgroundColor: "#e8622a",
                  color: "#ffffff",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "14px 20px",
                  borderRadius: 100,
                  width: "100%",
                  opacity: status === "submitting" ? 0.7 : 1,
                  transition: "opacity 0.15s ease",
                }}
              >
                {status === "submitting"
                  ? "Versturen..."
                  : "Verstuur bericht →"}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .stroomly-input::placeholder,
        .stroomly-textarea::placeholder {
          color: #5a5a55;
        }
        .stroomly-input:focus,
        .stroomly-textarea:focus {
          border-color: #e8622a !important;
          outline: none !important;
        }
      `}</style>
    </section>
  );
}

function Field({
  name,
  type = "text",
  placeholder,
  required,
  textarea,
}: {
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const baseStyle: React.CSSProperties = {
    backgroundColor: "#252520",
    border: "1px solid #3a3a35",
    borderRadius: 12,
    padding: "14px 18px",
    color: "#ffffff",
    fontFamily: "var(--font-body)",
    fontSize: 15,
    width: "100%",
    transition: "border-color 0.15s ease",
  };
  if (textarea) {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={4}
        className="stroomly-textarea"
        style={{ ...baseStyle, resize: "vertical", minHeight: 110 }}
      />
    );
  }
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="stroomly-input"
      style={baseStyle}
    />
  );
}
