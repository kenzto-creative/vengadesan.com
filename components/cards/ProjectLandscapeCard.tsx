"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowButton } from "@/components/ui/arrow-button";
import type { ListingProject } from "@/lib/content";

type ProjectLandscapeCardProps = {
  project: ListingProject;
  index?: number;
  className?: string;
};

export function ProjectLandscapeCard({
  project,
  index = 0,
  className,
}: ProjectLandscapeCardProps) {
  const [hovered, setHovered] = useState(false);
  const href = project.slug ? `/projects/${project.slug}` : "/projects";

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      className={className}
    >
      <Link
        href={href}
        className="group relative flex min-h-[144px] flex-wrap items-end gap-3 rounded-[36px] border border-foreground/10 bg-card p-3 sm:flex-nowrap dark:border-white/[0.21]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-[24px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="120px"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 py-1">
          <h3 className="font-mono text-lg leading-[25.2px] text-foreground dark:text-white">
            {project.title}
          </h3>
          <p className="font-mono text-xs font-light tracking-[0.1em] text-muted-foreground">
            {project.date}
          </p>
          <p className="font-mono text-xs font-light tracking-[0.1em] text-muted-foreground">
            {project.category}
          </p>
        </div>

        <div className="absolute bottom-3 right-3 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2">
          <ArrowButton visible={hovered} />
        </div>
      </Link>
    </motion.article>
  );
}
