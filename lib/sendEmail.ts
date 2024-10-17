"use server";
// Package imports
import nodemailer, { Transporter } from "nodemailer";
import ejs from "ejs";

interface EmailOptions {
  email: string;
  subject: string;
  data: { [key: string]: any };
}

const sendEJSEmail = async (options: EmailOptions): Promise<void> => {
  const transporter: Transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST!,
    port: parseInt(process.env.EMAIL_PORT!),
    service: process.env.EMAIL_SERVICE!,
    auth: {
      user: process.env.SMTP_MAIL!,
      pass: process.env.SMTP_PASSWORD!,
    },
  });

  const { email, subject, data } = options;

  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Form Submissions</title>
        <style>
          body {
            font-family: "Montserrat", Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 30px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #008080;
            padding: 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
            color: #fff;
          }
          h1 {
            font-size: 24px;
            margin: 0;
          }
          p {
            color: #666;
            line-height: 1.6;
            margin: 10px 0;
          }
          strong {
            color: #333;
          }
          .btn {
            display: inline-block;
            background-color: #008080;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 4px;
            transition: background-color 0.3s ease;
          }
          .btn:hover {
            background-color: #006666;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            padding: 10px 0;
            border-top: 1px solid #ddd;
            color: #666;
          }
          .footer p {
            margin: 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Someone Reached Out</h1>
          </div>
          <p><%= data.user.name %>, Reached out</p>
          <p>
            <strong>Email:</strong> <%= data.user.email %><br />
            <strong>Message:</strong>
            <%= data.message %>
          </p>
         
        </div>
      </body>
    </html>
  `;

  const html: string = ejs.render(htmlTemplate, { data });

  // Sending email
  const mailOptions = {
    from: process.env.SMTP_MAIL!,
    to: "emmanuelkeifala@gmail.com",
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEJSEmail;
