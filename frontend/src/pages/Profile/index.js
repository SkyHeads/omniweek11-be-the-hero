import React from 'react';

import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import { Container, ProfileUL } from './styles';

import logo from '../../assets/logo.svg';

export default function Profile() {
  return (
    <Container>
      <header>
        <img src={logo} alt="Be the hero" />
        <span>Bem vinda, APAD</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ProfileUL>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>VALOR:</strong>
          <p>R$ 120,00</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ProfileUL>
    </Container>
  );
}