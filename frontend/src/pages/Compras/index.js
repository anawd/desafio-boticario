import React from 'react';

import logoImg from '../../assets/logo-grupo-boticario.png';

import './style.css';

export default function Compras() {
  return (
    <section className="compras">
      <div className="container-compras">
        <img src={logoImg} alt="Grupo Boticário" />
        <h1>Compras Revendedor(a)</h1>
        <form>
          <input type="text" placeholder="Código" />
          <input placeholder="Valor em Reais" />
          <input placeholder="Data" />
          <button className="button" type="submit">Cadastrar Compra</button>

        </form>
      </div>
    </section>
  );
}