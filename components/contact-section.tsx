import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Bereit für Ihr Event?</h2>
            <p className="text-lg text-muted-foreground text-balance">
              Kontaktieren Sie uns für ein unverbindliches Angebot
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Telefon</h3>
                <a href="tel:+49123456789" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +49 (0) 123 456789
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-3 rounded-xl bg-secondary/10 text-secondary mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">E-Mail</h3>
                <a href="mailto:info@huepfburg-paradies.de" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@huepfburg-paradies.de
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Standort</h3>
                <p className="text-sm text-muted-foreground">Wunstorf, Hannover & Umgebung</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
