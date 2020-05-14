import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo-grupo-boticario.png';

import api from '../../services/api';

import './style.css';

export default function Revendedor() {
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const history = useHistory();

  async function handleRevendedor(e) {
    e.preventDefault();

    const data = {
      name,
      cpf,
      email,
      senha,
    }

    try {
      const response = await api.post('revendedor', data);

      alert(` Seus acessos são: ${response.data.id}`);

      history.push('/');

    } catch (err) {
      alert('Erro no cadastro, tente novamente.')
    }

  }

  return (
    <section className="cadastro">
      <div className="container-cadastro">
        <img src={logoImg} alt="Grupo Boticário" />
        <h1>Faça seu cadastro Revendedor(a)</h1>
        <form onSubmit={handleRevendedor}>
          <input
            type="text"
            placeholder="Nome completo"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={e => setCPF(e.target.value)}
          />
          <input
            type="email"
            placeholder="Seu E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
    </section>
  );
}