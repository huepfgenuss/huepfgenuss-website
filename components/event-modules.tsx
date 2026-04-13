import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const modules = [
  {
    name: "Fußball Dartscheibe",
    description: "Triff ins Schwarze! Die aufblasbare Fußball Dartscheibe bringt Spaß für die ganze Familie – ob Kindergeburtstag, Firmenfeier oder Straßenfest.",
    size: "6,5x4,5m",
    age: "Jung bis Alt",
    image: "/images/football-dart.jpeg",
  },
]

export function EventModules() {
  return (
    <section id="eventmodule" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Eventmodule</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Spannende Eventmodule für unvergessliche Veranstaltungen – Spaß für jedes Alter!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((module, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full !pt-0 !gap-0">
              <div className="relative h-72">
                <img src={module.image || "/placeholder.svg"} alt={module.name} className="w-full h-full object-cover" />
              </div>
              <CardContent className="pt-6 flex-1">
                <CardTitle className="mb-2 text-balance">{module.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{module.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">{module.size}</Badge>
                  <Badge variant="outline">{module.age}</Badge>
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
