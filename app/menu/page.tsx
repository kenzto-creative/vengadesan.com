"use client";

import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { MegaMenuBentoGrid } from "@/components/sections/MegaMenuBentoGrid";
import { MegaMenuShortsPanel } from "@/components/sections/MegaMenuShortsPanel";

export default function MegaMenuPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3 pb-8"
      >
        <MegaMenuBentoGrid />
        <MegaMenuShortsPanel />
      </motion.div>
    </MainLayout>
  );
}
