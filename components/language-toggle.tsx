"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
]

export function LanguageToggle() {
  const [language, setLanguage] = useState("es")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="destructive"
          className=" md:bg-[#FF5A3C] md:text-white text-2xl md:text-base gap-1 md:px-[18px] md:py-[11px] rounded-none font-nunito md:rounded-[10px] border border-[#FF5A3C] md:hover:bg-orange-400"
        >
          {language.toUpperCase()}
          <ChevronDown className="hidden md:block text-[#E7272D]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px] ">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className="flex items-center bg-white justify-between"
          >
            {lang.label}
            {language === lang.code && <Check className=" h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

