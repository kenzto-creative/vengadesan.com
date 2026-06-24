"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROFILE_IMAGE_POSTS, PROFILE_VIDEO_POSTS } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

type ProfilePostFormat = "image" | "video";

type ProfilePostPanelProps = {
  className?: string;
  format?: ProfilePostFormat;
};

export function ProfilePostPanel({
  className,
  format = "image",
}: ProfilePostPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08 }}
      className={cn("flex flex-col gap-10", className)}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
          Profile
        </h1>
        <ProfilePostFormatToggle active={format} />
      </div>

      {format === "image" ? (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-[33px]">
          {PROFILE_IMAGE_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.05 }}
              className="group relative aspect-[363/320] overflow-hidden rounded-[36px] bg-mine-shaft dark:bg-card"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 363px"
              />
            </motion.article>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-7">
          {PROFILE_VIDEO_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + index * 0.05 }}
              className="group relative aspect-[375/668] overflow-hidden rounded-[36px] bg-mine-shaft dark:bg-card"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 375px"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/5">
                <span className="flex h-[52px] w-[74px] items-center justify-center rounded-lg bg-[#FF0033] shadow-lg transition-transform group-hover:scale-105">
                  <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function ProfilePostFormatToggle({ active }: { active: ProfilePostFormat }) {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/profile/post"
        className={cn(
          "inline-flex h-12 min-w-[95px] items-center justify-center rounded-[24px] px-6 font-mono text-base font-light tracking-[0.1em] transition-colors",
          active === "image"
            ? "bg-white/10 text-foreground backdrop-blur-[2.5px]"
            : "text-foreground/70 hover:text-foreground"
        )}
        aria-current={active === "image" ? "page" : undefined}
      >
        Image
      </Link>
      <Link
        href="/profile/post/video"
        className={cn(
          "inline-flex h-12 min-w-[95px] items-center justify-center rounded-[24px] px-6 font-mono text-base font-light tracking-[0.1em] transition-colors",
          active === "video"
            ? "bg-white/10 text-foreground backdrop-blur-[2.5px]"
            : "text-foreground/70 hover:text-foreground"
        )}
        aria-current={active === "video" ? "page" : undefined}
      >
        Video
      </Link>
    </div>
  );
}
