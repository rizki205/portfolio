"use client"

import { useInView } from "@/hooks/use-in-view"
import { Calendar, ExternalLink } from "lucide-react"

const experiences = [
  {
    role: "Freelance Web Developer & SEO Specialist",
    company: "Freelance",
    period: "2023 - Present",
    description: [
      "Designed and developed custom web solutions using Laravel and WordPress, including building specific plugins to meet client technical requirements.",
      "Managed end-to-end search engine optimization (On-Page, Off-Page, and Technical SEO) to increase domain authority and keyword rankings on Google's main page.",
    ],
    tags: ["Laravel", "WordPress", "SEO", "PHP", "JavaScript"],
  },
  {
    role: "Content Writer SEO",
    company: "Kumparan",
    companyUrl: "https://kumparan.com",
    period: "May 2023 - October 2025",
    description: [
      "Managed and produced over 2,000 SEO-friendly articles in 2.5 years, focusing on strategic keyword optimization to increase organic traffic.",
      "Conducted in-depth daily keyword research and trend analysis to ensure content had high relevance and strong competitiveness in search engines.",
    ],
    tags: ["SEO Writing", "GA4", "GSC", "Keyword Research", "Content Strategy"],
  },
  {
    role: "Private Tutor (SD - SMA)",
    company: "Self-employed",
    period: "October - December 2025",
    description: [
      "Provided personalized private tutoring for students from elementary to high school with a curriculum approach tailored to individual academic needs.",
    ],
    tags: ["Teaching", "Curriculum Design"],
  },
  {
    role: "Photographer",
    company: "Faculty of Engineering, UNIB",
    period: "2022 - 2023",
    description: [
      "Documented important faculty-level events such as graduation ceremonies and accreditation visits.",
    ],
    tags: ["Photography", "Event Coverage"],
  },
]

export function ExperienceSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary">
            03. EXPERIENCE
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Work Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-0 hidden w-px bg-border md:left-8 md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative md:pl-20 transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute top-1 left-0 hidden h-4 w-4 items-center justify-center md:left-[22px] md:flex">
                  <div className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
                </div>

                <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/30">
                  <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm text-primary hover:underline"
                          >
                            {exp.company}
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="text-sm text-primary">
                            {exp.company}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono text-xs">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="mb-4 flex flex-col gap-2">
                    {exp.description.map((desc, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
