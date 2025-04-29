import React from "react";
import "./Header.css"

export default function Header() {
  return (
    <header className="container" >
      <div className="logo">
        <p>AliçuFlix</p>
      </div>
      <div className="menu">
        <ul>
          <a href="/"><li>Home</li></a>
          <li>Assistir</li>
          <a href="/serie"><li>Séries</li></a>
          <li>Filmes</li>
          <li>Minha lista</li>
        </ul>
      </div>
      <a href="/perfil">
        <div className="perfil">
          <img src="https://i.pinimg.com/474x/32/3e/cc/323ecca68b7105d23184e783b86b0c5a.jpg" alt="" />
        </div>
      </a>
    </header>
  );
}
