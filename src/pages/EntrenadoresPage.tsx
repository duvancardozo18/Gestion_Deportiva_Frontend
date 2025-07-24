import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Award, Calendar, Phone, Mail } from "lucide-react"

const EntrenadoresPage = () => {
  const entrenadoresMasculino = [
    {
      id: 1,
      nombre: "Carlos Rodríguez",
      foto: "/placeholder.svg?height=150&width=150",
      club: "Club Deportivo Águilas",
      experiencia: "8 años",
      licencia: "Nivel A",
      telefono: "314 555 0101",
      email: "carlos.rodriguez@email.com",
      logros: ["Campeón Liga 2022", "Subcampeón Copa Regional 2023"],
    },
    {
      id: 2,
      nombre: "Miguel Ángel Torres",
      foto: "/placeholder.svg?height=150&width=150",
      club: "Futsal Bello FC",
      experiencia: "5 años",
      licencia: "Nivel B",
      telefono: "315 444 0202",
      email: "miguel.torres@email.com",
      logros: ["Mejor Entrenador Joven 2023"],
    },
    {
      id: 3,
      nombre: "Juan Carlos Pérez",
      foto: "/placeholder.svg?height=150&width=150",
      club: "Deportivo Itagüí",
      experiencia: "12 años",
      licencia: "Nivel A",
      telefono: "316 333 0303",
      email: "juan.perez@email.com",
      logros: ["Campeón Liga 2021", "Campeón Copa Interclubes 2022"],
    },
  ]

  const entrenadoresFemenino = [
    {
      id: 1,
      nombre: "María González",
      foto: "/placeholder.svg?height=150&width=150",
      club: "Águilas FC Femenino",
      experiencia: "7 años",
      licencia: "Nivel A",
      telefono: "318 111 0505",
      email: "maria.gonzalez@email.com",
      logros: ["Campeona Liga Femenina 2023", "Mejor Entrenadora 2022"],
    },
    {
      id: 2,
      nombre: "Ana Martínez",
      foto: "/placeholder.svg?height=150&width=150",
      club: "Deportivo Bello Femenino",
      experiencia: "4 años",
      licencia: "Nivel B",
      telefono: "319 000 0606",
      email: "ana.martinez@email.com",
      logros: ["Subcampeona Liga Femenina 2023"],
    },
  ]

  const getLicenciaBadge = (licencia: string) => {
    return licencia === "Nivel A" ? (
      <Badge className="bg-yellow-500">Nivel A</Badge>
    ) : (
      <Badge className="bg-blue-500">Nivel B</Badge>
    )
  }

  const EntrenadorCard = ({ entrenador }: { entrenador: any }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-gray-500" />
          </div>
        </div>
        <CardTitle className="text-xl">{entrenador.nombre}</CardTitle>
        {getLicenciaBadge(entrenador.licencia)}
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-center">
          <p className="font-semibold text-blue-600">{entrenador.club}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{entrenador.experiencia} de experiencia</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="w-4 h-4 mr-2" />
            <span>{entrenador.telefono}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="w-4 h-4 mr-2" />
            <span className="text-sm">{entrenador.email}</span>
          </div>
        </div>

        {entrenador.logros && entrenador.logros.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Logros
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {entrenador.logros.map((logro: string, index: number) => (
                <li key={index}>• {logro}</li>
              ))}
            </ul>
          </div>
        )}

        <Button className="w-full mt-4 bg-transparent" variant="outline">
          <User className="w-4 h-4 mr-2" />
          Ver Perfil
        </Button>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Entrenadores</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce a los entrenadores que dirigen los equipos de nuestra liga
          </p>
        </div>

        {/* Tabs para Masculino y Femenino */}
        <Tabs defaultValue="masculino" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="masculino" className="text-lg">
              Entrenadores Masculino
            </TabsTrigger>
            <TabsTrigger value="femenino" className="text-lg">
              Entrenadoras Femenino
            </TabsTrigger>
          </TabsList>

          <TabsContent value="masculino">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {entrenadoresMasculino.map((entrenador) => (
                <EntrenadorCard key={entrenador.id} entrenador={entrenador} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="femenino">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {entrenadoresFemenino.map((entrenadora) => (
                <EntrenadorCard key={entrenadora.id} entrenador={entrenadora} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Información adicional */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Requisitos para Entrenadores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Licencias Requeridas</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Licencia Nivel A: Para equipos de primera división</li>
                <li>• Licencia Nivel B: Para equipos de segunda división y juveniles</li>
                <li>• Certificado de primeros auxilios vigente</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Documentación</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Cédula de ciudadanía</li>
                <li>• Certificado de antecedentes</li>
                <li>• Afiliación a EPS vigente</li>
                <li>• Curso de entrenadores certificado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EntrenadoresPage
