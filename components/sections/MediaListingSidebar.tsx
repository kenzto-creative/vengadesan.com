"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { StatsCard } from "@/components/cards/StatsCard";
import { StackCard } from "@/components/cards/StackCard";
import { cn } from "@/lib/utils";

type MediaListingSidebarProps = {
  className?: string;
};

export function MediaListingSidebar({ className }: MediaListingSidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className={cn("flex flex-col gap-3", className)}
    >
      <StatsCard className="min-h-[300px] lg:max-w-none" />
      <StackCard className="min-h-[300px]" />
    </motion.aside>
  );
}

type LoadMoreButtonProps = {
  onClick: () => void;
  visible: boolean;
  className?: string;
};

export function LoadMoreButton({ onClick, visible, className }: LoadMoreButtonProps) {
  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "mx-auto flex h-12 w-full max-w-[360px] items-center justify-between rounded-[36px] bg-[#171717] px-3 font-mono text-base font-light tracking-[0.1em] text-white transition-colors hover:bg-[#222222]",
        className
      )}
    >
      <span className="flex-1 text-center">Load More</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121212]">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </button>
  );
}
