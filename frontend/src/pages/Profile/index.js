import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo-grupo-boticario.png';

export default function Profile() {
  const [compras, setCompras] = useState([]);

  const history = useHistory();

  const RevendedorID = localStorage.getItem('RevendedorID');
  const RevendedorName = localStorage.getItem('RevendedorName');

  useEffect(() => {
    api.get('perfil', {
      headers: {
        Authorization: RevendedorID,
      }
    }).then(response => {
      setCompras(response.data);
    })
  }, [RevendedorID])

  async function handleDeleteCompra(id) {
    try {
      await api.delete(`purchase/${id}`, {
        headers: {
          Authorization: RevendedorID,
        }
      });
      setCompras(compras.filter(compra => compra.id !== id));
    } catch (err) {
      alert('Erro ao deletar uma compra, tente novamente.');
    }
  }

  function handleLogout() {
    localStorage.clear()

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Grupo Boticário" />
        <span>Bem vindo(a), {RevendedorName} </span>

        <Link className="button" to="/compras">Cadastrar uma nova compra</Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#8dcb78" />
        </button>
      </header>

      <h1>Compras Cadastradas</h1>

      <ul>
        {compras.map(compra => (
          <li key={compra.id}>
            <strong>Código Compra</strong>
            <p>{compra.codigo}</p>

            <strong>Valor</strong>
            <p>{Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(compra.value)}</p>

            <strong>Data</strong>
            <p>{compra.data}</p>

            <strong>Cash Aplicado</strong>
            <p>{compra.cashback}</p>

            <strong>Valor do Cash</strong>
            <p>{Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(compra.cashback)}</p>


            <strong>Status</strong>
            <p>{compra.status}</p>

            <button type="button" onClick={() => handleDeleteCompra(compra.id)}>
              <FiTrash2 size={20} color="8dcb78" />
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}