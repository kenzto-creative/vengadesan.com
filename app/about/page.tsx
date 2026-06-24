"use client";

import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";

const experiences = [
  {
    role: "Senior Product Designer",
    company: "Kenzto Creative Solutions",
    period: "2022 — Present",
    description:
      "Leading product design for SaaS and agency clients, from discovery through high-fidelity prototypes and design systems.",
  },
  {
    role: "UI/UX Designer",
    company: "Freelance",
    period: "2019 — 2022",
    description:
      "Designed and shipped Framer websites, mobile apps, and brand identities for startups and creative agencies.",
  },
];

const education = [
  {
    degree: "Bachelor of Design",
    school: "Design Institute",
    period: "2015 — 2019",
  },
];

export default function AboutPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8"
      >
        <header>
          <h1 className="font-mono text-4xl tracking-[0.05em] md:text-5xl">
            About Me
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
            I&apos;m Vengat R., a product designer focused on crafting intuitive
            digital experiences. I blend research, visual design, and prototyping
            to build products people love.
          </p>
        </header>

        <div className="grid gap-3 lg:grid-cols-2">
          <section
            className="rounded-[36px] bg-card p-6 md:p-8"
            aria-labelledby="experience-heading"
          >
            <h2
              id="experience-heading"
              className="mb-6 font-mono text-lg tracking-[0.1em]"
            >
              Experience
            </h2>
            <div className="flex flex-col gap-8">
              {experiences.map((item) => (
                <article key={item.role} className="border-b border-white/10 pb-8 last:border-0 last:pb-0">
                  <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-mono text-base">{item.role}</h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mb-2 font-mono text-sm text-stack-blue">
                    {item.company}
                  </p>
                  <p className="font-mono text-sm font-light leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            className="rounded-[36px] bg-card p-6 md:p-8"
            aria-labelledby="education-heading"
          >
            <h2
              id="education-heading"
              className="mb-6 font-mono text-lg tracking-[0.1em]"
            >
              Education
            </h2>
            {education.map((item) => (
              <article key={item.degree}>
                <h3 className="font-mono text-base">{item.degree}</h3>
                <p className="mt-1 font-mono text-sm text-stack-blue">
                  {item.school}
                </p>
                <p className="mt-2 font-mono text-xs text-muted-foreground">
                  {item.period}
                </p>
              </article>
            ))}
          </section>
        </div>
      </motion.div>
    </MainLayout>
  );
}
