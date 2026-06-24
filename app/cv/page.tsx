"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { PageIntro } from "@/components/sections/PageIntro";
import { SITE } from "@/lib/constants";

export default function CvPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8"
      >
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <PageIntro
          title="CV Preview"
          description="Review my resume below or download the PDF version."
          action={
            <a
              href={SITE.cvDownload}
              download
              className="inline-flex items-center gap-2 rounded-[24px] bg-stack-blue px-5 py-3 font-mono text-sm text-white transition-opacity hover:opacity-90"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          }
        />

        <div className="overflow-hidden rounded-[36px] border border-white/10 bg-card">
          <iframe
            src={SITE.cvDownload}
            title="Vengat R. CV"
            className="h-[70vh] w-full bg-white"
          />
        </div>
      </motion.div>
    </MainLayout>
  );
}
