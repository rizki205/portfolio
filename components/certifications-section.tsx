"use client"

import { useInView } from "@/hooks/use-in-view"
import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Google Analytics Certification",
    issuer: "Google Skillshop",
    category: "Analytics",
  },
  {
    title: "SEO Certified",
    issuer: "HubSpot Academy",
    category: "SEO",
  },
  {
    title: "Web Programming Certification",
    issuer: "Dicoding",
    category: "Development",
  },
  {
    title: "JavaScript Programming Certification",
    issuer: "Dicoding",
    category: "Development",
  },
  {
    title: "Back-End for Beginners with Google Cloud",
    issuer: "Dicoding",
    category: "Cloud",
  },
  {
    title: "Google Cloud Engineer",
    issuer: "Dicoding",
    category: "Cloud",
  },
  {
    title: "Machine Learning with Google Cloud",
    issuer: "Dicoding",
    category: "AI/ML",
  },
  {
    title: "Programming Logic Certification",
    issuer: "Dicoding",
    category: "Development",
  },
  {
    title: "AI Fundamentals",
    issuer: "Dicoding",
    category: "AI/ML",
  },
  {
    title: "System Administration & IT Infrastructure",
    issuer: "Coursera",
    category: "Infrastructure",
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    category: "Networking",
  },
  {
    title: "AWS Educate Certificate",
    issuer: "Amazon Web Services",
    category: "Cloud",
  },
]

const categoryColors: Record<string, string> = {
  Analytics: "bg-chart-1/10 text-chart-1",
  SEO: "bg-primary/10 text-primary",
  Development: "bg-chart-2/10 text-chart-2",
  Cloud: "bg-chart-3/10 text-chart-3",
  "AI/ML": "bg-chart-4/10 text-chart-4",
  Infrastructure: "bg-chart-5/10 text-chart-5",
  Networking: "bg-muted text-muted-foreground",
}

export function CertificationsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="certifications" className="py-24 px-6 bg-card/30">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary">
            05. CERTIFICATIONS
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Certifications & Learning
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Continuous learning across web development, cloud computing,
            analytics, and machine learning.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className={`group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-700 hover:border-primary/30 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-sm font-semibold text-foreground leading-snug">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {cert.issuer}
                  </span>
                  <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <span
                  className={`mt-2 inline-block rounded-md px-2 py-0.5 font-mono text-[10px] ${
                    categoryColors[cert.category] ||
                    "bg-muted text-muted-foreground"
                  }`}
                >
                  {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
