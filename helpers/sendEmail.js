import nodemailer from 'nodemailer';
import 'dotenv/config';

const { NODEMAILER_FROM, PASSWORD, BASE_URL } = process.env;
const config = {
  host: 'smtp.ukr.net',
  port: 465,
  secure: true,
  auth: {
    user: NODEMAILER_FROM,
    pass: PASSWORD,
  },
};

export const transporter = nodemailer.createTransport(config);

const sendMail = (email, verificationToken) => {
  const emailObject = {
    from: NODEMAILER_FROM,
    to: email,
    subject: 'Verify email',
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify email</a>`,
  };

  return transporter.sendMail(emailObject);
};

export default sendMail;
