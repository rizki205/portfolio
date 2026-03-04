"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Accent glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl w-full">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="animate-fade-up mb-4 font-mono text-sm tracking-widest text-primary opacity-0">
              WEB DEVELOPER & SEO SPECIALIST
            </p>
            <h1 className="animate-fade-up animation-delay-200 mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 md:text-5xl lg:text-6xl text-balance">
              Bridging Scalable Web Development with{" "}
              <span className="text-primary">SEO-Driven Growth</span>
            </h1>
            <p className="animate-fade-up animation-delay-400 mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground opacity-0 text-pretty lg:max-w-none">
              Information Systems specialist with a 3.81 GPA, blending 2.5 years of
              technical development with high-impact SEO strategies to build web
              solutions that don't just work — they rank.
            </p>

            <div className="animate-fade-up animation-delay-600 flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                View Technical Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/50"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="animate-fade-in animation-delay-600 mt-10 flex items-center justify-center gap-5 opacity-0 lg:justify-start">
              <a
                href="https://github.com/rizkialfrb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/m-rizki-alfarabi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:rizkialfarabi205@gmail.com"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="animate-fade-up animation-delay-200 opacity-0 flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-md" />
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-primary/30 bg-card md:h-72 md:w-72">
                <img
  src="profile.jpeg"
  alt="M. Rizki Alfarabi"
  className="h-full w-full object-cover object-top"
/>
              </div>
              <div className="absolute -bottom-2 -right-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-lg">
                <span className="font-mono text-xs font-semibold text-primary">3.81 GPA ✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
