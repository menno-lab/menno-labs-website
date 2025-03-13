import { LogoMain } from "@/icons/logo";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

interface LogoWithTextProps {
  textClassName?: string;
  logoClassName?: string;
}

export function LogoWithText({
  textClassName,
  logoClassName,
}: LogoWithTextProps) {
  const t = useTranslations("home");
  return (
    <div className="flex flex-row justify-between items-center space-x-1">
      <LogoMain className={cn(logoClassName)} />
      <Link
        href="/"
        className={cn(
          "font-bold text-2xl tracking-wide dark:text-zinc-100",
          textClassName
        )}
      >
        {t("mennoLabs")}
      </Link>
    </div>
  );
}
