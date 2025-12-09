import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

const transporter = (SMTP_HOST && SMTP_USER) ? nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
}) : null;

export async function sendVerificationEmail(to: string, code: string) {
    if (transporter) {
        try {
            await transporter.sendMail({
                from: `"Segfault Issue Tracker Login" <${SMTP_USER}>`,
                to,
                subject: "Your Verification Code",
                text: `Your verification code is: ${code}`,
                html: `
          <div style="font-family: sans-serif; padding: 20px; background: #f8fafc; border-radius: 8px;">
            <h2 style="color: #0f172a;">Verification Required</h2>
            <p style="color: #475569;">Please enter the following code to sign in to your Segfault Tracker account:</p>
            <div style="background: #e2e8f0; padding: 15px; border-radius: 6px; font-size: 24px; font-weight: bold; letter-spacing: 5px; text-align: center; color: #0f172a;">
              ${code}
            </div>
            <p style="color: #94a3b8; font-size: 12px; margin-top: 20px;">If you didn't request this, please ignore this email.</p>
          </div>
        `,
            });
            console.log(`[EmailService] Sent generic email to ${to}`);
        } catch (error) {
            console.error("[EmailService] Failed to send email via SMTP", error);
            // Fallback
            console.log(`[EmailService] 📢 DEV MODE: Verification code for ${to} is ${code}`);
        }
    } else {
        // Development mode
        console.log(`[EmailService] 📢 DEV MODE: Verification code for ${to} is [${code}]`);
    }
}
