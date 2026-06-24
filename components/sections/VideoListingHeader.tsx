"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  VIDEO_FILTER_OPTIONS,
  type VideoFilterOption,
  type VideoFormat,
} from "@/lib/content";
import { cn } from "@/lib/utils";

type VideoListingHeaderProps = {
  categoryFilter: VideoFilterOption;
  onCategoryChange: (value: VideoFilterOption) => void;
  formatFilter: VideoFormat;
  onFormatChange: (value: VideoFormat) => void;
  className?: string;
};

export function VideoListingHeader({
  categoryFilter,
  onCategoryChange,
  formatFilter,
  onFormatChange,
  className,
}: VideoListingHeaderProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "flex flex-col gap-4 xl:flex-row xl:flex-wrap xl:items-center xl:justify-between",
        className
      )}
    >
      <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
        Videos
      </h1>

      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <div
          className="flex items-center gap-2 rounded-[24px] border border-foreground/10 bg-foreground/[0.03] p-1 backdrop-blur-[2.5px] dark:border-white/10 dark:bg-white/[0.03]"
          role="group"
          aria-label="Filter by video length"
        >
          {(["full", "short"] as const).map((format) => {
            const active = formatFilter === format;
            return (
              <button
                key={format}
                type="button"
                onClick={() => onFormatChange(format)}
                className={cn(
                  "min-w-[95px] rounded-[20px] px-5 py-2.5 font-mono text-base font-light capitalize tracking-[0.1em] transition-colors",
                  active
                    ? "bg-foreground text-background dark:bg-white dark:text-[#121212]"
                    : "text-foreground/70 hover:text-foreground"
                )}
                aria-pressed={active}
              >
                {format}
              </button>
            );
          })}
        </div>

        <div ref={rootRef} className="relative">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-label="Filter videos by category"
            onClick={() => setOpen((current) => !current)}
            className="flex h-12 w-full min-w-[280px] max-w-[357px] items-center justify-between rounded-[24px] border border-foreground/15 bg-foreground/[0.03] px-6 backdrop-blur-[2.5px] transition-colors hover:bg-foreground/[0.06] dark:border-white/16 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] sm:min-w-[357px]"
          >
            <span className="font-mono text-base font-light tracking-[0.1em]">
              {categoryFilter}
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground dark:bg-white">
              <ChevronDown
                className={cn(
                  "h-3 w-3 text-background transition-transform duration-200 dark:text-[#000D26]",
                  open && "rotate-180"
                )}
                strokeWidth={1.2}
              />
            </span>
          </button>

          {open && (
            <ul
              role="listbox"
              aria-label="Video categories"
              className="absolute right-0 top-[calc(100%+8px)] z-20 min-w-full overflow-hidden rounded-[24px] border border-foreground/10 bg-card p-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:border-white/10"
            >
              {VIDEO_FILTER_OPTIONS.map((option) => {
                const selected = option === categoryFilter;
                return (
                  <li key={option} role="option" aria-selected={selected}>
                    <button
                      type="button"
                      onClick={() => {
                        onCategoryChange(option);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center rounded-[18px] px-4 py-3 text-left font-mono text-sm font-light tracking-[0.1em] transition-colors",
                        selected
                          ? "bg-stack-blue text-white"
                          : "text-foreground hover:bg-foreground/5 dark:hover:bg-white/5"
                      )}
                    >
                      {option}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
