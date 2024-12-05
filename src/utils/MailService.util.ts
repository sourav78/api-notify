import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  }
});

export const sendEmail = async (to:string, subject:string, text:string) => {
  try {
    await transporter.sendMail({
      from: "noreply@space.com",
      to,
      subject,
      text
    });
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};