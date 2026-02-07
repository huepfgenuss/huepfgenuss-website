import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Content */}
          <div className="text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <Image src="/images/logo.png" alt="Hüpfburg Paradies Logo" width={120} height={120} className="object-contain" />
            </div>

            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Ihr lokaler Hüpfburg-Verleih
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Hüpfgenuss
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed">
              Spaß & Genuss für jedes Event! Hüpfburgen, Popcorn, Zuckerwatte & Slush-Eis für unvergessliche Momente bei Groß & Klein.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="text-lg">
                <Link href="#kontakt">Jetzt anfragen</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
                <Link href="#angebot">Unsere Hüpfburgen</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              {/* Wavy border effect using clip-path */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent p-1">
                <div
                  className="w-full h-full bg-background rounded-3xl overflow-hidden"
                  style={{
                    clipPath: "url(#wavy-clip)",
                  }}
                >
                  <Image
                    src="/images/hero.jpeg"
                    alt="Kinder spielen auf bunter Hüpfburg"
                    width={700}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Wavy border using SVG */}
              <div className="absolute inset-0 pointer-events-none">
                <svg width="0" height="0">
                  <defs>
                    <clipPath id="wavy-clip" clipPathUnits="objectBoundingBox">
                      <path
                        d="M 0,0 
                               L 1,0 
                               C 0.95,0.1 0.95,0.2 1,0.3
                               L 1,0.7
                               C 0.95,0.8 0.95,0.9 1,1
                               L 0,1
                               C 0.05,0.9 0.05,0.8 0,0.7
                               L 0,0.3
                               C 0.05,0.2 0.05,0.1 0,0
                               Z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
    </section>
  )
}
