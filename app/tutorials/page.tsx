"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";

const tutorials = [
  {
    title: "Framer's Advanced Animation: A Masterclass in Dynamic Designs",
    date: "Feb 7, 2024",
    duration: "11:27",
    gradient: "from-[#214ADE] to-[#4E5DE4]",
  },
  {
    title: "Mastering Framer Basics: A Step-by-Step Guide for Beginners",
    date: "Nov 1, 2023",
    duration: "12:06",
    gradient: "from-[#F7A307] to-[#FFB84D]",
  },
  {
    title: "Responsive Layouts in Framer: From Mobile to Desktop",
    date: "Aug 15, 2023",
    duration: "9:42",
    gradient: "from-[#8CFFB6] to-[#214ADE]",
  },
];

export default function TutorialsPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8"
      >
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-mono text-4xl tracking-[0.05em] md:text-5xl">
              Tutorials
            </h1>
            <p className="mt-4 font-mono text-sm font-light text-muted-foreground">
              Design tips, Framer walkthroughs, and creative process breakdowns.
            </p>
          </div>
          <div className="rounded-[36px] bg-card px-8 py-6 text-center">
            <p className="font-mono text-3xl">8</p>
            <p className="font-mono text-xs font-light tracking-[0.18em] text-muted-foreground">
              Total Tutorials
            </p>
          </div>
        </header>

        <div className="grid gap-3 lg:grid-cols-[1fr_410px]">
          <div className="flex flex-col gap-3">
            {tutorials.map((tutorial, index) => (
              <motion.article
                key={tutorial.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href="/tutorials"
                  className="group flex flex-col overflow-hidden rounded-[36px] bg-card sm:flex-row"
                >
                  <div
                    className={`relative flex h-40 shrink-0 items-center justify-center bg-gradient-to-br sm:h-auto sm:w-72 ${tutorial.gradient}`}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                      <Play className="h-5 w-5 fill-white text-white" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-center p-6">
                    <h2 className="font-mono text-lg leading-snug">{tutorial.title}</h2>
                    <div className="mt-3 flex gap-4 font-mono text-sm text-muted-foreground">
                      <time>{tutorial.date}</time>
                      <span>{tutorial.duration}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <aside className="flex flex-col gap-3">
            <h2 className="font-mono text-lg">Other Tutorials</h2>
            {tutorials.slice(0, 2).map((tutorial) => (
              <Link
                key={`other-${tutorial.title}`}
                href="/tutorials"
                className="overflow-hidden rounded-[36px] bg-card p-4 transition-colors hover:bg-card/80"
              >
                <div
                  className={`mb-4 h-24 rounded-[10px] bg-gradient-to-br ${tutorial.gradient}`}
                />
                <h3 className="font-mono text-sm leading-snug">{tutorial.title}</h3>
                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  {tutorial.date}
                </p>
              </Link>
            ))}
            <Link
              href="/tutorials"
              className="flex items-center justify-center gap-3 rounded-[36px] bg-card px-4 py-3 font-mono text-sm font-light tracking-[0.1em] transition-colors hover:bg-card/80"
            >
              View All
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#121212]">
                →
              </span>
            </Link>
          </aside>
        </div>
      </motion.div>
    </MainLayout>
  );
}
