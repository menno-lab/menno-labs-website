"use server";

import { FormSchema } from "./config";
import { sendInternalEmail } from "./send-email-internal";

function messageToHtml(data: FormSchema) {
  const paragraphs = Object.entries(data).map(([key, value]) => {
    return `<strong>${key}:</strong><br><p>${value}</p>`;
  });

  return paragraphs.join("<br>");
}

export async function submitForm(data: FormSchema) {
  try {
    await sendInternalEmail(messageToHtml(data));
    return { error: null };
  } catch (err: any) {
    return { error: err.message };
  }
}
