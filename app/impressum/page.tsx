import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Impressum</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Hüpfgenuss
              <br />
              Helmut Lempert
              <br />
              Stefas-Zweig-Straße 7
              <br />
              31515 Wunstorf
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
            <p>
              Telefon: 01799375870
              <br />
              E-Mail: huepfgenuss@outlook.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Helmut Lempert
              <br />
              Stefas-Zweig-Straße 7
              <br />
              31515 Wunstorf
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>

            <h3 className="text-xl font-semibold mb-2">Haftung für Inhalte</h3>
            <p className="mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
              Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <h3 className="text-xl font-semibold mb-2">Haftung für Links</h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
