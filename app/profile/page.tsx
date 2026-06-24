"use client";

import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { ProfileActionButtons } from "@/components/sections/ProfileActionButtons";
import { ProfileBioPanel } from "@/components/sections/ProfileBioPanel";
import { ProfileHeroCard } from "@/components/sections/ProfileHeroCard";

export default function ProfilePage() {
  return (
    <ProfileLayout activeTab="bio">
      <div className="grid gap-6 pb-8 xl:grid-cols-[minmax(280px,617px)_minmax(0,1fr)_auto] xl:items-start xl:gap-8">
        <ProfileHeroCard className="xl:sticky xl:top-28" />
        <ProfileBioPanel />
        <ProfileActionButtons className="xl:sticky xl:top-28" />
      </div>
    </ProfileLayout>
  );
}
