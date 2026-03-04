"use client"

import { useInView } from "@/hooks/use-in-view"
import { GraduationCap, MapPin, Briefcase } from "lucide-react"

export function AboutSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Who I Am
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              I am an Information Systems graduate from{" "}
              <span className="font-semibold text-foreground">
                University of Bengkulu
              </span>{" "}
              with a GPA of{" "}
              <span className="font-semibold text-primary">3.81/4.00</span>,
              specializing in web development and SEO. My philosophy centers on
              building efficient web applications with a strong focus on
              Human-Computer Interaction (HCI) for optimal user experience.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              With 2.5 years as an SEO Content Writer at Kumparan, producing
              over 2,000 SEO-optimized articles, combined with hands-on web
              development using Laravel and WordPress, I bring a rare blend of
              technical depth and content strategy expertise.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I thrive at the intersection of development and digital marketing,
              creating web solutions that are both technically excellent and
              strategically positioned for organic growth.
            </p>
          </div>

          <div
            className={`lg:col-span-2 flex flex-col gap-4 transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Education
                  </p>
                  <p className="text-xs text-muted-foreground">2021 - 2025</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                S.Si. Information Systems
              </p>
              <p className="text-sm text-muted-foreground">
                University of Bengkulu
              </p>
              <p className="mt-1 font-mono text-sm font-semibold text-primary">
                GPA: 3.81 / 4.00
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Location
                  </p>
                  <p className="text-xs text-muted-foreground">Indonesia</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Bengkulu, Indonesia
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Campus Roles
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Campus Ambassador UNIB 2022-2023
              </p>
              <p className="text-sm text-muted-foreground">
                Head of Photography & Journalism Club
              </p>
              <p className="text-sm text-muted-foreground">
                3x Math Olympiad Champion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
