"use client"

import * as React from "react"
import { Check, ChevronsUpDown, Filter } from "lucide-react"

import { Category, categories } from "@/types/writing"
import { cn } from "@/lib/utils"
import useWindowSize from "@/hooks/window-size"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const categoriesFormatted = categories.sort().map((category) => ({
  value: category,
  label: category,
}))

interface FiltersSelectorProps {
  blogItemsAmount: number
  filter: Category | null
  setFilter: (filter: Category | null) => void
}

export function FiltersSelector({
  blogItemsAmount,
  filter,
  setFilter,
}: FiltersSelectorProps) {
  const [open, setOpen] = React.useState<boolean>(false)
  const { width } = useWindowSize()
  console.log(width)

  return (
    <div
      className={`flex items-center justify-between space-x-4 ${
        width > 500 ? "flex-row" : "flex-col gap-2"
      }`}
    >
      <div className="flex w-full items-center space-x-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between whitespace-nowrap"
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter ? (
                categoriesFormatted.find(
                  (category) => category.value === filter
                )?.label
              ) : (
                <span className="text-muted-foreground">Filter posts</span>
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search filter..." />
              <CommandEmpty>No filter found.</CommandEmpty>
              <CommandGroup>
                {categoriesFormatted.map((category) => (
                  <CommandItem
                    key={category.value}
                    onSelect={(currentValue) => {
                      setFilter(currentValue === filter ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        filter === category.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {category.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <span className="text-gray-500">({blogItemsAmount})</span>
      </div>
      {filter ? (
        <Button
          className={width > 500 ? "w-auto" : "w-full"}
          variant="outline"
          onClick={() => setFilter(null)}
        >
          Clear
        </Button>
      ) : null}
    </div>
  )
}
