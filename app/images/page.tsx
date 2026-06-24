"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ImageGridCard } from "@/components/cards/ImageGridCard";
import { MediaLayout } from "@/components/layout/MediaLayout";
import { ImageFilterChips } from "@/components/sections/ImageFilterChips";
import {
  LoadMoreButton,
  MediaListingSidebar,
} from "@/components/sections/MediaListingSidebar";
import { IMAGE_LISTING, type ImageFilterOption } from "@/lib/content";

const INITIAL_VISIBLE = 3;
const LOAD_STEP = 3;

export default function ImagesPage() {
  const [activeFilter, setActiveFilter] = useState<ImageFilterOption>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") return IMAGE_LISTING;
    return IMAGE_LISTING.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const visibleImages = filteredImages.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredImages.length;

  function handleFilterChange(value: ImageFilterOption) {
    setActiveFilter(value);
    setVisibleCount(INITIAL_VISIBLE);
  }

  return (
    <MediaLayout activeTab="images">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8 pb-8 xl:gap-10"
      >
        <header className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
            Images
          </h1>

          <ImageFilterChips
            value={activeFilter}
            onChange={handleFilterChange}
            className="w-full sm:ml-auto sm:w-auto"
          />
        </header>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_410px] xl:gap-10">
          <div className="flex flex-col gap-8">
            {visibleImages.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {visibleImages.map((item, index) => (
                  <ImageGridCard key={item.id} item={item} index={index} />
                ))}
              </div>
            ) : (
              <p className="font-mono text-sm font-light tracking-[0.1em] text-muted-foreground">
                No images found in this category.
              </p>
            )}

            <LoadMoreButton
              visible={canLoadMore}
              onClick={() =>
                setVisibleCount((count) =>
                  Math.min(count + LOAD_STEP, filteredImages.length)
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
