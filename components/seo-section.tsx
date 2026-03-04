"use client"

import { useInView } from "@/hooks/use-in-view"

const seoHighlights = [
  {
    metric: "2,000+",
    label: "Published Articles",
    description: "SEO-optimized content for Kumparan over 2.5 years",
  },
  {
    metric: "2.5 yrs",
    label: "SEO Experience",
    description: "Deep expertise in keyword research, GA4, GSC & SEMRush",
  },
  {
    metric: "Top Page",
    label: "Google Rankings",
    description: "Strategic keyword optimization driving organic visibility",
  },
]

export function SeoSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary">
            SEO CASE STUDIES
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            SEO-Driven Content That Ranks
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            2.5 years at Kumparan producing high-impact SEO content, with a data-driven
            approach to keyword strategy and organic growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {seoHighlights.map((item, idx) => (
            <div
              key={item.label}
              className={`rounded-xl border border-border bg-card p-8 text-center transition-all duration-700 hover:border-primary/40 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <p className="mb-1 font-mono text-3xl font-bold text-primary md:text-4xl">
                {item.metric}
              </p>
              <p className="mb-3 text-sm font-semibold text-foreground">
                {item.label}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
