"use client";

import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { BottomBentoRow } from "@/components/sections/BottomBentoRow";
import { StatsCard } from "@/components/cards/StatsCard";
import { StackCard } from "@/components/cards/StackCard";
import { SOFT_SKILL_CATEGORIES, TOOL_SKILL_CATEGORIES } from "@/lib/content";
import { cn } from "@/lib/utils";

function SkillCategoryBlock({
  category,
  index,
}: {
  category: (typeof TOOL_SKILL_CATEGORIES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className="flex flex-col gap-6"
    >
      <h3 className="font-mono text-sm tracking-[0.114em] text-white/30">
        {category.title}
      </h3>
      <div className="flex flex-col gap-6">
        {category.skills.map((skill) => (
          <div key={skill.name} className="flex items-start gap-3">
            <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-white/10">
              <span className="font-mono text-sm text-white">
                {skill.initial ?? skill.name.charAt(0)}
              </span>
            </div>
            <div className="min-w-0 pt-1">
              <p className="font-mono text-base tracking-[0.1em] text-white">{skill.name}</p>
              <p className="mt-1 font-mono text-[13px] leading-[19.2px] tracking-[0.12em] text-[#999999]">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function StackPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-6 pb-8 xl:gap-8"
      >
        <header>
          <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
            My Tech Skills
          </h1>
        </header>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_410px] xl:gap-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <section
              aria-labelledby="tool-skills-heading"
              className="rounded-[36px] bg-card p-6 md:p-8"
            >
              <h2
                id="tool-skills-heading"
                className="mb-8 font-mono text-xl leading-[38.4px] text-white"
              >
                Tool Skills
              </h2>
              <div className="flex flex-col gap-10">
                {TOOL_SKILL_CATEGORIES.map((category, index) => (
                  <SkillCategoryBlock key={category.title} category={category} index={index} />
                ))}
              </div>
            </section>

            <section
              aria-labelledby="soft-skills-heading"
              className="rounded-[36px] bg-card p-6 md:p-8"
            >
              <h2
                id="soft-skills-heading"
                className="mb-8 font-mono text-xl leading-[38.4px] text-white"
              >
                Soft Skills
              </h2>
              <div className="flex flex-col gap-10">
                {SOFT_SKILL_CATEGORIES.map((category, index) => (
                  <SkillCategoryBlock key={category.title} category={category} index={index} />
                ))}
              </div>
            </section>
          </div>

          <aside className="flex flex-col gap-3">
            <StatsCard className="min-h-[300px] rounded-[36px]" />
            <StackCard className={cn("min-h-[300px] rounded-[36px]")} />
          </aside>
        </div>

        <BottomBentoRow variant="stack" />
      </motion.div>
    </MainLayout>
  );
}
