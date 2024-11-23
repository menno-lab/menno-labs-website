import React from "react";
import { useTranslations } from "next-intl";
import { Browser } from "@phosphor-icons/react/dist/ssr";
import { PaintBucket } from "@phosphor-icons/react/dist/ssr";
import { Binoculars } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function HeroFeatures() {
  const t = useTranslations("home.features");

  const iconClass = cn("h-4 w-4 text-zinc-700");

  return (
    <div className=" w-full relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20 px-2 md:px-8">
      <Card
        title={t("modernApps.title")}
        description={t("modernApps.description")}
        icon={<Browser className={iconClass} />}
      />
      <Card
        title={t("tailoredDesign.title")}
        description={t("tailoredDesign.description")}
        icon={<PaintBucket className={iconClass} />}
      />
      <Card
        title={t("seoFriendly.title")}
        description={t("seoFriendly.description")}
        icon={<Binoculars className={iconClass} />}
      />
    </div>
  );
}

function Card({ title, description, icon }: any) {
  return (
    <div className="grid-card flex flex-row space-x-4 items-start">
      <div className="icons-container rounded-xl p-2 border-teal-500 border-2 shadow-sm bg-white">
        {icon}
      </div>
      <div className="content-container">
        <h2 className="font-bold text-sm text-zinc-700 tracking-wide mb-3">
          {title}
        </h2>
        <h4 className="text-zinc-700 text-sm leading-6 font-normal">
          {description}
        </h4>
      </div>
    </div>
  );
}
