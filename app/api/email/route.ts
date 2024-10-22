import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const autoResponseEmail = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
    <body>
      <table bgcolor="#fafafa" style=" width: 100%!important; height: 100%; background-color: #fafafa; padding: 20px; font-family: 'Inter', sans-serif;  font-size: 100%; line-height: 1.6;">
        <tr>
          <td>
          </td>
          <td bgcolor="#FFFFFF" style="border: 1px solid #eeeeee; background-color: #ffffff; border-radius:5px; display:block!important; max-width:600px!important; margin:0 auto!important; clear:both!important;">
            <div style="padding:20px; max-width:600px; margin:0 auto; display:block;">
              <table style="width: 100%;">
                <tr>
                  <td>
                    <p style="text-align: left; display: block;  padding-bottom:20px;  margin-bottom:20px; border-bottom:1px solid #dddddd;">
                      <img src="https://bitshift-m.netlify.app/bitshift-logo.png" width="150"/>
                    </p>
                    <h3 style="font-weight: 400; font-size: 22px; margin: 20px 0 30px 0; color: #333333;">Dear {{name}},</h3>
                    <h3 style="font-weight: 200; font-size: 18px; margin: 20px 0 30px 0; color: #333333;">Thank you for contacting Bitshift. </br> This is to confirm that We have received your request and we will process it shortly.</h3>
                    </br>
                    <h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;"> <strong>Name:</strong> {{name}} </h2>
                    <h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;"> <strong>Subject:</strong> {{subject}} </h2>
                    <h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;"> <strong>Email:</strong> {{email}} </h2>
                    <h2 style="font-weight: 200; font-size: 16px; margin: 20px 0; color: #333333;"> <strong>Mobile Number:</strong> {{mobile}} </h2>
                    </br>
                    <h2 style="font-weight: 200; font-size: 16px; margin: 10px 0; color: #333333;"> Best regards, </h2>
                    <h2 style="font-weight: 200; font-size: 16px; margin: 10px 0; color: #333333;"> Bitshift </h2>
                  </td>

                  <td align="center">
                    <img src="https://bitshift-m.netlify.app/bitshift-logo.png" alt="Bitshift Logo" width="150" style="display:block;">

                    <!-- Social Media Icons -->
                    <p style="font-size: 14px; color: #333;">Follow us on:</p>
                    <a href="https://www.facebook.com/" target="_blank">
                      <img src="https://bitshift-m.netlify.app/icons/email/facebook.png" alt="Facebook" width="24" height="24" style="margin-right: 10px;">
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                      <img src="https://bitshift-m.netlify.app/icons/email/twitter.png" alt="Twitter" width="24" height="24" style="margin-right: 10px;">
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                      <img src="https://bitshift-m.netlify.app/icons/email/youtube.png" alt="LinkedIn" width="24" height="24" style="margin-right: 10px;">
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </td>
          <td>
          </td>
        </tr>
      </table>
    </body>
  </html>
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
    from: `"Bitshift" <info@bitshift-tech.com>`, // Sender email
    to: email, // Recipient email
    subject: `Thank you for contacting Bitshift`,
    html: senderEmailHtml,
  };
  const companyMailOptions: Mail.Options = {
    from: `"Bitshift" <info@bitshift-tech.com>`, // Sender email
    // to: process.env.EMAIL, // Recipient email
    to: email, // Recipient email
    subject: `'${subject}' .. Message from ${name}, ${email}, ${phone}`,
    html: internalEmailHtml,
  };

  const sendMailPromise = () =>
    new Promise<void>((resolve, reject) => {
      const clientMail = transport.sendMail(clientMailOptions);
      const internalMail = transport.sendMail(companyMailOptions);

      Promise.all([clientMail, internalMail])
        .then(() => {
          console.log("Emails sent successfully");
          resolve(); // Resolve without passing any message
        })
        .catch((err) => {
          console.error("Error occurred: %s", err.message);
          reject(err.message);
        });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({
      success: true,
      message: "Emails sent successfully",
    }); // You can customize the message or return nothing
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
