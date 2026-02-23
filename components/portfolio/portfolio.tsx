"use client"

import { useState } from "react"
import {
  Rocket,
  Globe,
  Server,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

const projects = [
  {
    title: "Enterprise App Pilot Program",
    category: "App Piloting",
    icon: Rocket,
    description:
      "Led the piloting phase for a large-scale enterprise application, managing real-world testing, monitoring system performance, and coordinating bug resolution before full-scale deployment.",
    role: "Monitoring, debugging, user training & support",
    challenges:
      "Addressed performance bottlenecks under high-load scenarios and resolved critical data sync issues across distributed environments.",
    impact:
      "Achieved a 95% user satisfaction rate during pilot phase, enabling a smooth company-wide rollout with minimal downtime.",
    technologies: ["Java", "REST APIs", "PostgreSQL", "Docker"],
  },
  {
    title: "Mobile Health Application Deployment",
    category: "App Piloting",
    icon: Rocket,
    description:
      "Managed the pilot deployment of a mobile health application for field workers, testing functionality across diverse network conditions and devices.",
    role: "Field testing, bug tracking, user adoption facilitation",
    challenges:
      "Ensured application stability in low-connectivity environments and optimized data caching for offline usage.",
    impact:
      "Successfully onboarded 200+ field workers in the pilot phase with a 40% reduction in reported issues at launch.",
    technologies: ["Android", "Firebase", "SQLite", "Agile"],
  },
  {
    title: "Responsive Business Portfolio Website",
    category: "Web Design",
    icon: Globe,
    description:
      "Designed and developed a fully responsive portfolio website for a small business, featuring modern UI/UX patterns, smooth animations, and an integrated contact form.",
    role: "Full-stack design & development",
    challenges:
      "Balancing rich visual design with fast load times and cross-browser compatibility.",
    impact:
      "Increased client inquiries by 60% within the first month of launch.",
    technologies: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Internal IT Infrastructure Setup",
    category: "IT Support",
    icon: Server,
    description:
      "Configured and deployed internal network infrastructure including workstations, servers, and security protocols for a mid-sized organization.",
    role: "System configuration, user training, ongoing maintenance",
    challenges:
      "Migrating legacy systems while maintaining uptime and training non-technical staff on new workflows.",
    impact:
      "Reduced system downtime by 70% and improved overall team productivity.",
    technologies: ["Windows Server", "Active Directory", "Networking", "VPN"],
  },
]

const categories = ["All", "App Piloting", "Web Design", "IT Support"]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            My Recent Work
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Portfolio
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </div>

        {/* Filter */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setExpandedIndex(null)
              }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-accent/10 hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project, index) => {
            const isExpanded = expandedIndex === index
            return (
              <div
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-lg"
              >
                {/* Header */}
                <div className="flex items-start gap-4 p-6 pb-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <project.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <span className="mb-1 inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 px-6 pb-2">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Expand */}
                {isExpanded && (
                  <div className="mx-6 mb-2 mt-2 space-y-3 rounded-lg bg-secondary p-4 text-sm">
                    <div>
                      <span className="font-semibold text-foreground">Role: </span>
                      <span className="text-muted-foreground">{project.role}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Challenges: </span>
                      <span className="text-muted-foreground">{project.challenges}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">Impact: </span>
                      <span className="text-muted-foreground">{project.impact}</span>
                    </div>
                  </div>
                )}

                {/* Footer */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-6 py-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() =>
                      setExpandedIndex(isExpanded ? null : index)
                    }
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                  >
                    {isExpanded ? (
                      <>
                        Hide Details
                        <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        View Details
                        <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
