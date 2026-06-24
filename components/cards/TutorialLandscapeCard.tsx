"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Play } from "lucide-react";
import { ArrowButton } from "@/components/ui/arrow-button";
import type { TutorialListingItem } from "@/lib/content";
import { cn } from "@/lib/utils";

type TutorialLandscapeCardProps = {
  tutorial: TutorialListingItem;
  index?: number;
  className?: string;
};

export function TutorialLandscapeCard({
  tutorial,
  index = 0,
  className,
}: TutorialLandscapeCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={className}
    >
      <Link
        href={`/tutorials/${tutorial.slug}`}
        className="group relative flex flex-col gap-3 overflow-hidden rounded-[36px] bg-card p-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative aspect-[1091/369] overflow-hidden rounded-[24px] bg-mine-shaft">
          <Image
            src={tutorial.thumbnail}
            alt={tutorial.listingTitle}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 1280px) 100vw, 1091px"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/5">
            <span className="flex h-12 w-[68px] items-center justify-center rounded-lg bg-[#FF0033] shadow-lg transition-transform group-hover:scale-105">
              <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-3 pb-2">
          <h2 className="font-mono text-lg leading-[25.2px] text-foreground dark:text-white">
            {tutorial.listingTitle}
          </h2>
          <p className="font-mono text-xs font-light tracking-[0.1em] text-[#999999]">
            {tutorial.date}
          </p>
          <p className="font-mono text-xs font-light tracking-[0.1em] text-[#999999]">
            {tutorial.duration}
          </p>
        </div>

        <div className="absolute bottom-6 right-6">
          <ArrowButton visible={hovered} />
        </div>
      </Link>
    </motion.article>
  );
}
