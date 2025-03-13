import { Resend } from "resend";

const adminEmail = "menno@menno-labs.com";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInternalEmail(message: string) {
  const subject = `MENNO-LABS-[${process.env.NODE_ENV?.toUpperCase()}]`;

  return await resend.emails.send({
    from: "notifications@transactional.menno-labs.com",
    to: adminEmail,
    subject,
    html: `<p>${message}</p>`,
  });
}
