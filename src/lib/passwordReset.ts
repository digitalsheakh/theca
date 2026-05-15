import crypto from "crypto";

const PASSWORD_RESET_TTL_MS = 1000 * 60 * 60;

function hashPasswordResetToken(token: string) {
 return crypto.createHash("sha256").update(token).digest("hex");
}

function createPasswordResetToken() {
 const rawToken = crypto.randomBytes(32).toString("hex");

 return {
 rawToken,
 hashedToken: hashPasswordResetToken(rawToken),
 expiresAt: new Date(Date.now() + PASSWORD_RESET_TTL_MS),
 };
}

function getAppBaseUrl() {
 const configuredBaseUrl = process.env.NEXTAUTH_URL || process.env.APP_BASE_URL;
 if (configuredBaseUrl) {
 return configuredBaseUrl.replace(/\/$/, "");
 }

 const vercelUrl = process.env.VERCEL_URL;
 if (vercelUrl) {
 return `https://${vercelUrl.replace(/\/$/, "")}`;
 }

 return "http://localhost:3000";
}

function buildPasswordResetUrl(token: string) {
 const resetUrl = new URL("/reset-password", getAppBaseUrl());
 resetUrl.searchParams.set("token", token);
 return resetUrl.toString();
}

export {
 buildPasswordResetUrl,
 createPasswordResetToken,
 getAppBaseUrl,
 hashPasswordResetToken,
 PASSWORD_RESET_TTL_MS,
};