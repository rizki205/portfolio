import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-tight text-foreground"
        >
          {"<RA />"}
        </a>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/rizkialfrb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/m-rizki-alfarabi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:rizkialfarabi205@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          {`© ${currentYear} M. Rizki Alfarabi. Built with Next.js & Tailwind CSS.`}
        </p>
      </div>
    </footer>
  )
}
