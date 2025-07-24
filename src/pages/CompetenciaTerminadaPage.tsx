"use client"

import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Trophy, Target, Users, BarChart3, Crown } from "lucide-react"

const CompetenciaTerminadaPage = () => {
  const { id } = useParams()

  // Mock data - En producción esto vendría de la API
  const competencia = {
    id: id,
    nombre: "Copa Femenina 2023",
    estado: "Completada",
    municipio: "Envigado",
    lugar: "Polideportivo Sur",
    fecha: "2023-12-10",
    descripcion: "Torneo exclusivo para equipos femeninos que culminó con gran éxito y participación.",
    imagen: "/placeholder.svg?height=400&width=600",
  }

  const clasificacion = [
    { posicion: 1, equipo: "Águilas FC Femenino", puntos: 18, pj: 6, pg: 6, pe: 0, pp: 0, gf: 15, gc: 2 },
    { posicion: 2, equipo: "Deportivo Bello Femenino", puntos: 12, pj: 6, pg: 4, pe: 0, pp: 2, gf: 12, gc: 8 },
    { posicion: 3, equipo: "Club Itagüí Femenino", puntos: 9, pj: 6, pg: 3, pe: 0, pp: 3, gf: 10, gc: 10 },
    { posicion: 4, equipo: "Envigado FC Femenino", puntos: 6, pj: 6, pg: 2, pe: 0, pp: 4, gf: 8, gc: 12 },
  ]

  const partidos = [
    { fecha: "2023-12-01", equipo1: "Águilas FC", resultado: "3-1", equipo2: "Deportivo Bello", estado: "Finalizado" },
    { fecha: "2023-12-02", equipo1: "Club Itagüí", resultado: "2-2", equipo2: "Envigado FC", estado: "Finalizado" },
    { fecha: "2023-12-08", equipo1: "Águilas FC", resultado: "4-0", equipo2: "Club Itagüí", estado: "Finalizado" },
    { fecha: "2023-12-10", equipo1: "Deportivo Bello", resultado: "2-1", equipo2: "Envigado FC", estado: "Finalizado" },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header con imagen y información básica */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Información básica - En responsive va arriba */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{competencia.nombre}</h1>
                <Badge className="bg-gray-500 text-lg px-4 py-2 w-fit">Completada</Badge>
              </div>
              <p className="text-gray-600 text-lg">{competencia.descripcion}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-medium">
                  {competencia.municipio} - {competencia.lugar}
                </span>
              </div>
              <div className="flex items-center text-gray-700">
                <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-medium">{new Date(competencia.fecha).toLocaleDateString("es-ES")}</span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <Trophy className="w-5 h-5 mr-2 text-green-600" />
                <span className="font-semibold text-green-800">Campeón</span>
              </div>
              <p className="text-green-700 font-medium">Águilas FC Femenino</p>
            </div>
          </div>

          {/* Imagen - En responsive va abajo */}
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden order-1 lg:order-2">
            <img
              src={competencia.imagen || "/placeholder.svg"}
              alt={competencia.nombre}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Tabs con información detallada */}
        <Tabs defaultValue="clasificacion" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
            <TabsTrigger value="clasificacion" className="text-xs lg:text-sm">
              Clasificación
            </TabsTrigger>
            <TabsTrigger value="partidos" className="text-xs lg:text-sm">
              Partidos
            </TabsTrigger>
            <TabsTrigger value="estadisticas" className="text-xs lg:text-sm">
              Estadísticas
            </TabsTrigger>
            <TabsTrigger value="ranking" className="text-xs lg:text-sm">
              Ranking
            </TabsTrigger>
          </TabsList>

          <TabsContent value="clasificacion" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Clasificación Final
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Pos</th>
                        <th className="text-left p-2">Equipo</th>
                        <th className="text-center p-2">Pts</th>
                        <th className="text-center p-2">PJ</th>
                        <th className="text-center p-2">PG</th>
                        <th className="text-center p-2">PE</th>
                        <th className="text-center p-2">PP</th>
                        <th className="text-center p-2">GF</th>
                        <th className="text-center p-2">GC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clasificacion.map((equipo) => (
                        <tr key={equipo.posicion} className={equipo.posicion === 1 ? "bg-yellow-50" : ""}>
                          <td className="p-2 font-medium">
                            {equipo.posicion === 1 && <Crown className="w-4 h-4 inline mr-1 text-yellow-600" />}
                            {equipo.posicion}
                          </td>
                          <td className="p-2 font-medium">{equipo.equipo}</td>
                          <td className="p-2 text-center font-bold">{equipo.puntos}</td>
                          <td className="p-2 text-center">{equipo.pj}</td>
                          <td className="p-2 text-center">{equipo.pg}</td>
                          <td className="p-2 text-center">{equipo.pe}</td>
                          <td className="p-2 text-center">{equipo.pp}</td>
                          <td className="p-2 text-center">{equipo.gf}</td>
                          <td className="p-2 text-center">{equipo.gc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partidos" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Partidos Jugados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partidos.map((partido, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <span className="text-sm text-gray-500">
                          {new Date(partido.fecha).toLocaleDateString("es-ES")}
                        </span>
                        <span className="font-medium">{partido.equipo1}</span>
                        <span className="font-bold text-lg">{partido.resultado}</span>
                        <span className="font-medium">{partido.equipo2}</span>
                      </div>
                      <Badge className="bg-green-500 w-fit">{partido.estado}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="estadisticas" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    Tabla de Goleadoras
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Sofía Martínez</p>
                        <p className="text-sm text-gray-600">Águilas FC</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">8</p>
                        <p className="text-sm text-gray-600">goles</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Laura Pérez</p>
                        <p className="text-sm text-gray-600">Deportivo Bello</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">6</p>
                        <p className="text-sm text-gray-600">goles</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Tabla de Asistencias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Sofía Martínez</p>
                        <p className="text-sm text-gray-600">Águilas FC</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">5</p>
                        <p className="text-sm text-gray-600">asistencias</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Diana Torres</p>
                        <p className="text-sm text-gray-600">Águilas FC</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">4</p>
                        <p className="text-sm text-gray-600">asistencias</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ranking" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Ranking de Equipos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="font-bold text-lg w-8">1</span>
                      <div>
                        <p className="font-medium">Águilas FC Femenino</p>
                        <Badge className="bg-green-500">Excelente</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl">95</p>
                      <p className="text-sm text-gray-600">puntos</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Botón de regreso */}
        <div className="mt-8">
          <Link to="/competencias">
            <Button variant="outline">← Volver a Competencias</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompetenciaTerminadaPage
