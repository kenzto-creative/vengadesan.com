"use client";

import { motion } from "framer-motion";
import { MainLayout } from "@/components/layout/MainLayout";
import { SocialLinks } from "@/components/SocialLinks";
import { useId } from "react";

export default function ContactPage() {
  return (
    <MainLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-8"
      >
        <header className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="font-mono text-4xl tracking-[0.05em] md:text-5xl">
              Let&apos;s Connect
            </h1>
            <p className="mt-4 font-mono text-sm font-light text-muted-foreground">
              Have a project in mind? Send an enquiry and I&apos;ll get back to you.
            </p>
          </div>
          <SocialLinks />
        </header>

        <section
          className="rounded-[36px] bg-card p-6 md:p-8"
          aria-labelledby="enquiry-heading"
        >
          <h2 id="enquiry-heading" className="mb-8 font-mono text-3xl md:text-4xl">
            Enquiry Now
          </h2>

          <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-10 md:grid-cols-2 md:gap-x-[70px]">
              <fieldset className="flex flex-col gap-10">
                <legend className="sr-only">Personal information</legend>
                <FormField
                  label="Full Name*"
                  name="fullName"
                  defaultValue="Vengadesan r"
                  required
                />
                <FormField
                  label="Email*"
                  name="email"
                  defaultValue="kenzto.creative@gmail.com"
                  type="email"
                  required
                />
              </fieldset>
              <fieldset className="flex flex-col gap-10">
                <legend className="sr-only">Company information</legend>
                <FormField
                  label="Company Name"
                  name="company"
                  defaultValue="Kenzto Creative Solutions"
                />
                <FormField
                  label="Phone Number*"
                  name="phone"
                  defaultValue="+91 70105 59179"
                  type="tel"
                  required
                />
              </fieldset>
            </div>

            <FormField
              label="Message"
              name="message"
              defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              multiline
            />

            <button
              type="submit"
              className="inline-flex h-12 w-[179px] items-center justify-center rounded-[24px] bg-white font-mono text-base font-light tracking-[0.1em] text-[#121212] transition-colors hover:bg-white/90"
            >
              Submit
            </button>
          </form>
        </section>

        <div className="grid gap-[41px] md:grid-cols-2">
          <ContactInfoCard label="Email" value="hello.kenzto@gmail.com" href="mailto:hello.kenzto@gmail.com" />
          <ContactInfoCard label="Phone Number" value="+91 81481 76914" href="tel:+918148176914" />
        </div>
      </motion.div>
    </MainLayout>
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
      <label
        htmlFor={fieldId}
        className="font-mono text-lg tracking-[0.1em] text-foreground/90"
      >
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

function ContactInfoCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <article className="rounded-[36px] bg-card p-6">
      <h3 className="font-mono text-lg tracking-[0.1em] text-foreground/90">
        {label}
      </h3>
      <a
        href={href}
        className="mt-4 block font-mono text-2xl text-muted-foreground transition-colors hover:text-foreground md:text-3xl"
      >
        {value}
      </a>
    </article>
  );
}
