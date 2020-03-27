import React from 'react';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content, IncidentForm } from './styles';

import logo from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <section>
          <img src={logo} alt="Be the hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um héroi para resolver
            isso
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o home
          </Link>
        </section>

        <IncidentForm>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />

          <input placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </IncidentForm>
      </Content>
    </Container>
  );
}
