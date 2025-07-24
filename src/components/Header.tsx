"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showNuestraLiga, setShowNuestraLiga] = useState(false)

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
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-liga.png" alt="Liga Logo" className="w-10 h-10 rounded-full" />
            <span className="font-bold text-xl text-blue-900">Lifutsal</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-blue-600">
              Inicio
            </Link>
            <Link to="/competencias" className="text-sm font-medium hover:text-blue-600">
              Competencias
            </Link>
            <Link to="/clubes" className="text-sm font-medium hover:text-blue-600">
              Clubes
            </Link>

            {/* Dropdown Nuestra Liga */}
            <div className="relative">
              <button
                className="text-sm font-medium hover:text-blue-600 flex items-center"
                onMouseEnter={() => setShowNuestraLiga(true)}
                onMouseLeave={() => setShowNuestraLiga(false)}
              >
                Nuestra Liga
              </button>
              {showNuestraLiga && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white border rounded-md shadow-lg z-50"
                  onMouseEnter={() => setShowNuestraLiga(true)}
                  onMouseLeave={() => setShowNuestraLiga(false)}
                >
                  {nuestraLigaItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                      onClick={() => setShowNuestraLiga(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/convocatorias" className="text-sm font-medium hover:text-blue-600">
              Convocatorias
            </Link>
            <Link to="/entrenadores" className="text-sm font-medium hover:text-blue-600">
              Entrenadores
            </Link>
            <Link to="/reglas-futsal" className="text-sm font-medium hover:text-blue-600">
              Reglas F. de Salón
            </Link>
          </nav>

          {/* Login Button */}
          <Button className="hidden lg:flex">Ingresar</Button>

          {/* Mobile Menu Button */}
          <Button variant="outline" size="icon" className="lg:hidden bg-transparent" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t">
            <nav className="flex flex-col space-y-4 py-4">
              <Link to="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Inicio
              </Link>
              <Link to="/competencias" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Competencias
              </Link>
              <Link to="/clubes" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Clubes
              </Link>

              <div className="space-y-2">
                <div className="text-lg font-medium text-gray-900">Nuestra Liga</div>
                <div className="pl-4 space-y-2">
                  {nuestraLigaItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/convocatorias" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Convocatorias
              </Link>
              <Link to="/entrenadores" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Entrenadores
              </Link>
              <Link to="/reglas-futsal" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Reglas F. de Salón
              </Link>

              <Button className="mt-4" onClick={() => setIsOpen(false)}>
                Ingresar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
