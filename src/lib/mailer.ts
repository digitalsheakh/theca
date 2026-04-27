import nodemailer from "nodemailer";

function getRequiredEnvValue(name: string) {
 const value = process.env[name];
 if (!value) {
 throw new Error(`Missing required environment variable: ${name}`);
 }

 return value;
}

function isMailConfigured() {
 return Boolean(
 process.env.SMTP_HOST &&
 process.env.SMTP_PORT &&
 process.env.SMTP_USER &&
 process.env.SMTP_PASSWORD &&
 process.env.SMTP_FROM_EMAIL
 );
}

async function sendPasswordResetEmail({
 to,
 name,
 resetUrl,
}: {
 to: string;
 name?: string;
 resetUrl: string;
}) {
 const port = Number(getRequiredEnvValue("SMTP_PORT"));
 const transporter = nodemailer.createTransport({
 host: getRequiredEnvValue("SMTP_HOST"),
 port,
 secure: process.env.SMTP_SECURE === "true" || port === 465,
 auth: {
 user: getRequiredEnvValue("SMTP_USER"),
 pass: getRequiredEnvValue("SMTP_PASSWORD"),
 },
 });

 const brandName = process.env.SMTP_FROM_NAME || "The Car Edition";
 const recipientName = name?.trim() || "there";

 await transporter.sendMail({
 from: `${brandName} <${getRequiredEnvValue("SMTP_FROM_EMAIL")}>`,
 to,
 subject: "Reset your The Car Edition password",
 text: `Hi ${recipientName},\n\nWe received a request to reset your password. Use the link below to choose a new password:\n\n${resetUrl}\n\nThis link expires in 1 hour. If you did not request this change, you can ignore this email.`,
 html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <p>Hi ${recipientName},</p>
        <p>We received a request to reset your password for The Car Edition.</p>
        <p>
          <a href="${resetUrl}" style="display: inline-block; padding: 12px 20px; background: #ea580c; color: #ffffff; text-decoration: none; font-weight: 700;">
            Reset Password
          </a>
        </p>
        <p>If the button does not work, copy and paste this link into your browser:</p>
        <p><a href="${resetUrl}">${resetUrl}</a></p>
        <p>This link expires in 1 hour. If you did not request this change, you can ignore this email.</p>
      </div>
    `,
 });
}

export { isMailConfigured, sendPasswordResetEmail };