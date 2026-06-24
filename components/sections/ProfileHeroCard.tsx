"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PROFILE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ProfileHeroCardProps = {
  className?: string;
  flipEnabled?: boolean;
};

export function ProfileHeroCard({
  className,
  flipEnabled = true,
}: ProfileHeroCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "flex flex-col items-center rounded-[45px] bg-mine-shaft px-4 pb-8 pt-4 dark:bg-card",
        className
      )}
    >
      <div className="relative aspect-square w-full max-w-[554px] [perspective:1200px]">
        {flipEnabled ? (
          <button
            type="button"
            aria-label={flipped ? "Show profile portrait" : "Flip profile card"}
            aria-pressed={flipped}
            onClick={() => setFlipped((value) => !value)}
            className="group relative h-full w-full rounded-[45px] [transform-style:preserve-3d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stack-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <motion.div
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
              className="relative h-full w-full [transform-style:preserve-3d]"
            >
              <HeroPortraitFace />
              <HeroPortraitBack />
            </motion.div>
          </button>
        ) : (
          <div className="relative h-full w-full overflow-hidden rounded-[45px]">
            <HeroPortraitFace />
          </div>
        )}
      </div>

      <div className="mt-6 flex w-full max-w-[377px] flex-col items-center gap-[22px] text-center">
        <h2 className="w-full font-mono text-[32px] leading-[38.4px] tracking-[0.08em] text-foreground sm:text-[40px]">
          {PROFILE.fullName}
        </h2>
        <p className="font-mono text-xl leading-[19.6px] text-muted-foreground">
          {PROFILE.headline.toUpperCase()}
        </p>
      </div>
    </motion.section>
  );
}

function HeroPortraitFace() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[45px] [backface-visibility:hidden]">
      <Image
        src={PROFILE.heroImage}
        alt={`${PROFILE.fullName} portrait`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 554px"
        priority
      />
      <span className="pointer-events-none absolute inset-0 rounded-[45px] ring-1 ring-inset ring-white/10" />
    </div>
  );
}

function HeroPortraitBack() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[45px] [backface-visibility:hidden] [transform:rotateY(180deg)]">
      <Image
        src={PROFILE.heroFlipPattern}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 554px"
        aria-hidden
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full border-[15px] border-[#1E1E1E] bg-[#1E1E1E]">
          <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full">
            <Image
              src={PROFILE.heroImage}
              alt={`${PROFILE.fullName} portrait`}
              fill
              className="object-cover"
              sizes="100px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
