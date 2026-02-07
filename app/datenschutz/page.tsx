import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function DatenschutzPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Verantwortlicher</h2>
            <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
            <p>
              Helmut Lempert
              <br />
              Stefas-Zweig-Straße 7
              <br />
              31515 Wunstorf
              <br />
              E-Mail: huepfgenuss@outlook.de
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise</h2>
            <p>
              Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Diese Datenschutzerklärung erläutert, welche Daten wir
              erheben und wofür wir sie nutzen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Hosting über Vercel</h2>
            <p>
              Diese Website wird bei Vercel gehostet. Beim Aufruf der Website werden durch den Hosting-Provider
              technisch notwendige Daten verarbeitet, um die Website auszuliefern und die Sicherheit sowie Stabilität
              zu gewährleisten.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">3.1 Welche Daten werden verarbeitet?</h3>
            <p>
              Beim Besuch der Website können insbesondere folgende Daten verarbeitet werden (sog. Server-/Access-Logs):
            </p>
            <ul>
              <li>IP-Adresse (ggf. in gekürzter/anononymisierter Form, abhängig vom Provider-Setup)</li>
              <li>Datum und Uhrzeit der Anfrage</li>
              <li>Aufgerufene Seite/URL</li>
              <li>Referrer-URL (die zuvor besuchte Seite, sofern übertragen)</li>
              <li>Browsertyp und -version / Betriebssystem</li>
              <li>Weitere technische Informationen (z. B. Request-ID, Statuscodes)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-6">3.2 Zweck der Verarbeitung</h3>
            <p>Die Verarbeitung erfolgt insbesondere zu folgenden Zwecken:</p>
            <ul>
              <li>Auslieferung der Website (Verbindungsaufbau und Datenübertragung)</li>
              <li>
                Gewährleistung von Sicherheit und Stabilität (z. B. Abwehr von Angriffen, Missbrauchserkennung,
                Fehleranalyse)
              </li>
              <li>Technische Administration und Optimierung des Betriebs</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-6">3.3 Rechtsgrundlage</h3>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse), da wir
              ein berechtigtes Interesse am sicheren, stabilen und effizienten Betrieb dieser Website haben.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">3.4 Empfänger / Auftragsverarbeitung</h3>
            <p>
              Vercel verarbeitet die Daten in unserem Auftrag als technischer Dienstleister (Hosting). Es kann hierbei
              zu einer Verarbeitung in Ländern außerhalb der EU/des EWR kommen (z. B. USA), je nach technischer
              Bereitstellung/Standort der Infrastruktur.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">3.5 Drittlandtransfer</h3>
            <p>
              Sofern Daten in Drittländer (außerhalb EU/EWR) übermittelt werden, erfolgt dies auf Grundlage geeigneter
              Garantien (z. B. Standardvertragsklauseln), soweit erforderlich.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-6">3.6 Speicherdauer</h3>
            <p>
              Server-Log-Daten werden nur so lange gespeichert, wie dies für die genannten Zwecke erforderlich ist, und
              anschließend gelöscht oder anonymisiert.
            </p>
            <p className="italic">
              Hinweis: Die konkrete Speicherdauer kann sich aus den technischen und organisatorischen Vorgaben des
              Hosting-Providers ergeben.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookies / Tracking</h2>
            <p>Auf dieser Website werden keine Cookies zu Analyse-, Tracking- oder Werbezwecken eingesetzt.</p>
            <p>Es werden keine Tracking-Tools (z. B. Google Analytics, Meta Pixel) verwendet.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Kontaktaufnahme</h2>
            <p>Diese Website bietet kein Kontaktformular und keine Nutzerregistrierung.</p>
            <p>
              Wenn Sie uns dennoch per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage
              und für den Fall von Anschlussfragen.
            </p>
            <ul>
              <li>
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche/vertragliche Kommunikation) oder Art. 6
                Abs. 1 lit. f DSGVO (berechtigtes Interesse an Bearbeitung von Anfragen)
              </li>
              <li>
                Speicherdauer: solange erforderlich zur Bearbeitung der Anfrage sowie entsprechend gesetzlicher
                Aufbewahrungspflichten
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Ihre Rechte</h2>
            <p>Sie haben jederzeit folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
            <ul>
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>
                Widerspruch gegen Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (Art. 21 DSGVO)
              </li>
            </ul>
            <p>Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die oben genannten Kontaktdaten.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, insbesondere in dem
              Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
              Verstoßes (Art. 77 DSGVO).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Stand</h2>
            <p>Stand: 07.02.2026</p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
