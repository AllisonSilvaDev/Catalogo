import React from "react";
import "./perfil.css"
import CardPerfil from "../cardPerfil/cardPerfil";
import { IoMdAdd } from "react-icons/io";

export function Perfis() {
    return (
        <div className="container-perfil">
            <CardPerfil name="Aliçu"  foto="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" />
            <CardPerfil name="Aliçu 2" foto="https://i.pinimg.com/474x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg"/>
            <CardPerfil name="Aliçu 3" foto="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"/>
        </div>
    )
}