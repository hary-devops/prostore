"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-gray-300">
        <DropdownMenuLabel className="text-center m-2 font-bold">Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator className="m-2 border-b" />
        <DropdownMenuCheckboxItem onClick={() => setTheme("light")} checked={ theme === "light" }>
          Light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onClick={() => setTheme("dark")} checked={ theme === "dark" }>
          Dark
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem onClick={() => setTheme("system")} checked={ theme === "system" }>
          System
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
