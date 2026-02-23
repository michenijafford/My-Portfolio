"use client"

import {
  Code2,
  Globe,
  Palette,
  Rocket,
  Headset,
  Wrench,
} from "lucide-react"

const skills = [
  {
    name: "Programming",
    description: "Java, Python, C#, JavaScript and more",
    icon: Code2,
    level: 90,
  },
  {
    name: "Web Development",
    description: "Frontend & Backend fundamentals",
    icon: Globe,
    level: 85,
  },
  {
    name: "UI/UX Design",
    description: "User-centered design principles",
    icon: Palette,
    level: 80,
  },
  {
    name: "App Testing & Deployment",
    description: "End-to-end application piloting",
    icon: Rocket,
    level: 88,
  },
  {
    name: "IT Technical Support",
    description: "Hardware & software troubleshooting",
    icon: Headset,
    level: 85,
  },
  {
    name: "System Troubleshooting",
    description: "Diagnostics & resolution",
    icon: Wrench,
    level: 82,
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            What I Do Best
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            My Skills
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <skill.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {skill.name}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {skill.description}
              </p>

              {/* Progress bar */}
              <div className="relative h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-accent transition-all duration-700 group-hover:brightness-110"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="mt-1.5 text-right text-xs font-medium text-muted-foreground">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
