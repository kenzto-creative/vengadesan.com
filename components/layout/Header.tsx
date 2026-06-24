"use client";

import { motion } from "framer-motion";
import { PanelRight, Box } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useClock } from "@/hooks/useClock";
import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: string;
  onToggleSidebar?: () => void;
};

export function Header({ className, onToggleSidebar }: HeaderProps) {
  const { time, date } = useClock();

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-40 flex items-center justify-between rounded-[48px] bg-header px-[25px] py-3 backdrop-blur-md",
        className
      )}
    >
      <button
        type="button"
        onClick={onToggleSidebar}
        className="hidden h-6 w-6 text-foreground/80 transition-opacity hover:opacity-100 lg:flex"
        aria-label="Toggle sidebar"
      >
        <PanelRight className="h-6 w-6" />
      </button>
      <div className="h-6 w-6 lg:hidden" aria-hidden />

      <div className="flex items-center gap-3 font-mono text-base text-foreground">
        <time dateTime={time}>{time}</time>
        <span className="text-foreground/60" aria-hidden>
          ·
        </span>
        <time>{date}</time>
      </div>

      <div className="flex items-center gap-[38px]">
        <ThemeToggle />
        <button
          type="button"
          className="relative flex h-12 w-12 items-center justify-center rounded-[36px] text-foreground transition-colors hover:bg-white/10"
          aria-label="3D view"
        >
          <span className="absolute inset-0 rounded-[36px] border border-white/30" />
          <Box className="h-6 w-6" strokeWidth={1.5} />
        </button>
      </div>
    </motion.header>
  );
}
