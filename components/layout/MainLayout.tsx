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
    <div className="relative min-h-screen bg-background text-foreground">
      <div
        className="pointer-events-none fixed inset-0 opacity-20"
        aria-hidden
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.08) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1920px] gap-8 px-4 py-6 sm:px-6 lg:gap-12 lg:px-12 lg:py-12 xl:gap-16">
        <Sidebar />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className={cn("flex min-w-0 flex-1 flex-col gap-8", className)}
        >
          <Header />
          {children}
        </motion.main>
      </div>
    </div>
  );
}
