"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Página no encontrada</h2>
          <p className="text-lg text-gray-600 mb-8">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="flex items-center">
              <Home className="w-4 h-4 mr-2" />
              Ir al Inicio
            </Button>
          </Link>
          <Button variant="outline" size="lg" onClick={() => window.history.back()} className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver Atrás
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
