import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Hüpfgenuss</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Ihr zuverlässiger Partner für unvergessliche Events mit bunten Hüpfburgen.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/#angebot" className="text-muted-foreground hover:text-primary transition-colors">
                  Unsere Hüpfburgen
                </Link>
              </li>
              <li>
                <Link href="/#kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Folgen Sie uns</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@huepfburg-paradies.de"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="mb-2">&copy; {new Date().getFullYear()} Hüpfburg Paradies. Alle Rechte vorbehalten.</p>
          <p className="text-xs">
            Diese Website enthält KI-generierte Inhalte.
          </p>
        </div>
      </div>
    </footer>
  )
}
