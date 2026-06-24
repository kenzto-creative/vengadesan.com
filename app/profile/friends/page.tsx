"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { UserPlus } from "lucide-react";
import { FriendCard } from "@/components/cards/FriendCard";
import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { FriendsFilterHeader } from "@/components/sections/FriendsFilterHeader";
import {
  PROFILE_FRIENDS,
  type FriendFilterOption,
} from "@/lib/content";

export default function ProfileFriendsPage() {
  const [filter, setFilter] = useState<FriendFilterOption>("All");

  const friends = useMemo(
    () =>
      filter === "All"
        ? PROFILE_FRIENDS
        : PROFILE_FRIENDS.filter((friend) => friend.category === filter),
    [filter]
  );

  return (
    <ProfileLayout minimalSidebar>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col gap-8 pb-24"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
            Friends
          </h1>
          <FriendsFilterHeader value={filter} onChange={setFilter} />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-11">
          {friends.map((friend, index) => (
            <FriendCard
              key={friend.id}
              name={friend.name}
              role={friend.role}
              image={friend.image}
              index={index}
            />
          ))}
        </div>

        <Link
          href="/profile"
          aria-label="Add friend"
          className="fixed bottom-8 right-6 z-30 flex h-[91px] w-[91px] items-center justify-center rounded-full border border-white/30 bg-background text-foreground shadow-lg transition-transform hover:scale-105 sm:right-10 lg:right-16"
        >
          <UserPlus className="h-[18px] w-[18px]" strokeWidth={1.5} />
        </Link>
      </motion.div>
    </ProfileLayout>
  );
}
