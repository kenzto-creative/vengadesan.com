"use client";

import { motion } from "framer-motion";
import { MediaLayout } from "@/components/layout/MediaLayout";
import { ImageGridCard } from "@/components/cards/ImageGridCard";
import { ImagePreviewLightbox } from "@/components/sections/ImagePreviewLightbox";
import { MediaListingSidebar } from "@/components/sections/MediaListingSidebar";
import type { ImageListingItem } from "@/lib/content";
import { IMAGE_LISTING } from "@/lib/content";

type ImagePreviewPageClientProps = {
  item: ImageListingItem;
  prevItem: ImageListingItem | null;
  nextItem: ImageListingItem | null;
};

export function ImagePreviewPageClient({
  item,
  prevItem,
  nextItem,
}: ImagePreviewPageClientProps) {
  return (
    <MediaLayout activeTab="images">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8 pb-8 xl:gap-10"
      >
        <header className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
            Images
          </h1>
          <div className="inline-flex h-12 w-full min-w-0 max-w-full items-center justify-between rounded-[24px] border border-white/16 bg-white/10 px-6 font-mono text-base font-light tracking-[0.1em] text-foreground backdrop-blur-[2.5px] sm:w-auto sm:min-w-[280px] sm:max-w-[357px]">
            <span>All</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#000D26]">
              ▾
            </span>
          </div>
        </header>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_410px] xl:gap-10">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {IMAGE_LISTING.slice(0, 6).map((listingItem, index) => (
              <ImageGridCard key={listingItem.id} item={listingItem} index={index} />
            ))}
          </div>
          <MediaListingSidebar className="xl:sticky xl:top-8 xl:self-start" />
        </div>
      </motion.div>

      <ImagePreviewLightbox item={item} prevItem={prevItem} nextItem={nextItem} />
    </MediaLayout>
  );
}
