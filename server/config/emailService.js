import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, text, html) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Sahil Enterprises <noreply@prabhavak.in>", // change after verifying your domain
      to,
      subject,
      text,
      html,
    });

    if (error) {
      console.error(error);

      return {
        success: false,
        error: error.message,
      };
    }

    return {
      success: true,
      messageId: data.id,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: error.message,
    };
  }
};

export { sendEmail };