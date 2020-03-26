import React from 'react';

import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import { Container } from './styles';

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
    </Container>
  );
}
