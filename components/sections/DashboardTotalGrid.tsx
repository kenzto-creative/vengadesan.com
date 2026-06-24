"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";
import { DASHBOARD_TOTALS } from "@/lib/content";
import { AVATARS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type DashboardTotalGridProps = {
  className?: string;
};

function TotalStatCard({
  value,
  label,
  delay = 0,
  className,
  children,
}: {
  value: string;
  label: string;
  delay?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className={cn(
        "relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[36px] bg-mine-shaft p-8 dark:bg-card",
        className
      )}
    >
      {children}
      <div className="relative z-10 flex flex-col gap-5">
        <p className="font-mono text-[62px] font-bold leading-[38.4px] tracking-[0.052em]">
          {value}
        </p>
        <p className="whitespace-pre-line font-mono text-lg leading-[26.4px] tracking-[0.178em]">
          {label}
        </p>
      </div>
    </motion.article>
  );
}

function PreviewBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[36px] bg-[#383737] dark:bg-foreground/10",
        className
      )}
      aria-hidden
    />
  );
}

export function DashboardTotalGrid({ className }: DashboardTotalGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-[minmax(0,298fr)_minmax(0,298fr)_minmax(0,513fr)_minmax(0,368fr)]",
        className
      )}
    >
      <TotalStatCard
        value={DASHBOARD_TOTALS.projects}
        label={"Total\nProjects"}
        delay={0.05}
        className="xl:min-h-[455px]"
      >
        <PreviewBlock className="mb-8 h-[140px] w-full sm:h-[190px] sm:max-w-[238px]" />
      </TotalStatCard>

      <TotalStatCard
        value={DASHBOARD_TOTALS.tutorials}
        label={"Total\nTutorials"}
        delay={0.1}
        className="xl:min-h-[455px]"
      >
        <PreviewBlock className="mb-8 h-[140px] w-full sm:h-[190px] sm:max-w-[238px]" />
      </TotalStatCard>

      <div className="grid min-h-0 grid-cols-1 gap-3 md:col-span-2 xl:col-span-1 xl:grid-rows-2">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="relative flex min-h-[221px] flex-col justify-between overflow-hidden rounded-[36px] bg-mine-shaft p-8 dark:bg-card xl:min-h-0"
        >
          <Award
            className="h-[72px] w-[72px] text-foreground/80 sm:h-[120px] sm:w-[120px]"
            strokeWidth={1}
          />
          <div className="flex flex-col gap-6">
            <p className="font-mono text-[62px] font-bold leading-[38.4px] tracking-[0.052em]">
              {DASHBOARD_TOTALS.certificates}
            </p>
            <p className="font-mono text-lg leading-[38.4px] tracking-[0.178em]">
              Total Certificates
            </p>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="relative flex min-h-[221px] items-end justify-between overflow-hidden rounded-[36px] bg-mine-shaft p-8 dark:bg-card xl:min-h-0"
        >
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[56px] font-bold leading-none tracking-[0.037em] sm:text-[86px] sm:leading-[38.4px]">
              {DASHBOARD_TOTALS.awards}
            </p>
            <p className="whitespace-pre-line font-mono text-lg leading-[28.4px] tracking-[0.178em]">
              {"Total\nAwards"}
            </p>
          </div>
          <PreviewBlock className="hidden h-[120px] w-[100px] shrink-0 sm:block sm:h-[148px] sm:w-[136px]" />
        </motion.article>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="relative flex min-h-[360px] flex-col justify-between overflow-hidden rounded-[36px] bg-contact-yellow p-8 text-[#121212] md:col-span-2 xl:col-span-1 xl:min-h-[455px]"
      >
        <div className="flex flex-col gap-6">
          <p className="font-mono text-[88px] font-bold leading-[38.4px] tracking-[0.024em] sm:text-[136px]">
            {DASHBOARD_TOTALS.clients}
          </p>
          <p className="font-mono text-lg leading-[38.4px] tracking-[0.178em]">
            Total Clients
          </p>
        </div>

        <div className="relative flex h-[72px] items-end">
          {AVATARS.map((avatar, index) => (
            <div
              key={avatar.src}
              className="absolute rounded-full p-[7px]"
              style={{
                backgroundColor: avatar.ring,
                left: `${index * 56}px`,
                zIndex: AVATARS.length - index,
              }}
            >
              <div className="relative h-10 w-10 overflow-hidden rounded-full sm:h-12 sm:w-12">
                <Image
                  src={avatar.src}
                  alt={`Client avatar ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.article>
    </div>
  );
}
