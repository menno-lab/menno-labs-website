import { LogoMain } from "@/icons/logo";
import clsx from "clsx";
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
      <LogoMain className={clsx(logoClassName)} />
      <Link
        href="/"
        className={clsx("font-bold text-2xl tracking-wide", textClassName)}
      >
        {t("mennoLabs")}
      </Link>
    </div>
  );
}
