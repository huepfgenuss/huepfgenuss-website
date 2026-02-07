import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const castles = [
  {
    name: "Einhorn Traumland",
    description: "Magisch und märchenhaft - der Traum jedes Einhorn-Fans wird wahr!",
    size: "5,5x5m",
    age: "3-10 Jahre",
    image: "/images/unicorn.png",
  },
  {
    name: "Dschungel Abenteuer",
    description: "Wilde Tiere und tropische Pflanzen machen diese Hüpfburg zum Highlight jeder Party.",
    size: "5,5x5,5m",
    age: "4-12 Jahre",
    image: "/images/jungle.png",
  },
  {
    name: "Fußball Stadion",
    description: "Olé! Für kleine Kicker und Fußballfans - großer Spaß garantiert!",
    size: "4,5x4m",
    age: "5-14 Jahre",
    image: "/images/soccer.png",
  },
  {
    name: "Prinzessinnen Schloss",
    description: "Perfekt für kleine Prinzessinnen und Prinzen. Bunte Farben und viel Platz zum Hüpfen!",
    size: "5,8x4,5m",
    age: "3-10 Jahre",
    image: "/images/princess.png",
  },
  {
    name: "Dino Abenteuer",
    description: "Roar! Für kleine Dino-Fans - mit Dinosaurier-Motiven und viel Hüpffläche.",
    size: "5x4,1m",
    age: "3-10 Jahre",
    image: "/images/dino.png",
  },
]

const WEEKDAY_PRICE = "ab 79€"
const WEEKEND_PRICE = "ab 89€"

export function BounceCastles() {
  return (
    <section id="angebot" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Unsere Hüpfburgen</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto mb-6">
            Entdecken Sie unsere vielfältige Auswahl an bunten Hüpfburgen
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-sm font-medium text-muted-foreground">Unter der Woche:</span>
              <span className="text-2xl font-bold text-primary">{WEEKDAY_PRICE}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-sm font-medium text-muted-foreground">Wochenende:</span>
              <span className="text-2xl font-bold text-primary">{WEEKEND_PRICE}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {castles.map((castle, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
              <CardHeader className="p-0">
                <img src={castle.image || "/placeholder.svg"} alt={castle.name} className="w-full h-48 object-cover" />
              </CardHeader>
              <CardContent className="pt-6 flex-1">
                <CardTitle className="mb-2 text-balance">{castle.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{castle.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">{castle.size}</Badge>
                  <Badge variant="outline">{castle.age}</Badge>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center mt-auto">
                <Button asChild size="sm" className="w-full">
                  <Link href="/#kontakt">Anfragen</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
