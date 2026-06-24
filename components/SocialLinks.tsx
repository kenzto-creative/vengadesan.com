import Link from "next/link";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS } from "@/lib/constants";

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.203 4.772-3.027 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5.078A8.686 8.686 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.032-.218.084-.336.125-4.679 1.513-7.145 5.602-7.334 5.925a8.523 8.523 0 01-2.799-6.054zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.055-.022a61.09 61.09 0 012.782 5.107c-.3.021-.608.043-.913.043-2.36 0-4.591-.608-6.388-1.991zm5.848-.082a21.67 21.67 0 01-2.422-4.353c2.913.218 5.509.218 5.775.218a8.512 8.512 0 01-2.353 4.135z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const icons = {
  twitter: TwitterIcon,
  dribbble: DribbbleIcon,
  youtube: YoutubeIcon,
};

type SocialLinksProps = {
  className?: string;
  variant?: "dark" | "light";
};

export function SocialLinks({ className, variant = "dark" }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map(({ label, href, icon }) => {
        const Icon = icons[icon];
        return (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "group relative flex h-12 w-12 items-center justify-center rounded-[36px] transition-colors duration-300",
              variant === "dark"
                ? "text-white hover:bg-white/10"
                : "text-[#121212] hover:bg-black/5"
            )}
          >
            <span className="absolute inset-0 rounded-[36px] border border-current opacity-30" />
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}
