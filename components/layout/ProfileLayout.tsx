"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { ProfileSidebar } from "@/components/layout/ProfileSidebar";
import type { ProfileTab } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ProfileLayoutProps = {
  children: ReactNode;
  activeTab?: ProfileTab;
  minimalSidebar?: boolean;
  className?: string;
};

export function ProfileLayout({
  children,
  activeTab = "bio",
  minimalSidebar = false,
  className,
}: ProfileLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div
        className="page-gradient pointer-events-none fixed inset-0 opacity-20"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1920px] gap-4 px-4 py-5 sm:gap-6 sm:px-6 sm:py-6 md:gap-8 lg:gap-12 lg:px-12 lg:py-12 xl:gap-16">
        <ProfileSidebar activeTab={activeTab} minimalNav={minimalSidebar} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn(
            "flex min-w-0 flex-1 flex-col gap-6 md:gap-8",
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
