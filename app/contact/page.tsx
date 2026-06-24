"use client";

import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { BottomBentoRow } from "@/components/sections/BottomBentoRow";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { CONTACT_INFO } from "@/lib/content";

export default function ContactPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-[41px] pb-8"
      >
        <header>
          <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
            Let&apos;s Connect
          </h1>
        </header>

        <ContactFormSection />

        <section
          className="rounded-[36px] bg-card p-6 md:p-8"
          aria-labelledby="email-heading"
        >
          <h2 id="email-heading" className="font-mono text-lg tracking-[0.1em] text-foreground/90">
            Email
          </h2>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="mt-4 block font-mono text-2xl text-muted-foreground transition-colors hover:text-foreground md:text-3xl"
          >
            {CONTACT_INFO.email}
          </a>
        </section>

        <section
          className="rounded-[36px] bg-card p-6 md:p-8"
          aria-labelledby="phone-heading"
        >
          <h2 id="phone-heading" className="font-mono text-lg tracking-[0.1em] text-foreground/90">
            Phone Number
          </h2>
          <a
            href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
            className="mt-4 block font-mono text-2xl text-muted-foreground transition-colors hover:text-foreground md:text-3xl"
          >
            {CONTACT_INFO.phone}
          </a>
        </section>

        <BottomBentoRow variant="contact" />
      </motion.div>
    </MainLayout>
  );
}
