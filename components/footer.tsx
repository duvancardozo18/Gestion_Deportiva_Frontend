import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="Liga Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl">Liga Fútsal</span>
            </div>
            <p className="text-gray-300 mb-4">
              Liga oficial de fútbol de salón, promoviendo el deporte y la competencia sana en nuestra región.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/competencias" className="text-gray-300 hover:text-white">
                  Competencias
                </Link>
              </li>
              <li>
                <Link href="/clubes" className="text-gray-300 hover:text-white">
                  Clubes
                </Link>
              </li>
              <li>
                <Link href="/convocatorias" className="text-gray-300 hover:text-white">
                  Convocatorias
                </Link>
              </li>
              <li>
                <Link href="/entrenadores" className="text-gray-300 hover:text-white">
                  Entrenadores
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@ligafutsal.com</p>
              <p>📱 +57 313 333 3333</p>
              <p>📍 Dirección de la Liga</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Liga de Fútbol de Salón. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
