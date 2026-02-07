import http from "http";
import nodemailer from "nodemailer";


// Create and configure the SMTP transporter object
// This transporter is responsible for sending emails from your application
const transporter = nodemailer.createTransport({
    // SMTP server host (Gmail's SMTP server in this case)
    host: 'smtp.gmail.com',

    // Port 465 is used for secure SMTP (SSL)
    port: 465,

    // 'secure: true' means the connection will use SSL encryption
    secure: true,

    // Authentication details for the email account
    auth: {
        // Email address from environment variables (e.g., your Gmail address)
        user: process.env.EMAIL,

        // App password or email password stored securely in environment variables
        pass: process.env.EMAIL_PASS,
    },
});

// Function to send email
async function sendEmail(to, subject, text, html) {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL, // sender address
            to, // list of receivers,
            subject, // Subject line
            text, // plain text body,
            html, // html body
        });
        return { success: true, messageId: info.messageId };
    }catch (error) {
        console.error('Error sending Email:', error);
        return { success: false, error: error.message };
    }
}

export { sendEmail };