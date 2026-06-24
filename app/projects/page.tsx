"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ProjectLandscapeCard } from "@/components/cards/ProjectLandscapeCard";
import { MainLayout } from "@/components/layout/MainLayout";
import { BottomBentoRow } from "@/components/sections/BottomBentoRow";
import { ProjectFilterChips } from "@/components/sections/ProjectFilterChips";
import { ProjectsListingSidebar } from "@/components/sections/ProjectsListingSidebar";
import { PROJECT_LISTING_SECTIONS } from "@/lib/content";
import type { ProjectFilterOption } from "@/lib/project-images";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterOption>("All");

  const visibleSections = useMemo(() => {
    if (activeFilter === "All") return PROJECT_LISTING_SECTIONS;
    return PROJECT_LISTING_SECTIONS.filter(
      (section) => section.title === activeFilter
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
            My Projects
          </h1>

          <ProjectFilterChips value={activeFilter} onChange={setActiveFilter} />
        </header>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_410px] xl:gap-10">
          <div className="flex flex-col gap-10">
            {visibleSections.length > 0 ? (
              visibleSections.map((section, sectionIndex) => (
                <section
                  key={section.title}
                  aria-labelledby={`section-${sectionIndex}`}
                  className="flex flex-col gap-4"
                >
                  <h2
                    id={`section-${sectionIndex}`}
                    className="font-mono text-lg leading-[25.2px] text-foreground"
                  >
                    {section.title}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {section.projects.map((project, index) => (
                      <ProjectLandscapeCard
                        key={`${section.title}-${project.title}`}
                        project={project}
                        index={sectionIndex + index}
                      />
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <p className="font-mono text-sm font-light tracking-[0.1em] text-muted-foreground">
                No projects found in this category.
              </p>
            )}
          </div>

          <ProjectsListingSidebar className="xl:sticky xl:top-8 xl:self-start" />
        </div>

        <BottomBentoRow variant="projects" className="min-h-[280px]" />
      </motion.div>
    </MainLayout>
  );
}
