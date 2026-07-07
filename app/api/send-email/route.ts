import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const { name, email, subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `New message from ${name}: ${subject}`,
    text: `You have received a new message. \n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <div style="margin:0;padding:0;background:#f6f5ef;font-family:Arial,Helvetica,sans-serif;color:#1f2937;">
        <div style="max-width:640px;margin:0 auto;padding:32px 16px;">
          <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;box-shadow:0 12px 30px rgba(15,23,42,0.08);">
            <div style="background:linear-gradient(135deg,#fbbf24 0%,#f59e0b 100%);padding:28px 32px;color:#111827;">
              <div style="font-size:12px;letter-spacing:0.16em;text-transform:uppercase;font-weight:700;opacity:0.9;">BumbleB Contact Form</div>
              <h1 style="margin:10px 0 0;font-size:26px;line-height:1.2;">New message from ${escapeHtml(name)}</h1>
              <p style="margin:10px 0 0;font-size:15px;line-height:1.6;max-width:520px;">You received a new inquiry through the website. Here are the details in a clean summary.</p>
            </div>

            <div style="padding:32px;">
              <div style="display:grid;gap:16px;">
                <div style="padding:16px 18px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:14px;">
                  <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;margin-bottom:6px;">Name</div>
                  <div style="font-size:16px;line-height:1.6;color:#111827;">${escapeHtml(name)}</div>
                </div>

                <div style="padding:16px 18px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:14px;">
                  <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;margin-bottom:6px;">Email</div>
                  <div style="font-size:16px;line-height:1.6;color:#111827;">${escapeHtml(email)}</div>
                </div>

                <div style="padding:16px 18px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:14px;">
                  <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#6b7280;margin-bottom:6px;">Subject</div>
                  <div style="font-size:16px;line-height:1.6;color:#111827;">${escapeHtml(subject)}</div>
                </div>

                <div style="padding:18px;background:#fffaf0;border:1px solid #fde68a;border-radius:14px;">
                  <div style="font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#92400e;margin-bottom:8px;">Message</div>
                  <div style="font-size:16px;line-height:1.8;color:#1f2937;white-space:pre-wrap;">${escapeHtml(message)}</div>
                </div>
              </div>

              <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e5e7eb;font-size:13px;line-height:1.6;color:#6b7280;">
                Reply directly to this sender using <a href="mailto:${escapeHtml(email)}" style="color:#b45309;text-decoration:none;font-weight:600;">${escapeHtml(email)}</a>.
              </div>
            </div>
          </div>
        </div>
      </div>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error || "Failed to send email" },
      { status: 500 },
    );
  }
}
