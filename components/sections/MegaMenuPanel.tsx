"use client";

import { motion } from "framer-motion";
import { MegaMenuShortsPanel } from "@/components/sections/MegaMenuShortsPanel";
import { cn } from "@/lib/utils";

type MegaMenuPanelProps = {
  className?: string;
};

export function MegaMenuPanel({ className }: MegaMenuPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35 }}
      className={cn("min-h-0 flex-1 pb-8", className)}
    >
      <MegaMenuShortsPanel />
    </motion.div>
  );
}
