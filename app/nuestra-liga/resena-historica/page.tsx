import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Users, Star } from "lucide-react"

export default function ResenaHistoricaPage() {
  const eventos = [
    {
      año: "2016",
      titulo: "Fundación de la Liga",
      descripcion: "Se constituye oficialmente la Liga de Fútbol de Salón con 8 clubes fundadores",
      tipo: "fundacion",
      destacado: true,
    },
    {
      año: "2017",
      titulo: "Primer Torneo Oficial",
      descripcion: "Se realiza el primer torneo oficial con la participación de 12 equipos",
      tipo: "competencia",
      destacado: false,
    },
    {
      año: "2018",
      titulo: "Inclusión Femenina",
      descripcion: "Se crea la primera división femenina con 6 equipos participantes",
      tipo: "expansion",
      destacado: true,
    },
    {
      año: "2019",
      titulo: "Reconocimiento Nacional",
      descripcion: "La liga recibe reconocimiento oficial de la Federación Nacional",
      tipo: "reconocimiento",
      destacado: true,
    },
    {
      año: "2020",
      titulo: "Adaptación COVID-19",
      descripcion: "Implementación de protocolos de bioseguridad y competencias virtuales",
      tipo: "adaptacion",
      destacado: false,
    },
    {
      año: "2021",
      titulo: "Expansión Regional",
      descripcion: "Se incorporan clubes de 5 municipios adicionales",
      tipo: "expansion",
      destacado: false,
    },
    {
      año: "2022",
      titulo: "Nuevas Instalaciones",
      descripcion: "Inauguración del complejo deportivo principal con 4 canchas",
      tipo: "infraestructura",
      destacado: true,
    },
    {
      año: "2023",
      titulo: "Liga Juvenil",
      descripcion: "Creación de categorías juveniles Sub-15 y Sub-18",
      tipo: "expansion",
      destacado: false,
    },
    {
      año: "2024",
      titulo: "Presente",
      descripcion: "25 clubes afiliados y más de 300 deportistas activos",
      tipo: "presente",
      destacado: true,
    },
  ]

  const getTipoBadge = (tipo: string) => {
    switch (tipo) {
      case "fundacion":
        return <Badge className="bg-blue-500">Fundación</Badge>
      case "competencia":
        return <Badge className="bg-green-500">Competencia</Badge>
      case "expansion":
        return <Badge className="bg-purple-500">Expansión</Badge>
      case "reconocimiento":
        return <Badge className="bg-yellow-500">Reconocimiento</Badge>
      case "adaptacion":
        return <Badge className="bg-orange-500">Adaptación</Badge>
      case "infraestructura":
        return <Badge className="bg-red-500">Infraestructura</Badge>
      case "presente":
        return <Badge className="bg-gray-500">Presente</Badge>
      default:
        return <Badge>{tipo}</Badge>
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reseña Histórica</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un recorrido por los momentos más importantes en la historia de nuestra liga
          </p>
        </div>

        {/* Estadísticas Históricas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-600" />
              <div className="text-3xl font-bold text-blue-600 mb-1">8</div>
              <div className="text-gray-600">Años de Historia</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Trophy className="w-8 h-8 mx-auto mb-2 text-green-600" />
              <div className="text-3xl font-bold text-green-600 mb-1">45+</div>
              <div className="text-gray-600">Torneos Realizados</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 mx-auto mb-2 text-purple-600" />
              <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
              <div className="text-gray-600">Deportistas Formados</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <Star className="w-8 h-8 mx-auto mb-2 text-yellow-600" />
              <div className="text-3xl font-bold text-yellow-600 mb-1">25</div>
              <div className="text-gray-600">Clubes Actuales</div>
            </CardContent>
          </Card>
        </div>

        {/* Línea de Tiempo */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

          <div className="space-y-8">
            {eventos.map((evento, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Punto en la línea de tiempo */}
                <div
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full ${
                    evento.destacado ? "bg-blue-600" : "bg-blue-400"
                  } border-4 border-white shadow-lg z-10`}
                ></div>

                {/* Contenido */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card
                    className={`${evento.destacado ? "border-blue-500 shadow-lg" : ""} hover:shadow-lg transition-shadow`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-2xl font-bold text-blue-600">{evento.año}</div>
                        {getTipoBadge(evento.tipo)}
                      </div>
                      <CardTitle className="text-xl">{evento.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{evento.descripcion}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fundadores */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Clubes Fundadores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">Club Deportivo Águilas</h3>
              <p className="text-gray-600 text-sm">Medellín</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold">Futsal Bello FC</h3>
              <p className="text-gray-600 text-sm">Bello</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold">Deportivo Itagüí</h3>
              <p className="text-gray-600 text-sm">Itagüí</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold">Club Los Leones</h3>
              <p className="text-gray-600 text-sm">Envigado</p>
            </div>
          </div>
        </div>

        {/* Logros Destacados */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Logros Deportivos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Trophy className="w-5 h-5 text-gold-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>45+ torneos organizados exitosamente</span>
                </li>
                <li className="flex items-start">
                  <Trophy className="w-5 h-5 text-gold-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>3 equipos clasificados a competencias nacionales</span>
                </li>
                <li className="flex items-start">
                  <Trophy className="w-5 h-5 text-gold-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>15+ jugadores convocados a selecciones regionales</span>
                </li>
                <li className="flex items-start">
                  <Trophy className="w-5 h-5 text-gold-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Premio a la mejor organización deportiva regional 2022</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Impacto Social</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>500+ jóvenes beneficiados con programas deportivos</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>40% de participación femenina en competencias</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>8 municipios con presencia activa de la liga</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span>Alianzas con 12 instituciones educativas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
