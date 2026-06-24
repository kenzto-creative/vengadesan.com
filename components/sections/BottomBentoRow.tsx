"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECT_IMAGES } from "@/lib/project-images";
import { StackCard } from "@/components/cards/StackCard";
import { cn } from "@/lib/utils";

const Globe = dynamic(
  () => import("@/components/Globe").then((m) => m.Globe),
  { ssr: false, loading: () => <div className="h-32 w-32 animate-pulse rounded-full bg-black/20" /> }
);

type BottomBentoRowProps = {
  className?: string;
  variant?: "about" | "stack" | "contact" | "projects" | "tutorials";
};

export function BottomBentoRow({ className, variant = "about" }: BottomBentoRowProps) {
  if (variant === "contact") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn("grid gap-3 lg:grid-cols-[1.1fr_0.9fr]", className)}
      >
        <ProjectsBento />
        <StackCard className="min-h-[280px]" />
      </motion.div>
    );
  }

  if (variant === "projects") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn("grid gap-3 lg:grid-cols-[1.1fr_0.9fr]", className)}
      >
        <ContactBento />
        <FramerPreviewBento />
      </motion.div>
    );
  }

  if (variant === "tutorials") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn("grid gap-3 lg:grid-cols-[1.1fr_0.9fr]", className)}
      >
        <ContactBento />
        <ProjectsBento />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className={cn("grid gap-3 md:grid-cols-2", className)}
    >
      <StackCard className="min-h-[280px]" />
      <ContactBento />
    </motion.div>
  );
}

function ContactBento() {
  return (
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
  );
}

function ProjectsBento() {
  return (
    <Link
      href="/projects"
      className="group relative flex min-h-[280px] items-end overflow-hidden rounded-[36px] bg-card p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
        }}
      />
      <div className="relative z-10">
        <h3 className="font-mono text-[28px] leading-[33.6px] text-on-dark">My Projects</h3>
      </div>
      <div className="absolute bottom-8 right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowUpRight className="h-5 w-5 text-[#121212]" />
      </div>
    </Link>
  );
}

function FramerPreviewBento() {
  return (
    <Link
      href="/projects/xzero"
      className="group relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[36px] bg-card"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="relative h-[180px] w-[280px] overflow-hidden rounded-[24px] bg-mine-shaft">
        <Image
          src={PROJECT_IMAGES.showcase}
          alt="Framer project preview"
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          sizes="280px"
        />
      </div>
      <div className="absolute bottom-8 right-8 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowUpRight className="h-5 w-5 text-[#121212]" />
      </div>
    </Link>
  );
}
