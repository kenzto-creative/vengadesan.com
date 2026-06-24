"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { HOME_PROJECT_TILES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  href?: string;
  className?: string;
  delay?: number;
};

export function ProjectCard({
  href = "/projects",
  className,
  delay = 0,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("relative h-full min-h-0", className)}
    >
      <Link
        href={href}
        className="group relative block h-full min-h-[320px] overflow-hidden rounded-[36px] bg-project-surface sm:min-h-[400px] lg:min-h-0 dark:bg-mine-shaft"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="View my projects"
      >
        <motion.div
          animate={{ scale: hovered ? 1.02 : 1, y: hovered ? -8 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute inset-[-15%_-8%]">
              {HOME_PROJECT_TILES.map((tile) => (
                <div
                  key={tile.alt}
                  className={cn("absolute overflow-hidden", tile.style)}
                >
                  <Image
                    src={tile.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="250px"
                  />
                </div>
              ))}
            </div>
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0) 100%)",
            }}
          />
        </motion.div>

        <h2 className="absolute bottom-8 left-8 z-10 font-mono text-[28px] leading-[33.6px] text-on-dark">
          My Projects
        </h2>

        <div className="absolute bottom-8 right-8 z-10">
          <ArrowButton visible={hovered} />
        </div>
      </Link>
    </motion.div>
  );
}
