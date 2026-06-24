"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, LayoutGrid, X } from "lucide-react";
import { useEffect } from "react";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { SocialLinks } from "@/components/SocialLinks";
import { useNavigation } from "@/components/layout/NavigationContext";
import { cn } from "@/lib/utils";

type SidebarProps = {
  className?: string;
  compact?: boolean;
};

export function Sidebar({ className, compact = false }: SidebarProps) {
  const pathname = usePathname();
  const { mobileOpen, setMobileOpen, sidebarCollapsible, desktopSidebarOpen } =
    useNavigation();
  const showCollapsedDesktop = sidebarCollapsible && !desktopSidebarOpen;

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const content = (
    <div
      className={cn(
        "flex h-full flex-col justify-between",
        compact ? "gap-8 lg:gap-10" : "gap-16"
      )}
    >
      <div
        className={cn(
          "flex flex-col",
          compact ? "gap-8 lg:gap-10" : "gap-[103px]"
        )}
      >
        <div className="flex items-center gap-2">
          <Link
            href="/profile"
            className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[52px] transition-opacity hover:opacity-90"
            onClick={() => setMobileOpen(false)}
            aria-label="View profile"
          >
            <Image
              src="/images/profile.png"
              alt="Vengat R. profile photo"
              fill
              className="object-cover"
              sizes="72px"
              priority
            />
          </Link>
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex flex-col gap-0.5 py-1.5"
          >
            <span className="font-mono text-2xl font-normal leading-tight tracking-[0.1em] text-foreground sm:text-[32px] sm:leading-[38.4px]">
              {SITE.name}
            </span>
            <span className="font-mono text-sm leading-[19.6px] text-muted-foreground">
              {SITE.title.toUpperCase()}
            </span>
          </Link>
        </div>

        <nav aria-label="Main navigation">
          <ul
            className={cn(
              "flex flex-col pl-6",
              compact ? "gap-8 lg:gap-10" : "gap-16"
            )}
          >
            {NAV_ITEMS.map(({ label, href, icon: Icon }) => {
              const isMegaMenu = pathname === "/menu";
              const isActive = isMegaMenu ? href === "/" : pathname === href;
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

      <div className={cn("flex flex-col", compact ? "gap-8 lg:gap-10" : "gap-[46px]")}>
        <div className={cn("flex flex-col", compact ? "gap-6 lg:gap-8" : "gap-[45px]")}>
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
            <Link href="/" className="transition-colors hover:text-foreground">
              vengat
            </Link>
          </p>
          <p className="text-center lg:text-left">All rights reserved.</p>
        </div>
      </div>
    </div>
  );

  const collapsedDesktopRail = (
    <div className="flex h-full flex-col items-center justify-between py-2">
      <div className="flex flex-col items-center gap-10">
        <Link
          href="/profile"
          className="relative h-[72px] w-[72px] overflow-hidden rounded-[52px] ring-2 ring-[#BFFFFD]/40 transition-opacity hover:opacity-90"
          aria-label="View profile"
        >
          <Image
            src="/images/profile.png"
            alt="Vengat R. profile photo"
            fill
            className="object-cover"
            sizes="72px"
            priority
          />
        </Link>

        <nav aria-label="Collapsed navigation">
          <ul className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
              const isMegaMenu = pathname === "/menu";
              const isActive = isMegaMenu ? href === "/" : pathname === href;

              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-label={label}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center transition-opacity",
                      isActive ? "opacity-100" : "opacity-50 hover:opacity-80"
                    )}
                  >
                    <Icon className="h-[26px] w-[26px]" strokeWidth={1.5} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-center gap-6">
        <Link
          href={SITE.cvUrl}
          aria-label="View CV"
          className="relative flex h-12 w-12 items-center justify-center rounded-[36px] bg-white text-[#121212] transition-colors hover:bg-white/90"
        >
          <FileText className="h-6 w-6" strokeWidth={1.5} />
        </Link>
        <Link
          href="/menu"
          aria-label="Open mega menu"
          className="relative flex h-12 w-12 items-center justify-center rounded-[36px] text-foreground transition-colors hover:bg-foreground/5"
        >
          <span className="absolute inset-0 rounded-[36px] border border-foreground/30 dark:border-white/30" />
          <LayoutGrid className="h-6 w-6" strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );

  const iconRail = (
    <div className="flex h-full flex-col items-center justify-between py-2">
      <div className="flex flex-col items-center gap-8">
        <Link
          href="/profile"
          className="relative h-12 w-12 overflow-hidden rounded-[32px] transition-opacity hover:opacity-90"
          aria-label="View profile"
        >
          <Image
            src="/images/profile.png"
            alt="Vengat R. profile photo"
            fill
            className="object-cover"
            sizes="48px"
          />
        </Link>
        <nav aria-label="Tablet navigation">
          <ul className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
              const isMegaMenu = pathname === "/menu";
              const isActive = isMegaMenu ? href === "/" : pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-label={label}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-full transition-opacity",
                      isActive ? "opacity-100" : "opacity-50 hover:opacity-80"
                    )}
                  >
                    <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <Link
        href={SITE.cvUrl}
        aria-label="View CV"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121212] transition-colors hover:bg-white/90"
      >
        <FileText className="h-5 w-5" />
      </Link>
    </div>
  );

  return (
    <>
      <aside
        className={cn(
          "hidden w-[72px] shrink-0 md:block lg:hidden",
          compact && "md:h-full",
          className
        )}
      >
        {iconRail}
      </aside>

      <aside
        className={cn(
          "hidden w-[72px] shrink-0 lg:flex lg:flex-col",
          !showCollapsedDesktop && "lg:hidden",
          compact && "lg:h-full",
          className
        )}
      >
        {collapsedDesktopRail}
      </aside>

      <aside
        className={cn(
          "hidden w-[294px] shrink-0 lg:block",
          showCollapsedDesktop && "lg:hidden",
          compact && "lg:h-full lg:overflow-hidden",
          className
        )}
      >
        {content}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
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
              className="mb-8 flex h-10 w-10 items-center justify-center self-end rounded-full border border-foreground/20 dark:border-white/20"
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
