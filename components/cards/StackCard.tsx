"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { cn } from "@/lib/utils";

function FramerLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-12 w-12" aria-hidden>
      <path fill="#000" d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" />
    </svg>
  );
}

function FigmaLogo() {
  return (
    <svg viewBox="0 0 38 57" className="h-12 w-auto" aria-hidden>
      <path fill="#1abcfe" d="M19 28.5c0-5.523 4.477-10 10-10V8.5c0-5.523-4.477-10-10-10S9 3.477 9 8.5v10c0 5.523 4.477 10 10 10z" />
      <path fill="#0acf83" d="M9 38.5c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10S9 44.023 9 38.5z" />
      <path fill="#ff7262" d="M9 18.5c-5.523 0-10-4.477-10-10S3.477-1.5 9-1.5v20z" />
      <path fill="#f24e1e" d="M19 8.5V-1.5c-5.523 0-10 4.477-10 10h10z" />
      <path fill="#a259ff" d="M9 8.5H-1c0 5.523 4.477 10 10 10V8.5z" />
    </svg>
  );
}

function ChatGPTLogo() {
  return (
    <svg viewBox="0 0 41 41" className="h-11 w-11" aria-hidden>
      <path
        fill="#000"
        d="M37.532 16.87a9.963 9.963 0 00-.856-8.184 10.078 10.078 0 00-10.855-4.835 9.964 9.964 0 00-7.112-2.984 10.079 10.079 0 00-9.632 6.977 9.967 9.967 0 00-6.664 4.835 10.08 10.08 0 001.24 11.817 9.965 9.965 0 00.856 8.185 10.079 10.079 0 0010.855 4.835 9.965 9.965 0 007.113 2.985 10.079 10.079 0 009.631-6.978 9.967 9.967 0 006.664-4.834 10.079 10.079 0 00-1.24-11.819zm-14.013 20.35a7.476 7.476 0 01-4.786-1.735l.241-.13 8.049-4.634a1.294 1.294 0 00.655-1.134V19.98l3.395 1.96a.11.11 0 01.06.083v6.803a7.505 7.505 0 01-7.614 1.394zM9.66 31.342a7.476 7.476 0 01-.894-5.023l.241.145 8.048 4.634a1.294 1.294 0 001.308 0l9.827-5.673v3.928a.11.11 0 01-.045.094L16.8 33.533a7.505 7.505 0 01-7.14.809zm-1.875-15.9a7.476 7.476 0 013.988-3.293l.241.145-8.048 4.634a1.294 1.294 0 00-.655 1.134v9.268l-3.395-1.96a.11.11 0 01-.06-.083v-6.845zm25.235 5.856l-8.048-4.634a1.294 1.294 0 00-1.308 0l-9.827 5.673v-3.928a.11.11 0 01.045-.094l9.827-5.673a7.505 7.505 0 0111.311 6.656 7.476 7.476 0 01-.999 1.03zm-21.12-7.003l3.395 1.96v6.803a.11.11 0 01-.06.083l-3.395 1.96V19.98a1.294 1.294 0 00-.655-1.134l-8.049-4.634-.241-.145a7.476 7.476 0 014.005 3.293v9.268zm11.314 2.635l-3.395-1.96V13.27a.11.11 0 01.06-.083l3.395-1.96 3.395 1.96a1.294 1.294 0 00.655 1.134v6.803l-3.395 1.96a1.294 1.294 0 01-.655 0zm3.395-9.268V13.27l8.049 4.634.241.145a7.476 7.476 0 00-4.005-3.293l-9.827 5.673a.11.11 0 00-.045.094v3.928l3.395-1.96a1.294 1.294 0 00.655-1.134l.241-.145 8.049-4.634z"
      />
    </svg>
  );
}

function SlackLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-11 w-11" aria-hidden>
      <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" />
      <path fill="#E01E5A" d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" />
      <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" />
      <path fill="#36C5F0" d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" />
      <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" />
      <path fill="#2EB67D" d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.528 2.528 0 0 1-2.523-2.521V2.522A2.528 2.528 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" />
      <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.528 2.528 0 0 1-2.523-2.522v-2.522h2.523z" />
      <path fill="#ECB22E" d="M15.165 17.688a2.528 2.528 0 0 1-2.523-2.523 2.527 2.527 0 0 1 2.523-2.523h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  );
}

const logos = [
  { id: "slack", node: <SlackLogo /> },
  { id: "framer", node: <FramerLogo /> },
  { id: "figma", node: <FigmaLogo /> },
  {
    id: "photoshop",
    node: (
      <Image
        src="/images/photoshop.png"
        alt=""
        width={46}
        height={45}
        className="object-contain"
      />
    ),
  },
  { id: "chatgpt", node: <ChatGPTLogo /> },
];

type StackCardProps = {
  href?: string;
  className?: string;
  delay?: number;
};

export function StackCard({
  href = "/stack",
  className,
  delay = 0.1,
}: StackCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("relative h-full min-h-0", className)}
    >
      <Link
        href={href}
        className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[36px] bg-stack-blue sm:min-h-[250px] lg:min-h-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="View my stack"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(78, 93, 228, 1) 4%, rgba(78, 93, 228, 0) 4%)",
            backgroundSize: "24px 24px",
          }}
        />

        <h3 className="relative z-10 p-6 font-mono text-lg tracking-[0.1em] text-on-dark">
          My Stack
        </h3>

        <div className="relative z-10 flex flex-1 items-center justify-center px-4 pb-6">
          <div className="flex items-center -space-x-[18px]">
            {logos.map(({ id, node }, index) => (
              <motion.div
                key={id}
                animate={{
                  y: hovered ? -6 : 0,
                  scale: hovered ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex h-[71px] w-[71px] shrink-0 items-center justify-center rounded-[24px] bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)]"
              >
                {node}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-10">
          <ArrowButton visible={hovered} />
        </div>
      </Link>
    </motion.div>
  );
}
