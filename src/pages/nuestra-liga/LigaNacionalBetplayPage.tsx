import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Star, Target, Users, Calendar, MapPin } from "lucide-react"

const LigaNacionalBetplayPage = () => {
  const equiposParticipantes = [
    {
      nombre: "Club Deportivo Águilas",
      año: "2022-2024",
      categoria: "Primera División",
      logros: "Octavos de Final 2023",
      estado: "Activo",
    },
    {
      nombre: "Deportivo Itagüí",
      año: "2023-2024",
      categoria: "Primera División",
      logros: "Primera Fase",
      estado: "Activo",
    },
    {
      nombre: "Futsal Bello FC",
      año: "2024",
      categoria: "Ascenso",
      logros: "Clasificado",
      estado: "Nuevo",
    },
  ]

  const historialParticipaciones = [
    {
      año: "2024",
      equipos: 3,
      mejorResultado: "Octavos de Final",
      equipo: "Club Deportivo Águilas",
      goleador: "Carlos Rodríguez (8 goles)",
    },
    {
      año: "2023",
      equipos: 2,
      mejorResultado: "Primera Fase",
      equipo: "Deportivo Itagüí",
      goleador: "Juan Pérez (5 goles)",
    },
    {
      año: "2022",
      equipos: 1,
      mejorResultado: "Primera Fase",
      equipo: "Club Deportivo Águilas",
      goleador: "Miguel Torres (3 goles)",
    },
  ]

  const proximosObjetivos = [
    {
      objetivo: "Clasificar 5 equipos para 2025",
      descripcion: "Aumentar la representación regional en la liga nacional",
      plazo: "Diciembre 2024",
      responsable: "Comisión Técnica",
    },
    {
      objetivo: "Llegar a Cuartos de Final",
      descripcion: "Superar la primera fase con al menos un equipo",
      plazo: "Junio 2025",
      responsable: "Equipos participantes",
    },
    {
      objetivo: "Desarrollar Academia de Talentos",
      descripcion: "Crear programa de formación para jugadores élite",
      plazo: "Marzo 2025",
      responsable: "Área Deportiva",
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Liga Nacional Betplay</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestra participación en la máxima competencia del fútbol de salón colombiano
          </p>
        </div>

        {/* Información Principal */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h2 className="text-3xl font-bold mb-6">Máximo Nivel Nacional</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              La Liga Nacional Betplay representa el máximo nivel del fútbol de salón en Colombia. Nuestros equipos
              compiten contra los mejores del país, llevando el nombre de nuestra región a lo más alto del deporte
              nacional.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="equipos" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="equipos">Equipos</TabsTrigger>
            <TabsTrigger value="historial">Historial</TabsTrigger>
            <TabsTrigger value="objetivos">Objetivos</TabsTrigger>
            <TabsTrigger value="requisitos">Requisitos</TabsTrigger>
          </TabsList>

          <TabsContent value="equipos" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {equiposParticipantes.map((equipo, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="w-10 h-10 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{equipo.nombre}</CardTitle>
                    <Badge className={equipo.estado === "Activo" ? "bg-green-500" : "bg-blue-500"}>
                      {equipo.estado}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-800">Período:</span>
                      <p className="text-gray-600">{equipo.año}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Categoría:</span>
                      <p className="text-gray-600">{equipo.categoria}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Mejor Resultado:</span>
                      <p className="text-gray-600">{equipo.logros}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="historial" className="mt-6">
            <div className="space-y-6">
              {historialParticipaciones.map((participacion, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl flex items-center">
                        <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                        Temporada {participacion.año}
                      </CardTitle>
                      <Badge className="bg-blue-500">{participacion.equipos} Equipos</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Mejor Resultado:</h4>
                        <p className="text-gray-600">{participacion.mejorResultado}</p>
                        <p className="text-sm text-gray-500">por {participacion.equipo}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Goleador Destacado:</h4>
                        <p className="text-gray-600">{participacion.goleador}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Participación:</h4>
                        <p className="text-gray-600">{participacion.equipos} equipos clasificados</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="objetivos" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {proximosObjetivos.map((objetivo, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg text-center">{objetivo.objetivo}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-800">Descripción:</span>
                      <p className="text-gray-600 text-sm">{objetivo.descripcion}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Plazo:</span>
                      <p className="text-gray-600">{objetivo.plazo}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Responsable:</span>
                      <p className="text-gray-600">{objetivo.responsable}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="requisitos" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Users className="w-6 h-6 mr-2 text-purple-600" />
                    Requisitos para Equipos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Deportivos</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Campeón o subcampeón liga regional</li>
                      <li>• Mínimo 15 jugadores inscritos</li>
                      <li>• Entrenador con licencia PRO</li>
                      <li>• Preparador físico certificado</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Administrativos</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Personería jurídica vigente</li>
                      <li>• Estados financieros auditados</li>
                      <li>• Seguro de accidentes deportivos</li>
                      <li>• Plan de sostenibilidad económica</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-red-600" />
                    Requisitos de Infraestructura
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Instalaciones</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Cancha homologada FIFA</li>
                      <li>• Capacidad mínima 500 espectadores</li>
                      <li>• Vestuarios para equipos y árbitros</li>
                      <li>• Sistema de iluminación profesional</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Servicios</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Servicio médico especializado</li>
                      <li>• Área de prensa y transmisión</li>
                      <li>• Estacionamiento adecuado</li>
                      <li>• Accesibilidad para discapacitados</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Beneficios */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Beneficios de Participar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Prestigio</h3>
              <p className="text-gray-600 text-sm">Reconocimiento a nivel nacional</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Competencia</h3>
              <p className="text-gray-600 text-sm">Enfrentar a los mejores equipos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Desarrollo</h3>
              <p className="text-gray-600 text-sm">Crecimiento de jugadores y técnicos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Proyección</h3>
              <p className="text-gray-600 text-sm">Oportunidades internacionales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LigaNacionalBetplayPage
