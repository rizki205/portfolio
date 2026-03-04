"use client"

import { useInView } from "@/hooks/use-in-view"
import {
  ExternalLink,
  Smartphone,
  Globe,
  Database,
  Layout,
  BarChart3,
  BookOpen,
  FileText,
  Box,
} from "lucide-react"

const projects = [
  {
    title: "SnapMoo",
    category: "Mobile App",
    description:
      "AI-powered mobile application designed in collaboration with a team to detect PMK (Foot-and-Mouth Disease) in cattle using image recognition technology.",
    tags: ["Mobile App", "AI", "Team Project"],
    icon: Smartphone,
    image: "project-snapmoo.jpeg",
  },
  {
    title: "BUMDes Panca Mukti SIAK",
    category: "Information System",
    description:
      "Financial Accounting Information System (SIAK) built for BUMDes Panca Mukti to streamline financial management, reporting, and accountability.",
    tags: ["Laravel", "PHP", "Accounting", "Full-Stack"],
    icon: Database,
    image: null,
  },
  {
    title: "University Admission Correlation",
    category: "Data Analysis",
    description:
      "Analysis system investigating the relationship between student GPA and university admission pathways, providing data-driven insights.",
    tags: ["Data Analysis", "Information Systems", "Research"],
    icon: BarChart3,
    image: null,
  },
  {
    title: "CareConnect",
    category: "UI/UX Design",
    description:
      "UI/UX design for a community service and reporting forum application, enabling users to connect, collaborate, and share social impact initiatives.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    icon: Layout,
    image: "project-careconnect.png",
  },
  {
    title: "Inventory Management System",
    category: "Information System",
    description:
      "A robust system for tracking stocks, managing inventory, and generating automated goods reports for efficient supply chain operations.",
    tags: ["Laravel", "PHP", "CRUD", "Reports"],
    icon: Box,
    image: null,
  },
  {
    title: "Library Management System",
    category: "Information System",
    description:
      "Efficient platform for cataloging books, managing member data, and tracking borrowing records for a streamlined library experience.",
    tags: ["Laravel", "PHP", "Database", "Full-Stack"],
    icon: BookOpen,
    image: null,
  },
  {
    title: "Public Report System",
    category: "Web Application",
    description:
      "Digital portal for citizen complaints and administrative management, enabling transparent communication between the public and government agencies.",
    tags: ["Laravel", "PHP", "Public Service"],
    icon: FileText,
    image: "project-laporan.png",
  },
  {
    title: "WordPress Portfolio Sites",
    category: "WordPress",
    description:
      "Designed and built multiple WordPress projects, including profile websites, company sites, and media platforms — both published and local.",
    tags: ["WordPress", "SEO", "Web Design"],
    icon: Globe,
    image: "project-wordpress2.png",
  },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary">
            04. PROJECTS
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Featured Work
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            A selection of technical projects spanning web development,
            mobile applications, data analysis, and UI/UX design.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => {
            const Icon = project.icon
            return (
              <article
                key={project.title}
                className={`group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-700 hover:border-primary/40 hover:-translate-y-1 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {project.image ? (
                  <div className="relative h-44 w-full overflow-hidden bg-secondary">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  </div>
                ) : (
                  <div className="flex h-44 w-full items-center justify-center bg-primary/5">
                    <Icon className="h-12 w-12 text-primary/30" />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-mono text-xs tracking-wider text-primary">
                      {project.category}
                    </p>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
