import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Users, Clock, Target, AlertTriangle } from "lucide-react"

export default function ReglasFutsalPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Reglas del Fútbol de Salón</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce las reglas oficiales que rigen nuestras competencias de fútbol de salón
          </p>
        </div>

        {/* Descarga del Reglamento */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-blue-900 mb-2">Reglamento Oficial 2024</h2>
              <p className="text-blue-700">Descarga el reglamento completo en formato PDF</p>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Descargar PDF
            </Button>
          </div>
        </div>

        {/* Tabs con las reglas */}
        <Tabs defaultValue="campo" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto">
            <TabsTrigger value="campo" className="text-xs lg:text-sm">
              Campo de Juego
            </TabsTrigger>
            <TabsTrigger value="jugadores" className="text-xs lg:text-sm">
              Jugadores
            </TabsTrigger>
            <TabsTrigger value="tiempo" className="text-xs lg:text-sm">
              Tiempo
            </TabsTrigger>
            <TabsTrigger value="juego" className="text-xs lg:text-sm">
              Desarrollo
            </TabsTrigger>
            <TabsTrigger value="faltas" className="text-xs lg:text-sm">
              Faltas
            </TabsTrigger>
            <TabsTrigger value="sanciones" className="text-xs lg:text-sm">
              Sanciones
            </TabsTrigger>
          </TabsList>

          <TabsContent value="campo" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Campo de Juego
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Dimensiones</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        • <strong>Longitud:</strong> Mínimo 25m - Máximo 42m
                      </li>
                      <li>
                        • <strong>Anchura:</strong> Mínimo 16m - Máximo 25m
                      </li>
                      <li>
                        • <strong>Superficie:</strong> Lisa, uniforme y no abrasiva
                      </li>
                      <li>
                        • <strong>Material:</strong> Madera, material sintético o cemento
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Marcaciones</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        • <strong>Líneas:</strong> 8cm de ancho máximo
                      </li>
                      <li>
                        • <strong>Área penal:</strong> 6m x 3m
                      </li>
                      <li>
                        • <strong>Punto penal:</strong> 6m de la línea de meta
                      </li>
                      <li>
                        • <strong>Segundo punto penal:</strong> 10m de la línea de meta
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Porterías</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600">
                      <strong>Dimensiones:</strong> 3m de ancho x 2m de alto. Los postes y el travesaño deben tener 8cm
                      de ancho y de fondo, y ser del mismo color (blanco). Las redes deben estar sujetas a los postes y
                      travesaño, y no deben interferir con el portero.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="jugadores" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Jugadores y Equipamiento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Número de Jugadores</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        • <strong>En campo:</strong> 5 jugadores por equipo (incluyendo portero)
                      </li>
                      <li>
                        • <strong>Mínimo para jugar:</strong> 3 jugadores
                      </li>
                      <li>
                        • <strong>Sustitutos:</strong> Máximo 9 jugadores
                      </li>
                      <li>
                        • <strong>Sustituciones:</strong> Ilimitadas durante el partido
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Equipamiento Obligatorio</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Camiseta con número</li>
                      <li>• Pantalón corto</li>
                      <li>• Medias</li>
                      <li>• Espinilleras (obligatorias)</li>
                      <li>• Calzado deportivo (suela de goma)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Portero</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-gray-700">
                      El portero debe vestir colores que lo distingan de los demás jugadores y del árbitro. Puede usar
                      pantalón largo y tocar el balón con las manos solo dentro de su área penal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tiempo" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Duración del Partido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Tiempo Reglamentario</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        • <strong>Duración:</strong> 2 tiempos de 20 minutos
                      </li>
                      <li>
                        • <strong>Descanso:</strong> 15 minutos entre tiempos
                      </li>
                      <li>
                        • <strong>Tiempo efectivo:</strong> El cronómetro se detiene cuando el balón sale
                      </li>
                      <li>
                        • <strong>Tiempo muerto:</strong> 1 por equipo en cada tiempo
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Tiempo Extra</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        • <strong>Eliminatorias:</strong> 2 tiempos de 10 minutos
                      </li>
                      <li>
                        • <strong>Penales:</strong> Si persiste el empate
                      </li>
                      <li>
                        • <strong>Muerte súbita:</strong> En algunas competencias
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Tiempo Muerto</h3>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-gray-700">
                      Cada equipo tiene derecho a solicitar un tiempo muerto de 1 minuto en cada período. Solo puede
                      solicitarlo cuando su equipo esté en posesión del balón.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="juego" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Desarrollo del Juego
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Inicio del Juego</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Saque inicial desde el centro del campo</li>
                      <li>• Todos los jugadores en su mitad de campo</li>
                      <li>• Adversarios a 3m del balón</li>
                      <li>• El balón debe moverse hacia adelante</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Balón Fuera de Juego</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        • <strong>Saque de banda:</strong> Con las manos o los pies
                      </li>
                      <li>
                        • <strong>Saque de meta:</strong> Solo con las manos (portero)
                      </li>
                      <li>
                        • <strong>Saque de esquina:</strong> Con los pies
                      </li>
                      <li>
                        • <strong>Tiempo límite:</strong> 4 segundos para ejecutar
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Regla de los 4 Segundos</h3>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-gray-700">
                      El portero tiene máximo 4 segundos para poner el balón en juego cuando lo tiene en sus manos. Lo
                      mismo aplica para saques de banda, esquina y faltas.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Pase al Portero</h3>
                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <p className="text-gray-700">
                      El portero no puede tocar con las manos un balón que le pase intencionalmente un compañero con el
                      pie. Tampoco puede tocar el balón con las manos tras un saque de banda de su equipo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faltas" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Faltas e Incorrecciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Faltas Directas</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Dar o intentar dar una patada</li>
                      <li>• Poner zancadilla</li>
                      <li>• Saltar sobre un adversario</li>
                      <li>• Cargar violentamente</li>
                      <li>• Golpear o intentar golpear</li>
                      <li>• Empujar a un adversario</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Faltas Indirectas</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Juego peligroso</li>
                      <li>• Impedir el avance del adversario</li>
                      <li>• Impedir que el portero saque</li>
                      <li>• Infracciones del portero</li>
                      <li>• Antideportividad</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-3">Faltas Acumulativas</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-gray-700 mb-2">
                      <strong>A partir de la 6ta falta acumulativa por equipo en cada período:</strong>
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Se ejecuta tiro libre directo sin barrera</li>
                      <li>• Desde el segundo punto penal (10m)</li>
                      <li>• Solo el portero puede defender</li>
                      <li>• Las faltas se reinician cada período</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sanciones" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Sanciones Disciplinarias
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Tarjeta Amarilla</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Conducta antideportiva</li>
                      <li>• Desaprobar con palabras o gestos</li>
                      <li>• Infringir persistentemente las reglas</li>
                      <li>• Retardar la reanudación del juego</li>
                      <li>• No respetar la distancia reglamentaria</li>
                      <li>• Entrar o salir sin permiso del árbitro</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Tarjeta Roja</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Juego brusco grave</li>
                      <li>• Conducta violenta</li>
                      <li>• Escupir a un adversario o persona</li>
                      <li>• Impedir un gol con mano (no portero)</li>
                      <li>• Lenguaje o gestos ofensivos</li>
                      <li>• Segunda tarjeta amarilla</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Tiro Penal</h3>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="text-gray-700">
                        Se concede cuando se comete una falta directa dentro del área penal. Se ejecuta desde el punto
                        penal (6m) con solo el portero defendiendo.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Tiro Libre</h3>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-gray-700">
                        Directo o indirecto según la falta. Los adversarios deben estar a 5m del balón. Se debe ejecutar
                        en máximo 4 segundos.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Información adicional */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Información Importante</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Árbitros</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Primer árbitro: Controla el juego en la cancha</li>
                <li>• Segundo árbitro: Asiste y controla el tiempo</li>
                <li>• Cronometrador: Maneja el tiempo oficial</li>
                <li>• Tercer árbitro: Controla las sustituciones</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Balón</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Circunferencia: 62-64 cm</li>
                <li>• Peso: 400-440 gramos</li>
                <li>• Presión: 0.4-0.6 atmósferas</li>
                <li>• Rebote controlado (menor que fútbol)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
