"use client";

import { motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

type MainLayoutProps = {
  children: ReactNode;
  className?: string;
  fitViewport?: boolean;
};

export function MainLayout({
  children,
  className,
  fitViewport = false,
}: MainLayoutProps) {
  useEffect(() => {
    if (!fitViewport) return;

    document.documentElement.classList.add("home-no-scroll");
    return () => {
      document.documentElement.classList.remove("home-no-scroll");
    };
  }, [fitViewport]);

  return (
    <div
      className={cn(
        "relative bg-background text-foreground",
        fitViewport ? "min-h-screen lg:h-dvh lg:overflow-hidden" : "min-h-screen"
      )}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-20"
        aria-hidden
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.08) 100%)",
        }}
      />

      <div
        className={cn(
          "relative mx-auto flex max-w-[1920px] gap-8 px-4 py-6 sm:px-6 lg:gap-12 lg:px-12 xl:gap-16",
          fitViewport
            ? "min-h-screen lg:h-full lg:overflow-hidden lg:py-8"
            : "min-h-screen lg:py-12"
        )}
      >
        <Sidebar compact={fitViewport} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "flex min-w-0 flex-1 flex-col",
            fitViewport ? "gap-4 lg:min-h-0 lg:overflow-hidden" : "gap-8",
            className
          )}
        >
          <Header className="shrink-0" />
          {children}
        </motion.main>
      </div>
    </div>
  );
}
