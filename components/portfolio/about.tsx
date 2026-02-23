import { GraduationCap, Briefcase, Code2 } from "lucide-react"

const education = [
  {
    degree: "Bachelor's Degree in Software Development",
    icon: GraduationCap,
  },
  {
    degree: "Diploma in Business Information Technology (BIT)",
    icon: Briefcase,
  },
  {
    degree: "Certificate in Web Design",
    icon: Code2,
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Get To Know Me
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Bio */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              My Journey into Software Development
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              My passion for technology began early, driven by curiosity about how digital systems work and a desire to build solutions that make a difference. Over the years, I have honed my skills in programming, web development, and application deployment through both rigorous academic training and hands-on professional experience.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              With experience in app piloting, I specialize in testing applications in real-world environments, monitoring performance, identifying bugs, and ensuring smooth user adoption. This unique combination of development and deployment skills allows me to deliver complete, reliable digital solutions from concept to launch.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              I am committed to continuous learning and staying current with the latest technologies, always seeking new challenges that push the boundaries of what is possible in software development.
            </p>
          </div>

          {/* Education cards */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-foreground">
              Education
            </h3>
            <div className="flex flex-col gap-4">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:border-accent/40 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{item.degree}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              This academic background has equipped me with strong foundations in software engineering principles, programming logic, system design, and user interface development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
