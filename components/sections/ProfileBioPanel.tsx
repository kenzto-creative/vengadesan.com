"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  FileText,
  Languages,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { PROFILE } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ProfileField = {
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
};

const BIO_FIELDS: ProfileField[] = [
  {
    label: "DATE OF BIRTH",
    value: PROFILE.dateOfBirth,
    icon: CalendarDays,
  },
  {
    label: "PHONE NUMBER",
    value: PROFILE.phone,
    icon: Phone,
    href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
  },
  {
    label: "EMAIL ID",
    value: PROFILE.email,
    icon: Mail,
    href: `mailto:${PROFILE.email}`,
  },
  {
    label: "ADDRESS",
    value: PROFILE.location,
    icon: MapPin,
  },
];

type ProfileBioPanelProps = {
  className?: string;
};

export function ProfileBioPanel({ className }: ProfileBioPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08 }}
      className={cn("flex flex-col gap-8", className)}
    >
      <div className="overflow-hidden rounded-[27px] bg-stack-blue px-6 py-8 sm:px-10 sm:py-10">
        <div className="ml-auto flex max-w-[377px] flex-col items-end gap-3 text-right text-white">
          <p className="font-mono text-[32px] leading-[38.4px] tracking-[0.08em] sm:text-[40px]">
            {PROFILE.fullName}
          </p>
          <p className="font-mono text-xl leading-[19.6px]">
            {PROFILE.headline.toUpperCase()}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
          Profile
        </h1>

        <div className="flex flex-col gap-9">
          {BIO_FIELDS.map(({ label, value, icon: Icon, href }, index) => (
            <ProfileInfoRow
              key={label}
              label={label}
              value={value}
              icon={Icon}
              href={href}
              delay={0.1 + index * 0.04}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

type ProfileObjectivePanelProps = {
  className?: string;
};

export function ProfileObjectivePanel({ className }: ProfileObjectivePanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.08 }}
      className={cn("flex flex-col gap-10", className)}
    >
      <h1 className="font-mono text-[32px] leading-[38.4px] tracking-[0.05em]">
        Profile
      </h1>

      <ProfileInfoRow
        label="About"
        value={PROFILE.about}
        icon={FileText}
        multiline
      />
      <ProfileInfoRow
        label="Languages"
        value={PROFILE.languages}
        icon={Languages}
      />

      <section aria-labelledby="platforms-heading" className="flex flex-col gap-5">
        <h2
          id="platforms-heading"
          className="pl-24 font-mono text-sm leading-[19.6px] text-muted-foreground"
        >
          Platforms
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
          {["Behance", "Dribbble", "Instagram", "Framer", "Figma"].map((platform) => (
            <div
              key={platform}
              className="flex aspect-square items-center justify-center rounded-[27px] bg-mine-shaft dark:bg-card"
            >
              <span className="font-mono text-sm text-muted-foreground">{platform}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

function ProfileInfoRow({
  label,
  value,
  icon: Icon,
  href,
  multiline = false,
  delay = 0,
}: {
  label: string;
  value: string;
  icon: LucideIcon;
  href?: string;
  multiline?: boolean;
  delay?: number;
}) {
  const content = (
    <div className="flex flex-col gap-2">
      <p className="font-mono text-sm leading-[19.6px] text-muted-foreground">
        {label}
      </p>
      <p
        className={cn(
          "font-mono text-xl leading-[38.4px] tracking-[0.1333em] text-foreground sm:text-2xl",
          multiline && "max-w-[656px] text-base leading-relaxed tracking-[0.08em] sm:text-xl"
        )}
      >
        {value}
      </p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex items-start gap-6"
    >
      <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#1D1D1D] text-foreground">
        <Icon className="h-8 w-8" strokeWidth={1.5} />
      </div>

      {href ? (
        <a href={href} className="transition-opacity hover:opacity-80">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}
