import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, MapPin, Search, Filter, Users } from "lucide-react"

const CompetenciasPage = () => {
  const [competencias, setCompetencias] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterEstado, setFilterEstado] = useState("todos")
  const cleanApiUrl = (url: string) => url.replace(/\/api\/?$/, "")

  const formatFecha = (fecha: string) => {
  const date = new Date(fecha)
  if (isNaN(date.getTime())) return fecha // Si la fecha no es válida, retorna el valor original
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth()+1).toString().padStart(2, "0")}/${date.getFullYear()}`
 }

  useEffect(() => {
    const fetchCompetencias = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/tournaments`)
        setCompetencias(response.data)
      } catch (err) {
        console.error("Error al cargar las competencias:", err)
      } finally {
        setLoading(false)
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
      case "Completado":
        return <Badge className="bg-gray-500">Completado</Badge>
      default:
        return <Badge>{estado}</Badge>
    }
  }

  const filteredCompetencias = competencias.filter((competencia: any) => {
    const matchesSearch =
      competencia.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      competencia.municipio?.toLowerCase().includes(searchTerm.toLowerCase())

    if (filterEstado === "todos") {
      return matchesSearch
    }
    return matchesSearch && competencia.estado === filterEstado
  })

  if (loading) {
    return <div className="text-center py-8">Cargando competencias...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Todas las Competencias</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora todas nuestras competencias y torneos. Filtra por estado o busca por nombre.
          </p>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Buscar competencias..."
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

        {/* Lista de Competencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompetencias.map((competencia: any) => (
          <Card key={competencia.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img
                src={`${cleanApiUrl(import.meta.env.VITE_API_URL)}/storage/${competencia.foto_torneo}`}
                alt={competencia.nombre_torneo}
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <CardTitle className="text-lg">{competencia.nombre_torneo}</CardTitle>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{formatFecha(competencia.fecha_torneo)}</span>
                  </div>
                </div>
                {getEstadoBadge(competencia.estado)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                 <div className="flex items-center">
                  <span className="font-semibold mr-2">Categoría:</span>
                  <span>{competencia.categoria}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Municipio:</span>
                  <span>{competencia.municipio}</span>
                </div>
              </div>
              <Link to={`/competencia/${encodeURIComponent(competencia.nombre_torneo.replace(/\s+/g, '-').toLowerCase())}`}>
                <Button className="w-full">Ver Detalles</Button>
              </Link>
            </CardContent>
          </Card>

          ))}
        </div>

        {filteredCompetencias.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron competencias que coincidan con tu búsqueda.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default CompetenciasPage