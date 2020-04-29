import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo-grupo-boticario.png';

import './style.css';

export default function Login() {
  return (
    <section className="login">
      <div className="container-login">
        <img src={logoImg} alt="Grupo Boticário" />
        <h1>Olá, Revendedor(a)</h1>
        <form>
          <input type="text" placeholder="Seu e-mail" />
          <input type="password" placeholder="Sua senha" />
          <button className="button" type="submit">Entrar</button>

          <Link to="/revendedor">
            <FiLogIn size={16} color="#8dcb78" />
            Não tenho cadastro
          </Link>
        </form>
      </div>
    </section>
  );
}