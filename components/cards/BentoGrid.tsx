"use client";

import { ContactCard } from "@/components/cards/ContactCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ShowcaseCard } from "@/components/cards/ShowcaseCard";
import { StackCard } from "@/components/cards/StackCard";
import { StatsCard } from "@/components/cards/StatsCard";
import { useNavigation } from "@/components/layout/NavigationContext";
import { cn } from "@/lib/utils";

export function BentoGrid() {
  const { sidebarCollapsible, desktopSidebarOpen } = useNavigation();
  const compactSidebar = sidebarCollapsible && !desktopSidebarOpen;

  return (
    <div
      className={cn(
        "grid min-h-0 flex-1 grid-cols-1 gap-3 lg:gap-[14px]",
        compactSidebar
          ? "lg:grid-cols-[minmax(0,844fr)_minmax(0,845fr)]"
          : "lg:grid-cols-[minmax(0,750fr)_minmax(0,751fr)]"
      )}
    >
      <div className="flex min-h-0 flex-col gap-3 lg:grid lg:min-h-0 lg:grid-rows-[473fr_277fr] lg:gap-3">
        <ProjectCard className="min-h-[280px] lg:min-h-0" />
        <div className="grid min-h-0 grid-cols-1 gap-3 sm:grid-cols-[1fr_280px] lg:min-h-0 lg:gap-3">
          <ContactCard className="min-h-[220px] lg:min-h-0" />
          <StatsCard className="min-h-[220px] w-full lg:min-h-0 lg:max-w-none" />
        </div>
      </div>

      <div className="flex min-h-0 flex-col gap-3 lg:grid lg:min-h-0 lg:grid-rows-[273fr_477fr] lg:gap-3">
        <StackCard className="min-h-[200px] lg:min-h-0" />
        <ShowcaseCard className="min-h-[280px] lg:min-h-0" />
      </div>
    </div>
  );
}
