"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResults] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResults("Sending...");

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_COM_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResults("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => { setStatus("idle"); setResults(""); }, 5000);
      } else {
        setStatus("idle");
        setResults(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("idle");
      setResults("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Contact Me
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-accent" />
          <p className="mx-auto mt-6 max-w-md text-pretty text-muted-foreground">
            {"Let's build something impactful together. Feel free to reach out for collaborations or just a friendly chat."}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <a
                  href="mailto:jaffordmwendwa2@gmail.com"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  jaffordmwendwa2@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Phone</p>
                <a
                  href="tel:+254716194687"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  +254 716194687
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Location</p>
                <p className="text-sm text-muted-foreground"> Nairobi,Kenya</p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/254716194687?text=Need%20a%20Reliable%20Programming%20Solution%3F%0A%0AI%20design%2C%20develop%2C%20and%20deliver%20efficient%20software%20tailored%20to%20your%20business%20needs.%0AFrom%20web%20apps%20to%20mobile%20systems%20%E2%80%94%20i%20turn%20your%20ideas%20into%20working%20solutions.%0A%0A%F0%9F%93%A9%20Let%E2%80%99s%20build%20something%20great%20together."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jafford-micheni-9a9204272/"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/michenijafford"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-xl border border-border bg-card p-7 shadow-sm lg:col-span-3"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none"
                placeholder="Write your message here..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 focus:ring-2 focus:ring-accent/20 focus:outline-none disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {result && (
              <p className={`text-sm ${status === "success" ? "text-green-600" : "text-red-500"}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}