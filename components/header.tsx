"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const nuestraLigaItems = [
    { name: "Misión", href: "/nuestra-liga/mision" },
    { name: "Visión", href: "/nuestra-liga/vision" },
    { name: "Reseña Histórica", href: "/nuestra-liga/resena-historica" },
    { name: "Nuestros Símbolos", href: "/nuestra-liga/simbolos" },
    { name: "Organigrama", href: "/nuestra-liga/organigrama" },
    { name: "Comisión de Juzgamiento", href: "/nuestra-liga/comision-juzgamiento" },
    { name: "Liga Nacional Betplay", href: "/nuestra-liga/liga-nacional-betplay" },
    { name: "Participaciones Nacionales", href: "/nuestra-liga/participaciones-nacionales" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Liga Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-blue-900">Liga Fútsal</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="px-4 py-2 text-sm font-medium hover:text-blue-600">
                    Inicio
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/competencias" className="px-4 py-2 text-sm font-medium hover:text-blue-600">
                    Competencias
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/clubes" className="px-4 py-2 text-sm font-medium hover:text-blue-600">
                    Clubes
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 text-sm font-medium">Nuestra Liga</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4">
                    {nuestraLigaItems.map((item) => (
                      <NavigationMenuLink key={item.href} asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/convocatorias" className="px-4 py-2 text-sm font-medium hover:text-blue-600">
                    Convocatorias
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/entrenadores" className="px-4 py-2 text-sm font-medium hover:text-blue-600">
                    Entrenadores
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/reglas-futsal" className="px-4 py-2 text-sm font-medium hover:text-blue-600">
                    Reglas F. de Salón
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Login Button */}
          <Button className="hidden lg:flex">Ingresar</Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Inicio
                </Link>
                <Link href="/competencias" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Competencias
                </Link>
                <Link href="/clubes" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Clubes
                </Link>

                <div className="space-y-2">
                  <div className="text-lg font-medium text-gray-900">Nuestra Liga</div>
                  <div className="pl-4 space-y-2">
                    {nuestraLigaItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/convocatorias" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Convocatorias
                </Link>
                <Link href="/entrenadores" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Entrenadores
                </Link>
                <Link href="/reglas-futsal" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Reglas F. de Salón
                </Link>

                <Button className="mt-4" onClick={() => setIsOpen(false)}>
                  Ingresar
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
