"use client"

import { MoonStar, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

function ToggleTheme({isWithinHero}: {isWithinHero: boolean}) {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Button
        title="Toggle Theme"
      type="button"
      variant="outline"
      size="icon"
      className="relative"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      aria-pressed={isDark}
    >
      <SunMedium className={`size-4 transition-all duration-300 dark:scale-0 dark:rotate-90 dark:opacity-0 ${isWithinHero ? "text-white" : ""}`} />
      <MoonStar className={`absolute size-4 scale-0 rotate-90 opacity-0 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:opacity-100 ${isWithinHero ? "text-white" : ""}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ToggleTheme

