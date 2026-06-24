"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { TutorialSidebar } from "@/components/sections/TutorialSidebar";
import type { TutorialDetail } from "@/lib/content";

type TutorialLandingClientProps = {
  tutorial: TutorialDetail;
};

export function TutorialLandingClient({ tutorial }: TutorialLandingClientProps) {
  const titleLines = tutorial.title.split("\n");

  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8 pb-8 xl:grid xl:grid-cols-[minmax(0,1fr)_410px] xl:items-start xl:gap-8"
      >
        <div className="flex flex-col gap-8">
          <Link
            href="/tutorials"
            className="inline-flex w-fit items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tutorials
          </Link>

          <header>
            <h1 className="max-w-4xl whitespace-pre-line font-mono text-[32px] leading-[38.4px] tracking-[0.03em]">
              {titleLines.length > 1 ? (
                <>
                  {titleLines[0]}
                  {"\n"}
                  {titleLines.slice(1).join("\n")}
                </>
              ) : (
                tutorial.title
              )}
            </h1>
          </header>

          <div className="flex flex-col gap-3">
            <div className="relative aspect-video overflow-hidden rounded-[36px] bg-mine-shaft">
              <Image
                src={tutorial.heroImage}
                alt={tutorial.title.replace("\n", " ")}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 900px"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <button
                  type="button"
                  className="flex h-12 w-[68px] items-center justify-center rounded-lg bg-[#FF0033] transition-transform hover:scale-105"
                  aria-label="Play tutorial video"
                >
                  <Play className="ml-0.5 h-5 w-5 fill-white text-white" />
                </button>
              </div>
            </div>

            <dl className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[24px] bg-card px-5 py-4">
                <dt className="font-mono text-sm text-foreground">Date Added:</dt>
                <dd className="mt-2 font-mono text-sm text-muted-foreground">{tutorial.date}</dd>
              </div>
              <div className="rounded-[24px] bg-card px-5 py-4">
                <dt className="font-mono text-sm text-foreground">Video Duration:</dt>
                <dd className="mt-2 font-mono text-sm text-muted-foreground">{tutorial.duration}</dd>
              </div>
            </dl>
          </div>

          <article className="flex flex-col gap-8">
            <section>
              <h2 className="font-mono text-lg tracking-[0.1em]">Introduction</h2>
              <p className="mt-5 font-mono text-sm font-light leading-relaxed text-muted-foreground">
                {tutorial.intro}
              </p>
            </section>

            {tutorial.sections.map((section, index) => (
              <motion.section
                key={section.heading}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <h3 className="font-mono text-lg tracking-[0.1em]">{section.heading}</h3>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-5 font-mono text-sm font-light leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-5 flex list-disc flex-col gap-4 pl-5 font-mono text-sm font-light leading-relaxed text-muted-foreground">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </motion.section>
            ))}
          </article>
        </div>

        <TutorialSidebar currentSlug={tutorial.slug} className="xl:sticky xl:top-28" />
      </motion.div>
    </MainLayout>
  );
}
