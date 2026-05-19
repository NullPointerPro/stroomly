import { Resend } from "resend";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Server is niet geconfigureerd." },
      { status: 500 }
    );
  }

  let body: {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Ongeldige aanvraag." }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !company || !message) {
    return Response.json(
      { error: "Vul alle velden in." },
      { status: 400 }
    );
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return Response.json(
      { error: "Vul een geldig e-mailadres in." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const escape = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const html = `
    <h2>Nieuwe aanvraag via stroomly.co</h2>
    <p><strong>Naam:</strong> ${escape(name)}</p>
    <p><strong>E-mail:</strong> ${escape(email)}</p>
    <p><strong>Bedrijf & sector:</strong> ${escape(company)}</p>
    <p><strong>Bericht:</strong></p>
    <p>${escape(message).replace(/\n/g, "<br />")}</p>
  `;

  const text = `Nieuwe aanvraag via stroomly.co

Naam: ${name}
E-mail: ${email}
Bedrijf & sector: ${company}

Bericht:
${message}`;

  const { error } = await resend.emails.send({
    from: "Stroomly <noreply@stroomly.co>",
    to: ["ilias@stroomly.co"],
    replyTo: email,
    subject: `Nieuwe aanvraag van ${name}`,
    html,
    text,
  });

  if (error) {
    return Response.json(
      { error: "Verzenden mislukt. Probeer het opnieuw." },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
