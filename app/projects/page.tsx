"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PROJECT_IMAGES } from "@/lib/constants";

const projects = [
  { title: "Charmant Framer Website", category: "Web Design", image: PROJECT_IMAGES[0] },
  { title: "+XZERO® Screen", category: "Agency Template", image: PROJECT_IMAGES[3] },
  { title: "DesignCube Framer Website", category: "Web Design", image: PROJECT_IMAGES[6] },
  { title: "HealthWell Website", category: "Healthcare", image: PROJECT_IMAGES[7] },
  { title: "Predict Screen", category: "SaaS", image: PROJECT_IMAGES[1] },
  { title: "Huggl 2.0", category: "Product", image: PROJECT_IMAGES[2] },
];

export default function ProjectsPage() {
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
              My Projects
            </h1>
            <p className="mt-4 font-mono text-sm font-light text-muted-foreground">
              Selected work across web, product, and brand design.
            </p>
          </div>
          <div className="rounded-[36px] bg-card px-8 py-6 text-center">
            <p className="font-mono text-3xl">12</p>
            <p className="font-mono text-xs font-light tracking-[0.18em] text-muted-foreground">
              Total Projects
            </p>
          </div>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <Link
                href="/projects"
                className="group relative block overflow-hidden rounded-[36px] bg-mine-shaft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
                  <div>
                    <p className="font-mono text-xs tracking-[0.1em] text-white/60">
                      {project.category}
                    </p>
                    <h2 className="mt-1 font-mono text-lg text-white">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-[#121212]" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </MainLayout>
  );
}
