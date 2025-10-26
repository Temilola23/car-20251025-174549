"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ArrowRight, Search, SlidersHorizontal, Zap } from "lucide-react"

const allCars = [
  {
    id: 1,
    name: "Tesla Model S Plaid",
    price: 89990,
    image: "/placeholder.svg?height=400&width=600",
    category: "Electric",
    year: 2024,
    mileage: "0 mi",
    transmission: "Automatic",
    fuelType: "Electric",
  },
  {
    id: 2,
    name: "Porsche 911 Turbo S",
    price: 207000,
    image: "/placeholder.svg?height=400&width=600",
    category: "Sports",
    year: 2024,
    mileage: "1,200 mi",
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 3,
    name: "Mercedes-Benz S-Class",
    price: 114500,
    image: "/placeholder.svg?height=400&width=600",
    category: "Luxury",
    year: 2024,
    mileage: "500 mi",
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 4,
    name: "BMW M4 Competition",
    price: 76900,
    image: "/placeholder.svg?height=400&width=600",
    category: "Sports",
    year: 2024,
    mileage: "2,100 mi",
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 5,
    name: "Audi e-tron GT",
    price: 104900,
    image: "/placeholder.svg?height=400&width=600",
    category: "Electric",
    year: 2024,
    mileage: "800 mi",
    transmission: "Automatic",
    fuelType: "Electric",
  },
  {
    id: 6,
    name: "Range Rover Sport",
    price: 83000,
    image: "/placeholder.svg?height=400&width=600",
    category: "SUV",
    year: 2024,
    mileage: "1,500 mi",
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 7,
    name: "Lamborghini Huracán",
    price: 248295,
    image: "/placeholder.svg?height=400&width=600",
    category: "Sports",
    year: 2024,
    mileage: "300 mi",
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 8,
    name: "Lexus LS 500",
    price: 77635,
    image: "/placeholder.svg?height=400&width=600",
    category: "Luxury",
    year: 2024,
    mileage: "1,800 mi",
    transmission: "Automatic",
    fuelType: "Gasoline",
  },
  {
    id: 9,
    name: "Rivian R1T",
    price: 73000,
    image: "/placeholder.svg?height=400&width=600",
    category: "Electric",
    year: 2024,
    mileage: "600 mi",
    transmission: "Automatic",
    fuelType: "Electric",
  },
]

export default function CarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState([0, 300000])
  const [showFilters, setShowFilters] = useState(false)

  const filteredCars = allCars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || car.category === selectedCategory
    const matchesPrice = car.price >= priceRange[0] && car.price <= priceRange[1]
    return matchesSearch && matchesCategory && matchesPrice
  })

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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 text-balance">Browse Our Collection</h1>
          <p className="text-lg text-muted-foreground text-pretty">
            Discover {allCars.length} premium vehicles available now
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by make, model, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:w-auto">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                      <SelectItem value="Sports">Sports</SelectItem>
                      <SelectItem value="Luxury">Luxury</SelectItem>
                      <SelectItem value="SUV">SUV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label>
                    Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                  </Label>
                  <Slider
                    min={0}
                    max={300000}
                    step={5000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mt-2"
                  />
                </div>
              </div>
            </Card>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {filteredCars.length} of {allCars.length} vehicles
          </p>
        </div>

        {/* Car Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <Link key={car.id} href={`/cars/${car.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 bg-background/90 text-foreground border-border">
                      {car.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 text-balance">{car.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span>{car.year}</span>
                      <span>•</span>
                      <span>{car.mileage}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-foreground">${car.price.toLocaleString()}</div>
                      <Button size="sm" variant="ghost">
                        View Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <div className="max-w-md mx-auto">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No vehicles found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setPriceRange([0, 300000])
                }}
              >
                Reset Filters
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
