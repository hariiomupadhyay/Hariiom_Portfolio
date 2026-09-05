import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, serviceType, message } = (req.body as {
    name?: string;
    email?: string;
    phone?: string;
    serviceType?: string;
    message?: string;
  }) || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields (name, email, message)" });
  }

  const apiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;

  if (!apiKey) {
    console.warn("RESEND_API_KEY is not configured.");
    return res.status(500).json({ error: "Resend API key is not configured in server environment." });
  }

  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["hariiomdev@outlook.com"],
      replyTo: email,
      subject: `New Inquiry from ${name} — ${serviceType || "Portfolio Contact"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111; max-width: 600px;">
          <h2 style="color: #10b981; border-bottom: 2px solid #10b981; padding-bottom: 8px;">
            New Portfolio Project Inquiry
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 140px; color: #555;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Phone / WhatsApp:</td>
              <td style="padding: 8px;">${phone || "Not provided"}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Service Requested:</td>
              <td style="padding: 8px; font-weight: bold; color: #10b981;">${serviceType || "General Inquiry"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background-color: #f4f4f5; border-left: 4px solid #10b981; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #333;">Project Description & Requirements:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #222;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #888;">
            Sent from Hariom Upadhyay Portfolio Website contact form via Resend.
          </p>
        </div>
      `,
    });

    if (result.error) {
      console.error("Resend Response Error:", result.error);
      return res.status(400).json({ error: result.error.message });
    }

    return res.status(200).json({ success: true, data: result.data });
  } catch (error: unknown) {
    console.error("Resend API Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to send email via Resend";
    return res.status(500).json({ error: errorMessage });
  }
}