"use client"

import { useInView } from "@/hooks/use-in-view"
import { Mail, Phone, Linkedin, Github, Instagram, ArrowUpRight } from "lucide-react"

const contactLinks = [
  {
    label: "rizkialfarabi205@gmail.com",
    href: "mailto:rizkialfarabi205@gmail.com",
    icon: Mail,
    description: "Email me",
  },
  {
    label: "08973369508",
    href: "tel:+6208973369508",
    icon: Phone,
    description: "Call me",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/m-rizki-alfarabi/",
    icon: Linkedin,
    description: "Connect on LinkedIn",
  },
  {
    label: "GitHub",
    href: "https://github.com/rizkialfrb",
    icon: Github,
    description: "View my code",
  },
  {
    label: "@rizkialfrb",
    href: "https://instagram.com/rizkialfrb",
    icon: Instagram,
    description: "Follow on Instagram",
  },
]

export function ContactSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="mx-auto max-w-4xl text-center">
        <div
          className={`transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-2 font-mono text-sm tracking-widest text-primary">
            06. CONTACT
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl text-balance">
            {"Let's Collaborate"}
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            Whether you need a performant website, SEO strategy, or a complete
            web solution, I{"'"}d love to discuss your project.
          </p>
        </div>

        <div
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {contactLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary/40 hover:-translate-y-0.5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">
                    {link.description}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {link.label}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            )
          })}
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="mailto:rizkialfarabi205@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
          >
            <Mail className="h-4 w-4" />
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  )
}
