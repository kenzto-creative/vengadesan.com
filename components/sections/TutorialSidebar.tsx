"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { TUTORIALS } from "@/lib/content";
import { cn } from "@/lib/utils";

type TutorialSidebarProps = {
  currentSlug: string;
  className?: string;
};

export function TutorialSidebar({ currentSlug, className }: TutorialSidebarProps) {
  const others = TUTORIALS.filter((tutorial) => tutorial.slug !== currentSlug).slice(0, 2);

  return (
    <motion.aside
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className={cn("flex flex-col gap-3", className)}
      aria-labelledby="other-tutorials-heading"
    >
      <h2 id="other-tutorials-heading" className="font-mono text-lg tracking-[0.1em]">
        Other Tutorials
      </h2>

      {others.map((tutorial) => (
        <Link
          key={tutorial.slug}
          href={`/tutorials/${tutorial.slug}`}
          className="group overflow-hidden rounded-[36px] bg-card p-4 transition-colors hover:bg-card/80"
        >
          <div
            className={cn(
              "relative mb-4 flex h-28 items-center justify-center overflow-hidden rounded-[10px] bg-gradient-to-br",
              tutorial.gradient
            )}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
              <Play className="h-5 w-5 fill-white text-white" />
            </span>
          </div>
          <h3 className="font-mono text-sm leading-snug">{tutorial.title}</h3>
          <div className="mt-2 flex gap-4 font-mono text-xs text-muted-foreground">
            <span>{tutorial.date}</span>
            <span>{tutorial.duration}</span>
          </div>
        </Link>
      ))}

      <Link
        href="/tutorials"
        className="flex items-center justify-center gap-3 rounded-[36px] bg-card px-4 py-3 font-mono text-sm font-light tracking-[0.1em] transition-colors hover:bg-card/80"
      >
        View All
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#121212]">
          →
        </span>
      </Link>
    </motion.aside>
  );
}
