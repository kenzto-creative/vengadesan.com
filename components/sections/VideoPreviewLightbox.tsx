"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  LayoutGrid,
  Play,
} from "lucide-react";
import type { VideoListingItem } from "@/lib/content";
import { cn } from "@/lib/utils";

type VideoPreviewLightboxProps = {
  item: VideoListingItem;
  prevItem: VideoListingItem | null;
  nextItem: VideoListingItem | null;
  className?: string;
};

function NavButton({
  href,
  label,
  children,
  className,
}: {
  href: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121212] transition-transform hover:scale-105",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function VideoPreviewLightbox({
  item,
  prevItem,
  nextItem,
  className,
}: VideoPreviewLightboxProps) {
  const router = useRouter();
  const previewSrc = item.previewImage ?? item.image;
  const isShort = item.format === "short";

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        router.push("/videos");
        return;
      }

      if (event.key === "ArrowLeft" && prevItem) {
        router.push(`/videos/${prevItem.id}`);
      }

      if (event.key === "ArrowRight" && nextItem) {
        router.push(`/videos/${nextItem.id}`);
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
        "fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 py-4 sm:px-12 sm:py-16 lg:px-20",
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-label={`Preview ${item.title}`}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden />

      <div
        className={cn(
          "relative flex h-full w-full flex-col",
          isShort ? "max-w-[549px]" : "max-w-[1468px]"
        )}
      >
        <div className="mb-4 flex items-center justify-between sm:mb-6">
          <Link
            href="/videos"
            className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-[24px] bg-white/10 px-3 font-mono text-base font-light tracking-[0.1em] text-white backdrop-blur-[2.5px] transition-colors hover:bg-white/15 sm:gap-4 sm:px-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121212]">
              <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
            </span>
            <span className="hidden sm:inline">Back</span>
          </Link>

          <Link
            href="/menu"
            aria-label="Open menu"
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-[36px] border border-white/30 text-white transition-colors hover:bg-white/10"
          >
            <LayoutGrid className="h-6 w-6" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="relative flex min-h-0 flex-1 flex-col items-center justify-center gap-4">
          {isShort ? (
            <>
              <div className="flex w-full min-w-0 flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-8">
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="relative aspect-[465/831] w-full max-w-[465px] max-h-[min(831px,58vh)] overflow-hidden rounded-[24px] sm:max-h-[min(831px,75vh)] sm:rounded-[36px]"
                >
                  <Image
                    src={previewSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="465px"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <span className="flex h-12 w-[68px] items-center justify-center rounded-lg bg-[#FF0033] shadow-lg">
                      <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                    </span>
                  </div>
                </motion.div>

                <div className="hidden flex-col gap-[18px] sm:flex">
                  {prevItem ? (
                    <NavButton
                      href={`/videos/${prevItem.id}`}
                      label={`Previous video: ${prevItem.title}`}
                    >
                      <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
                    </NavButton>
                  ) : null}
                  {nextItem ? (
                    <NavButton
                      href={`/videos/${nextItem.id}`}
                      label={`Next video: ${nextItem.title}`}
                    >
                      <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
                    </NavButton>
                  ) : null}
                </div>
              </div>

              {(prevItem || nextItem) && (
                <div className="pointer-events-auto flex items-center gap-[18px] sm:hidden">
                  {prevItem ? (
                    <NavButton
                      href={`/videos/${prevItem.id}`}
                      label={`Previous video: ${prevItem.title}`}
                    >
                      <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
                    </NavButton>
                  ) : (
                    <span className="h-10 w-10" aria-hidden />
                  )}
                  {nextItem ? (
                    <NavButton
                      href={`/videos/${nextItem.id}`}
                      label={`Next video: ${nextItem.title}`}
                    >
                      <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
                    </NavButton>
                  ) : null}
                </div>
              )}
            </>
          ) : (
            <>
              <div className="relative flex w-full min-w-0 flex-1 items-center justify-center px-8 sm:px-12">
                {prevItem ? (
                  <NavButton
                    href={`/videos/${prevItem.id}`}
                    label={`Previous video: ${prevItem.title}`}
                    className="absolute left-0 z-10 hidden sm:left-4 sm:flex"
                  >
                    <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                  </NavButton>
                ) : null}

                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  className="relative aspect-[1468/822] w-full max-h-[min(822px,58vh)] overflow-hidden rounded-[24px] sm:max-h-[min(822px,70vh)] sm:rounded-[36px]"
                >
                  <Image
                    src={previewSrc}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1536px) 100vw, 1468px"
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <span className="flex h-16 w-[90px] items-center justify-center rounded-xl bg-[#FF0033] shadow-lg">
                      <Play className="ml-1 h-8 w-8 fill-white text-white" />
                    </span>
                  </div>
                </motion.div>

                {nextItem ? (
                  <NavButton
                    href={`/videos/${nextItem.id}`}
                    label={`Next video: ${nextItem.title}`}
                    className="absolute right-0 z-10 hidden sm:right-4 sm:flex"
                  >
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </NavButton>
                ) : null}
              </div>

              {(prevItem || nextItem) && (
                <div className="pointer-events-auto flex items-center gap-4 sm:hidden">
                  {prevItem ? (
                    <NavButton
                      href={`/videos/${prevItem.id}`}
                      label={`Previous video: ${prevItem.title}`}
                    >
                      <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                    </NavButton>
                  ) : (
                    <span className="h-10 w-10" aria-hidden />
                  )}
                  {nextItem ? (
                    <NavButton
                      href={`/videos/${nextItem.id}`}
                      label={`Next video: ${nextItem.title}`}
                    >
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </NavButton>
                  ) : null}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
