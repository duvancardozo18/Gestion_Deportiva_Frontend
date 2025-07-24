import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Flag, Award, Heart } from "lucide-react"

const SimbolosPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Símbolos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Los elementos que nos identifican y representan nuestros valores como liga
          </p>
        </div>

        {/* Escudo Principal */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-12">
          <div className="text-center">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-20 h-20 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Escudo de la Liga</h2>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Nuestro escudo representa la unión, la fuerza y la pasión por el fútbol de salón. Cada elemento tiene un
              significado especial que refleja nuestros valores fundamentales.
            </p>
          </div>
        </div>

        {/* Elementos del Escudo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-lg">El Escudo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Forma clásica que simboliza protección, honor y tradición deportiva</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-green-600 rounded-full"></div>
              </div>
              <CardTitle className="text-lg">El Balón</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Elemento central que representa nuestra pasión por el fútbol de salón</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <CardTitle className="text-lg">Las Estrellas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Representan la excelencia, los logros alcanzados y las metas por cumplir</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-lg">Los Colores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Azul por la lealtad, blanco por la pureza y rojo por la pasión deportiva</p>
            </CardContent>
          </Card>
        </div>

        {/* Bandera */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <Flag className="w-6 h-6 mr-2 text-blue-600" />
                Bandera Oficial
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-32 bg-gradient-to-r from-blue-600 via-white to-red-600 rounded-lg border-2 border-gray-200"></div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-blue-600">Franja Azul</h4>
                  <p className="text-gray-600 text-sm">Representa la lealtad, confianza y estabilidad de la liga</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-600">Franja Blanca</h4>
                  <p className="text-gray-600 text-sm">Simboliza la pureza del deporte y el juego limpio</p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600">Franja Roja</h4>
                  <p className="text-gray-600 text-sm">Expresa la pasión y energía de nuestros deportistas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Himno de la Liga</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Coro:</h4>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "Liga de fútbol de salón,
                  <br />
                  Orgullo de nuestra región,
                  <br />
                  Con pasión y corazón,
                  <br />
                  Jugamos con emoción."
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Primera Estrofa:</h4>
                <p className="text-gray-700 italic text-sm leading-relaxed">
                  "En cada cancha brillamos,
                  <br />
                  Con técnica y destreza,
                  <br />
                  Unidos siempre luchamos,
                  <br />
                  Por la gloria y la belleza."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Valores Representados */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Valores que Representan Nuestros Símbolos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">U</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Unidad</h3>
              <p className="text-gray-600 text-sm">Trabajamos juntos hacia objetivos comunes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">R</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Respeto</h3>
              <p className="text-gray-600 text-sm">Valoramos a todos los participantes del deporte</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">E</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Excelencia</h3>
              <p className="text-gray-600 text-sm">Buscamos la mejora continua en todo lo que hacemos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">P</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Pasión</h3>
              <p className="text-gray-600 text-sm">Amamos profundamente el fútbol de salón</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">I</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Integridad</h3>
              <p className="text-gray-600 text-sm">Actuamos con honestidad y transparencia</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">C</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Compromiso</h3>
              <p className="text-gray-600 text-sm">Dedicación total con nuestros objetivos</p>
            </div>
          </div>
        </div>

        {/* Uso de los Símbolos */}
        <div className="bg-white rounded-lg border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Protocolo de Uso</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-green-600">Usos Permitidos</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Documentos oficiales de la liga</li>
                <li>• Material promocional autorizado</li>
                <li>• Uniformes de equipos afiliados</li>
                <li>• Eventos deportivos oficiales</li>
                <li>• Comunicaciones institucionales</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-red-600">Restricciones</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• No modificar los colores originales</li>
                <li>• No alterar las proporciones</li>
                <li>• No usar para fines comerciales sin autorización</li>
                <li>• No combinar con otros logos sin permiso</li>
                <li>• Mantener la calidad y resolución adecuada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimbolosPage
