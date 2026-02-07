// verifyEmailTemplate.js

/**
 * Generates HTML for email verification
 * @param {string} name - Receiver's name
 * @param {string} verifyCode - Verification code or token
 * @returns {string} HTML email template
 */
const VerificationEmail = (name, verifyCode) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Email Verification</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f8;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .header {
            text-align: center;
            color: #333;
          }
          .code {
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 2px;
            color: #2c3e50;
            text-align: center;
            margin: 20px 0;
          }
          .footer {
            font-size: 12px;
            color: #777;
            text-align: center;
            margin-top: 20px;
          }
          .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4f46e5;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2 class="header">Email Verification</h2>
          <p>Hi ${name},</p>
          <p>
            Thank you for registering with <strong>Sahil Enterprises</strong>.
            Please use the verification code below to verify your email address:
          </p>

          <div class="code">${verifyCode}</div>

          <p>
            If you did not create an account, you can safely ignore this email.
          </p>

          <p>Regards,<br/>Sahil Enterprises Team</p>

          <div class="footer">
            <p>This is an automated email. Please do not reply.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

export default VerificationEmail;
// or if you are using CommonJS:
// module.exports = VerificationEmail;