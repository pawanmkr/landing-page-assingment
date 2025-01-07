import nodemailer from "nodemailer";
import { db } from "../database/setup.js";
import { config } from "dotenv";

config(); // Load environment variables

// Set up the email transporter using SMTP details from the environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Function to handle the contact form email sending
export async function sendEmail(to: string, subject: string, body: string) {
  try {
    // Ensure 'to' is a valid email
    if (!to || !subject || !body) {
      throw new Error("Missing required fields (to, subject, or body)");
    }

    // Send the contact form message as an email
    await transporter.sendMail({
      from: process.env.SMTP_FROM, // From email address (configured in your .env)
      to: to, // 'to' is the email address from the form
      subject: subject,
      html: body,
    });

    // Log the email submission to the database
    const status = "sent"; // Set the status as 'sent'

    db.prepare(
      `
        INSERT INTO contact_forms (email, message, status)
        VALUES (?, ?, ?)
      `
    ).run(to, body, status);

    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email");
  }
}
