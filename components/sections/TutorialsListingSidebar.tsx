"use client";

import { motion } from "framer-motion";
import { StatsCard } from "@/components/cards/StatsCard";
import { StackCard } from "@/components/cards/StackCard";
import { cn } from "@/lib/utils";

type TutorialsListingSidebarProps = {
  className?: string;
};

export function TutorialsListingSidebar({ className }: TutorialsListingSidebarProps) {
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
