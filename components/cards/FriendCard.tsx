"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FRIEND_MUTUAL_AVATARS } from "@/lib/content";
import { cn } from "@/lib/utils";

type FriendCardProps = {
  name: string;
  role: string;
  image: string;
  href?: string;
  index?: number;
  className?: string;
};

export function FriendCard({
  name,
  role,
  image,
  href = "/profile",
  index = 0,
  className,
}: FriendCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={cn(
        "flex flex-col gap-[30px] rounded-[36px] bg-[#111111] p-3 dark:bg-card",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden rounded-[24px]">
        <Image
          src={image}
          alt={`${name} portrait`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 386px"
        />
      </div>

      <div className="flex flex-col gap-6 px-3 pb-3">
        <div className="flex flex-col gap-2 text-center">
          <h2 className="font-mono text-2xl leading-[25.2px] text-foreground">{name}</h2>
          <p className="font-mono text-xs font-light tracking-[0.1em] text-muted-foreground">
            {role}
          </p>
        </div>

        <div className="flex items-center justify-center gap-[30px]">
          {FRIEND_MUTUAL_AVATARS.slice(0, 4).map((avatar, avatarIndex) => (
            <div
              key={avatar}
              className="relative h-[43px] w-[43px] overflow-hidden rounded-full"
            >
              <Image
                src={avatar}
                alt={`Mutual connection ${avatarIndex + 1}`}
                fill
                className="object-cover"
                sizes="43px"
              />
            </div>
          ))}
          <div className="relative flex h-[43px] w-[43px] items-center justify-center overflow-hidden rounded-full bg-white">
            <Image
              src={FRIEND_MUTUAL_AVATARS[4]}
              alt=""
              fill
              className="object-cover opacity-30"
              sizes="43px"
              aria-hidden
            />
            <span className="relative z-10 font-mono text-xs font-light tracking-[0.1em] text-[#121212]">
              +4
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <span className="font-mono text-xs font-light tracking-[0.1em] text-muted-foreground">
            View Profile
          </span>
          <Link
            href={href}
            aria-label={`View ${name}'s profile`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#121212] transition-transform hover:scale-105"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
