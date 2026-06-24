"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { SocialLinks } from "@/components/SocialLinks";
import { cn } from "@/lib/utils";

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const content = (
    <div className="flex h-full flex-col justify-between gap-16">
      <div className="flex flex-col gap-[103px]">
        <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[52px]">
            <Image
              src="/images/profile.png"
              alt="Vengat R. profile photo"
              fill
              className="object-cover"
              sizes="72px"
              priority
            />
          </div>
          <div className="flex flex-col gap-0.5 py-1.5">
            <span className="font-mono text-[32px] font-normal leading-[38.4px] tracking-[0.1em] text-foreground">
              {SITE.name}
            </span>
            <span className="font-mono text-sm leading-[19.6px] text-muted-foreground">
              {SITE.title.toUpperCase()}
            </span>
          </div>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-col gap-16 pl-6">
            {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "group flex items-center gap-[27px] font-mono text-base font-light tracking-[0.1em] transition-opacity duration-300",
                      isActive
                        ? "text-foreground opacity-100"
                        : "text-foreground opacity-50 hover:opacity-80"
                    )}
                  >
                    <Icon className="h-[26px] w-[26px] shrink-0" strokeWidth={1.5} />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col gap-[46px]">
        <div className="flex flex-col gap-[45px]">
          <Link
            href={SITE.cvUrl}
            aria-label="View CV"
            className="inline-flex h-12 w-[179px] items-center justify-center gap-4 rounded-[24px] bg-white px-6 font-mono text-base font-light tracking-[0.1em] text-[#121212] transition-colors hover:bg-white/90"
          >
            <FileText className="h-6 w-6" />
            View CV
          </Link>
          <SocialLinks />
        </div>

        <div className="flex flex-col gap-5 font-mono text-base text-muted-foreground">
          <p className="flex items-center gap-3">
            <span>©</span>
            <span>Designed by</span>
            <Link href="/" className="hover:text-foreground transition-colors">
              vengat
            </Link>
          </p>
          <p className="text-center lg:text-left">All rights reserved.</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        className="fixed left-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground lg:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      <aside
        className={cn(
          "hidden w-[294px] shrink-0 lg:block",
          className
        )}
      >
        {content}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute left-0 top-0 flex h-full w-[min(320px,85vw)] flex-col overflow-y-auto bg-background p-8"
          >
            <button
              type="button"
              className="mb-8 flex h-10 w-10 items-center justify-center self-end rounded-full border border-white/20"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
            {content}
          </motion.aside>
        </div>
      )}
    </>
  );
}
