"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  FRIEND_FILTER_OPTIONS,
  type FriendFilterOption,
} from "@/lib/content";
import { cn } from "@/lib/utils";

type FriendsFilterHeaderProps = {
  value: FriendFilterOption;
  onChange: (value: FriendFilterOption) => void;
  className?: string;
};

export function FriendsFilterHeader({
  value,
  onChange,
  className,
}: FriendsFilterHeaderProps) {
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
    <div
      ref={rootRef}
      className={cn("relative w-full max-w-[357px] sm:ml-auto", className)}
    >
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex h-12 w-full items-center justify-between rounded-[24px] border border-white/16 bg-white/10 px-6 font-mono text-base font-light tracking-[0.1em] text-foreground backdrop-blur-[2.5px] transition-colors hover:bg-white/15"
      >
        <span>{value}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#000D26]">
          <ChevronDown
            className={cn("h-3 w-3 transition-transform", open && "rotate-180")}
            strokeWidth={1.2}
          />
        </span>
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label="Filter friends"
          className="absolute right-0 top-[calc(100%+8px)] z-20 min-w-full overflow-hidden rounded-[24px] border border-white/16 bg-[#121212] py-2 shadow-xl"
        >
          {FRIEND_FILTER_OPTIONS.map((option) => (
            <li key={option} role="option" aria-selected={value === option}>
              <button
                type="button"
                className={cn(
                  "flex w-full px-6 py-3 text-left font-mono text-sm font-light tracking-[0.1em] transition-colors hover:bg-white/10",
                  value === option ? "text-foreground" : "text-muted-foreground"
                )}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
