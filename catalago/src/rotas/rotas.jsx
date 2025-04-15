
import Home  from "../pages/home/home"
import Perfil from "../pages/perfil/perfil" 
import Serie from "../pages/Series/series"
import { Route, Routes } from "react-router-dom"

export default function Rotas() {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/serie" element={<Serie />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
    )
}