"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { VideoGridCard } from "@/components/cards/VideoGridCard";
import { MediaLayout } from "@/components/layout/MediaLayout";
import {
  LoadMoreButton,
  MediaListingSidebar,
} from "@/components/sections/MediaListingSidebar";
import { VideoListingHeader } from "@/components/sections/VideoListingHeader";
import {
  VIDEO_LISTING,
  type VideoFilterOption,
  type VideoFormat,
} from "@/lib/content";

const INITIAL_VISIBLE = 4;
const LOAD_STEP = 2;

export default function VideosPage() {
  const [categoryFilter, setCategoryFilter] = useState<VideoFilterOption>("All");
  const [formatFilter, setFormatFilter] = useState<VideoFormat>("short");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredVideos = useMemo(() => {
    return VIDEO_LISTING.filter((item) => {
      const matchesCategory =
        categoryFilter === "All" || item.category === categoryFilter;
      const matchesFormat = item.format === formatFilter;
      return matchesCategory && matchesFormat;
    });
  }, [categoryFilter, formatFilter]);

  const visibleVideos = filteredVideos.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredVideos.length;

  function handleCategoryChange(value: VideoFilterOption) {
    setCategoryFilter(value);
    setVisibleCount(INITIAL_VISIBLE);
  }

  function handleFormatChange(value: VideoFormat) {
    setFormatFilter(value);
    setVisibleCount(INITIAL_VISIBLE);
  }

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
          onCategoryChange={handleCategoryChange}
          formatFilter={formatFilter}
          onFormatChange={handleFormatChange}
        />

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_410px] xl:gap-10">
          <div className="flex flex-col gap-8">
            {visibleVideos.length > 0 ? (
              <div
                className={
                  formatFilter === "short"
                    ? "grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
                    : "grid gap-3 sm:grid-cols-2"
                }
              >
                {visibleVideos.map((item, index) => (
                  <VideoGridCard key={item.id} item={item} index={index} />
                ))}
              </div>
            ) : (
              <p className="font-mono text-sm font-light tracking-[0.1em] text-muted-foreground">
                No videos found for this filter.
              </p>
            )}

            <LoadMoreButton
              visible={canLoadMore}
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + LOAD_STEP, filteredVideos.length)
                )
              }
            />
          </div>

          <MediaListingSidebar className="xl:sticky xl:top-8 xl:self-start" />
        </div>
      </motion.div>
    </MediaLayout>
  );
}
