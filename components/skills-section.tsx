"use client"

import { useInView } from "@/hooks/use-in-view"

const skillCategories = [
  {
    title: "Development",
    skills: [
      { name: "Laravel", level: 85 },
      { name: "PHP", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "WordPress", level: 90 },
      { name: "HTML/CSS", level: 90 },
      { name: "C++", level: 70 },
      { name: "Bootstrap", level: 85 },
      { name: "GitHub", level: 80 },
    ],
  },
  {
    title: "SEO & Analytics",
    skills: [
      { name: "SEO Content Strategy", level: 95 },
      { name: "Google Analytics (GA4)", level: 90 },
      { name: "Google Search Console", level: 90 },
      { name: "Keyword Research", level: 92 },
      { name: "SEMRush", level: 85 },
      { name: "Google Trends", level: 88 },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Figma", level: 80 },
      { name: "UI/UX Design", level: 78 },
      { name: "Canva", level: 90 },
      { name: "Graphic Design", level: 75 },
      { name: "Linux", level: 70 },
    ],
  },
]

// Tech stack badges parsed from shields.io
const techStackBadges = [
  { name: "Laravel", color: "#FF2D20", logo: "laravel", textColor: "white" },
  { name: "PHP", color: "#777BB4", logo: "php", textColor: "white" },
  { name: "JavaScript", color: "#323330", logo: "javascript", textColor: "%23F7DF1E" },
  { name: "WordPress", color: "#117AC9", logo: "WordPress", textColor: "white" },
  { name: "HTML5", color: "#E34F26", logo: "html5", textColor: "white" },
  { name: "TailwindCSS", color: "#38B2AC", logo: "tailwind-css", textColor: "white" },
  { name: "Bootstrap", color: "#8511FA", logo: "bootstrap", textColor: "white" },
  { name: "Node.js", color: "6DA55F", logo: "node.js", textColor: "white" },
  { name: "C++", color: "#00599C", logo: "c%2B%2B", textColor: "white" },
  { name: "Google Cloud", color: "#4285F4", logo: "google-cloud", textColor: "white" },
  { name: "Firebase", color: "#039BE5", logo: "firebase", textColor: "white" },
  { name: "MariaDB", color: "003545", logo: "mariadb", textColor: "white" },
  { name: "Apache", color: "#D42029", logo: "apache", textColor: "white" },
  { name: "Figma", color: "#F24E1E", logo: "figma", textColor: "white" },
  { name: "Canva", color: "#00C4CC", logo: "Canva", textColor: "white" },
  { name: "GitHub", color: "#121011", logo: "github", textColor: "white" },
  { name: "Git", color: "#F05033", logo: "git", textColor: "white" },
  { name: "Google Analytics", color: "#E37400", logo: "google-analytics", textColor: "white" },
  { name: "Search Console", color: "4285F4", logo: "google-search-console", textColor: "white" },
  { name: "Yoast SEO", color: "A4286A", logo: "yoast", textColor: "white" },
  { name: "Semrush", color: "#FF6224", logo: "semrush", textColor: "white" },
  { name: "AWS", color: "#232F3E", logo: "amazon-aws", textColor: "white" },
]

function SkillBar({
  name,
  level,
  animate,
  delay,
}: {
  name: string
  level: number
  animate: boolean
  delay: number
}) {
  return (
    <div className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{
            width: animate ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const { ref, isInView } = useInView()

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary">
            02. SKILLS
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Tech Stack & Expertise
          </h2>
        </div>

        {/* Skill bars */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${catIdx * 150}ms` }}
            >
              <h3 className="mb-6 font-mono text-sm font-semibold tracking-wider text-primary">
                {category.title}
              </h3>
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    animate={isInView}
                    delay={catIdx * 150 + skillIdx * 80}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="mb-6 font-mono text-sm font-semibold tracking-wider text-primary">
            TOOLS & TECHNOLOGIES
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStackBadges.map((tech) => (
              <img
                key={tech.name}
                src={`https://img.shields.io/badge/${encodeURIComponent(tech.name)}-${tech.color.replace('#', '')}.svg?style=for-the-badge&logo=${tech.logo}&logoColor=${tech.textColor.replace('#', '')}`}
                alt={tech.name}
                className="h-7 transition-transform hover:scale-105 hover:-translate-y-0.5"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
