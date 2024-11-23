import React from "react";

import { LogoMain } from "@/icons/logo";
import { HeroFeatures } from "./hero-features";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <div className="relative pb-10 flex flex-col items-center justify-center  md:px-8 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center mt-10">
        <LogoMain className="h-20 w-10 mb-4 text-zinc-500" />
        <h1 className="text-4xl md:text-7xl font-bold mb-14 relative text-center text-zinc-700">
          {t("menno")}{" "}
          <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-pink-500 z-10">
            {t("labs")}
          </span>
        </h1>
        <h2 className="relative font-regular text-base text-zinc-500 tracking-wide mb-20 text-center max-w-3xl mx-auto antialiased">
          <span className="font-semibold text-zinc-700"> {t("hi")} </span>
          {t("description")}
        </h2>
      </div>
      <HeroFeatures />
    </div>
  );
}
