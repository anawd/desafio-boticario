import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/logo-grupo-boticario.png';

import './style.css';

export default function Compras() {
  const [codigo, setCodigo] = useState('');
  const [value, setValue] = useState('');
  const [data, setData] = useState('');

  const RevendedorID = localStorage.getItem('RevendedorID');

  const history = useHistory();

  async function handlePurchase(e) {
    e.preventDefault();

    const dataCompra = {
      codigo,
      value,
      data,
    };

    try {
      await api.post('purchase', dataCompra, {
        headers: {
          Authorization: RevendedorID,
        }
      });
      history.push('/profile');
    } catch (err) {
      alert(`Erro ao cadastrar compra`);
    }
  }

  return (
    <section className="compras">
      <div className="container-compras">
        <img src={logoImg} alt="Grupo Boticário" />
        <h1>Compras Revendedor(a)</h1>
        <form onSubmit={handlePurchase}>
          <input
            type="text"
            placeholder="Código"
            value={codigo}
            onChange={e => setCodigo(e.target.value)}
          />
          <input
            placeholder="Valor"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <input
            placeholder="Data"
            value={data}
            onChange={e => setData(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar Compra</button>

        </form>
      </div>
    </section>
  );
}