"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { cn } from "@/lib/utils";

type ShowcaseCardProps = {
  href?: string;
  className?: string;
  delay?: number;
};

export function ShowcaseCard({
  href = "/projects",
  className,
  delay = 0.15,
}: ShowcaseCardProps) {
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
        className="group relative block h-full min-h-[360px] overflow-hidden rounded-[36px] bg-card sm:min-h-[420px] lg:min-h-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="View Master in Design showcase"
      >
        <motion.div
          animate={{ scale: hovered ? 1.02 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-3 overflow-hidden rounded-t-[24px]"
        >
          <div className="relative h-full min-h-[200px] w-full lg:min-h-0">
            <Image
              src="/images/showcase-76bdb7.png"
              alt="Master in Design project preview"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 750px"
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
        </motion.div>

        <h2 className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center font-mono text-[28px] leading-[33.6px] text-white">
          Master in Design
        </h2>

        <div className="absolute bottom-8 right-8 z-10">
          <ArrowButton visible={hovered} />
        </div>
      </Link>
    </motion.div>
  );
}
