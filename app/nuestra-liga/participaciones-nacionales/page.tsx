import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Star, Calendar, Users } from "lucide-react"

export default function ParticipacionesNacionalesPage() {
  const participaciones = [
    {
      año: "2024",
      competencia: "Copa Nacional de Clubes",
      equipo: "Club Deportivo Águilas",
      categoria: "Primera División",
      resultado: "Octavos de Final",
      posicion: "Top 16",
      destacado: true,
    },
    {
      año: "2023",
      competencia: "Torneo Nacional Femenino",
      equipo: "Águilas FC Femenino",
      categoria: "Femenino",
      resultado: "Cuartos de Final",
      posicion: "Top 8",
      destacado: true,
    },
    {
      año: "2023",
      competencia: "Copa Juvenil Nacional",
      equipo: "Futsal Bello FC Sub-18",
      categoria: "Sub-18",
      resultado: "Fase de Grupos",
      posicion: "Top 32",
      destacado: false,
    },
    {
      año: "2022",
      competencia: "Liga Nacional Betplay",
      equipo: "Deportivo Itagüí",
      categoria: "Primera División",
      resultado: "Primera Fase",
      posicion: "Top 24",
      destacado: false,
    },
    {
      año: "2022",
      competencia: "Copa Colombia Futsal",
      equipo: "Club Los Leones",
      categoria: "Primera División",
      resultado: "Dieciseisavos",
      posicion: "Top 32",
      destacado: false,
    },
    {
      año: "2021",
      competencia: "Torneo Nacional Sub-20",
      equipo: "Águilas FC Sub-20",
      categoria: "Sub-20",
      resultado: "Semifinal",
      posicion: "Top 4",
      destacado: true,
    },
  ]

  const jugadoresDestacados = [
    {
      nombre: "Carlos Rodríguez",
      equipo: "Club Deportivo Águilas",
      logro: "Goleador Copa Nacional 2024",
      goles: 8,
      año: "2024",
    },
    {
      nombre: "María González",
      equipo: "Águilas FC Femenino",
      logro: "Mejor Jugadora Torneo Nacional",
      goles: 6,
      año: "2023",
    },
    {
      nombre: "Juan Pérez",
      equipo: "Deportivo Itagüí",
      logro: "Mejor Portero Liga Nacional",
      goles: 0,
      año: "2022",
    },
    {
      nombre: "Ana Martínez",
      equipo: "Futsal Bello FC",
      logro: "Revelación Nacional Sub-18",
      goles: 5,
      año: "2023",
    },
  ]

  const proximasParticipaciones = [
    {
      competencia: "Copa Nacional de Clubes 2024",
      fecha: "Marzo 2024",
      equipos: ["Club Deportivo Águilas", "Deportivo Itagüí"],
      estado: "Clasificados",
    },
    {
      competencia: "Torneo Nacional Femenino 2024",
      fecha: "Abril 2024",
      equipos: ["Águilas FC Femenino"],
      estado: "En proceso",
    },
    {
      competencia: "Liga Nacional Betplay 2024",
      fecha: "Mayo 2024",
      equipos: ["Por definir"],
      estado: "Clasificatorias",
    },
  ]

  const getResultadoBadge = (resultado: string, destacado: boolean) => {
    if (destacado) {
      return <Badge className="bg-gold-500">Destacado</Badge>
    }

    switch (resultado) {
      case "Semifinal":
      case "Cuartos de Final":
        return <Badge className="bg-green-500">{resultado}</Badge>
      case "Octavos de Final":
        return <Badge className="bg-blue-500">{resultado}</Badge>
      case "Primera Fase":
      case "Fase de Grupos":
        return <Badge className="bg-gray-500">{resultado}</Badge>
      default:
        return <Badge className="bg-purple-500">{resultado}</Badge>
    }
  }

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "Clasificados":
        return <Badge className="bg-green-500">Clasificados</Badge>
      case "En proceso":
        return <Badge className="bg-yellow-500">En Proceso</Badge>
      case "Clasificatorias":
        return <Badge className="bg-blue-500">Clasificatorias</Badge>
      default:
        return <Badge>{estado}</Badge>
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Participaciones Nacionales</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            El orgullo de representar nuestra región en competencias nacionales
          </p>
        </div>

        {/* Estadísticas Generales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-gold-500" />
              <div className="text-3xl font-bold text-gold-500 mb-1">15+</div>
              <div className="text-gray-600">Participaciones</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Medal className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
              <div className="text-gray-600">Equipos Clasificados</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-3xl font-bold text-purple-600 mb-1">4</div>
              <div className="text-gray-600">Semifinales Alcanzadas</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-3xl font-bold text-green-600 mb-1">25+</div>
              <div className="text-gray-600">Jugadores Destacados</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="historial" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="historial">Historial</TabsTrigger>
            <TabsTrigger value="jugadores">Jugadores Destacados</TabsTrigger>
            <TabsTrigger value="proximas">Próximas</TabsTrigger>
          </TabsList>

          <TabsContent value="historial" className="mt-6">
            <div className="space-y-4">
              {participaciones.map((participacion, index) => (
                <Card
                  key={index}
                  className={`${participacion.destacado ? "border-gold-500 bg-yellow-50" : ""} hover:shadow-lg transition-shadow`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-blue-600">{participacion.año}</span>
                          {getResultadoBadge(participacion.resultado, participacion.destacado)}
                          <Badge variant="outline">{participacion.categoria}</Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-1">{participacion.competencia}</h3>
                        <p className="text-gray-600 mb-2">{participacion.equipo}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Trophy className="w-4 h-4 mr-1" />
                          <span>{participacion.posicion}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-semibold text-gray-900">{participacion.resultado}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="jugadores" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jugadoresDestacados.map((jugador, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{jugador.nombre}</CardTitle>
                      <Badge className="bg-gold-500">{jugador.año}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-blue-600">{jugador.logro}</p>
                      <p className="text-gray-600">{jugador.equipo}</p>
                      {jugador.goles > 0 && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="w-4 h-4 mr-1" />
                          <span>{jugador.goles} goles</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="proximas" className="mt-6">
            <div className="space-y-6">
              {proximasParticipaciones.map((proxima, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{proxima.competencia}</h3>
                          {getEstadoBadge(proxima.estado)}
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{proxima.fecha}</span>
                        </div>
                        <div className="space-y-1">
                          {proxima.equipos.map((equipo, equipoIndex) => (
                            <div key={equipoIndex} className="flex items-center text-sm text-gray-600">
                              <Users className="w-4 h-4 mr-2" />
                              <span>{equipo}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Logros Históricos */}
        <div className="mt-12 bg-gradient-to-r from-gold-50 to-yellow-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Logros Históricos Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-gold-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Mejor Resultado</h3>
              <p className="text-gray-600">Semifinal Nacional Sub-20 (2021)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Goleador Nacional</h3>
              <p className="text-gray-600">Carlos Rodríguez - 8 goles (2024)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Medal className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Reconocimiento</h3>
              <p className="text-gray-600">Liga con mayor proyección 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
