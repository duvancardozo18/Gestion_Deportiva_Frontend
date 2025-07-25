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
  // Formatea números con punto como separador de miles
  const formatMiles = (valor: string | number) => {
    if (valor === undefined || valor === null) return "";
    const num = typeof valor === "number" ? Math.floor(valor) : parseInt(valor.toString().replace(/[^\d]/g, ""), 10);
    if (isNaN(num)) return valor;
    return num.toLocaleString("es-CO", { maximumFractionDigits: 0 });
  };
  const { nombre } = useParams();
  const [competencia, setCompetencia] = useState<any>(null);
  const [awards, setAwards] = useState<any[]>([]);
  const [clubs, setClubs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [awardsLoading, setAwardsLoading] = useState(false);
  const [clubsLoading, setClubsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [awardsError, setAwardsError] = useState<string | null>(null);
  const [clubsError, setClubsError] = useState<string | null>(null);

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
        // const nombreParam = decodeURIComponent(nombre || "").replace(/-/g, " ").toLowerCase();
        const found = response.data.find((c: any) =>
          c.nombre_torneo && c.nombre_torneo.replace(/\s+/g, '-').toLowerCase() === nombre
        );
        if (found && found.id) {
          // Buscar por id para obtener todos los datos
          const detalle = await axios.get(`${import.meta.env.VITE_API_URL}/tournaments/${found.id}`);
          setCompetencia(detalle.data);
          // Obtener premiaciones
          setAwardsLoading(true);
          setAwardsError(null);
          try {
            const awardsRes = await axios.get(`${import.meta.env.VITE_API_URL}/awards/tournaments/${found.id}`);
            setAwards(Array.isArray(awardsRes.data) ? awardsRes.data : []);
          } catch (err) {
            setAwardsError("No se pudo cargar la premiación.");
            setAwards([]);
          } finally {
            setAwardsLoading(false);
          }
          // Obtener equipos (clubs)
          setClubsLoading(true);
          setClubsError(null);
          try {
            const clubsRes = await axios.get(`${import.meta.env.VITE_API_URL}/tournaments/${found.id}/clubs`);
            setClubs(Array.isArray(clubsRes.data) ? clubsRes.data : []);
          } catch (err) {
            setClubsError("No se pudo cargar la lista de equipos.");
            setClubs([]);
          } finally {
            setClubsLoading(false);
          }
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
              
              <Button
                size="lg"
                className="flex-1"
                onClick={() => {
                  if (competencia.encargado_celular) {
                    const phone = competencia.encargado_celular.replace(/[^\d]/g, "");
                    const url = `https://wa.me/${phone}`;
                    window.open(url, "_blank");
                  }
                }}
              >
                <Users className="w-4 h-4 mr-2" />
                Inscribirse
              </Button>
              
              <Link to={`${cleanApiUrl(import.meta.env.VITE_API_URL)}/storage/${competencia.planilla_archivo}`}>
              <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                Descargar Planilla
              </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tabs con información detallada */}
        <Tabs defaultValue="detalles" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="detalles">Detalles</TabsTrigger>
            <TabsTrigger value="premiacion">Equipos</TabsTrigger>
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
                    <p className="text-gray-600">$ {formatMiles(competencia.valor_inscripcion)}</p>
                  </div>
                  <div>
                    <span className="font-semibold">Valor de Arbitraje:</span>
                    <p className="text-gray-600">$ {formatMiles(competencia.valor_arbitraje)}</p>
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
                  <Button variant="outline" className="w-full bg-transparent"                 onClick={() => {
                      if (competencia.encargado_celular) {
                        const phone = competencia.encargado_celular.replace(/[^\d]/g, "");
                        const url = `https://wa.me/${phone}`;
                        window.open(url, "_blank");
                      }
                    }}
                    >
                    <Phone className="w-4 h-4 mr-2" />
                    Contactar Organizador
                  </Button>
                </CardContent>
              </Card>
              
            </div>
            <br />
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Premiación
                </CardTitle>
              </CardHeader>
              <CardContent>
                {awardsLoading ? (
                  <div className="text-center py-4">Cargando premiación...</div>
                ) : awardsError ? (
                  <div className="text-center py-4 text-gray-500">No hay información de premiación.</div>
                ) : awards.length === 0 ? (
                  <div className="text-center py-4 text-gray-500">No hay información de premiación.</div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {awards.map((award, idx) => (
                      <div
                        key={award.id || idx}
                        className="text-center p-4 rounded-lg border-2"
                        style={{
                          backgroundColor:
                            idx === 0 ? '#FEF9C3' : idx === 1 ? '#F9FAFB' : idx === 2 ? '#FFEDD5' : '#DBEAFE',
                          borderColor:
                            idx === 0 ? '#FDE68A' : idx === 1 ? '#E5E7EB' : idx === 2 ? '#FDBA74' : '#BFDBFE',
                        }}
                      >
                        <Trophy
                          className={`w-8 h-8 mx-auto mb-2 ${
                            idx === 0
                              ? 'text-yellow-600'
                              : idx === 1
                              ? 'text-gray-600'
                              : idx === 2
                              ? 'text-orange-600'
                              : 'text-blue-600'
                          }`}
                        />
                        <h3 className="font-semibold text-lg">{award.nombre || `${idx + 1}° Puesto`}</h3>
                        <p className="text-gray-600">{award.descripcion || award.premio}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="premiacion" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Equipos
                </CardTitle>
              </CardHeader>
              <CardContent>
                {clubsLoading ? (
                  <div className="text-center py-4">Cargando equipos...</div>
                ) : clubsError ? (
                  <div className="text-center py-4 text-red-500">{clubsError}</div>
                ) : clubs.length === 0 ? (
                  <div className="text-center py-4 text-gray-500">No hay equipos registrados.</div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {clubs.map((club, idx) => (
                      <div key={club.id || idx} className="p-4 border rounded-lg flex items-center gap-4 bg-white">
                        <img
                          src={club.foto_logo ? `${cleanApiUrl(import.meta.env.VITE_API_URL)}/storage/${club.foto_logo}` : "/placeholder-logo.png"}
                          alt={club.nombre}
                          className="w-14 h-14 object-cover rounded-full border"
                          onError={e => { (e.target as HTMLImageElement).src = "/placeholder-logo.png"; }}
                        />
                        <div>
                          <h3 className="font-semibold text-lg">{club.nombre_club}</h3>
                          {club.nombre_presidente && (
                            <p className="text-gray-600 text-sm">Presidente: {club.nombre_presidente}</p>
                          )}
                          {club.categoria && (
                            <p className="text-gray-500 text-xs">Categoría: {club.categoria}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
                  <Link to={`${cleanApiUrl(import.meta.env.VITE_API_URL)}/storage/${competencia.reglamento_archivo}`}>
                  <Button size="lg" className="w-full md:w-auto">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Reglamento PDF
                  </Button>
                </Link>
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
