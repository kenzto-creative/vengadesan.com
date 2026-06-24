"use client";

import Link from "next/link";
import { Music2, Share2, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";

const ACTIONS = [
  { label: "Share profile", icon: Share2, href: undefined },
  { label: "Play intro audio", icon: Music2, href: undefined },
  { label: "Connect", icon: UserPlus, href: "/profile/friends" },
] as const;

type ProfileActionButtonsProps = {
  className?: string;
};

function ActionControl({
  label,
  icon: Icon,
  href,
}: (typeof ACTIONS)[number]) {
  const controlClassName =
    "relative flex h-12 w-12 items-center justify-center rounded-[36px] text-foreground transition-colors hover:bg-foreground/5";

  const content = (
    <>
      <span className="absolute inset-0 rounded-[36px] border border-foreground/30 dark:border-white/30" />
      <Icon className="h-6 w-6" strokeWidth={1.5} />
    </>
  );

  return href ? (
    <Link href={href} aria-label={label} className={controlClassName}>
      {content}
    </Link>
  ) : (
    <button type="button" aria-label={label} className={controlClassName}>
      {content}
    </button>
  );
}

export function ProfileActionButtons({ className }: ProfileActionButtonsProps) {
  return (
    <>
      <div className="flex justify-end gap-4 xl:hidden">
        {ACTIONS.map((action) => (
          <ActionControl key={action.label} {...action} />
        ))}
      </div>

      <div className={cn("hidden flex-col gap-6 xl:flex", className)}>
        {ACTIONS.map((action) => (
          <ActionControl key={action.label} {...action} />
        ))}
      </div>
    </>
  );
}
