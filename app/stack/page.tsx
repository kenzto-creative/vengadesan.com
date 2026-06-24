"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MainLayout } from "@/components/layout/MainLayout";
import { STACK_TOOLS } from "@/lib/constants";

export default function StackPage() {
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
            My Stack
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm font-light leading-relaxed tracking-wide text-muted-foreground">
            Tools and technologies I use daily to design, prototype, and ship
            products.
          </p>
        </header>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STACK_TOOLS.map((tool, index) => (
            <motion.article
              key={tool.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="flex items-center gap-5 rounded-[36px] bg-stack-blue p-6 shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_8px_32px_rgba(33,74,222,0.3)]"
            >
              <div className="flex h-[71px] w-[71px] shrink-0 items-center justify-center rounded-[24px] bg-white">
                {tool.image ? (
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={46}
                    height={45}
                    className="object-contain"
                  />
                ) : (
                  <span className="font-mono text-lg font-medium text-[#121212]">
                    {tool.name.charAt(0)}
                  </span>
                )}
              </div>
              <div>
                <h2 className="font-mono text-lg tracking-[0.1em] text-white">
                  {tool.name}
                </h2>
                <p className="font-mono text-xs font-light text-white/70">
                  Design & productivity
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </MainLayout>
  );
}
