"use server";

import { FormSchema } from "./config";
import { sendInternalEmail } from "./send-email-internal";

export async function submitForm(data: FormSchema) {
  try {
    await sendInternalEmail(JSON.stringify(data, null, 2));
    return { error: null };
  } catch (err: any) {
    return { error: err.message };
  }
}
