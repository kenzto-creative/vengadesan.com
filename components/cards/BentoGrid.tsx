import { ContactCard } from "@/components/cards/ContactCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ShowcaseCard } from "@/components/cards/ShowcaseCard";
import { StackCard } from "@/components/cards/StackCard";
import { StatsCard } from "@/components/cards/StatsCard";

export function BentoGrid() {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-[14px]">
      <div className="flex min-h-0 flex-col gap-3 lg:grid lg:min-h-0 lg:grid-rows-[1.71fr_1fr] lg:gap-3">
        <ProjectCard className="min-h-[280px] lg:min-h-0" />
        <div className="grid min-h-0 grid-cols-1 gap-3 sm:grid-cols-[1fr_280px] lg:min-h-0 lg:gap-3">
          <ContactCard className="min-h-[220px] lg:min-h-0" />
          <StatsCard className="min-h-[220px] lg:min-h-0" />
        </div>
      </div>

      <div className="flex min-h-0 flex-col gap-3 lg:grid lg:min-h-0 lg:grid-rows-[1fr_1.75fr] lg:gap-3">
        <StackCard className="min-h-[200px] lg:min-h-0" />
        <ShowcaseCard className="min-h-[280px] lg:min-h-0" />
      </div>
    </div>
  );
}
