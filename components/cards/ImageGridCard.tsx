"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Images } from "lucide-react";
import type { ImageListingItem } from "@/lib/content";
import { cn } from "@/lib/utils";

type ImageGridCardProps = {
  item: ImageListingItem;
  index?: number;
  className?: string;
};

export function ImageGridCard({ item, index = 0, className }: ImageGridCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={className}
    >
      <Link
        href={`/images/${item.id}`}
        className="group relative block w-full overflow-hidden rounded-[36px] bg-card text-left"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={`View ${item.title}`}
      >
        <div className="relative aspect-[327/293] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 328px"
          />
          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
              hovered ? "opacity-100" : "opacity-0"
            )}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              <Images className="h-3.5 w-3.5 text-[#121212]" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
