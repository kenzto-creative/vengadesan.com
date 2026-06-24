"use client";

import { motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { useNavigation } from "@/components/layout/NavigationContext";
import { cn } from "@/lib/utils";

type MainLayoutProps = {
  children: ReactNode;
  className?: string;
  fitViewport?: boolean;
  collapsibleSidebar?: boolean;
};

export function MainLayout({
  children,
  className,
  fitViewport = false,
  collapsibleSidebar = false,
}: MainLayoutProps) {
  const { setSidebarCollapsible, setDesktopSidebarOpen } = useNavigation();

  useEffect(() => {
    if (!fitViewport) return;

    document.documentElement.classList.add("home-no-scroll");
    return () => {
      document.documentElement.classList.remove("home-no-scroll");
    };
  }, [fitViewport]);

  useEffect(() => {
    if (!collapsibleSidebar) return;

    setSidebarCollapsible(true);
    setDesktopSidebarOpen(false);

    return () => {
      setSidebarCollapsible(false);
      setDesktopSidebarOpen(true);
    };
  }, [collapsibleSidebar, setDesktopSidebarOpen, setSidebarCollapsible]);

  return (
    <div
      className={cn(
        "relative bg-background text-foreground",
        fitViewport ? "min-h-screen lg:h-dvh lg:overflow-hidden" : "min-h-screen"
      )}
    >
      <div
        className="page-gradient pointer-events-none fixed inset-0 opacity-20"
        aria-hidden
      />

      <div
        className={cn(
          "relative mx-auto flex max-w-[1920px] gap-4 px-4 py-5 sm:gap-6 sm:px-6 sm:py-6 md:gap-8 lg:px-12 lg:py-12 xl:gap-16",
          fitViewport
            ? "min-h-screen lg:h-full lg:overflow-hidden lg:py-8"
            : "min-h-screen",
          collapsibleSidebar && "lg:gap-4 xl:gap-6"
        )}
      >
        <Sidebar compact={fitViewport} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "flex min-w-0 flex-1 flex-col",
            fitViewport ? "gap-4 lg:min-h-0 lg:overflow-hidden" : "gap-6 md:gap-8",
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
