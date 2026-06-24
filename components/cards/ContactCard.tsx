"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { cn } from "@/lib/utils";

const Globe = dynamic(
  () => import("@/components/Globe").then((m) => m.Globe),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-32 w-32 animate-pulse rounded-full bg-black/20" />
      </div>
    ),
  }
);

type ContactCardProps = {
  href?: string;
  className?: string;
  delay?: number;
};

export function ContactCard({
  href = "/contact",
  className,
  delay = 0.2,
}: ContactCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("relative", className)}
    >
      <Link
        href={href}
        className="group relative flex h-full min-h-[240px] flex-col overflow-hidden rounded-[36px] bg-contact-yellow sm:min-h-[277px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Go to contact section"
      >
        <h3 className="relative z-10 p-6 font-mono text-lg leading-[25.2px] text-white">
          Contact
        </h3>

        <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-6">
          <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full bg-black/10 sm:h-[175px] sm:w-[175px]">
            <Globe className="h-full w-full" />
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-10">
          <ArrowButton visible={hovered} />
        </div>
      </Link>
    </motion.div>
  );
}
