"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { BentoGrid } from "@/components/cards/BentoGrid";
import { MainLayout } from "@/components/layout/MainLayout";

function HomePageContent() {
  const openMegaMenuFromUrl = useSearchParams().get("menu") === "open";

  return (
    <MainLayout
      fitViewport
      collapsibleSidebar
      enableMegaMenu
      openMegaMenuFromUrl={openMegaMenuFromUrl}
    >
      <BentoGrid />
    </MainLayout>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomePageContent />
    </Suspense>
  );
}
