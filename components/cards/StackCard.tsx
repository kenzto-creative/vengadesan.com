"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { cn } from "@/lib/utils";

function NotionLogo() {
  return (
    <svg viewBox="0 0 100 100" className="h-11 w-11" aria-hidden>
      <path
        fill="#000"
        d="M6.017 4.313l55.333-4.087c6.797-.583 8.543-.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277-1.553 6.787-6.99 7.193L24.467 99.967c-4.08.193-6.023-.39-8.16-3.113L3.3 79.203c-2.333-3.113-3.3-5.443-3.3-8.167V11.113c0-3.497 1.553-6.413 6.017-6.8z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M61.35.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v59.823c0 2.723.967 5.053 3.3 8.167l13.007 17.65c2.137 2.723 4.08 3.307 8.16 3.113l64.257-3.89c5.433-.407 6.99-2.917 6.99-7.193V20.64c0-2.21-.873-2.847-3.443-4.733L74.167 3.143c-4.273-3.107-6.02-3.5-12.817-2.917zM25.92 19.523c-5.247.353-6.437.437-9.417-1.99L8.927 11.507c-.777-.78-.39-1.167 0-1.553l3.887-2.723c1.167-1.167 2.137-1.553 4.277-1.94l52.683-3.887c4.277-.19 5.247.193 7.01 1.553l10.223 7.01c.777.58 1.94 1.553.777 1.553l-54.733 3.887-.777-.39zm-4.86 59.383V29.357c0-2.333.777-3.497 3.497-3.693l58.933-3.497c2.527-.193 3.693.777 3.693 3.11v49.743c0 2.527-.777 4.277-3.887 4.47l-56.207 3.3c-3.497.193-5.053-.97-5.053-4.277z"
      />
    </svg>
  );
}

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

const logos = [
  { id: "notion", node: <NotionLogo /> },
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
      className={cn("relative", className)}
    >
      <Link
        href={href}
        className="group relative flex h-full min-h-[220px] flex-col overflow-hidden rounded-[36px] bg-stack-blue sm:min-h-[250px] lg:min-h-[273px]"
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

        <h3 className="relative z-10 p-6 font-mono text-lg tracking-[0.1em] text-white">
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
