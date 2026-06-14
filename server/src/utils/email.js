import nodemailer from "nodemailer";

function getTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
}

export async function sendBookingNotification(booking) {
  const transporter = getTransporter();
  const to = process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER;
  if (!transporter || !to) return;

  await transporter.sendMail({
    from: `"Gupta Electronics Website" <${process.env.SMTP_USER}>`,
    to,
    subject: `New booking ${booking.bookingId}: ${booking.service}`,
    text: [
      `Name: ${booking.name}`,
      `Phone: ${booking.phone}`,
      `Address: ${booking.address}`,
      `Service: ${booking.service}`,
      `Problem: ${booking.description}`
    ].join("\n")
  });
}
