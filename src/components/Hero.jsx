// Hero.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import monitorImg from '../assets/monitor.png';
import "../Hero.css"; // Importa o CSS com a animação

const destaque = '#9333ea';

export default function Hero() {
  return (
    <section
      className="py-5"
      style={{
        backgroundColor: '#0d0d0d',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start" data-aos="fade-right">
            <h1 className="mb-5">
              Construa uma identidade<br />
              digital para a sua <br />
              empresa com a <br />
              <span className="devforce-gradient">DEVFORCE</span>

            </h1>
              <a href="#contato" className="botao-contato">Entrar em contato</a>

            <p className="mt-5" style={{ color: 'white' }}>
              Agenda aberta — <span style={{ color: destaque }}>Disponível para novos projetos.</span>
            </p>
          </Col>
          <Col md={6} className="text-center" data-aos="zoom-in">
            <img
              src={monitorImg}
              alt="Imagem Hero"
              className="img-fluid monitor-animado"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
