import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, FileText } from "lucide-react"

const ConvocatoriasPage = () => {
  const convocatorias = [
    {
      id: 1,
      nombre: "Convocatoria Torneo Apertura 2024",
      fechaPublicacion: "2024-01-10",
      fechaVencimiento: "2024-01-25",
      descripcion:
        "Convocatoria oficial para la participación en el Torneo Apertura 2024. Todos los clubes afiliados pueden participar.",
      estado: "Activa",
      categoria: "Todas las categorías",
    },
    {
      id: 2,
      nombre: "Convocatoria Copa Juvenil",
      fechaPublicacion: "2024-01-15",
      fechaVencimiento: "2024-02-01",
      descripcion:
        "Convocatoria especial para equipos juveniles sub-18. Torneo exclusivo para promover el talento joven.",
      estado: "Activa",
      categoria: "Sub-18",
    },
    {
      id: 3,
      nombre: "Convocatoria Torneo Femenino",
      fechaPublicacion: "2023-12-01",
      fechaVencimiento: "2023-12-15",
      descripcion:
        "Convocatoria para el torneo femenino de fin de año. Participación exclusiva para equipos femeninos.",
      estado: "Cerrada",
      categoria: "Femenino",
    },
    {
      id: 4,
      nombre: "Convocatoria Copa Interclubes",
      fechaPublicacion: "2024-01-20",
      fechaVencimiento: "2024-02-10",
      descripcion:
        "Convocatoria para la copa interclubes regional. Competencia de alto nivel entre los mejores equipos.",
      estado: "Activa",
      categoria: "Primera División",
    },
  ]

  const getEstadoBadge = (estado: string) => {
    return estado === "Activa" ? (
      <Badge className="bg-green-500">Activa</Badge>
    ) : (
      <Badge className="bg-gray-500">Cerrada</Badge>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Convocatorias</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mantente informado sobre todas las convocatorias activas y próximas de nuestra liga
          </p>
        </div>

        {/* Lista de Convocatorias */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {convocatorias.map((convocatoria) => (
            <Card key={convocatoria.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{convocatoria.nombre}</CardTitle>
                  {getEstadoBadge(convocatoria.estado)}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Publicada: {new Date(convocatoria.fechaPublicacion).toLocaleDateString("es-ES")}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Vence: {new Date(convocatoria.fechaVencimiento).toLocaleDateString("es-ES")}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      {convocatoria.categoria}
                    </Badge>
                    <p className="text-gray-600">{convocatoria.descripcion}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button className="flex-1 bg-transparent" variant="outline">
                      <FileText className="w-4 h-4 mr-2" />
                      Ver Detalles
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Información Importante</h2>
          <ul className="space-y-2 text-blue-800">
            <li>• Las convocatorias se publican con al menos 15 días de anticipación</li>
            <li>• Todos los documentos deben ser entregados antes de la fecha de vencimiento</li>
            <li>• Los clubes deben estar al día con sus obligaciones para participar</li>
            <li>• Para más información, contacta a la secretaría de la liga</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ConvocatoriasPage
