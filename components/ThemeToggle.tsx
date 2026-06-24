"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) {
    return (
      <div
        className={cn(
          "h-[49px] w-[98px] rounded-full border border-transparent bg-white/10",
          className
        )}
        aria-hidden
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative flex h-[49px] w-[98px] items-center rounded-full border p-1 transition-colors duration-300",
        isDark
          ? "border-transparent bg-white/10"
          : "border-black bg-white",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className={cn(
          "absolute top-1 h-[41px] w-[41px] rounded-full shadow-sm",
          isDark ? "bg-white" : "bg-stack-blue"
        )}
        style={{ left: isDark ? 53 : 4 }}
      />
      <span className="relative z-10 flex flex-1 items-center justify-center">
        <Sun
          className={cn(
            "h-4 w-4 transition-colors duration-300",
            !isDark ? "text-white" : "text-white/50"
          )}
        />
      </span>
      <span className="relative z-10 flex flex-1 items-center justify-center">
        <Moon
          className={cn(
            "h-4 w-4 transition-colors duration-300",
            isDark ? "text-[#121212]" : "text-black/40"
          )}
        />
      </span>
    </button>
  );
}
