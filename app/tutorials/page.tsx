"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { TutorialLandscapeCard } from "@/components/cards/TutorialLandscapeCard";
import { MainLayout } from "@/components/layout/MainLayout";
import { BottomBentoRow } from "@/components/sections/BottomBentoRow";
import { TutorialFilterChips } from "@/components/sections/TutorialFilterChips";
import { TutorialsListingSidebar } from "@/components/sections/TutorialsListingSidebar";
import { TUTORIAL_LISTING } from "@/lib/content";
import type { TutorialFilterOption } from "@/lib/project-images";

export default function TutorialsPage() {
  const [activeFilter, setActiveFilter] = useState<TutorialFilterOption>("All");

  const visibleTutorials = useMemo(() => {
    if (activeFilter === "All") return TUTORIAL_LISTING;
    return TUTORIAL_LISTING.filter(
      (tutorial) => tutorial.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8 pb-8 xl:gap-10"
      >
        <header className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
            Tutorials
          </h1>

          <TutorialFilterChips value={activeFilter} onChange={setActiveFilter} />
        </header>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_410px] xl:gap-10">
          <div className="flex flex-col gap-6">
            {visibleTutorials.length > 0 ? (
              <div className="flex flex-col gap-3">
                {visibleTutorials.map((tutorial, index) => (
                  <TutorialLandscapeCard
                    key={tutorial.slug}
                    tutorial={tutorial}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <p className="font-mono text-sm font-light tracking-[0.1em] text-muted-foreground">
                No tutorials found in this category.
              </p>
            )}

            <Link
              href="/videos"
              className="flex h-12 items-center justify-center rounded-[36px] bg-card px-6 transition-colors hover:bg-card/90"
            >
              <span className="font-mono text-base font-light tracking-[0.1em] text-foreground dark:text-white">
                View All
              </span>
              <span className="sr-only"> videos</span>
            </Link>
          </div>

          <TutorialsListingSidebar className="xl:sticky xl:top-8 xl:self-start" />
        </div>

        <BottomBentoRow variant="tutorials" className="min-h-[280px]" />
      </motion.div>
    </MainLayout>
  );
}
