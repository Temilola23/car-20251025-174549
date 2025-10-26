import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Calendar, Gauge, Fuel, Settings, Shield, Award, Zap, Phone, Mail } from "lucide-react"

const cars = [
  {
    id: 1,
    name: "Tesla Model S Plaid",
    price: 89990,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Electric",
    year: 2024,
    mileage: "0 mi",
    transmission: "Automatic",
    fuelType: "Electric",
    description:
      "Experience the pinnacle of electric performance with the Tesla Model S Plaid. This revolutionary sedan combines breathtaking acceleration with cutting-edge technology and luxurious comfort.",
    features: [
      "1,020 horsepower tri-motor powertrain",
      "0-60 mph in 1.99 seconds",
      "396 mile EPA estimated range",
      '17" cinematic display',
      "Autopilot included",
      "Premium audio system",
      "Glass roof",
      "Heated seats front and rear",
    ],
    specs: {
      engine: "Tri-Motor Electric",
      horsepower: "1,020 hp",
      torque: "1,050 lb-ft",
      topSpeed: "200 mph",
      drivetrain: "All-Wheel Drive",
      seating: "5 passengers",
      color: "Pearl White Multi-Coat",
      interior: "Black and White Premium",
    },
  },
  {
    id: 2,
    name: "Porsche 911 Turbo S",
    price: 207000,
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    category: "Sports",
    year: 2024,
    mileage: "1,200 mi",
    transmission: "Automatic",
    fuelType: "Gasoline",
    description:
      "The Porsche 911 Turbo S represents the ultimate expression of sports car engineering. With its iconic design and blistering performance, this is a true driver's car.",
    features: [
      "640 horsepower twin-turbo flat-six",
      "0-60 mph in 2.6 seconds",
      "Sport Chrono Package",
      "Adaptive suspension",
      "Carbon ceramic brakes",
      "Sport exhaust system",
      "Premium leather interior",
      "Porsche Communication Management",
    ],
    specs: {
      engine: "3.8L Twin-Turbo Flat-6",
      horsepower: "640 hp",
      torque: "590 lb-ft",
      topSpeed: "205 mph",
      drivetrain: "All-Wheel Drive",
      seating: "4 passengers",
      color: "GT Silver Metallic",
      interior: "Black Leather",
    },
  },
]

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const car = cars.find((c) => c.id === Number.parseInt(id))

  if (!car) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">AutoElite</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link href="/cars" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Browse Cars
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/cars">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Listings
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                <img src={car.images[0] || "/placeholder.svg"} alt={car.name} className="object-cover w-full h-full" />
                <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border-border">
                  {car.category}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {car.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${car.name} view ${index + 2}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{car.description}</p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(car.specs).map(([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between items-center py-2 border-b border-border last:border-0"
                    >
                      <span className="text-sm font-medium text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="text-sm font-semibold text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-foreground mb-2 text-balance">{car.name}</h1>
                  <div className="text-4xl font-bold text-primary mb-4">${car.price.toLocaleString()}</div>
                </div>

                <Separator className="my-6" />

                {/* Quick Stats */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                      <Calendar className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Year</div>
                      <div className="text-sm font-semibold text-foreground">{car.year}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                      <Gauge className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Mileage</div>
                      <div className="text-sm font-semibold text-foreground">{car.mileage}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                      <Settings className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Transmission</div>
                      <div className="text-sm font-semibold text-foreground">{car.transmission}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted">
                      <Fuel className="w-5 h-5 text-foreground" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Fuel Type</div>
                      <div className="text-sm font-semibold text-foreground">{car.fuelType}</div>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Test Drive
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Dealer
                  </Button>
                </div>

                <Separator className="my-6" />

                {/* Trust Badges */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Verified Dealer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Vehicle History Report Available</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>30-Day Money Back Guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
