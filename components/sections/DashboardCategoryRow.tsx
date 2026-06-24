"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { DASHBOARD_CATEGORIES } from "@/lib/content";
import { cn } from "@/lib/utils";

type DashboardCategoryRowProps = {
  className?: string;
};

export function DashboardCategoryRow({ className }: DashboardCategoryRowProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4", className)}>
      {DASHBOARD_CATEGORIES.map((item, index) => (
        <motion.article
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className="flex min-h-[160px] flex-col justify-between rounded-[36px] bg-stack-blue px-8 py-10 sm:min-h-[178px]"
        >
          <p className="font-mono text-[36px] font-bold leading-[38.4px] tracking-[0.089em] text-white">
            {item.value}
          </p>
          <div className="flex items-center gap-6">
            <Calendar className="h-8 w-8 shrink-0 text-white" strokeWidth={1.5} />
            <p className="font-mono text-lg leading-[38.4px] tracking-[0.178em] text-white">
              {item.label}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
