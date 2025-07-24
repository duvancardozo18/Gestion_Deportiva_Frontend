"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight, FileText, Download } from "lucide-react"
import { apiService, type Tournament, type Post, type Club } from "@/lib/api"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [tournaments, setTournaments] = useState<Tournament[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [clubs, setClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(true)

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [tournamentsResponse, postsResponse, clubsResponse] = await Promise.all([
          apiService.getTournaments(),
          apiService.getPosts(),
          apiService.getClubs(),
        ])

        setTournaments(tournamentsResponse.data.slice(0, 3))
        setPosts(postsResponse.data.slice(0, 3))
        setClubs(clubsResponse.data.slice(0, 4))
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const getEstadoBadge = (tournament: Tournament) => {
    const fechaTorneo = new Date(tournament.fecha_torneo)
    const hoy = new Date()

    if (fechaTorneo > hoy) {
      return <Badge className="bg-blue-500">Inscripciones Abiertas</Badge>
    } else {
      return <Badge className="bg-green-500">En Curso</Badge>
    }
  }

  const getTipoBadge = (tipo: string) => {
    switch (tipo) {
      case "comunicado":
        return <Badge className="bg-blue-500">Comunicado</Badge>
      case "resolucion":
        return <Badge className="bg-red-500">Resolución</Badge>
      case "circular":
        return <Badge className="bg-green-500">Circular</Badge>
      default:
        return <Badge className="bg-gray-500">{tipo}</Badge>
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    )
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
                <Link href={slide.buttonLink}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Últimas Publicaciones</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mantente informado con las últimas novedades de nuestra liga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{post.titulo_publicacion}</CardTitle>
                    {getTipoBadge(post.tipo_publicacion)}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{new Date(post.created_at).toLocaleDateString("es-ES")}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.descripcion}</p>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-transparent" variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Ver
                    </Button>
                    {post.archivo_pdf && (
                      <Button variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg">Ver Todas las Publicaciones</Button>
          </div>
        </div>
      </section>

      {/* Competencias Recientes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Torneos Recientes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mantente al día con los últimos torneos de nuestra liga
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {tournaments.map((tournament) => (
              <Card key={tournament.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={tournament.foto_torneo || "/placeholder.svg?height=200&width=300"}
                    alt={tournament.nombre_torneo}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{tournament.nombre_torneo}</CardTitle>
                    {getEstadoBadge(tournament)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>
                        {tournament.municipio} - {tournament.lugar}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(tournament.fecha_torneo).toLocaleDateString("es-ES")}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{tournament.encargado_nombre}</span>
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
            <Link href="/competencias">
              <Button size="lg">Ver Más Torneos</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clubes Afiliados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clubes Afiliados</h2>
            <p className="text-lg text-gray-600">Conoce los clubes que forman parte de nuestra liga</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {clubs.map((club) => (
              <Card key={club.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {club.foto_logo ? (
                      <Image
                        src={club.foto_logo || "/placeholder.svg"}
                        alt={club.nombre_club}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                    ) : (
                      <Users className="w-8 h-8 text-blue-600" />
                    )}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{club.nombre_club}</h3>
                  <p className="text-gray-600 mb-1">{club.municipio}</p>
                  <p className="text-sm text-gray-500">{club.nombre_presidente}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/clubes">
              <Button variant="outline" size="lg">
                Ver Todos los Clubes
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{clubs.length}+</div>
              <div className="text-lg">Clubes Afiliados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-lg">Jugadores Activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{tournaments.length}+</div>
              <div className="text-lg">Torneos Activos</div>
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
