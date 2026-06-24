"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

type MainLayoutProps = {
  children: ReactNode;
  className?: string;
};

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className="relative bg-background text-foreground">
      <div
        className="pointer-events-none fixed inset-0 opacity-20"
        aria-hidden
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.08) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1920px] px-4 py-6 sm:px-6 lg:px-12 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          <Sidebar className="lg:sticky lg:top-12 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto" />

          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={cn(
              "flex min-w-0 flex-1 flex-col gap-8 pb-12 lg:pb-16",
              className
            )}
          >
            <Header />
            {children}
          </motion.main>
        </div>
      </div>
    </div>
  );
}
