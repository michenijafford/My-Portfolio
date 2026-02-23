import { ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-primary-foreground/60">
          {"© 2026 Jafford Micheni. All rights reserved."}
        </p>

        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  )
}
