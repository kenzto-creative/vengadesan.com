"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import type { VideoListingItem } from "@/lib/content";
import { cn } from "@/lib/utils";

type VideoGridCardProps = {
  item: VideoListingItem;
  index?: number;
  className?: string;
};

export function VideoGridCard({ item, index = 0, className }: VideoGridCardProps) {
  const isShort = item.format === "short";

  const content = (
    <>
      <div
        className={cn(
          "relative overflow-hidden",
          isShort ? "aspect-[343/612]" : "aspect-[510/286]"
        )}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={
            isShort
              ? "(max-width: 768px) 100vw, 343px"
              : "(max-width: 768px) 100vw, 510px"
          }
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/5">
          <span className="flex h-12 w-[68px] items-center justify-center rounded-lg bg-[#FF0033] shadow-lg transition-transform group-hover:scale-105">
            <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
          </span>
        </div>
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={className}
    >
      <Link
        href={item.href ?? `/videos/${item.id}`}
        className="group relative block overflow-hidden rounded-[36px] bg-card"
        aria-label={`Play ${item.title}`}
      >
        {content}
      </Link>
    </motion.article>
  );
}
