import { notFound } from "next/navigation";
import { ProjectLandingClient } from "./ProjectLandingClient";
import { getProjectDetail } from "@/lib/content";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { PROJECTS } = await import("@/lib/content");
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  return <ProjectLandingClient project={project} />;
}
