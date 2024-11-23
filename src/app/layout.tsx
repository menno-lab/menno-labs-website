import type { Metadata } from "next";
import "../globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { CSPostHogProvider } from "@/providers/posthog";
import { Suspense } from "react";
import { PostHogPageView } from "@/providers/posthog-pageview";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Menno Labs | Software Developer for Hire",
  description:
    "Menno Jager is a software developer that specializes in building web applications, APIs, and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <CSPostHogProvider>
        <body className={cn("bg-white antialiased h-full w-full")}>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
          </NextIntlClientProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <PostHogPageView />
          </Suspense>
        </body>
      </CSPostHogProvider>
    </html>
  );
}
