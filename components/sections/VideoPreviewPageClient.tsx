"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { VideoGridCard } from "@/components/cards/VideoGridCard";
import { MediaLayout } from "@/components/layout/MediaLayout";
import { MediaListingSidebar } from "@/components/sections/MediaListingSidebar";
import { VideoListingHeader } from "@/components/sections/VideoListingHeader";
import { VideoPreviewLightbox } from "@/components/sections/VideoPreviewLightbox";
import type { VideoListingItem } from "@/lib/content";
import {
  VIDEO_LISTING,
  type VideoFilterOption,
  type VideoFormat,
} from "@/lib/content";

type VideoPreviewPageClientProps = {
  item: VideoListingItem;
  prevItem: VideoListingItem | null;
  nextItem: VideoListingItem | null;
};

export function VideoPreviewPageClient({
  item,
  prevItem,
  nextItem,
}: VideoPreviewPageClientProps) {
  const [categoryFilter, setCategoryFilter] = useState<VideoFilterOption>("All");
  const [formatFilter, setFormatFilter] = useState<VideoFormat>(item.format);

  const visibleVideos = useMemo(() => {
    return VIDEO_LISTING.filter((listingItem) => {
      const matchesCategory =
        categoryFilter === "All" || listingItem.category === categoryFilter;
      const matchesFormat = listingItem.format === formatFilter;
      return matchesCategory && matchesFormat;
    }).slice(0, 4);
  }, [categoryFilter, formatFilter]);

  return (
    <MediaLayout activeTab="videos">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8 pb-8 xl:gap-10"
      >
        <VideoListingHeader
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          formatFilter={formatFilter}
          onFormatChange={setFormatFilter}
        />

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_410px] xl:gap-10">
          <div
            className={
              formatFilter === "short"
                ? "grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
                : "grid gap-3 sm:grid-cols-2"
            }
          >
            {visibleVideos.map((listingItem, index) => (
              <VideoGridCard key={listingItem.id} item={listingItem} index={index} />
            ))}
          </div>
          <MediaListingSidebar className="xl:sticky xl:top-8 xl:self-start" />
        </div>
      </motion.div>

      <VideoPreviewLightbox item={item} prevItem={prevItem} nextItem={nextItem} />
    </MediaLayout>
  );
}
