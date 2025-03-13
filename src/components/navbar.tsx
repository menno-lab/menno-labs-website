import React from "react";
import { LogoWithText } from "./logo-with-text";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="flex flex-row items-center justify-between py-8 max-w-[83rem] mx-auto px-4">
      <LogoWithText
        textClassName="font-bold text-lg tracking-normal text-zinc-700"
        logoClassName="h-4 w-4 font-bold dark:fill-white"
      />
      <Link
        href="/contact"
        className="block relative px-0.5 py-1 text-zinc-600 text-sm rounded-full font-semibold bg-gradient-to-br from-[rgba(5,45,255,.6)] to-[rgba(62,243,255,.6)] hover:shadow-md  hover:shadow-blue-500/30 transition duration-200"
      >
        <span className="w-24 h-8 md:h-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-full mx-0.5 dark:text-zinc-100">
          Contact
        </span>
      </Link>
    </div>
  );
}
