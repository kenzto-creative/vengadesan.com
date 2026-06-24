"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Undo2 } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProjectLandingSidebar } from "@/components/sections/ProjectLandingSidebar";
import type { ProjectDetail, ProjectContentSection } from "@/lib/content";
import { cn } from "@/lib/utils";

const Globe = dynamic(
  () => import("@/components/Globe").then((m) => m.Globe),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 w-32 animate-pulse rounded-full bg-black/20" />
    ),
  }
);

type ProjectLandingClientProps = {
  project: ProjectDetail;
};

export function ProjectLandingClient({ project }: ProjectLandingClientProps) {
  const heroImage = project.heroImage ?? project.image;
  const gallery = project.galleryImages ?? [project.image, project.image];
  const sections = project.sections ?? buildFallbackSections(project);
  const gallerySplitIndex = sections.findIndex(
    (section) => section.heading === "Detailed Pages and Features"
  );
  const sectionsBeforeGallery =
    gallerySplitIndex === -1 ? sections : sections.slice(0, gallerySplitIndex);
  const sectionsAfterGallery =
    gallerySplitIndex === -1 ? [] : sections.slice(gallerySplitIndex);
  const relatedProjects = project.relatedProjects ?? [];

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8 pb-8 xl:grid xl:grid-cols-[minmax(0,1fr)_410px] xl:items-start xl:gap-10"
      >
        <div className="flex flex-col gap-8">
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-3 font-mono text-base font-light tracking-[0.1em] text-foreground transition-opacity hover:opacity-80"
          >
            <Undo2 className="h-6 w-6" strokeWidth={1.5} />
            Back
          </Link>

          <header className="flex flex-col gap-6">
            <h1 className="max-w-4xl font-mono text-[32px] leading-[38.4px] tracking-[0.03em]">
              {project.title}
            </h1>

            <ProjectActionRow liveUrl={project.liveUrl} hireUrl={project.hireUrl} />
          </header>

          <div className="overflow-hidden rounded-[36px] bg-card p-3">
            <div className="relative aspect-[1094/566] overflow-hidden rounded-[24px] bg-mine-shaft">
              <Image
                src={heroImage}
                alt={project.title}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1280px) 100vw, 1094px"
                priority
              />
            </div>
          </div>

          <ProjectMetaCard project={project} />

          <article className="rounded-[36px] bg-card p-6 md:p-8">
            {project.intro ? (
              <p className="font-mono text-sm leading-[19.6px] text-muted-foreground">
                {project.intro}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-8">
              {sectionsBeforeGallery.map((section, index) => (
                <ProjectContentBlock key={`${section.heading}-${index}`} section={section} />
              ))}
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            {gallery.slice(0, 2).map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="overflow-hidden rounded-[36px] bg-card p-3"
              >
                <div className="relative aspect-square overflow-hidden rounded-[24px] bg-mine-shaft">
                  <Image
                    src={image}
                    alt={`${project.title} gallery ${index + 1}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 535px"
                  />
                </div>
              </div>
            ))}
          </div>

          {sectionsAfterGallery.length > 0 ? (
            <article className="rounded-[36px] bg-card p-6 md:p-8">
              <div className="flex flex-col gap-8">
                {sectionsAfterGallery.map((section, index) => (
                  <ProjectContentBlock key={`${section.heading}-${index}`} section={section} />
                ))}
              </div>
            </article>
          ) : null}

          <ProjectActionRow liveUrl={project.liveUrl} hireUrl={project.hireUrl} />

          <Link
            href="/contact"
            className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[36px] bg-contact-yellow"
          >
            <h3 className="relative z-10 p-6 font-mono text-lg text-on-dark">Contact</h3>
            <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-6">
              <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full bg-black/10">
                <Globe className="h-full w-full" />
              </div>
            </div>
            <div className="absolute bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </Link>
        </div>

        <ProjectLandingSidebar
          relatedProjects={relatedProjects}
          className="xl:sticky xl:top-28 xl:self-start"
        />
      </motion.div>
    </MainLayout>
  );
}

function ProjectActionRow({
  liveUrl,
  hireUrl = "/contact",
}: {
  liveUrl?: string;
  hireUrl?: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-12 items-center justify-between rounded-[24px] border border-foreground/15 bg-foreground/[0.03] px-6 backdrop-blur-[2.5px] transition-colors hover:bg-foreground/[0.06] dark:border-white/16 dark:bg-white/[0.03]"
        >
          <span className="font-mono text-base font-light tracking-[0.1em]">Live Preview</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground dark:bg-white">
            <ArrowUpRight className="h-4 w-4 text-background dark:text-[#121212]" />
          </span>
        </a>
      ) : null}

      <Link
        href={hireUrl}
        className="group flex h-12 items-center justify-between rounded-[24px] bg-stack-blue px-6 transition-opacity hover:opacity-90"
      >
        <span className="font-mono text-base font-light tracking-[0.1em] text-white">
          Hire Me
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
          <ArrowUpRight className="h-4 w-4 text-[#121212]" />
        </span>
      </Link>
    </div>
  );
}

function ProjectMetaCard({ project }: { project: ProjectDetail }) {
  const rows = [
    { label: "Category:", value: project.category },
    { label: "Client:", value: project.client },
    { label: "Duration:", value: project.duration ?? project.year },
  ];

  return (
    <dl className="flex flex-col gap-3 rounded-[36px] bg-card p-6">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-wrap items-center gap-2">
          <dt className="font-mono text-xs font-light tracking-[0.1em] text-foreground dark:text-white">
            {row.label}
          </dt>
          <dd className="font-mono text-xs font-light tracking-[0.1em] text-foreground dark:text-white">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectContentBlock({ section }: { section: ProjectContentSection }) {
  const HeadingTag = section.level === "h3" ? "h3" : "h2";

  return (
    <section>
      <HeadingTag
        className={cn(
          "font-mono tracking-[0.1em] text-foreground dark:text-white",
          section.level === "h3" ? "text-lg" : "text-[28px] leading-[33.6px]"
        )}
      >
        {section.heading}
      </HeadingTag>

      {section.paragraphs?.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-5 font-mono text-sm leading-[19.6px] text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}

      {section.bullets ? (
        <ul className="mt-5 flex list-disc flex-col gap-3 pl-5 font-mono text-sm leading-[19.6px] text-muted-foreground">
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function buildFallbackSections(project: ProjectDetail): ProjectContentSection[] {
  return [
    {
      heading: "Overview",
      level: "h2",
      paragraphs: [project.overview],
    },
    {
      heading: "Challenge",
      level: "h3",
      paragraphs: [project.challenge],
    },
    {
      heading: "Solution",
      level: "h3",
      paragraphs: [project.solution],
    },
  ];
}
