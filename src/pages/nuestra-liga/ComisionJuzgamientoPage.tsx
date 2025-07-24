import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Scale, User, FileText, AlertTriangle, Clock, Phone, Mail } from "lucide-react"

const ComisionJuzgamientoPage = () => {
  const miembros = [
    {
      nombre: "Dr. Luis Fernando Gómez Herrera",
      cargo: "Presidente",
      profesion: "Abogado especialista en Derecho Deportivo",
      experiencia: "15 años en derecho deportivo",
      telefono: "314 555 0010",
      email: "presidente.disciplina@ligafutsal.com",
    },
    {
      nombre: "Dra. Patricia Morales Jiménez",
      cargo: "Vicepresidenta",
      profesion: "Magistrada en retiro",
      experiencia: "20 años en administración de justicia",
      telefono: "315 555 0011",
      email: "vicepresidente.disciplina@ligafutsal.com",
    },
    {
      nombre: "Dr. Andrés Felipe Castillo",
      cargo: "Secretario",
      profesion: "Abogado especialista en Derecho Administrativo",
      experiencia: "12 años en derecho público",
      telefono: "316 555 0012",
      email: "secretario.disciplina@ligafutsal.com",
    },
    {
      nombre: "Dra. Carmen Elena Jiménez",
      cargo: "Vocal",
      profesion: "Psicóloga especialista en Deporte",
      experiencia: "10 años en psicología deportiva",
      telefono: "317 555 0013",
      email: "vocal.disciplina@ligafutsal.com",
    },
  ]

  const procedimientos = [
    {
      tipo: "Faltas Leves",
      ejemplos: ["Amonestación verbal", "Protesta moderada", "Retardo en el juego"],
      sanciones: ["Amonestación", "Multa hasta $50.000", "Suspensión 1 partido"],
      tiempo: "5 días hábiles",
    },
    {
      tipo: "Faltas Graves",
      ejemplos: ["Agresión verbal", "Conducta antideportiva", "Incumplimiento reglamentario"],
      sanciones: ["Suspensión 2-5 partidos", "Multa $50.000-$200.000", "Trabajo comunitario"],
      tiempo: "10 días hábiles",
    },
    {
      tipo: "Faltas Muy Graves",
      ejemplos: ["Agresión física", "Amenazas", "Corrupción deportiva"],
      sanciones: ["Suspensión 6+ partidos", "Multa $200.000+", "Expulsión temporal/definitiva"],
      tiempo: "15 días hábiles",
    },
  ]

  const estadisticas = {
    2023: {
      casosRecibidos: 45,
      casosResueltos: 42,
      suspensiones: 28,
      multas: 35,
      absoluciones: 7,
    },
    2024: {
      casosRecibidos: 32,
      casosResueltos: 30,
      suspensiones: 18,
      multas: 25,
      absoluciones: 5,
    },
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Comisión de Juzgamiento</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Órgano encargado de velar por el cumplimiento de las normas disciplinarias y éticas de la liga
          </p>
        </div>

        {/* Información Principal */}
        <div className="bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <Scale className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h2 className="text-3xl font-bold mb-6">Justicia Deportiva</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              La Comisión de Juzgamiento es el órgano disciplinario autónomo e independiente de la liga, encargado de
              investigar, juzgar y sancionar las conductas que contravengan las normas deportivas, éticas y
              disciplinarias establecidas en nuestros reglamentos.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="miembros" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="miembros">Miembros</TabsTrigger>
            <TabsTrigger value="procedimientos">Procedimientos</TabsTrigger>
            <TabsTrigger value="estadisticas">Estadísticas</TabsTrigger>
            <TabsTrigger value="recursos">Recursos</TabsTrigger>
          </TabsList>

          <TabsContent value="miembros" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {miembros.map((miembro, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{miembro.nombre}</CardTitle>
                    <Badge className="bg-red-500">{miembro.cargo}</Badge>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <span className="font-semibold text-gray-800">Profesión:</span>
                      <p className="text-gray-600 text-sm">{miembro.profesion}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Experiencia:</span>
                      <p className="text-gray-600 text-sm">{miembro.experiencia}</p>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>{miembro.telefono}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>{miembro.email}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="procedimientos" className="mt-6">
            <div className="space-y-6">
              {procedimientos.map((proc, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <AlertTriangle className="w-6 h-6 mr-2 text-orange-600" />
                      {proc.tipo}
                    </CardTitle>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Tiempo de resolución: {proc.tiempo}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Ejemplos:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {proc.ejemplos.map((ejemplo, idx) => (
                            <li key={idx}>• {ejemplo}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Sanciones:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {proc.sanciones.map((sancion, idx) => (
                            <li key={idx}>• {sancion}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Proceso:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Recepción de denuncia</li>
                          <li>• Investigación preliminar</li>
                          <li>• Audiencia de descargos</li>
                          <li>• Decisión final</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="estadisticas" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Estadísticas 2023</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Casos Recibidos:</span>
                      <span className="font-bold text-lg">{estadisticas[2023].casosRecibidos}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Casos Resueltos:</span>
                      <span className="font-bold text-lg text-green-600">{estadisticas[2023].casosResueltos}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Suspensiones:</span>
                      <span className="font-bold text-lg text-red-600">{estadisticas[2023].suspensiones}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Multas:</span>
                      <span className="font-bold text-lg text-yellow-600">{estadisticas[2023].multas}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Absoluciones:</span>
                      <span className="font-bold text-lg text-blue-600">{estadisticas[2023].absoluciones}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Estadísticas 2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Casos Recibidos:</span>
                      <span className="font-bold text-lg">{estadisticas[2024].casosRecibidos}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Casos Resueltos:</span>
                      <span className="font-bold text-lg text-green-600">{estadisticas[2024].casosResueltos}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Suspensiones:</span>
                      <span className="font-bold text-lg text-red-600">{estadisticas[2024].suspensiones}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Multas:</span>
                      <span className="font-bold text-lg text-yellow-600">{estadisticas[2024].multas}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Absoluciones:</span>
                      <span className="font-bold text-lg text-blue-600">{estadisticas[2024].absoluciones}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="recursos" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-blue-600" />
                    Recursos Disponibles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Recurso de Reposición</h4>
                    <p className="text-gray-600 text-sm">
                      Se puede interponer ante la misma Comisión dentro de los 3 días hábiles siguientes a la
                      notificación de la decisión.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Recurso de Apelación</h4>
                    <p className="text-gray-600 text-sm">
                      Se presenta ante el Tribunal de Arbitramento Deportivo dentro de los 5 días hábiles siguientes.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Requisitos</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Presentación por escrito</li>
                      <li>• Sustentación jurídica</li>
                      <li>• Pago de la tasa correspondiente</li>
                      <li>• Representación legal (opcional)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contacto y Horarios</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Información de Contacto</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>📧 disciplina@ligafutsal.com</li>
                      <li>📱 314 555 0010</li>
                      <li>📍 Carrera 50 # 25-30, Oficina 201</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Horarios de Atención</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Lunes a Viernes: 8:00 AM - 12:00 PM</li>
                      <li>• Lunes a Viernes: 2:00 PM - 5:00 PM</li>
                      <li>• Audiencias: Martes y Jueves</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Documentos Requeridos</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Denuncia o queja formal</li>
                      <li>• Pruebas documentales</li>
                      <li>• Identificación del denunciante</li>
                      <li>• Poder si actúa por terceros</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Principios */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Principios Rectores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">I</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Imparcialidad</h3>
              <p className="text-gray-600 text-sm">Decisiones objetivas sin favoritismos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">T</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Transparencia</h3>
              <p className="text-gray-600 text-sm">Procesos claros y públicos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">C</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Celeridad</h3>
              <p className="text-gray-600 text-sm">Resolución oportuna de casos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">D</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Debido Proceso</h3>
              <p className="text-gray-600 text-sm">Garantías procesales completas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComisionJuzgamientoPage
