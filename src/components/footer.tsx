import React from "react";
import { LogoWithText } from "./logo-with-text";

export function Footer() {
  return (
    <div className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8">
      <div className="flex flex-col justify-center items-center py-10 ">
        <LogoWithText
          textClassName="font-bold !text-base tracking-normal text-zinc-700"
          logoClassName="h-3 w-3 font-bold"
        />
      </div>
    </div>
  );
}
