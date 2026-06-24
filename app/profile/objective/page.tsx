"use client";

import { ProfileLayout } from "@/components/layout/ProfileLayout";
import { ProfileActionButtons } from "@/components/sections/ProfileActionButtons";
import { ProfileHeroCard } from "@/components/sections/ProfileHeroCard";
import { ProfileObjectivePanel } from "@/components/sections/ProfileBioPanel";

export default function ProfileObjectivePage() {
  return (
    <ProfileLayout activeTab="objective">
      <div className="grid gap-6 pb-8 xl:grid-cols-[minmax(280px,617px)_minmax(0,1fr)_auto] xl:items-start xl:gap-8">
        <ProfileHeroCard flipEnabled={false} className="xl:sticky xl:top-28" />
        <ProfileObjectivePanel />
        <ProfileActionButtons className="xl:sticky xl:top-28" />
      </div>
    </ProfileLayout>
  );
}
