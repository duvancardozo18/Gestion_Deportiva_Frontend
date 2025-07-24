import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Star, Globe, Zap, Award, Users } from "lucide-react"

export default function VisionPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestra Visión</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            El futuro que queremos construir para el fútbol de salón en nuestra región
          </p>
        </div>

        {/* Visión Principal */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <Eye className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h2 className="text-3xl font-bold mb-6">Nuestra Visión 2030</h2>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Ser reconocida como la liga de fútbol de salón líder en la región, modelo de excelencia organizativa,
              desarrollo deportivo y formación integral, contribuyendo significativamente al crecimiento del fútbol de
              salón a nivel nacional e internacional.
            </p>
          </div>
        </div>

        {/* Pilares de la Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">Excelencia Deportiva</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ser referente en calidad organizativa y nivel competitivo, atrayendo a los mejores talentos de la región
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-green-500">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-lg">Proyección Nacional</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Posicionar a nuestros equipos y jugadores en competencias nacionales e internacionales
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow border-t-4 border-t-yellow-500">
            <CardHeader>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-lg">Innovación Constante</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Implementar tecnologías y metodologías innovadoras para mejorar la experiencia deportiva
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Metas a Largo Plazo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Award className="w-6 h-6 mr-2 text-gold-500" />
                Metas Deportivas 2030
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contar con 50+ clubes afiliados activos
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Organizar 20+ competencias anuales en todas las categorías
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Tener representación en la Liga Nacional Profesional
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Desarrollar una academia de formación de talentos
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Contar con instalaciones deportivas de clase mundial
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-500" />
                Metas Sociales 2030
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Impactar positivamente a 10,000+ jóvenes anualmente
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lograr 40% de participación femenina en todas las categorías
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Establecer programas de inclusión social permanentes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Crear alianzas estratégicas con instituciones educativas
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ser modelo de gestión deportiva para otras regiones
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Valores que nos Guían */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Valores que Guían Nuestra Visión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">E</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Excelencia</h3>
              <p className="text-gray-600 text-sm">Búsqueda constante de la mejora en todos nuestros procesos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">I</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Integridad</h3>
              <p className="text-gray-600 text-sm">Transparencia y honestidad en todas nuestras acciones</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">I</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovación</h3>
              <p className="text-gray-600 text-sm">Adopción de nuevas tecnologías y metodologías</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">P</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pasión</h3>
              <p className="text-gray-600 text-sm">Amor genuino por el fútbol de salón y su desarrollo</p>
            </div>
          </div>
        </div>

        {/* Hitos del Camino */}
        <div className="bg-white rounded-lg border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hitos del Camino hacia 2030</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">2024-2025: Consolidación</h3>
                <p className="text-gray-600">Fortalecer la estructura organizativa y aumentar la participación</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">2026-2027: Expansión</h3>
                <p className="text-gray-600">Ampliar cobertura regional y mejorar infraestructura deportiva</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">2028-2029: Proyección</h3>
                <p className="text-gray-600">Establecer presencia nacional y alianzas estratégicas</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-4"></div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">2030: Liderazgo</h3>
                <p className="text-gray-600">Consolidar el liderazgo regional y la excelencia deportiva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
