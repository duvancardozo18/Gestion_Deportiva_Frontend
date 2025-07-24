"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, User, Users, Phone } from "lucide-react"
import { apiService, type Club } from "@/lib/api"

export default function ClubesPage() {
  const [clubs, setClubs] = useState<Club[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        setLoading(true)
        const response = await apiService.getClubs()
        setClubs(response.data)
      } catch (error) {
        console.error("Error fetching clubs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchClubs()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando clubes...</p>
        </div>
      </div>
    )
  }

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{clubs.length}</div>
              <div className="text-gray-600">Clubes Afiliados</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {clubs.length * 15} {/* Estimación promedio */}
              </div>
              <div className="text-gray-600">Total Afiliados</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Set(clubs.map((club) => club.municipio)).size}
              </div>
              <div className="text-gray-600">Municipios</div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Clubes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubs.map((club) => (
            <Card key={club.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {club.foto_logo ? (
                    <Image
                      src={club.foto_logo || "/placeholder.svg"}
                      alt={`Logo ${club.nombre_club}`}
                      width={80}
                      height={80}
                      className="rounded-full border-2 border-gray-200"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center border-2 border-gray-200">
                      <Users className="w-10 h-10 text-blue-600" />
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl mb-2">{club.nombre_club}</CardTitle>
                <Badge className="bg-green-500">Activo</Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{club.municipio}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  <span>{club.nombre_presidente}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{club.celular}</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-gray-500">Fundado en {new Date(club.created_at).getFullYear()}</p>
                </div>
                <Button className="w-full mt-4 bg-transparent" variant="outline">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {clubs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay clubes registrados en este momento.</p>
          </div>
        )}
      </div>
    </div>
  )
}
