import { ContactCard } from "@/components/cards/ContactCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { ShowcaseCard } from "@/components/cards/ShowcaseCard";
import { StackCard } from "@/components/cards/StackCard";
import { StatsCard } from "@/components/cards/StatsCard";

export function BentoGrid() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-[14px]">
      <div className="flex flex-col gap-3 lg:gap-3">
        <ProjectCard />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_280px] lg:gap-3">
          <ContactCard />
          <StatsCard />
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:gap-3">
        <StackCard />
        <ShowcaseCard />
      </div>
    </div>
  );
}
