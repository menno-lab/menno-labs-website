import { Container } from "@/components/container";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { useTranslations } from "next-intl";
import React from "react";
import { ContactForm } from "./contact-form";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Contact | Menno Labs | Software Developer for Hire",
  description:
    "Contact Menno Jager, a software developer that specializes in building web applications, APIs, and more.",
};

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <Container className="min-h-72 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 max-w-[83rem] mx-auto px-4 ">
        <div className="flex flex-col gap-4">
          <EnvelopeSimple className="w-8 h-8" />
          <h1 className="text-left text-xl md:text-3xl lg:text-5xl font-bold">
            {t("title")}
          </h1>
          <p className="md:text-left text-center max-w-lg text-base">
            {t("description")}
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <Toaster />
    </Container>
  );
}
