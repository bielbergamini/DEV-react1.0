import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaEnvelope, FaInstagram } from 'react-icons/fa';
import capacete from '../assets/capacetemsg.png';
import "../Hero.css"; // contém .devforce-gradient e @keyframes

export default function Contato() {
  return (
    <section
      id="contato"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container data-aos="fade-up">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="fw-bold">
              Soluções <span className="devforce-gradient">inteligentes</span>
              <br /> para mentes visionárias
            </h1>

            <p className="mt-3 mb-4">Fale conosco e dê vida às suas ideias no mundo digital.</p>
            <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2em' }}>
              <li><strong>SISTEMAS ERP E CRM</strong></li>
              <li><strong>AUTOMAÇÕES INTERNAS</strong></li>
              <li><strong>WEB APPS</strong></li>
              <li><strong>SUPORTE PÓS ENTREGA</strong></li>
            </ul>
            <button
              className="mt-4"
              style={{
                border: '1px solid #9333ea',
                borderRadius: '25px',
                padding: '10px 25px',
                backgroundColor: 'transparent',
                color: '#fff'
              }}
            >
              Fale Conosco
            </button>
          </Col>

          <Col md={6} className="text-center">
            <img
              src={capacete}
              alt="Capacete Devforce"
              style={{
                maxHeight: '899px',
                width: '100%',
                maxWidth: '400px',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </Col>
        </Row>

        {/* Cards com borda animada */}
        <Row className="g-4 mt-5">
          <Col md={4}>
            <div className="card-glow h-100">
              <div className="inner-content d-flex flex-column align-items-start">
                <FaWhatsapp size={30} />
                <h5 className="mt-2">WhatsApp</h5>
                <p>Resposta rápida</p>
                <p><strong>+55 (16) 99605-4302</strong></p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card-glow h-100">
              <div className="inner-content d-flex flex-column align-items-start">
                <FaEnvelope size={30} />
                <h5 className="mt-2">Email</h5>
                <p>Para propostas detalhadas</p>
                <p><strong>devforcee@gmail.com</strong></p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="card-glow h-100">
              <div className="inner-content d-flex flex-column align-items-start">
                <FaInstagram size={30} />
                <h5 className="mt-2">Instagram</h5>
                <p>Acompanhe nosso trabalho</p>
                <p><strong>@devforcee</strong></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
