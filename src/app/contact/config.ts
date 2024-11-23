import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "email must be a valid email.",
  }),
  company: z.string().min(2, {
    message: "company must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "message must be at least 2 characters.",
  }),
});

export type FormSchema = z.infer<typeof formSchema>;
