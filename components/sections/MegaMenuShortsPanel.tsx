"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { useNavigation } from "@/components/layout/NavigationContext";
import { MEGA_MENU_FEATURED, MEGA_MENU_SHORTS } from "@/lib/content";
import { PROFILE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type MegaMenuShortsPanelProps = {
  className?: string;
};

export function MegaMenuShortsPanel({ className }: MegaMenuShortsPanelProps) {
  const { setMegaMenuOpen } = useNavigation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className={cn(
        "overflow-hidden rounded-[36px] bg-mine-shaft p-6 dark:bg-card sm:p-8 lg:p-11",
        className
      )}
      aria-labelledby="mega-shorts-heading"
    >
      <div className="grid gap-8 xl:grid-cols-[minmax(280px,360px)_1fr] xl:gap-10">
        <div className="flex flex-col gap-8">
          <div>
            <h2
              id="mega-shorts-heading"
              className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em] text-foreground dark:text-white"
            >
              My Shorts
            </h2>
            <p className="mt-6 max-w-[335px] whitespace-pre-line font-mono text-base font-light leading-relaxed tracking-[0.1em] text-muted-foreground">
              {PROFILE.bio}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ViewAllButton
              href="/images"
              label="View All Images"
              onNavigate={() => setMegaMenuOpen(false)}
            />
            <ViewAllButton
              href="/videos"
              label="View All Videos"
              primary
              onNavigate={() => setMegaMenuOpen(false)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative grid grid-cols-[minmax(72px,128px)_1fr_minmax(72px,128px)] items-stretch gap-3 sm:gap-4">
            <div className="relative hidden overflow-hidden rounded-[36px] sm:block">
              <Image
                src={MEGA_MENU_FEATURED.left}
                alt=""
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>

            <Link
              href="/videos"
              onClick={() => setMegaMenuOpen(false)}
              className="group relative aspect-[701/394] overflow-hidden rounded-[36px] bg-black/20"
            >
              <Image
                src={MEGA_MENU_FEATURED.center}
                alt="Featured short preview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 701px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/5">
                <span className="flex h-12 w-[68px] items-center justify-center rounded-lg bg-[#FF0033] shadow-lg">
                  <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                </span>
              </div>
            </Link>

            <div className="relative hidden overflow-hidden rounded-[36px] sm:block">
              <Image
                src={MEGA_MENU_FEATURED.right}
                alt=""
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {MEGA_MENU_SHORTS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setMegaMenuOpen(false)}
                  className="group relative block aspect-[319/285] overflow-hidden rounded-[36px] bg-card"
                >
                  <Image
                    src={item.image}
                    alt={`Short preview ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 320px"
                  />
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-[#121212]" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ViewAllButton({
  href,
  label,
  primary = false,
  onNavigate,
}: {
  href: string;
  label: string;
  primary?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "group inline-flex h-12 min-w-[220px] items-center justify-between rounded-[36px] px-5 font-mono text-base font-light tracking-[0.1em] transition-colors",
        primary
          ? "bg-foreground text-background hover:bg-foreground/90"
          : "bg-[#171717] text-white hover:bg-[#222222]"
      )}
    >
      <span>{label}</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121212]">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
