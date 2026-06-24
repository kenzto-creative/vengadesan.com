"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ArrowButtonProps = {
  className?: string;
  visible?: boolean;
};

export function ArrowButton({ className, visible = true }: ArrowButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-[24px] bg-white/10 backdrop-blur-[2.5px]",
        className
      )}
      aria-hidden
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
        <ArrowUpRight className="h-5 w-5 text-[#121212]" strokeWidth={2} />
      </div>
    </motion.div>
  );
}
