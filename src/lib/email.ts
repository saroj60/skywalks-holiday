import { logger } from "./logger";

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailPayload): Promise<boolean> {
  try {
    // In production, configure nodemailer or SendGrid / Resend API
    logger.info(`[Email Dispatch Simulation] To: ${to}, Subject: "${subject}"`);
    return true;
  } catch (error) {
    logger.error("Failed to send email notification", error);
    return false;
  }
}
