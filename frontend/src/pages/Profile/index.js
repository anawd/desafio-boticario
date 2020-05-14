import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './style.css';

import logoImg from '../../assets/logo-grupo-boticario.png';

export default function Profile() {

  const RevendedorName = localStorage.getItem('RevendedorName');

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Grupo Boticário" />
        <span>Bem vindo(a), {RevendedorName} </span>

        <Link className="button" to="/compras">Cadastrar uma nova compra</Link>
        <button type="button">
          <FiPower size={18} color="#8dcb78" />
        </button>
      </header>

      <h1>Compras Cadastradas</h1>

    </div>
  );
}