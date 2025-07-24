import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, User, Phone, Mail, Building } from "lucide-react"

const OrganigramaPage = () => {
  const directivos = {
    presidente: {
      nombre: "Dr. Carlos Alberto Rodríguez",
      cargo: "Presidente",
      telefono: "314 555 0001",
      email: "presidente@ligafutsal.com",
      experiencia: "12 años en administración deportiva",
    },
    vicepresidente: {
      nombre: "Ing. María Elena González",
      cargo: "Vicepresidenta",
      telefono: "315 555 0002",
      email: "vicepresidente@ligafutsal.com",
      experiencia: "8 años en gestión deportiva",
    },
    secretario: {
      nombre: "Lic. Juan Carlos Pérez",
      cargo: "Secretario General",
      telefono: "316 555 0003",
      email: "secretario@ligafutsal.com",
      experiencia: "10 años en administración",
    },
    tesorero: {
      nombre: "Cont. Ana María Torres",
      cargo: "Tesorera",
      telefono: "317 555 0004",
      email: "tesorero@ligafutsal.com",
      experiencia: "15 años en contabilidad deportiva",
    },
  }

  const comisiones = [
    {
      nombre: "Comisión Técnica",
      responsable: "Prof. Miguel Ángel Vargas",
      miembros: ["Carlos Ruiz", "Diana López", "Roberto Silva"],
      funciones: ["Reglamentos técnicos", "Capacitación de árbitros", "Desarrollo deportivo"],
    },
    {
      nombre: "Comisión de Disciplina",
      responsable: "Dr. Luis Fernando Gómez",
      miembros: ["Patricia Morales", "Andrés Castillo", "Carmen Jiménez"],
      funciones: ["Sanciones disciplinarias", "Resolución de conflictos", "Código de ética"],
    },
    {
      nombre: "Comisión de Competencias",
      responsable: "Lic. Sandra Milena Ruiz",
      miembros: ["Fernando Herrera", "Claudia Ramírez", "Jorge Medina"],
      funciones: ["Organización de torneos", "Calendarios deportivos", "Logística de eventos"],
    },
    {
      nombre: "Comisión de Comunicaciones",
      responsable: "Com. Social Laura Beatriz Sánchez",
      miembros: ["David Ospina", "Natalia Vélez", "Sebastián Ríos"],
      funciones: ["Medios de comunicación", "Redes sociales", "Relaciones públicas"],
    },
  ]

  const areas = [
    {
      nombre: "Área Administrativa",
      jefe: "Adm. Gloria Patricia Henao",
      personal: ["Secretaria ejecutiva", "Auxiliar contable", "Recepcionista"],
      responsabilidades: ["Gestión documental", "Atención al público", "Trámites legales"],
    },
    {
      nombre: "Área Deportiva",
      jefe: "Prof. Jairo Alberto Múnera",
      personal: ["Coordinador técnico", "Instructor juvenil", "Preparador físico"],
      responsabilidades: ["Desarrollo técnico", "Formación de talentos", "Programas deportivos"],
    },
    {
      nombre: "Área de Arbitraje",
      jefe: "Árb. Nacional Pedro José Ramírez",
      personal: ["Instructor de árbitros", "Coordinador regional", "Evaluador técnico"],
      responsabilidades: ["Formación arbitral", "Designaciones", "Evaluación de desempeño"],
    },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Organigrama</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estructura organizacional y directivos que lideran nuestra liga
          </p>
        </div>

        {/* Junta Directiva */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Junta Directiva</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(directivos).map((directivo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{directivo.nombre}</CardTitle>
                  <Badge className="bg-blue-500">{directivo.cargo}</Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{directivo.telefono}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{directivo.email}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500">{directivo.experiencia}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Comisiones */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Comisiones de Trabajo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comisiones.map((comision, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Users className="w-6 h-6 mr-2 text-green-600" />
                    {comision.nombre}
                  </CardTitle>
                  <div className="flex items-center text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    <span className="font-medium">{comision.responsable}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Miembros:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {comision.miembros.map((miembro, idx) => (
                        <li key={idx}>• {miembro}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Funciones:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {comision.funciones.map((funcion, idx) => (
                        <li key={idx}>• {funcion}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Áreas Operativas */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Áreas Operativas</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Building className="w-6 h-6 mr-2 text-purple-600" />
                    {area.nombre}
                  </CardTitle>
                  <div className="flex items-center text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    <span className="font-medium">{area.jefe}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Personal:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {area.personal.map((persona, idx) => (
                        <li key={idx}>• {persona}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Responsabilidades:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {area.responsabilidades.map((resp, idx) => (
                        <li key={idx}>• {resp}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Información Adicional */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Información Institucional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-blue-600">Datos Generales</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Razón Social:</strong> Liga de Fútbol de Salón del Valle de Aburrá
                </li>
                <li>
                  <strong>NIT:</strong> 900.123.456-7
                </li>
                <li>
                  <strong>Fundación:</strong> 15 de marzo de 2016
                </li>
                <li>
                  <strong>Sede Principal:</strong> Medellín, Antioquia
                </li>
                <li>
                  <strong>Reconocimiento:</strong> Resolución 001-2019 INDER
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-green-600">Contacto Institucional</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <strong>Dirección:</strong> Carrera 50 # 25-30, Medellín
                </li>
                <li>
                  <strong>Teléfono:</strong> (604) 123-4567
                </li>
                <li>
                  <strong>Email:</strong> info@ligafutsal.com
                </li>
                <li>
                  <strong>Horario:</strong> Lunes a Viernes 8:00 AM - 5:00 PM
                </li>
                <li>
                  <strong>Web:</strong> www.ligafutsal.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrganigramaPage
