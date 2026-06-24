"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { AVATARS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type StatsCardProps = {
  className?: string;
  delay?: number;
};

export function StatsCard({ className, delay = 0.25 }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "relative flex h-full min-h-[240px] flex-col items-center justify-center overflow-hidden rounded-[36px] bg-card px-6 py-6 sm:min-h-[277px] lg:min-h-0 lg:py-4",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-0.5 lg:mb-3" aria-label="5 star rating">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-[18px] w-[18px] fill-white text-white"
            strokeWidth={0}
          />
        ))}
      </div>

      <div className="mb-4 text-center lg:mb-3">
        <p className="font-mono text-[28px] leading-[33.6px] text-white lg:text-2xl">100%</p>
        <p className="mt-1 font-mono text-xs font-light tracking-[0.1em] text-white">
          Happy Companies
        </p>
      </div>

      <div className="relative flex h-12 w-[124px] items-center justify-center">
        {AVATARS.map((avatar, index) => (
          <div
            key={avatar.src}
            className="absolute rounded-full p-1"
            style={{
              backgroundColor: avatar.ring,
              left: `${index * 38}px`,
              zIndex: AVATARS.length - index,
            }}
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-full">
              <Image
                src={avatar.src}
                alt={`Client avatar ${index + 1}`}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
