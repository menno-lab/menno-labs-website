import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export function CallToAction() {
  const t = useTranslations("home.cta");
  return (
    <div className="relative rounded-2xl bg-slate-800 my-20 text-gray-100 max-w-6xl xl:mx-auto min-h-96 h-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 top-0 bg-grid-slate-700/50"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
        }}
      ></div>
      <div className="lg:grid lg:grid-cols-1 gap-10 p-2 md:p-8 relative z-20">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-bold my-4  text-center">
            {t("title")}
          </h2>
          <p className="my-4 text-base text-gray-300 md:text-lg tracking-wide font-light  text-center max-w-lg mx-auto">
            {t("description")}
          </p>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-white ring-1 ring-slate-100 hover:bg-white/25 hover:ring-slate-900/15 mx-auto"
            >
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
