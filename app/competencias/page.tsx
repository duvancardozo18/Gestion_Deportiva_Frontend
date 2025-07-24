"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Search, Filter, Users } from "lucide-react"
import { apiService, type Tournament } from "@/lib/api"

export default function CompetenciasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterEstado, setFilterEstado] = useState("todos")
  const [tournaments, setTournaments] = useState<Tournament[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        setLoading(true)
        const response = await apiService.getTournaments()
        setTournaments(response.data)
      } catch (error) {
        console.error("Error fetching tournaments:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTournaments()
  }, [])

  const getEstadoBadge = (tournament: Tournament) => {
    const fechaTorneo = new Date(tournament.fecha_torneo)
    const hoy = new Date()
    const unMesAntes = new Date(fechaTorneo)
    unMesAntes.setMonth(unMesAntes.getMonth() - 1)

    if (hoy < unMesAntes) {
      return { badge: <Badge className="bg-yellow-500">Programado</Badge>, estado: "Programado" }
    } else if (hoy < fechaTorneo) {
      return { badge: <Badge className="bg-blue-500">Inscripciones Abiertas</Badge>, estado: "Inscripciones Abiertas" }
    } else {
      const unMesDespues = new Date(fechaTorneo)
      unMesDespues.setMonth(unMesDespues.getMonth() + 1)
      if (hoy < unMesDespues) {
        return { badge: <Badge className="bg-green-500">En Curso</Badge>, estado: "En Curso" }
      } else {
        return { badge: <Badge className="bg-gray-500">Completado</Badge>, estado: "Completado" }
      }
    }
  }

  const filteredTournaments = tournaments.filter((tournament) => {
    const matchesSearch =
      tournament.nombre_torneo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tournament.municipio.toLowerCase().includes(searchTerm.toLowerCase())

    if (filterEstado === "todos") {
      return matchesSearch
    }

    const { estado } = getEstadoBadge(tournament)
    return matchesSearch && estado === filterEstado
  })

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando torneos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Todos los Torneos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora todos nuestros torneos y competencias. Filtra por estado o busca por nombre.
          </p>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar torneos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="md:w-64">
              <Select value={filterEstado} onValueChange={setFilterEstado}>
                <SelectTrigger>
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Filtrar por estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos los Estados</SelectItem>
                  <SelectItem value="Inscripciones Abiertas">Inscripciones Abiertas</SelectItem>
                  <SelectItem value="En Curso">En Curso</SelectItem>
                  <SelectItem value="Programado">Programado</SelectItem>
                  <SelectItem value="Completado">Completado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Lista de Torneos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map((tournament) => {
            const { badge } = getEstadoBadge(tournament)
            return (
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
                    {badge}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
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
                  <Link href={`/competencias/${tournament.id}`}>
                    <Button className="w-full">Ver Detalles</Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {filteredTournaments.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron torneos que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}
