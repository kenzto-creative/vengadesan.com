"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type StackItem = {
  title: string;
  subtitle?: string;
  active?: boolean;
};

type ExperienceStackCardProps = {
  title: string;
  items: StackItem[];
  className?: string;
  delay?: number;
};

export function ExperienceStackCard({
  title,
  items,
  className,
  delay = 0,
}: ExperienceStackCardProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative overflow-hidden rounded-[36px] bg-card px-6 py-6 md:px-8 md:py-8",
        className
      )}
    >
      <h2 className="mb-6 font-mono text-lg tracking-[0.1em] text-foreground md:mb-8">
        {title}
      </h2>

      <div className="flex flex-col gap-4 md:gap-5">
        {items.map((item) => (
          <div key={`${title}-${item.title}`} className="flex items-start gap-3">
            <span
              className={cn(
                "mt-2 h-[5px] w-[5px] shrink-0 rounded-full",
                item.active ? "bg-white" : "bg-muted-foreground"
              )}
              aria-hidden
            />
            <div className="min-w-0">
              <p
                className={cn(
                  "font-mono text-base leading-[19.2px] tracking-[0.1em]",
                  item.active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.title}
              </p>
              {item.subtitle ? (
                <p className="mt-1 font-mono text-sm leading-relaxed text-muted-foreground">
                  {item.subtitle}
                </p>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
