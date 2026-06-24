import { notFound } from "next/navigation";
import { TutorialLandingClient } from "./TutorialLandingClient";
import { getTutorialDetail } from "@/lib/content";

type TutorialPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { TUTORIALS } = await import("@/lib/content");
  return TUTORIALS.map((tutorial) => ({ slug: tutorial.slug }));
}

export default async function TutorialDetailPage({ params }: TutorialPageProps) {
  const { slug } = await params;
  const tutorial = getTutorialDetail(slug);

  if (!tutorial) {
    notFound();
  }

  return <TutorialLandingClient tutorial={tutorial} />;
}
