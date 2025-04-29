import React from "react";
import "./cardPerfil.css"
import { IoMdAdd } from "react-icons/io";

export default function  cardPerfil(props) {
  return (
    <div className="cardPerfil">
        <img src={props.foto} alt="" style={props.scale}/>

        <div className="name">
            <p>{props.name}</p>
        </div>
    </div>
  );
}
