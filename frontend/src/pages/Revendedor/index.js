import React from 'react';

import logoImg from '../../assets/logo-grupo-boticario.png';

import './style.css';

export default function Revendedor() {
  return (
    <section className="cadastro">
      <div className="container-cadastro">
        <img src={logoImg} alt="Grupo Boticário" />
        <h1>Faça seu cadastro Revendedor(a)</h1>
        <form>
          <input type="text" placeholder="Nome completo" />
          <input type="text" placeholder="CPF" />
          <input type="email" placeholder="Seu E-mail" />
          <input type="password" placeholder="Sua senha" />
          <button className="button" type="submit">Entrar</button>

        </form>
      </div>
    </section>
  );
}