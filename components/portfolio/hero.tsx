"use client"

import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-20"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row md:gap-16 lg:py-24">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
            Welcome to my portfolio
          </p>
          <h1 className="mb-4 text-balance text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Jafford Micheni
            <br />
            {/* <span className="text-accent">Micheni</span> */}
          </h1>
          <p className="mb-6 text-lg font-medium text-primary-foreground/80">
            Software Developer | IT Technician | UI/UX & Web Design Specialist
          </p>
          <p className="mb-8 max-w-lg text-pretty leading-relaxed text-primary-foreground/65 md:text-base">
            A dedicated and detail-oriented Software Developer and IT Technician with a strong background in programming, application deployment, and user-centered web design. Combining technical expertise with problem-solving skills to deliver efficient, scalable, and user-friendly digital solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105"
            >
              View My Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>

          {/* Social */}
          <div className="mt-10 flex items-center justify-center gap-4 md:justify-start">
            <a
              href="https://www.linkedin.com/in/jafford-micheni-9a9204272/"
              aria-label="LinkedIn"
              className="rounded-full border border-primary-foreground/20 p-2.5 text-primary-foreground/60 transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/michenijafford"
              aria-label="GitHub"
              className="rounded-full border border-primary-foreground/20 p-2.5 text-primary-foreground/60 transition-colors hover:border-accent hover:text-accent"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              aria-label="Email"
              className="rounded-full border border-primary-foreground/20 p-2.5 text-primary-foreground/60 transition-colors hover:border-accent hover:text-accent"
            >
              
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-accent/30 shadow-2xl md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              src="/hero.jpeg"
              alt="Jafford Micheni - Software Developer"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative ring */}
          <div className="absolute -inset-3 rounded-full border-2 border-dashed border-accent/20" />
        </div>
      </div>
    </section>
  )
}
