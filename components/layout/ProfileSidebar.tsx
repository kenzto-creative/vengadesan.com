"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  GalleryHorizontalEnd,
  Subtitles,
  Undo2,
  UserRound,
  X,
} from "lucide-react";
import { useEffect } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { useNavigation } from "@/components/layout/NavigationContext";
import {
  PROFILE_TABS,
  SITE,
  type ProfileTab,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

const TAB_ICONS = {
  bio: UserRound,
  objective: Subtitles,
  post: GalleryHorizontalEnd,
} as const;

type ProfileSidebarProps = {
  activeTab?: ProfileTab;
  minimalNav?: boolean;
  className?: string;
};

export function ProfileSidebar({
  activeTab = "bio",
  minimalNav = false,
  className,
}: ProfileSidebarProps) {
  const { mobileOpen, setMobileOpen } = useNavigation();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const content = (
    <div className="flex h-full flex-col justify-between gap-12">
      <div className="flex flex-col gap-[103px]">
        <div className="flex items-center gap-2">
          <Link
            href="/profile"
            className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[52px] ring-2 ring-[#BFFFFD]/40"
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
          <div className="flex flex-col gap-0.5 py-1.5">
            <span className="font-mono text-[32px] font-normal leading-[38.4px] tracking-[0.1em] text-foreground">
              {SITE.name}
            </span>
            <span className="font-mono text-sm leading-[19.6px] text-muted-foreground">
              {SITE.title.toUpperCase()}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-16 pl-6">
          <Link
            href={minimalNav ? "/profile" : "/"}
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center gap-7 font-mono text-base font-light tracking-[0.1em] text-foreground transition-opacity hover:opacity-80"
          >
            <Undo2 className="h-6 w-6" strokeWidth={1.5} />
            Back
          </Link>

          {!minimalNav ? (
            <nav aria-label="Profile sections">
              <ul className="flex flex-col gap-8">
                {PROFILE_TABS.map(({ id, label, href }) => {
                  const Icon = TAB_ICONS[id];
                  const active = activeTab === id;

                  return (
                    <li key={id}>
                      <Link
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "inline-flex items-center gap-7 font-mono text-base font-light tracking-[0.1em] transition-opacity",
                          active
                            ? "text-foreground"
                            : "text-foreground/50 hover:text-foreground/70"
                        )}
                        aria-current={active ? "page" : undefined}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.5} />
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-11 pl-6">
        <Link
          href={SITE.cvUrl}
          onClick={() => setMobileOpen(false)}
          className="inline-flex h-12 w-full max-w-[179px] items-center justify-center gap-4 rounded-[24px] bg-foreground px-6 font-mono text-base font-light tracking-[0.1em] text-background transition-opacity hover:opacity-90"
        >
          <FileText className="h-6 w-6" strokeWidth={1.5} />
          View CV
        </Link>

        <SocialLinks />

        <div className="flex flex-col gap-5 font-mono text-base text-muted-foreground">
          <p className="flex flex-wrap items-center gap-3">
            <span>©</span>
            <span>Designed by</span>
            <span>{SITE.copyright.replace("Designed by ", "")}</span>
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );

  const iconRail = (
    <div className="flex h-full flex-col items-center justify-between py-2">
      <div className="flex flex-col items-center gap-8">
        <Link
          href="/profile"
          className="relative h-12 w-12 overflow-hidden rounded-[32px] ring-2 ring-[#BFFFFD]/40"
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

        <Link
          href={minimalNav ? "/profile" : "/"}
          aria-label="Back"
          className="flex h-10 w-10 items-center justify-center rounded-full opacity-80 transition-opacity hover:opacity-100"
        >
          <Undo2 className="h-[22px] w-[22px]" strokeWidth={1.5} />
        </Link>

        {!minimalNav ? (
          <nav aria-label="Profile sections">
            <ul className="flex flex-col items-center gap-6">
              {PROFILE_TABS.map(({ id, label, href }) => {
                const Icon = TAB_ICONS[id];
                const active = activeTab === id;

                return (
                  <li key={id}>
                    <Link
                      href={href}
                      aria-label={label}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full transition-opacity",
                        active ? "opacity-100" : "opacity-50 hover:opacity-80"
                      )}
                    >
                      <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>

      <Link
        href={SITE.cvUrl}
        aria-label="View CV"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-opacity hover:opacity-90"
      >
        <FileText className="h-5 w-5" strokeWidth={1.5} />
      </Link>
    </div>
  );

  return (
    <>
      <aside
        className={cn(
          "hidden w-[72px] shrink-0 md:flex md:flex-col lg:hidden",
          className
        )}
      >
        {iconRail}
      </aside>

      <aside
        className={cn(
          "hidden w-[294px] shrink-0 lg:flex lg:flex-col",
          className
        )}
      >
        {content}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-label="Close profile navigation"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="relative flex h-full w-[min(100%,320px)] flex-col overflow-y-auto bg-background px-6 py-8 shadow-2xl">
            <button
              type="button"
              className="mb-8 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            {content}
          </aside>
        </div>
      )}
    </>
  );
}
