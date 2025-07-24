import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, MapPin, Trophy, Target, Users, AlertTriangle, BarChart3, Crown } from "lucide-react"

// Esta sería una competencia terminada
export default function CompetenciaTerminadaPage({ params }: { params: { id: string } }) {
  const competencia = {
    id: params.id,
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

  const sanciones = [
    {
      jugador: "María González",
      equipo: "Deportivo Bello",
      sancion: "Tarjeta Amarilla",
      partido: "vs Águilas FC",
      fecha: "2023-12-01",
    },
    {
      jugador: "Ana Rodríguez",
      equipo: "Club Itagüí",
      sancion: "Tarjeta Roja",
      partido: "vs Envigado FC",
      fecha: "2023-12-02",
    },
  ]

  const estadisticas = {
    goleadoras: [
      { jugador: "Sofía Martínez", equipo: "Águilas FC", goles: 8 },
      { jugador: "Laura Pérez", equipo: "Deportivo Bello", goles: 6 },
      { jugador: "Carmen López", equipo: "Club Itagüí", goles: 4 },
    ],
    asistencias: [
      { jugador: "Sofía Martínez", equipo: "Águilas FC", asistencias: 5 },
      { jugador: "Diana Torres", equipo: "Águilas FC", asistencias: 4 },
      { jugador: "Laura Pérez", equipo: "Deportivo Bello", asistencias: 3 },
    ],
  }

  const rankingEquipos = [
    { equipo: "Águilas FC Femenino", puntuacion: 95, categoria: "Excelente" },
    { equipo: "Deportivo Bello Femenino", puntuacion: 82, categoria: "Muy Bueno" },
    { equipo: "Club Itagüí Femenino", puntuacion: 75, categoria: "Bueno" },
    { equipo: "Envigado FC Femenino", puntuacion: 68, categoria: "Regular" },
  ]

  const rankingJugadores = [
    { jugador: "Sofía Martínez", equipo: "Águilas FC", puntuacion: 9.2, categoria: "Estrella" },
    { jugador: "Laura Pérez", equipo: "Deportivo Bello", puntuacion: 8.5, categoria: "Destacada" },
    { jugador: "Diana Torres", equipo: "Águilas FC", puntuacion: 8.3, categoria: "Destacada" },
    { jugador: "Carmen López", equipo: "Club Itagüí", puntuacion: 7.8, categoria: "Buena" },
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
            <Image
              src={competencia.imagen || "/placeholder.svg"}
              alt={competencia.nombre}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Tabs con información detallada */}
        <Tabs defaultValue="clasificacion" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto">
            <TabsTrigger value="clasificacion" className="text-xs lg:text-sm">
              Clasificación
            </TabsTrigger>
            <TabsTrigger value="partidos" className="text-xs lg:text-sm">
              Partidos
            </TabsTrigger>
            <TabsTrigger value="sanciones" className="text-xs lg:text-sm">
              Sanciones
            </TabsTrigger>
            <TabsTrigger value="estadisticas" className="text-xs lg:text-sm">
              Estadísticas
            </TabsTrigger>
            <TabsTrigger value="rk-equipos" className="text-xs lg:text-sm">
              RK Equipos
            </TabsTrigger>
            <TabsTrigger value="rk-jugadores" className="text-xs lg:text-sm">
              RK Jugadores
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
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">Pos</TableHead>
                        <TableHead>Equipo</TableHead>
                        <TableHead className="text-center">Pts</TableHead>
                        <TableHead className="text-center">PJ</TableHead>
                        <TableHead className="text-center">PG</TableHead>
                        <TableHead className="text-center">PE</TableHead>
                        <TableHead className="text-center">PP</TableHead>
                        <TableHead className="text-center">GF</TableHead>
                        <TableHead className="text-center">GC</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clasificacion.map((equipo) => (
                        <TableRow key={equipo.posicion} className={equipo.posicion === 1 ? "bg-yellow-50" : ""}>
                          <TableCell className="font-medium">
                            {equipo.posicion === 1 && <Crown className="w-4 h-4 inline mr-1 text-yellow-600" />}
                            {equipo.posicion}
                          </TableCell>
                          <TableCell className="font-medium">{equipo.equipo}</TableCell>
                          <TableCell className="text-center font-bold">{equipo.puntos}</TableCell>
                          <TableCell className="text-center">{equipo.pj}</TableCell>
                          <TableCell className="text-center">{equipo.pg}</TableCell>
                          <TableCell className="text-center">{equipo.pe}</TableCell>
                          <TableCell className="text-center">{equipo.pp}</TableCell>
                          <TableCell className="text-center">{equipo.gf}</TableCell>
                          <TableCell className="text-center">{equipo.gc}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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

          <TabsContent value="sanciones" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Sanciones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Jugadora</TableHead>
                        <TableHead>Equipo</TableHead>
                        <TableHead>Sanción</TableHead>
                        <TableHead>Partido</TableHead>
                        <TableHead>Fecha</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sanciones.map((sancion, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{sancion.jugador}</TableCell>
                          <TableCell>{sancion.equipo}</TableCell>
                          <TableCell>
                            <Badge className={sancion.sancion.includes("Amarilla") ? "bg-yellow-500" : "bg-red-500"}>
                              {sancion.sancion}
                            </Badge>
                          </TableCell>
                          <TableCell>{sancion.partido}</TableCell>
                          <TableCell>{new Date(sancion.fecha).toLocaleDateString("es-ES")}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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
                    {estadisticas.goleadoras.map((goleadora, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{goleadora.jugador}</p>
                          <p className="text-sm text-gray-600">{goleadora.equipo}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{goleadora.goles}</p>
                          <p className="text-sm text-gray-600">goles</p>
                        </div>
                      </div>
                    ))}
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
                    {estadisticas.asistencias.map((asistente, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">{asistente.jugador}</p>
                          <p className="text-sm text-gray-600">{asistente.equipo}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">{asistente.asistencias}</p>
                          <p className="text-sm text-gray-600">asistencias</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rk-equipos" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Ranking de Equipos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rankingEquipos.map((equipo, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <span className="font-bold text-lg w-8">{index + 1}</span>
                        <div>
                          <p className="font-medium">{equipo.equipo}</p>
                          <Badge
                            className={
                              equipo.categoria === "Excelente"
                                ? "bg-green-500"
                                : equipo.categoria === "Muy Bueno"
                                  ? "bg-blue-500"
                                  : equipo.categoria === "Bueno"
                                    ? "bg-yellow-500"
                                    : "bg-gray-500"
                            }
                          >
                            {equipo.categoria}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl">{equipo.puntuacion}</p>
                        <p className="text-sm text-gray-600">puntos</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rk-jugadores" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="w-5 h-5 mr-2" />
                  Ranking de Jugadoras
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rankingJugadores.map((jugadora, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <span className="font-bold text-lg w-8">{index + 1}</span>
                        <div>
                          <p className="font-medium">{jugadora.jugador}</p>
                          <p className="text-sm text-gray-600">{jugadora.equipo}</p>
                          <Badge
                            className={
                              jugadora.categoria === "Estrella"
                                ? "bg-purple-500"
                                : jugadora.categoria === "Destacada"
                                  ? "bg-blue-500"
                                  : jugadora.categoria === "Buena"
                                    ? "bg-green-500"
                                    : "bg-gray-500"
                            }
                          >
                            {jugadora.categoria}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl">{jugadora.puntuacion}</p>
                        <p className="text-sm text-gray-600">rating</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Botón de regreso */}
        <div className="mt-8">
          <Link href="/competencias">
            <Button variant="outline">← Volver a Competencias</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
