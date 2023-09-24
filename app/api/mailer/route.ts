import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const host = process.env.EMAIL_SERVER_HOST;
const email = process.env.EMAIL_SERVER_USER;
const pass = process.env.EMAIL_SERVER_PASSWORD;
const port = process.env.EMAIL_SERVER_PORT;

export const transporter = nodemailer.createTransport({
  host,
  port,
  secure: true,
  service: 'gmail',
  auth: {
    type: 'login',
    user: email,
    pass,
  },
});

export async function POST(req: Request) {
  const data = await req.json();
  if (!data || !data.name || !data.email || !data.message) {
    return NextResponse.json({ message: 'Bad request' }, { status: 400 });
  }

  try {
    const mailOption = {
      from: 'Sieu Toc Web',
      to: data.email,
      subject: 'Welcome to Sieu Toc Web',
      html: `<H3>Thank you for contacting us. We will contact you soon</H3>`,
    };
    await transporter.sendMail(mailOption, function (err, res) {
      if (err) {
        return NextResponse.json({ message: err.message }, { status: 400 });
      } else {
        return NextResponse.json(
          { message: 'Mail sent success' },
          { status: 200 }
        );
      }
    });

    return NextResponse.json({ message: 'Mail sent success' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err }, { status: 400 });
  }
}
