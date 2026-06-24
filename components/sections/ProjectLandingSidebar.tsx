"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowButton } from "@/components/ui/arrow-button";
import type { RelatedProjectCard } from "@/lib/content";
import { PROJECT_IMAGES } from "@/lib/project-images";
import { cn } from "@/lib/utils";

type ProjectLandingSidebarProps = {
  relatedProjects: RelatedProjectCard[];
  className?: string;
};

export function ProjectLandingSidebar({
  relatedProjects,
  className,
}: ProjectLandingSidebarProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className={cn("flex flex-col gap-3", className)}
      aria-labelledby="other-projects-heading"
    >
      <h2
        id="other-projects-heading"
        className="px-3 font-mono text-lg leading-[25.2px] text-foreground dark:text-white"
      >
        Other Projects
      </h2>

      {relatedProjects.map((item, index) => (
        <RelatedProjectPortraitCard key={`${item.title}-${index}`} project={item} index={index} />
      ))}

      <Link
        href="/projects"
        className="flex h-12 items-center justify-center rounded-[36px] bg-card px-6 transition-colors hover:bg-card/90"
      >
        <span className="font-mono text-base font-light tracking-[0.1em] text-foreground dark:text-white">
          View All
        </span>
      </Link>

      <MasterDesignCard />
    </motion.aside>
  );
}

function RelatedProjectPortraitCard({
  project,
  index,
}: {
  project: RelatedProjectCard;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const href = project.slug ? `/projects/${project.slug}` : "/projects";

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
        <div className="relative aspect-square overflow-hidden rounded-[24px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="410px"
          />
        </div>
        <div className="flex flex-col gap-2 px-3 pb-1 pt-4">
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
        <div className="absolute bottom-6 right-6">
          <ArrowButton visible={hovered} />
        </div>
      </Link>
    </motion.article>
  );
}

function MasterDesignCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/projects/xzero"
      className="group relative mt-4 block overflow-hidden rounded-[36px] bg-card p-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[386/247] overflow-hidden rounded-[24px]">
        <Image
          src={PROJECT_IMAGES.masterDesign}
          alt="Master in Design preview"
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="410px"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.1) 69%, rgba(0, 0, 0, 0) 100%)",
          }}
          aria-hidden
        />
      </div>
      <h3 className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 whitespace-pre-line text-center font-mono text-[28px] leading-[33.6px] text-on-dark">
        Master{"\n"}in Design
      </h3>
      <div className="absolute bottom-6 right-6">
        <ArrowButton visible={hovered} />
      </div>
    </Link>
  );
}
