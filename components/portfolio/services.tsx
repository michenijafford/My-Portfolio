import {
  Globe,
  Palette,
  Rocket,
  Headset,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    title: "Web Design & Development",
    icon: Globe,
    description:
      "Creation of responsive, modern websites with clean UI/UX focused layouts that are mobile-friendly and performance-optimized.",
    highlights: [
      "Responsive, modern websites",
      "Clean UI/UX focused layouts",
      "Mobile-friendly & performance-optimized",
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description:
      "Wireframing, prototyping, and user-centered interface design with a focus on improving usability and user experience.",
    highlights: [
      "Wireframing & prototyping",
      "User-centered interface design",
      "Usability & experience improvement",
    ],
  },
  {
    title: "App Piloting & Deployment",
    icon: Rocket,
    featured: true,
    description:
      "Specialized in testing applications in real-world environments before full deployment, ensuring stability and readiness for large-scale implementation.",
    highlights: [
      "Real-world environment testing",
      "System performance monitoring",
      "Bug identification & resolution",
      "User adoption & training support",
      "Feedback gathering & optimization",
      "Large-scale deployment readiness",
    ],
  },
  {
    title: "IT Technical Support",
    icon: Headset,
    description:
      "Comprehensive troubleshooting for hardware and software issues, system configuration, maintenance, and end-user support.",
    highlights: [
      "Hardware & software troubleshooting",
      "System configuration & maintenance",
      "End-user support",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            How I Can Help
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            My Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden rounded-xl border p-7 shadow-sm transition-all hover:shadow-lg ${
                service.featured
                  ? "border-accent/50 bg-primary text-primary-foreground md:col-span-2"
                  : "border-border bg-card"
              }`}
            >
              {service.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                  Specialty
                </span>
              )}

              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg transition-colors ${
                  service.featured
                    ? "bg-accent text-accent-foreground"
                    : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                }`}
              >
                <service.icon className="h-6 w-6" />
              </div>

              <h3
                className={`mb-3 text-xl font-semibold ${
                  service.featured ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`mb-5 leading-relaxed ${
                  service.featured
                    ? "text-primary-foreground/75"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              <ul
                className={`grid gap-2 ${
                  service.featured ? "sm:grid-cols-2" : ""
                }`}
              >
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm"
                  >
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        service.featured ? "text-accent" : "text-accent"
                      }`}
                    />
                    <span
                      className={
                        service.featured
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
