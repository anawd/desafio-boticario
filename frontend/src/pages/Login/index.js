import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo-grupo-boticario.png';


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { email, senha });

      localStorage.setItem('RevendedorID', response.data.id);
      localStorage.setItem('RevendedorName', response.data.name);

      history.push('/profile');

    } catch (err) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <section className="login">
      <div className="container-login">
        <img src={logoImg} alt="Grupo Boticário" />
        <h1>Olá, Revendedor(a)</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Seu e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />

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