"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  LayoutGrid,
} from "lucide-react";
import type { ImageListingItem } from "@/lib/content";
import { cn } from "@/lib/utils";

type ImagePreviewLightboxProps = {
  item: ImageListingItem;
  prevItem: ImageListingItem | null;
  nextItem: ImageListingItem | null;
  className?: string;
};

export function ImagePreviewLightbox({
  item,
  prevItem,
  nextItem,
  className,
}: ImagePreviewLightboxProps) {
  const router = useRouter();
  const previewSrc = item.previewImage ?? item.image;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        router.push("/images");
        return;
      }

      if (event.key === "ArrowLeft" && prevItem) {
        router.push(`/images/${prevItem.id}`);
      }

      if (event.key === "ArrowRight" && nextItem) {
        router.push(`/images/${nextItem.id}`);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextItem, prevItem, router]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-16 sm:px-12 lg:px-20",
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview ${item.title}`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative flex h-full w-full max-w-[957px] flex-col">
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/images"
            className="pointer-events-auto inline-flex h-12 items-center gap-4 rounded-[24px] bg-white/10 px-6 font-mono text-base font-light tracking-[0.1em] text-white backdrop-blur-[2.5px] transition-colors hover:bg-white/15"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121212]">
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </span>
            Back
          </Link>

          <Link
            href="/menu"
            aria-label="Open menu"
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-[36px] border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <LayoutGrid className="h-6 w-6" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center">
          {prevItem ? (
            <Link
              href={`/images/${prevItem.id}`}
              aria-label={`Previous image: ${prevItem.title}`}
              className="pointer-events-auto absolute left-0 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[#121212] transition-transform hover:scale-105 sm:left-4 sm:translate-x-0"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          ) : null}

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="relative aspect-[957/856] w-full max-h-[min(856px,70vh)] overflow-hidden rounded-[36px]"
          >
            <Image
              src={previewSrc}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 957px"
              priority
            />
          </motion.div>

          {nextItem ? (
            <Link
              href={`/images/${nextItem.id}`}
              aria-label={`Next image: ${nextItem.title}`}
              className="pointer-events-auto absolute right-0 z-10 flex h-10 w-10 translate-x-1/2 items-center justify-center rounded-full bg-white text-[#121212] transition-transform hover:scale-105 sm:right-4 sm:translate-x-0"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
