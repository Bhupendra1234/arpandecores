"use client"

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const categories = [
  { id: "all", label: "All Categories" },
  { id: "home-decor", label: "Home Decor" },
  { id: "wedding-gifts", label: "Wedding Gifts" },
  { id: "festive-decor", label: "Festive Decor" },
  { id: "photo-frames", label: "Photo Frames" },
  { id: "gift-boxes", label: "Gift Boxes" },
  { id: "wall-art", label: "Wall Art" },
  { id: "table-decor", label: "Table Decor" },
  { id: "home-textiles", label: "Home Textiles" },
  { id: "storage", label: "Storage" },
  { id: "lighting", label: "Lighting" },
  { id: "wedding-decor", label: "Wedding Decor" },
  { id: "stationery", label: "Stationery" },
]

const occasions = [
  { id: "wedding", label: "Wedding" },
  { id: "anniversary", label: "Anniversary" },
  { id: "birthday", label: "Birthday" },
  { id: "housewarming", label: "Housewarming" },
  { id: "festival", label: "Festival" },
  { id: "corporate", label: "Corporate" },
]

interface ProductFiltersProps {
  filters: {
    categories: string[]
    priceRange: [number, number]
    occasions: string[]
    customizable: boolean
  }
  onFiltersChange: (filters: any) => void
}

export default function ProductFilters({ filters, onFiltersChange }: ProductFiltersProps) {
  const handleCategoryChange = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((id) => id !== categoryId)
      : [...filters.categories, categoryId]

    onFiltersChange({ ...filters, categories: newCategories })
  }

  const handleOccasionChange = (occasionId: string) => {
    const newOccasions = filters.occasions.includes(occasionId)
      ? filters.occasions.filter((id) => id !== occasionId)
      : [...filters.occasions, occasionId]

    onFiltersChange({ ...filters, occasions: newOccasions })
  }

  const handlePriceChange = (values: number[]) => {
    onFiltersChange({ ...filters, priceRange: [values[0], values[1]] as [number, number] })
  }

  const handleCustomizableChange = (checked: boolean) => {
    onFiltersChange({ ...filters, customizable: checked })
  }

  const handleReset = () => {
    onFiltersChange({
      categories: [],
      priceRange: [0, 10000] as [number, number],
      occasions: [],
      customizable: false,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-playfair font-semibold text-lg">Filters</h2>
        <Button variant="ghost" size="sm" onClick={handleReset}>
          Reset
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price", "occasions"]}>
        {/* Categories */}
        <AccordionItem value="categories">
          <AccordionTrigger className="text-base font-medium">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={filters.categories.includes(category.id)}
                    onCheckedChange={() => handleCategoryChange(category.id)}
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-base font-medium">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                defaultValue={[0, 10000]}
                min={0}
                max={10000}
                step={100}
                value={filters.priceRange}
                onValueChange={handlePriceChange}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">₹{filters.priceRange[0]}</span>
                <span className="text-sm">₹{filters.priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Occasions */}
        <AccordionItem value="occasions">
          <AccordionTrigger className="text-base font-medium">Occasions</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-1">
              {occasions.map((occasion) => (
                <div key={occasion.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`occasion-${occasion.id}`}
                    checked={filters.occasions.includes(occasion.id)}
                    onCheckedChange={() => handleOccasionChange(occasion.id)}
                  />
                  <label
                    htmlFor={`occasion-${occasion.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {occasion.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Customizable */}
      <div className="flex items-center space-x-2 pt-2">
        <Checkbox id="customizable" checked={filters.customizable} onCheckedChange={handleCustomizableChange} />
        <label
          htmlFor="customizable"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
        >
          Customizable Items Only
        </label>
      </div>
    </div>
  )
}
