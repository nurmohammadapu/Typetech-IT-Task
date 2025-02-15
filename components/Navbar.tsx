"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileNav from "@/components/mobile-nav"
import { LanguageToggle } from "./language-toggle"

const Navbar = () => {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/properties", label: "Properties" },
    { href: "/neighborhood", label: "Neighborhood" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <div>
      <header className={`${isHomePage ? "" : "bg-white shadow-md"} transition-all duration-300`}>
        <nav className="w-11/12 lg:w-8/12 mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/">
            <div className={`w-12 h-12 ${isHomePage ? "bg-white" : "bg-[#FF5A3C]"}`}></div>
          </Link>

          <div className="flex gap-4 lg:gap-[52px]">
            <div className="hidden md:flex items-center text-base gap-3 xl:gap-12">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`
                    ${isHomePage ? "text-white hover:text-[#FF5A3C]" : "text-gray-800 hover:text-[#FF5A3C]"} 
                    ${pathname === href ? "font-bold" : "font-normal"}
                    transition-colors relative
                  `}
                >
                  {label}
                  {pathname === href && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current"></span>}
                </Link>
              ))}
            </div>
            <MobileNav />
            <LanguageToggle />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar

