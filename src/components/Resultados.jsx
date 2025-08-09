// Resultados.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const resultados = [
  {
    titulo: 'Primeiro Lugar no Google',
    valor: '80%',
    descricao: 'Garantimos que nossos clientes se destaquem e sejam facilmente encontrados nas buscas locais e em todo o país.',
    cor: 'linear-gradient(90deg, #7a2ac9ff, #647dee)',
  },
  {
    titulo: 'Designs Únicos',
    valor: '100%',
    descricao: 'Cada projeto recebe uma identidade visual personalizada e inovadora.',
    cor: 'linear-gradient(90deg, #00d2ff, #3a47d5)',
  },
  {
    titulo: 'Aumento de Tráfego',
    valor: '+110%',
    descricao: 'Desenvolvemos para cada projeto uma identidade visual única, criativa e exclusiva.',
    cor: 'linear-gradient(90deg, #8E2DE2, #4A00E0)',
  },
  {
    titulo: 'Performance Score',
    valor: '90/100',
    descricao: 'Todos os projetos são desenvolvidos com foco em desempenho, visibilidade nos buscadores e acessibilidade para todos os usuários.',
    cor: 'linear-gradient(90deg, #3f5efb, #fc466b)',
  },
];

export default function Resultados() {
  return (
    <section
      className="resultados"
      style={{
        background: '#0b0b0c',
        padding: 'clamp(40px, 6vw, 80px) 0',
      }}
    >
      <Container>
        {/* Título */}
        <div className="text-center mb-5" data-aos="fade-up">
          <span
            style={{
              letterSpacing: 1,
              fontSize: 14,
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,.8)',
            }}
          >
            Nossos Resultados
          </span>
          <h2
            className="fw-bold mt-2"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              color: '#fff',
            }}
          >
            Transformação Digital{' '}
            <span className="devforce-gradient">eficiente</span>
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,.65)',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
            }}
          >
            Resultados mensuráveis que impulsionam seu crescimento
          </p>
        </div>

        {/* Cards */}
        <Row className="g-4">
          {resultados.map((r, i) => (
            <Col md={6} lg={3} key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
              <Card
                className="h-100 text-white"
                style={{
                  backgroundColor: '#141416',
                  borderRadius: '14px',
                  border: '1px solid rgba(255,255,255,.06)',
                  padding: '1rem',
                  transition: 'transform .25s ease, box-shadow .25s ease',
                  boxShadow: '0 6px 20px rgba(0,0,0,.35)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,.35)';
                }}
              >
                <Card.Body className="d-flex flex-column">
                  <h6 style={{ color: 'rgba(255,255,255,.65)' }}>{r.titulo}</h6>
                  <h3
                    className="fw-bold"
                    style={{
                      background: r.cor,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '.5rem',
                    }}
                  >
                    {r.valor}
                  </h3>
                  <div
                    style={{
                      height: 3,
                      background: r.cor,
                      borderRadius: 2,
                      marginBottom: 10,
                    }}
                  ></div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'rgba(255,255,255,.75)',
                      marginTop: 'auto',
                    }}
                  >
                    {r.descricao}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
