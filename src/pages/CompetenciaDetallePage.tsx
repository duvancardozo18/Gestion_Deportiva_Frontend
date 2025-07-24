"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, User, Phone, Download, Trophy, Users, FileText } from "lucide-react"

const CompetenciaDetallePage = () => {
  const { nombre } = useParams();
  const [competencia, setCompetencia] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cleanApiUrl = (url: string) => url.replace(/\/api\/?$/, "");
  const formatFecha = (fecha: string) => {
    const date = new Date(fecha);
    if (isNaN(date.getTime())) return fecha;
    return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth()+1).toString().padStart(2, "0")}/${date.getFullYear()}`;
  };

  useEffect(() => {
    const fetchCompetencia = async () => {
      try {
        // Obtener todas las competencias y buscar por nombre amigable
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/tournaments`);
        const nombreParam = decodeURIComponent(nombre || "").replace(/-/g, " ").toLowerCase();
        const found = response.data.find((c: any) =>
          c.nombre_torneo && c.nombre_torneo.replace(/\s+/g, '-').toLowerCase() === nombre
        );
        if (found && found.id) {
          // Buscar por id para obtener todos los datos
          const detalle = await axios.get(`${import.meta.env.VITE_API_URL}/tournaments/${found.id}`);
          setCompetencia(detalle.data);
        } else {
          setCompetencia(null);
        }
      } catch (err) {
        setError("Error al cargar la competencia.");
      } finally {
        setLoading(false);
      }
    };
    fetchCompetencia();
  }, [nombre]);

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "En Curso":
        return <Badge className="bg-green-500 text-lg px-4 py-2">En Curso</Badge>
      case "Inscripciones Abiertas":
        return <Badge className="bg-blue-500 text-lg px-4 py-2">Inscripciones Abiertas</Badge>
      case "Programado":
        return <Badge className="bg-yellow-500 text-lg px-4 py-2">Programado</Badge>
      case "Completado":
        return <Badge className="bg-gray-500 text-lg px-4 py-2">Completado</Badge>
      default:
        return <Badge className="text-lg px-4 py-2">{estado}</Badge>
    }
  }

  if (loading) {
    return <div className="text-center py-8">Cargando competencia...</div>
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  if (!competencia) {
    return <div className="text-center py-8 text-gray-500">No se encontró la competencia.</div>
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header con imagen y información básica */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Imagen */}
          <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden">
            <img
              src={`${cleanApiUrl(import.meta.env.VITE_API_URL)}/storage/${competencia.foto_torneo}`}
              alt={competencia.nombre_torneo}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Información básica */}
          <div className="space-y-6">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{competencia.nombre_torneo}</h1>
                {getEstadoBadge(competencia.estado)}
              </div>
              <p className="text-gray-600 text-lg">{competencia.descripcion_torneo}</p>
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
                <span className="font-medium">{formatFecha(competencia.fecha_torneo)}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <span className="font-medium">Categoría: {competencia.categoria}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               {/* 
              <Button size="lg" className="flex-1">
                <Users className="w-4 h-4 mr-2" />
                Inscribirse
              </Button>
              */}
              <Button variant="outline" size="lg" className="flex-1 bg-transparent">
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
                    <span className="font-semibold">Valor de Inscripción:</span>
                    <p className="text-gray-600">{competencia.valor_inscripcion}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Valor de Arbitraje:</span>
                    <p className="text-gray-600">{competencia.valor_arbitraje}</p>
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
                    <p className="text-gray-600">{competencia.encargado_nombre}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Contacto:</span>
                    <p className="text-gray-600">{competencia.encargado_celular}</p>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
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
                    <p className="text-gray-600">{competencia.premio_1er_puesto}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                    <h3 className="font-semibold text-lg">2do Puesto</h3>
                    <p className="text-gray-600">{competencia.premio_2do_puesto}</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                    <h3 className="font-semibold text-lg">3er Puesto</h3>
                    <p className="text-gray-600">{competencia.premio_3er_puesto}</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                    <h3 className="font-semibold text-lg">4to Puesto</h3>
                    <p className="text-gray-600">{competencia.premio_4to_puesto}</p>
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
                  Accede al reglamento oficial del torneo para conocer todas las reglas y normativas que rigen la competencia.
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
          <Link to="/competencias">
            <Button variant="outline">← Volver a Competencias</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompetenciaDetallePage
