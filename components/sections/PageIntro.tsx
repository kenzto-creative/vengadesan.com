"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type PageIntroProps = {
  title: string;
  description?: string;
  action?: ReactNode;
};

export function PageIntro({ title, description, action }: PageIntroProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap items-end justify-between gap-4"
    >
      <div>
        <h1 className="font-mono text-4xl tracking-[0.05em] md:text-5xl">{title}</h1>
        {description ? (
          <p className="mt-4 max-w-2xl font-mono text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </motion.header>
  );
}
