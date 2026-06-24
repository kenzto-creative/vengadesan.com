"use client";

import { BentoGrid } from "@/components/cards/BentoGrid";
import { MainLayout } from "@/components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout fitViewport collapsibleSidebar>
      <BentoGrid />
    </MainLayout>
  );
}
