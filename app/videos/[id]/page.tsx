import { notFound } from "next/navigation";
import { VideoPreviewPageClient } from "@/components/sections/VideoPreviewPageClient";
import {
  getVideoListingItem,
  getVideoListingNeighbors,
  VIDEO_LISTING,
} from "@/lib/content";

type VideoPreviewPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return VIDEO_LISTING.map((item) => ({ id: item.id }));
}

export default async function VideoPreviewPage({ params }: VideoPreviewPageProps) {
  const { id } = await params;
  const item = getVideoListingItem(id);

  if (!item) {
    notFound();
  }

  const { prev, next } = getVideoListingNeighbors(id);

  return <VideoPreviewPageClient item={item} prevItem={prev} nextItem={next} />;
}
