// src/components/Sobre.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLightbulb, FaChartLine, FaSmile } from "react-icons/fa";
import ilustracao from "../assets/foguetedev.png"; // foguete novo

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-6"
      style={{
        background: "linear-gradient(135deg, #0A0F2C, #6A0DAD)",
        color: "#ffffff",
        minHeight: "100vh", // AQUI GARANTE UMA ALTURA MÍNIMA DE TELA
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container
        className="rounded-4 p-5"
        style={{ backgroundColor: "#1C1244",
            color: "#fff",
            maxWidth: "70%",             // aumenta a largura
            padding: "4rem 5rem"

         }} // roxo escuro para o card
      >
        <Row className="align-items-center">
          {/* Texto à esquerda */}
          <Col md={6}>
            <div data-aos="fade-right">
              <span className="badge bg-light text-dark mb-5 px-3 py-3">
                Sobre Nós
              </span>
              <h2 className="fw-bold mb-5">
                Transformando{" "}
                <span className="devforce-gradient2">ideias</span>
                <br />
                em soluções digitais
              </h2>
              <p>
                A DevForce é especializada em criar soluções digitais sob medida
                para empresas de todos os tamanhos. Nossa especialidade está na
                criação de ferramentas adaptáveis que visam resolver desafios
                específicos de cada cliente.
              </p>
              <p>
                Assim como nosso capacete, nos adaptamos às necessidades de cada
                projeto, encontrando soluções específicas para qualquer desafio.
                Nosso espírito de inovação permeia todas as atividades.
              </p>
            </div>

            {/* Blocos de estatísticas */}
            <Row className="mt-5 text-center">
              <Col xs={4} data-aos="fade-up" data-aos-delay="100">
                <FaChartLine size={32} style={{ color: "#f97316" }} />
                <h5 className="fw-bold mt-2">+10</h5>
                <p className="mb-0 text-white">Projetos concluídos</p>
              </Col>
              <Col xs={4} data-aos="fade-up" data-aos-delay="200">
                <FaLightbulb size={32} style={{ color: "#3C64F4" }} /> {/* azul claro */}
                <h5 className="fw-bold mt-2">80%</h5>
                <p className="mb-0 text-white">Redução de custos</p>
              </Col>
              <Col xs={4} data-aos="fade-up" data-aos-delay="300">
                <FaSmile size={32} style={{ color: "#facc15" }} />
                <h5 className="fw-bold mt-2">9/10</h5>
                <p className="mb-0 text-white">Satisfação do cliente</p>
              </Col>
            </Row>
          </Col>

          {/* Imagem à direita */}
          <Col md={6} className="text-center" data-aos="zoom-in-left">
            <img
              src={ilustracao}
              alt="Foguete com logo"
              className="img-fluid mt-4 mt-md-0"
              style={{ maxWidth: "85%" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
