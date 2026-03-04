"use client"

import { useInView } from "@/hooks/use-in-view"
import { FileText, Code2, Award, PenTool } from "lucide-react"

const stats = [
  {
    icon: FileText,
    value: "2,000+",
    label: "SEO Articles Published",
  },
  {
    icon: Code2,
    value: "8+",
    label: "Technical Projects",
  },
  {
    icon: Award,
    value: "12+",
    label: "Certifications Earned",
  },
  {
    icon: PenTool,
    value: "50+",
    label: "Design Projects",
  },
]

export function StatsSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-16 px-6 border-y border-border bg-card/50">
      <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <p className="font-mono text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
