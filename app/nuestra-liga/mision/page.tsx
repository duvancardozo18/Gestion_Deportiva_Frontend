"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Heart, Users, Trophy } from "lucide-react"
import { apiService, type League } from "@/lib/api"

export default function MisionPage() {
  const [league, setLeague] = useState<League | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLeague = async () => {
      try {
        setLoading(true)
        const response = await apiService.getLeagues()
        if (response.data.length > 0) {
          setLeague(response.data[0]) // Asumiendo que hay una liga principal
        }
      } catch (error) {
        console.error("Error fetching league:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLeague()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando información...</p>
        </div>
      </div>
    )
  }

  if (!league) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg">No se encontró información de la liga.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Misión</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            El propósito fundamental que guía todas nuestras acciones y decisiones
          </p>
        </div>

        {/* Misión Principal */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <Target className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">{league.mision}</p>
          </div>
        </div>

        {/* Pilares de la Misión */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Promoción del Deporte</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Fomentar la práctica del fútbol de salón como herramienta de desarrollo personal y social
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg">Formación Integral</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Desarrollar valores como el respeto, la disciplina, el trabajo en equipo y la perseverancia
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-lg">Competencia Sana</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Organizar competencias que promuevan el juego limpio y la excelencia deportiva
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-lg">Desarrollo Regional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Contribuir al crecimiento deportivo y social de nuestra región a través del fútbol de salón
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Objetivos Específicos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Objetivos Deportivos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Organizar competencias regulares de alta calidad técnica y organizativa
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Promover la formación de nuevos talentos en todas las categorías
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Facilitar la participación en competencias nacionales e internacionales
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mejorar continuamente la infraestructura deportiva disponible
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Objetivos Sociales</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fomentar la inclusión social a través del deporte
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Promover la participación femenina en el fútbol de salón
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Desarrollar programas para jóvenes en situación de vulnerabilidad
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fortalecer los lazos comunitarios a través del deporte
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Compromiso */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nuestro Compromiso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-3 text-blue-600">Con los Deportistas</h3>
              <p className="text-gray-600">
                Brindar oportunidades de crecimiento deportivo y personal en un ambiente de respeto y fair play
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-3 text-green-600">Con los Clubes</h3>
              <p className="text-gray-600">
                Ofrecer competencias organizadas, transparentes y que promuevan el desarrollo institucional
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-3 text-purple-600">Con la Comunidad</h3>
              <p className="text-gray-600">
                Contribuir al bienestar social y al desarrollo de valores positivos en nuestra región
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
