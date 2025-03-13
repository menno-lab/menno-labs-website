import React from "react";
import { useTranslations } from "next-intl";
import { servicesMap } from "@/constants/services";
import { Service } from "./service";

export function Services() {
  const t = useTranslations("home.services");
  const keys = [
    "development",
    "design",
    "deployment",
    "maintenance",
    "fullStack",
    "everythingElse",
  ] as const;

  return (
    <div className="max-w-7xl mx-auto antialiased py-10 md:py-20">
      <div className="mx-auto max-w-2xl sm:text-center pb-10">
        <h2 className="text-3xl font-medium tracking-tight text-gray-900 dark:text-white">
          {t("title")}
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          {t("description")}
        </p>
      </div>
      <ul
        role="list"
        className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3 dark:bg-slate-300 dark:p-4 dark:rounded-lg"
      >
        {keys.map((key) => {
          const { icon, pattern } = servicesMap[key];
          return (
            <Service
              key={key}
              title={t(`services.${key}.title`)}
              description={t(`services.${key}.description`)}
              icon={icon}
              pattern={pattern}
            />
          );
        })}
      </ul>
    </div>
  );
}
