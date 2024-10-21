import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const autoResponseEmail = `
  <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
    <img src="https://bitshift-m.netlify.app/bitshift-logo.svg" alt="Bitshift tech Logo" width="200" style="display: block; margin: 0 auto;" />
    <p>Dear {{name}},</p>
    <p>Thank you for contacting Bitshift Tech. </br> We have received your request and will process it shortly.</p>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <th style="border: 1px solid #ddd; padding: 8px;">Name</th>
        <th style="border: 1px solid #ddd; padding: 8px;">Content</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Name</td>
        <td style="border: 1px solid #ddd; padding: 8px;">{{name}}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Subject</td>
        <td style="border: 1px solid #ddd; padding: 8px;">{{subject}}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Email</td>
        <td style="border: 1px solid #ddd; padding: 8px;">{{email}}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Mobile</td>
        <td style="border: 1px solid #ddd; padding: 8px;">{{mobile}}</td>
      </tr>
    </table>
    <p>Best regards,</p>
    <p>Bitshift Tech</p>
  </div>
`;

const internalEmail = `
  <div style="font-family: Arial, sans-serif;">
    <h3>New Inquiry Received</h3>
    <p>A new inquiry has been received from. Below are the details:</p>
    <ul>
      <li><strong>Name:</strong> {{name}}</li>
      <li><strong>Email:</strong> {{email}}</li>
      <li><strong>Subject:</strong> {{subject}}</li>
      <li><strong>Mobile:</strong> {{mobile}}</li>
      <li><strong>Message:</strong> {{message}}</li>
    </ul>
    <p>Please follow up as needed.</p>
  </div>
`;

export async function POST(request: NextRequest) {
  const { email, name, message, phone, subject } = await request.json();

  const senderEmailHtml = autoResponseEmail
    .replace("{{name}}", name)
    .replace("{{name}}", name)
    .replace("{{subject}}", subject)
    .replace("{{email}}", email)
    .replace("{{mobile}}", phone);

  const internalEmailHtml = internalEmail
    .replace("{{name}}", name)
    .replace("{{subject}}", subject)
    .replace("{{email}}", email)
    .replace("{{mobile}}", phone)
    .replace("{{message}}", message);

  const transport = nodemailer.createTransport({
    host: "smtp.office365.com", // GoDaddy 365 SMTP server
    port: 587, // Use 587 for secure connection
    secure: false, // Set to false for port 587
    auth: {
      user: process.env.EMAIL, // GoDaddy 365 email
      pass: process.env.PASSWORD, // GoDaddy 365 password or app password
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false, // Disable certificate checks if needed
    },
    logger: true, // Enable logging to see detailed log info
    debug: true, // Enable debug output to get more detailed error messages
  });

  const clientMailOptions: Mail.Options = {
    from: process.env.EMAIL, // Sender email
    to: email, // Recipient email
    subject: `'${subject}' .. Bitshift Tech`,
    html: senderEmailHtml,
  };
  const companyMailOptions: Mail.Options = {
    from: process.env.EMAIL, // Sender email
    to: email, // Recipient email
    subject: `'${subject}' .. Message from ${name}, ${email}, ${phone}`,
    html: internalEmailHtml,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(clientMailOptions, function (err, info) {
        if (!err) {
          console.log("Message sent: %s", info.messageId); // Log the message ID
          resolve("Email sent. Thank you!");
        } else {
          console.error("Error occurred: %s", err.message); // Log the error
          reject(err.message);
        }
      });
      transport.sendMail(companyMailOptions)
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent. Thank you!" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
