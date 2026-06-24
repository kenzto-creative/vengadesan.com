"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { IMAGE_FILTER_OPTIONS, type ImageFilterOption } from "@/lib/content";
import { cn } from "@/lib/utils";

type ImageFilterChipsProps = {
  value: ImageFilterOption;
  onChange: (value: ImageFilterOption) => void;
  className?: string;
};

export function ImageFilterChips({
  value,
  onChange,
  className,
}: ImageFilterChipsProps) {
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
    <div ref={rootRef} className={cn("relative w-full min-w-0 sm:w-auto sm:max-w-[357px]", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open ? "true" : "false"}
        aria-label="Filter images by category"
        onClick={() => setOpen((current) => !current)}
        className="flex h-12 w-full min-w-0 items-center justify-between rounded-[24px] border border-foreground/15 bg-foreground/[0.03] px-6 backdrop-blur-[2.5px] transition-colors hover:bg-foreground/[0.06] dark:border-white/16 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] sm:min-w-[280px]"
      >
        <span className="font-mono text-base font-light tracking-[0.1em]">
          {value}
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
          aria-label="Image categories"
          className="absolute right-0 top-[calc(100%+8px)] z-20 min-w-full overflow-hidden rounded-[24px] border border-foreground/10 bg-card p-2 shadow-[0_20px_60px_rgba(0,0,0,0.25)] dark:border-white/10"
        >
          {IMAGE_FILTER_OPTIONS.map((option) => {
            const selected = option === value;
            return (
              <li key={option} role="option" aria-selected={selected ? "true" : "false"}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option);
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
  );
}
