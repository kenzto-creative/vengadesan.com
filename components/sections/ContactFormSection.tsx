"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { CONTACT_FORM } from "@/lib/content";

export function ContactFormSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="rounded-[36px] bg-card p-6 md:p-8"
      aria-labelledby="enquiry-heading"
    >
      <h2 id="enquiry-heading" className="mb-8 font-mono text-3xl md:text-[32px] md:leading-[38.4px]">
        Enquiry Now
      </h2>

      <form className="flex flex-col gap-10 md:gap-[46px]" onSubmit={(e) => e.preventDefault()}>
        <div className="grid gap-10 xl:grid-cols-2 xl:gap-[70px]">
          <fieldset className="flex flex-col gap-10">
            <legend className="sr-only">Personal information</legend>
            <FormField label="Full Name*" name="fullName" defaultValue={CONTACT_FORM.fullName} required />
            <FormField label="Email*" name="email" type="email" defaultValue={CONTACT_FORM.email} required />
          </fieldset>
          <fieldset className="flex flex-col gap-10">
            <legend className="sr-only">Company information</legend>
            <FormField label="Company Name" name="company" defaultValue={CONTACT_FORM.company} />
            <FormField label="Phone Number*" name="phone" type="tel" defaultValue={CONTACT_FORM.phone} required />
          </fieldset>
        </div>

        <FormField label="Message" name="message" defaultValue={CONTACT_FORM.message} multiline />

        <button
          type="submit"
          className="inline-flex h-12 w-[179px] items-center justify-center rounded-[24px] bg-white font-mono text-base font-light tracking-[0.1em] text-[#121212] transition-colors hover:bg-white/90"
        >
          Submit
        </button>
      </form>
    </motion.section>
  );
}

function FormField({
  label,
  name,
  defaultValue,
  type = "text",
  multiline = false,
  required = false,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
  multiline?: boolean;
  required?: boolean;
}) {
  const id = useId();
  const fieldId = `${name}-${id}`;

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={fieldId} className="font-mono text-lg tracking-[0.1em] text-foreground/90">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={fieldId}
          name={name}
          defaultValue={defaultValue}
          rows={3}
          required={required}
          className="w-full resize-none border-0 border-b border-white/20 bg-transparent pb-3 font-mono text-base text-muted-foreground outline-none focus:border-white/50"
        />
      ) : (
        <input
          id={fieldId}
          name={name}
          type={type}
          defaultValue={defaultValue}
          required={required}
          className="w-full border-0 border-b border-white/20 bg-transparent pb-3 font-mono text-base text-muted-foreground outline-none focus:border-white/50"
        />
      )}
    </div>
  );
}
