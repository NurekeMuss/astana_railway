import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type LeadPayload = {
  name: string;
  phone: string;
  company: string;
};

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as LeadPayload;

    if (!data?.name || !data?.phone || !data?.company) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpSecure = process.env.SMTP_SECURE;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    const smtpTo = process.env.SMTP_TO;

    if (
      !smtpHost ||
      !smtpPort ||
      !smtpSecure ||
      !smtpUser ||
      !smtpPass ||
      !smtpFrom ||
      !smtpTo
    ) {
      return NextResponse.json(
        { ok: false, error: "SMTP config missing" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: smtpSecure === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: smtpFrom,
      subject: "Новая заявка с сайта",
      text: `Имя: ${data.name}\nТелефон: ${data.phone}\nКомпания: ${data.company}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${data.name}</p>
        <p><strong>Телефон:</strong> ${data.phone}</p>
        <p><strong>Компания:</strong> ${data.company}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submit error:", error);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}
