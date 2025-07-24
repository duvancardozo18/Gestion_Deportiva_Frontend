import { Routes, Route } from "react-router-dom"
import Layout from "@/components/Layout"

// Páginas principales
import HomePage from "@/pages/HomePage"
import CompetenciasPage from "@/pages/CompetenciasPage"
import CompetenciaDetallePage from "@/pages/CompetenciaDetallePage"
import CompetenciaTerminadaPage from "@/pages/CompetenciaTerminadaPage"
import ClubesPage from "@/pages/ClubesPage"
import ConvocatoriasPage from "@/pages/ConvocatoriasPage"
import EntrenadoresPage from "@/pages/EntrenadoresPage"
import ReglasFutsalPage from "@/pages/ReglasFutsalPage"

// Páginas de "Nuestra Liga"
import MisionPage from "@/pages/nuestra-liga/MisionPage"
import VisionPage from "@/pages/nuestra-liga/VisionPage"
import ResenaHistoricaPage from "@/pages/nuestra-liga/ResenaHistoricaPage"
import SimbolosPage from "@/pages/nuestra-liga/SimbolosPage"
import OrganigramaPage from "@/pages/nuestra-liga/OrganigramaPage"
import ComisionJuzgamientoPage from "@/pages/nuestra-liga/ComisionJuzgamientoPage"
import LigaNacionalBetplayPage from "@/pages/nuestra-liga/LigaNacionalBetplayPage"
import ParticipacionesNacionalesPage from "@/pages/nuestra-liga/ParticipacionesNacionalesPage"

// Página 404
import NotFoundPage from "@/pages/NotFoundPage"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Página principal */}
        <Route index element={<HomePage />} />

        {/* Competencias */}
        <Route path="competencias" element={<CompetenciasPage />} />
        <Route path="competencias/:id" element={<CompetenciaDetallePage />} />
        <Route path="competencias/:id/terminada" element={<CompetenciaTerminadaPage />} />

        {/* Clubes */}
        <Route path="clubes" element={<ClubesPage />} />

        {/* Nuestra Liga */}
        <Route path="nuestra-liga">
          <Route path="mision" element={<MisionPage />} />
          <Route path="vision" element={<VisionPage />} />
          <Route path="resena-historica" element={<ResenaHistoricaPage />} />
          <Route path="simbolos" element={<SimbolosPage />} />
          <Route path="organigrama" element={<OrganigramaPage />} />
          <Route path="comision-juzgamiento" element={<ComisionJuzgamientoPage />} />
          <Route path="liga-nacional-betplay" element={<LigaNacionalBetplayPage />} />
          <Route path="participaciones-nacionales" element={<ParticipacionesNacionalesPage />} />
        </Route>

        {/* Otras páginas */}
        <Route path="convocatorias" element={<ConvocatoriasPage />} />
        <Route path="entrenadores" element={<EntrenadoresPage />} />
        <Route path="reglas-futsal" element={<ReglasFutsalPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
