/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { GridPattern } from "./grid-pattern";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  pattern: {
    y: number;
    squares: number[][];
  };
}

export function Service({ title, description, icon, pattern }: ServiceProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <li
      onMouseMove={onMouseMove}
      className="group rounded-2xl border border-gray-200 p-8 relative"
    >
      <ServicePattern {...pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="relative z-10">
        <span>{icon}</span>
        <h3 className="mt-6 font-semibold text-gray-900 tracking-wide leading-6 antialiased">
          {title}
        </h3>
        <p className="mt-2 text-gray-700 tracking-wide leading-6 antialiased">
          {description}
        </p>
      </div>
    </li>
  );
}

function ServicePattern({ mouseX, mouseY, ...gridProps }: any) {
  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 "
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 "
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 "
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}
