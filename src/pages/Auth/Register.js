import "./Auth.css";

import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

export function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a senha" />
        <input type="submit" placeholder="Cadastrar" />
      </form>
      <p>
        Você já tem uma conta? <Link>Clique aqui.</Link>
      </p>
    </div>
  );
}
