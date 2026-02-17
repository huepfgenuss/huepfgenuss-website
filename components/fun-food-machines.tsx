import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const machines = [
  {
    name: "Slush-Eis-Maschine",
    description: "Erfrischend und bunt – Slush-Eis in verschiedenen Geschmacksrichtungen sorgt für coolen Genuss bei jedem Event.",
    price: "ab 59€",
    image: "/images/slush.jpeg",
    gradient: "from-blue-500/10 to-cyan-500/10",
    accent: "text-blue-500",
  },
  {
    name: "Popcorn-Maschine",
    description: "Frisch gepopptes Popcorn mit dem unwiderstehlichen Duft von Jahrmarkt – ein Klassiker für Groß und Klein.",
    price: "ab 39€",
    image: "/images/popcorn.jpeg",
    gradient: "from-amber-500/10 to-yellow-500/10",
    accent: "text-amber-500",
  },
  {
    name: "Zuckerwatte-Maschine",
    description: "Fluffige Zuckerwatte wie vom Rummel – zaubert garantiert ein Lächeln auf jedes Gesicht.",
    price: "ab 39€",
    image: "/images/zuckerwatte.jpeg",
    gradient: "from-pink-500/10 to-rose-500/10",
    accent: "text-pink-500",
  },
]

export function FunFoodMachines() {
  return (
    <section id="fun-food" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Fun-Food-Maschinen</h2>
          <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
            Das perfekte Extra für Ihr Event – leckere Snacks zum Selbermachen!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {machines.map((machine, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col !pt-0 !gap-0`}
            >
              <div className="relative h-80">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${machine.gradient} pointer-events-none`} />
              </div>
              <CardContent className="relative pt-6 flex-1 flex flex-col items-center text-center">
                <CardTitle className="text-xl font-bold mb-2">{machine.name}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {machine.description}
                </p>
                <div className={`inline-flex items-baseline gap-1 mb-5 ${machine.accent}`}>
                  <span className="text-3xl font-extrabold">{machine.price}</span>
                  <span className="text-sm font-medium">/ Tag</span>
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
