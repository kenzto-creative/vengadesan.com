"use client";

import { ContactCard } from "@/components/cards/ContactCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ShowcaseCard } from "@/components/cards/ShowcaseCard";
import { StackCard } from "@/components/cards/StackCard";
import { StatsCard } from "@/components/cards/StatsCard";

export function MegaMenuBentoGrid() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid min-h-0 grid-cols-1 gap-3 lg:grid-cols-[minmax(0,750fr)_minmax(0,751fr)] lg:gap-[14px]">
        <ProjectCard className="min-h-[320px] lg:min-h-[473px]" />
        <div className="flex min-h-0 flex-col gap-3 lg:grid lg:min-h-[750px] lg:grid-rows-[273fr_477fr] lg:gap-3">
          <StackCard className="min-h-[220px] lg:min-h-0" />
          <ShowcaseCard className="min-h-[360px] lg:min-h-0" />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-[1.22fr_1fr]">
        <ContactCard className="min-h-[277px]" />
        <StatsCard className="min-h-[277px] lg:max-w-none" />
      </div>
    </div>
  );
}
