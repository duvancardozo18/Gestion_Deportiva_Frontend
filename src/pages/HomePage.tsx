"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slides, setSlides] = useState<any[]>([])

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tournaments`)
        const data = await response.json()
        // Mapear los datos para adaptarlos al formato del slider
        const mappedSlides = data.slice(0, 5).map((t: any) => ({
          title: t.nombre_torneo || "Torneo",
          subtitle: t.estado || "Competencia",
          description: (t.municipio || t.lugar)
            ? `${t.municipio ? `Municipio: ${t.municipio}` : ""}${t.municipio && t.lugar ? " | " : ""}${t.lugar ? `Lugar: ${t.lugar}` : ""}`
            : "Competencia de la liga",
          buttonText: "Ver Detalles",
          buttonLink: `/competencia/${encodeURIComponent(t.nombre_torneo.replace(/\s+/g, '-').toLowerCase())}`  ,
          background: "bg-gradient-to-r from-gray-600 to-gray-800",
          foto_torneo: t.foto_torneo,
        }))
        setSlides(mappedSlides)
      } catch (error) {
        setSlides([])
      }
    }
    fetchSlides()
  }, [])

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


  // Noticias (mock, unchanged)
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

  // Competencias recientes desde API
  const [competenciasRecientes, setCompetenciasRecientes] = useState<any[]>([])
  const [loadingCompetencias, setLoadingCompetencias] = useState(true)

  useEffect(() => {
    const fetchCompetencias = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tournaments`)
        const data = await response.json()
        // Tomar solo los 3 primeros sin ordenar
        setCompetenciasRecientes(data.slice(0, 3))
      } catch (error) {
        setCompetenciasRecientes([])
      } finally {
        setLoadingCompetencias(false)
      }
    }
    fetchCompetencias()
  }, [])

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
        {slides.length === 0 ? (
          <div className="flex items-center justify-center h-full text-white text-2xl">Cargando torneos...</div>
        ) : (
          slides.map((slide, index) => {
            // Imagen de fondo
            const bgImage = slide.foto_torneo
              ? `url(${import.meta.env.VITE_API_URL.replace(/\/api\/?$/, "")}/storage/${slide.foto_torneo})`
              : undefined
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
                }`}
                style={bgImage ? {
                  backgroundImage: `${bgImage}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                } : {}}
              >
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                
                <div className="container mx-auto px-4 text-center relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="flex items-center justify-center mb-6 gap-3 animate-fade-in">
                    {/* Navigation Arrows 
                    <span className="inline-block px-4 py-1 rounded-full text-base md:text-lg font-semibold bg-white bg-opacity-80 text-green-700 shadow-md border border-green-300">
                      {slide.subtitle}
                    </span>
                    */}
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white drop-shadow-2xl tracking-tight animate-fade-in">
                    {slide.title}
                  </h1>

                  <div className="flex items-center justify-center mb-8 gap-2 animate-fade-in">
                    <div className="px-6 py-4 rounded-2xl text-white bg-white/10 border border-white/30 shadow-xl backdrop-blur-md">
                      <p className="text-lg md:text-xl font-bold leading-tight mb-1">
                        {slide.description}
                      </p>
                      <p className="text-sm md:text-base font-medium opacity-90">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>

                  <Link to={slide.buttonLink}>
                    <Button size="lg" className="">
                      {slide.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })
        )}

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

      {/* Noticias Section 
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
      */}


      {/* Competencias Recientes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Competencias Recientes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mantente al día con las últimas competencias y torneos de nuestra liga
            </p>
          </div>

          {loadingCompetencias ? (
            <div className="text-center py-8">Cargando competencias...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {competenciasRecientes.map((competencia) => (
                  <Card key={competencia.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img
                        src={competencia.foto_torneo ? `${import.meta.env.VITE_API_URL.replace(/\/api\/?$/, "")}/storage/${competencia.foto_torneo}` : "/placeholder.svg"}
                        alt={competencia.nombre_torneo}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg">{competencia.nombre_torneo}</CardTitle>
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
                          <span>{new Date(competencia.fecha_torneo).toLocaleDateString("es-ES")}</span>
                        </div>
                      </div>
                      <Link to={`/competencia/${encodeURIComponent(competencia.nombre_torneo.replace(/\s+/g, '-').toLowerCase())}`}>
                      <Button className="w-full mt-4 bg-transparent" variant="outline">
                        Ver Detalles
                      </Button>
                       </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Link to="/competencias">
                  <Button size="lg">Ver Más Competencias</Button>
                </Link>
              </div>
            </>
          )}
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
