"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { Box, PanelRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigation } from "@/components/layout/NavigationContext";
import { useClock } from "@/hooks/useClock";
import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: string;
  megaMenuToggle?: boolean;
  megaMenuVisible?: boolean;
};

export function Header({
  className,
  megaMenuToggle = false,
  megaMenuVisible = false,
}: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { time, date, iso } = useClock();
  const {
    setMobileOpen,
    sidebarCollapsible,
    desktopSidebarOpen,
    setDesktopSidebarOpen,
    setMegaMenuOpen,
  } = useNavigation();

  function handleMegaMenuClick() {
    if (megaMenuToggle && pathname === "/") {
      setMegaMenuOpen(!megaMenuVisible);
      router.replace("/", { scroll: false });
      return;
    }

    setMegaMenuOpen(true);
    if (pathname !== "/") {
      router.push("/");
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-40 flex items-center justify-between rounded-[48px] bg-header px-4 py-3 backdrop-blur-md sm:px-[25px]",
        className
      )}
    >
      {sidebarCollapsible ? (
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-[36px] text-foreground transition-colors hover:bg-foreground/5 dark:hover:bg-white/10 sm:h-12 sm:w-12"
          aria-label={desktopSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={desktopSidebarOpen ? "true" : "false"}
          onClick={() => {
            if (window.matchMedia("(min-width: 1024px)").matches) {
              setDesktopSidebarOpen(!desktopSidebarOpen);
              return;
            }
            setMobileOpen(true);
          }}
        >
          <span className="absolute inset-0 rounded-[36px] border border-foreground/20 dark:border-white/30" />
          <PanelRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
        </button>
      ) : (
        <>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center text-foreground/80 transition-opacity hover:opacity-100 sm:h-6 sm:w-6 md:hidden"
            aria-label="Open navigation menu"
            onClick={() => setMobileOpen(true)}
          >
            <PanelRight className="h-6 w-6" />
          </button>
          <span className="hidden h-6 w-6 md:block" aria-hidden />
        </>
      )}

      <div
        className="flex items-center gap-2 font-mono text-sm text-foreground sm:gap-3 sm:text-base"
        suppressHydrationWarning
      >
        <time dateTime={iso}>{time}</time>
        <span className="text-foreground/60" aria-hidden>
          ·
        </span>
        <time dateTime={iso.split("T")[0]}>{date}</time>
      </div>

      <div className="flex items-center gap-4 sm:gap-[38px]">
        <ThemeToggle />
        <button
          type="button"
          onClick={handleMegaMenuClick}
          aria-label={megaMenuVisible ? "Close mega menu" : "Open mega menu"}
          {...(megaMenuToggle
            ? { "aria-pressed": megaMenuVisible ? "true" : "false" }
            : {})}
          className={cn(
            "relative flex h-10 w-10 items-center justify-center rounded-[36px] text-foreground transition-colors hover:bg-foreground/5 dark:hover:bg-white/10 sm:h-12 sm:w-12",
            megaMenuToggle && megaMenuVisible && "bg-foreground/10 dark:bg-white/10"
          )}
        >
          <span className="absolute inset-0 rounded-[36px] border border-foreground/20 dark:border-white/30" />
          <Box className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
        </button>
      </div>
    </motion.header>
  );
}
