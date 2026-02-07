import { Card, CardContent } from "@/components/ui/card"
import { Truck, Shield, Clock, Heart } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Lieferung & Aufbau",
    description: "Wir liefern und bauen Ihre Hüpfburg auf - Sie müssen sich um nichts kümmern!",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Sicher & Geprüft",
    description: "Alle Hüpfburgen sind TÜV-geprüft und entsprechen höchsten Sicherheitsstandards.",
    color: "text-secondary",
  },
  {
    icon: Clock,
    title: "Flexible Mietzeiten",
    description: "Von wenigen Stunden bis mehrere Tage - wir passen uns Ihren Bedürfnissen an.",
    color: "text-accent",
  },
  {
    icon: Heart,
    title: "Rundum-Service",
    description: "Persönliche Beratung und freundlicher Service für Ihr perfektes Event.",
    color: "text-primary",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Warum Hüpfgernuss?</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Wir machen Ihre Feier zu einem unvergesslichen Erlebnis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className={`inline-flex p-3 rounded-xl bg-muted mb-4 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
