"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { MEDIA_SHORTS, TOTAL_PROJECT_COUNT } from "@/lib/content";
import { cn } from "@/lib/utils";

type ProjectsListingSidebarProps = {
  className?: string;
};

export function ProjectsListingSidebar({ className }: ProjectsListingSidebarProps) {
  return (
    <aside className={cn("flex flex-col gap-6", className)}>
      <TotalProjectsStat />

      <section aria-labelledby="shorts-sidebar-heading">
        <div className="mb-4 flex items-end justify-between gap-4 px-3">
          <h2
            id="shorts-sidebar-heading"
            className="font-mono text-lg leading-[25.2px] text-foreground"
          >
            My Shorts
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {MEDIA_SHORTS.slice(0, 2).map((item, index) => (
            <ShortPortraitCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <Link
          href="/videos"
          className="group mt-3 flex h-12 items-center justify-center rounded-[36px] bg-card px-6 transition-colors hover:bg-card/90"
        >
          <span className="font-mono text-base font-light tracking-[0.1em] text-foreground">
            View All
          </span>
          <span className="sr-only"> shorts</span>
        </Link>
      </section>
    </aside>
  );
}

function TotalProjectsStat() {
  return (
    <div className="relative overflow-hidden rounded-[36px] bg-mine-shaft px-6 py-8">
      <div className="absolute left-3 top-3 h-[99px] w-[95px] rounded-[36px] bg-header" />
      <div className="relative flex items-center justify-end gap-4">
        <p className="max-w-[120px] whitespace-pre-line text-right font-mono text-lg leading-[26.4px] tracking-[0.18em] text-foreground">
          Total{"\n"}Projects
        </p>
        <p className="font-mono text-[62px] font-bold leading-[38.4px] tracking-[0.05em] text-foreground">
          {TOTAL_PROJECT_COUNT}
        </p>
      </div>
    </div>
  );
}

function ShortPortraitCard({
  item,
  index,
}: {
  item: (typeof MEDIA_SHORTS)[number];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const href = item.type === "video" ? "/videos" : "/images";

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.05 }}
    >
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-[36px] bg-card p-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative aspect-[386/220] overflow-hidden rounded-[24px]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="410px"
          />
        </div>
        <div className="px-3 pb-1 pt-4">
          <h3 className="font-mono text-lg leading-[25.2px] text-foreground dark:text-white">
            {item.title}
          </h3>
        </div>
        <div className="absolute bottom-6 right-6">
          <ArrowButton visible={hovered} />
        </div>
      </Link>
    </motion.article>
  );
}
