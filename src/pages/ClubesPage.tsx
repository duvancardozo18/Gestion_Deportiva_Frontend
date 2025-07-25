import { useEffect, useState } from "react"
import axios from "axios"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, User, Phone } from "lucide-react"

const ClubesPage = () => {
  type Club = {
    id: number;
    municipio: string;
    foto_logo: string;
    nombre_club: string;
    nombre_presidente: string;
    celular: string;
  };
  const [clubes, setClubes] = useState<Club[]>([]) // Estado para almacenar los clubes
  const [loading, setLoading] = useState(true) // Estado para manejar el loading
  // const [error, setError] = useState(null) // Estado para manejar errores
  const cleanApiUrl = (url: string) => url.replace(/\/api\/?$/, "")

  useEffect(() => {
    const fetchClubes = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/clubs`)
        setClubes(response.data)
      } catch (err) {
        // setError("Error al cargar clubes")
      } finally {
        setLoading(false)
      }
    }
    fetchClubes()
  }, [])

  if (loading) {
    return <div className="text-center py-8">Cargando clubes...</div>
  }

  // if (error) {
  //   return <div className="text-center py-8 text-red-500">{error}</div>
  // }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Clubes Afiliados</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce todos los clubes que forman parte de nuestra liga de fútbol de salón
          </p>
        </div>

        {/* Estadísticas */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <Card className="flex items-center p-4">
              <div className="flex-shrink-0 bg-blue-100 p-4 rounded-full">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div className="ml-4 text-center md:text-left">
                <div className="text-3xl font-bold text-blue-600">{clubes.length}</div>
                <div className="text-gray-600">Clubes Afiliados</div>
              </div>
            </Card>

            <Card className="flex items-center p-4">
              <div className="flex-shrink-0 bg-purple-100 p-4 rounded-full">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <div className="ml-4 text-center md:text-left">
                <div className="text-3xl font-bold text-purple-600">
                  {new Set(clubes.map((club) => club.municipio)).size}
                </div>
                <div className="text-gray-600">Municipios</div>
              </div>
            </Card>
          </div>
        </div>


        {/* Lista de Clubes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubes.map((club) => (
            <Card key={club.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center border-2 border-gray-200">
                    <img src={`${cleanApiUrl(import.meta.env.VITE_API_URL)}/storage/${club.foto_logo}`} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{club.nombre_club}</CardTitle>
                <Badge className="bg-green-700 text-lg">Activo</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span><strong>Municipio:</strong> {club.municipio}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  <span><strong>Presidente:</strong> {club.nombre_presidente}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span><strong>Celular:</strong> {club.celular}</span>
                </div>
              
                
                {/* 
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Ver Detalles
                </Button>
                */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClubesPage