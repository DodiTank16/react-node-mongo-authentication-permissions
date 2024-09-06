import nodemailer from "nodemailer";

export const emailVerification = async ({ email, subject, text }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    service: process.env.SMTP_SERVICE,
    secure: true,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: subject,
    html: text,
  };

  await transporter.sendMail(mailOptions);
};
