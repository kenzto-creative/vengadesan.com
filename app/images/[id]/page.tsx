import { notFound } from "next/navigation";
import { ImagePreviewPageClient } from "@/components/sections/ImagePreviewPageClient";
import {
  getImageListingItem,
  getImageListingNeighbors,
  IMAGE_LISTING,
} from "@/lib/content";

type ImagePreviewPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return IMAGE_LISTING.map((item) => ({ id: item.id }));
}

export default async function ImagePreviewPage({ params }: ImagePreviewPageProps) {
  const { id } = await params;
  const item = getImageListingItem(id);

  if (!item) {
    notFound();
  }

  const { prev, next } = getImageListingNeighbors(id);

  return <ImagePreviewPageClient item={item} prevItem={prev} nextItem={next} />;
}
