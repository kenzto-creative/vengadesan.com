"use client";

import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { DashboardCategoryRow } from "@/components/sections/DashboardCategoryRow";
import { DashboardTotalGrid } from "@/components/sections/DashboardTotalGrid";

export default function DashboardPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8 pb-8 md:gap-10"
      >
        <header>
          <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
            Dashboard
          </h1>
        </header>

        <DashboardCategoryRow />

        <section aria-labelledby="total-heading" className="flex flex-col gap-6">
          <h2
            id="total-heading"
            className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]"
          >
            Total
          </h2>
          <DashboardTotalGrid />
        </section>
      </motion.div>
    </MainLayout>
  );
}
