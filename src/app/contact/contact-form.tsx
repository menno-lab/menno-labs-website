"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
import { FormSchema, formSchema } from "./config";
import { submitForm } from "./action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const { toast } = useToast();
  const [isLoading, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          startTransition(async () => {
            setError(undefined);
            const { error } = await submitForm(values);
            if (error) {
              return setError(error);
            }
            toast({
              variant: "success",
              title: t("success.title"),
              description: t("success.description"),
            });
            form.reset();
          })
        )}
      >
        <Card className="pt-8 dark:bg-muted pb-4">
          <CardContent className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("name.title")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("name.placeholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("email.title")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t("email.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("company.title")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("company.placeholder")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("message.title")}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={t("message.placeholder")}
                      {...field}
                      className="min-h-28"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex flex-col gap-6">
            <Button
              type="submit"
              variant="default"
              isLoading={isLoading}
              className="w-full"
            >
              {t("submit")}
            </Button>
            {error && (
              <FormMessage>
                Woops! There&apos;s been an error: {error} - Please contact me
                at menno@menno-labs.com
              </FormMessage>
            )}
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
