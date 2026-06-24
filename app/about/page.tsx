"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { BottomBentoRow } from "@/components/sections/BottomBentoRow";
import { ExperienceStackCard } from "@/components/sections/ExperienceStackCard";
import {
  ABOUT_EDUCATION,
  ABOUT_EXPERIENCE,
  CERTIFICATES,
  HOBBIES,
  ROLES,
} from "@/lib/content";

export default function AboutPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-3 pb-8"
      >
        <header>
          <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em] md:text-[32px]">
            About Me
          </h1>
        </header>

        <div className="flex flex-col gap-3">
          <ExperienceStackCard
            title="Roles"
            items={ROLES.map((role) => ({ title: role }))}
          />
          <ExperienceStackCard
            title="Experience"
            items={ABOUT_EXPERIENCE.map((item) => ({
              title: item.title,
              subtitle: item.subtitle,
              active: item.active,
            }))}
            delay={0.05}
          />
          <ExperienceStackCard
            title="Education"
            items={ABOUT_EDUCATION.map((item) => ({
              title: item.title,
              subtitle: item.subtitle,
              active: item.active,
            }))}
            delay={0.1}
          />
          <ExperienceStackCard
            title="Hobbies"
            items={HOBBIES.map((hobby) => ({ title: hobby }))}
            delay={0.15}
          />

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
            aria-labelledby="certificates-heading"
          >
            <h2 id="certificates-heading" className="font-mono text-lg tracking-[0.1em]">
              Certificates
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {CERTIFICATES.map((certificate) => (
                <article
                  key={certificate.title}
                  className="group overflow-hidden rounded-[36px] bg-card"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
                      <h3 className="max-w-[80%] font-mono text-sm leading-snug text-white">
                        {certificate.title}
                      </h3>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 transition-opacity group-hover:opacity-100">
                        <ArrowUpRight className="h-4 w-4 text-[#121212]" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          <BottomBentoRow />
        </div>
      </motion.div>
    </MainLayout>
  );
}
