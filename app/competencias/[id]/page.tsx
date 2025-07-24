import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, User, Phone, Download, Trophy, Users, FileText } from "lucide-react"

// Esta sería una competencia activa (inscripciones abiertas o en curso)
export default function CompetenciaActivaPage({ params }: { params: { id: string } }) {
  const competencia = {
    id: params.id,
    nombre: "Torneo Apertura 2024",
    estado: "Inscripciones Abiertas",
    municipio: "Medellín",
    lugar: "Coliseo Mayor",
    fecha: "2024-01-15",
    descripcion:
      "Torneo principal de la temporada con participación de todos los clubes afiliados. Una competencia que reúne a los mejores equipos de la región en busca del título de campeón.",
    horarios: "Sábados y Domingos - 8:00 AM a 6:00 PM",
    valorInscripcion: "$500.000",
    valorArbitraje: "$50.000 por partido",
    imagen: "/placeholder.svg?height=400&width=600",
    encargado: {
      nombre: "Juan Pérez",
      contacto: "313 333 3333",
    },
    premiacion: {
      primero: "Trofeo + $2.000.000",
      segundo: "Trofeo + $1.000.000",
      tercero: "Trofeo + $500.000",
      cuarto: "Trofeo",
    },
  }

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "En Curso":
        return <Badge className="bg-green-500 text-lg px-4 py-2">En Curso</Badge>
      case "Inscripciones Abiertas":
        return <Badge className="bg-blue-500 text-lg px-4 py-2">Inscripciones Abiertas</Badge>
      case "Programado":
        return <Badge className="bg-yellow-500 text-lg px-4 py-2">Programado</Badge>
      default:
        return <Badge className="text-lg px-4 py-2">{estado}</Badge>
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header con imagen y información básica */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Imagen */}
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src={competencia.imagen || "/placeholder.svg"}
              alt={competencia.nombre}
              fill
              className="object-cover"
            />
          </div>

          {/* Información básica */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{competencia.nombre}</h1>
                {getEstadoBadge(competencia.estado)}
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
              <div className="flex items-center text-gray-700">
                <User className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-medium">{competencia.encargado.nombre}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-medium">{competencia.encargado.contacto}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <Users className="w-4 h-4 mr-2" />
                Inscribirse
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Descargar Planilla
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs con información detallada */}
        <Tabs defaultValue="detalles" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="detalles">Detalles</TabsTrigger>
            <TabsTrigger value="premiacion">Premiación</TabsTrigger>
            <TabsTrigger value="reglamento">Reglamento</TabsTrigger>
          </TabsList>

          <TabsContent value="detalles" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Información General
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-semibold">Horarios:</span>
                    <p className="text-gray-600">{competencia.horarios}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Valor de Inscripción:</span>
                    <p className="text-gray-600">{competencia.valorInscripcion}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Valor de Arbitraje:</span>
                    <p className="text-gray-600">{competencia.valorArbitraje}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Organizador
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-semibold">Encargado:</span>
                    <p className="text-gray-600">{competencia.encargado.nombre}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Contacto:</span>
                    <p className="text-gray-600">{competencia.encargado.contacto}</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Contactar Organizador
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="premiacion" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Premiación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
                    <h3 className="font-semibold text-lg">1er Puesto</h3>
                    <p className="text-gray-600">{competencia.premiacion.primero}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                    <h3 className="font-semibold text-lg">2do Puesto</h3>
                    <p className="text-gray-600">{competencia.premiacion.segundo}</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                    <h3 className="font-semibold text-lg">3er Puesto</h3>
                    <p className="text-gray-600">{competencia.premiacion.tercero}</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h3 className="font-semibold text-lg">4to Puesto</h3>
                    <p className="text-gray-600">{competencia.premiacion.cuarto}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reglamento" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Reglamento Oficial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Accede al reglamento oficial del torneo para conocer todas las reglas y normativas que rigen la
                  competencia.
                </p>
                <Button size="lg" className="w-full md:w-auto">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar Reglamento PDF
                </Button>
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
