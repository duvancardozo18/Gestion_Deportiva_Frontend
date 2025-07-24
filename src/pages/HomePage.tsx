"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Inscripciones Abiertas",
      subtitle: "Torneo Regional 2024",
      description: "Únete a la competencia más emocionante de la región",
      buttonText: "Inscribirse Ahora",
      buttonLink: "/competencias",
      background: "bg-gradient-to-r from-gray-600 to-gray-800",
    },
    {
      title: "Copa Interclubes",
      subtitle: "Febrero 2024",
      description: "Los mejores equipos compiten por el título regional",
      buttonText: "Ver Detalles",
      buttonLink: "/competencias",
      background: "bg-gradient-to-r from-blue-600 to-blue-800",
    },
    {
      title: "Torneo Juvenil",
      subtitle: "Categoría Sub-18",
      description: "Formando el futuro del fútbol de salón",
      buttonText: "Conoce Más",
      buttonLink: "/competencias",
      background: "bg-gradient-to-r from-green-600 to-green-800",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Mock data - En producción esto vendría de la API
  const noticias = [
    {
      id: 1,
      titulo: "Inicio del Torneo Apertura 2024",
      fecha: "2024-01-10",
      resumen: "Con gran expectativa inicia el torneo más importante del año con la participación de 16 equipos.",
      imagen: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      titulo: "Nuevas Instalaciones Deportivas",
      fecha: "2024-01-08",
      resumen: "La liga inaugura nuevas canchas con tecnología de punta para mejorar la experiencia de juego.",
      imagen: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      titulo: "Convenio con Universidades",
      fecha: "2024-01-05",
      resumen: "Se firma convenio para promover el fútbol de salón universitario en la región.",
      imagen: "/placeholder.svg?height=200&width=300",
    },
  ]

  const competenciasRecientes = [
    {
      id: 1,
      nombre: "Torneo Apertura 2024",
      estado: "En Curso",
      municipio: "Medellín",
      lugar: "Coliseo Mayor",
      fecha: "2024-01-15",
      imagen: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      nombre: "Copa Interclubes",
      estado: "Inscripciones Abiertas",
      municipio: "Bello",
      lugar: "Polideportivo Central",
      fecha: "2024-02-01",
      imagen: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      nombre: "Torneo Juvenil",
      estado: "Programado",
      municipio: "Itagüí",
      lugar: "Cancha Municipal",
      fecha: "2024-02-15",
      imagen: "/placeholder.svg?height=200&width=300",
    },
  ]

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "En Curso":
        return <Badge className="bg-green-500">En Curso</Badge>
      case "Inscripciones Abiertas":
        return <Badge className="bg-blue-500">Inscripciones Abiertas</Badge>
      case "Programado":
        return <Badge className="bg-yellow-500">Programado</Badge>
      default:
        return <Badge>{estado}</Badge>
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
            }`}
          >
            <div className={`${slide.background} h-full flex items-center justify-center text-white relative`}>
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-4">{slide.title}</h1>
                <h2 className="text-2xl md:text-3xl text-green-400 mb-6">{slide.subtitle}</h2>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">{slide.description}</p>
                <Link to={slide.buttonLink}>
                  <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
                    {slide.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Noticias Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Últimas Noticias</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mantente informado con las últimas novedades de nuestra liga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {noticias.map((noticia) => (
              <Card key={noticia.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={noticia.imagen || "/placeholder.svg"}
                    alt={noticia.titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{noticia.titulo}</CardTitle>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(noticia.fecha).toLocaleDateString("es-ES")}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{noticia.resumen}</p>
                  <Button className="w-full bg-transparent" variant="outline">
                    Leer Más
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg">Ver Todas las Noticias</Button>
          </div>
        </div>
      </section>

      {/* Competencias Recientes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Competencias Recientes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mantente al día con las últimas competencias y torneos de nuestra liga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {competenciasRecientes.map((competencia) => (
              <Card key={competencia.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img
                    src={competencia.imagen || "/placeholder.svg"}
                    alt={competencia.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{competencia.nombre}</CardTitle>
                    {getEstadoBadge(competencia.estado)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>
                        {competencia.municipio} - {competencia.lugar}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(competencia.fecha).toLocaleDateString("es-ES")}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4 bg-transparent" variant="outline">
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/competencias">
              <Button size="lg">Ver Más Competencias</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Clubes Afiliados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg">Jugadores Activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-lg">Competencias Anuales</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-lg">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
