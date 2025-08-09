// src/components/Servicos.jsx
import React, { useState } from "react";
import { Container, Row, Col, Badge, Button, Collapse } from "react-bootstrap";
import "../Servicos.css"; // estilos abaixo

const ACCENT = "#6d28d9";

const ITENS = [
  {
    titulo: "SISTEMAS ERP E CRM",
    descricao:
      "Projetos sob medida em ERP e CRM, integrações entre setores e dashboards que dão visibilidade em tempo real.",
    tags: ["ERP", "CRM", "Integrações", "Dashboard"],
  },
  {
    titulo: "AUTOMAÇÕES INTERNAS",
    descricao:
      "RPA, robôs e jobs orquestrados para eliminar tarefas repetitivas e reduzir custos operacionais.",
    tags: ["RPA", "Bots", "Workflows", "Agendamentos"],
  },
  {
    titulo: "IA EMPRESARIAL",
    descricao:
      "Chatbots, extração de dados, RAG e automações com IA para acelerar processos e gerar insights.",
    tags: ["Chatbot", "RAG", "OCR", "Preditivo"],
  },
  {
    titulo: "SUPORTE PÓS ENTREGA",
    descricao:
      "Monitoramento, atualizações, correções rápidas e evolução contínua com SLA combinado.",
    tags: ["Monitoramento", "SLA", "Atualizações", "Observabilidade"],
  },
];

export default function Servicos() {
  const [aberto, setAberto] = useState(null);

  const toggle = (i) => setAberto((prev) => (prev === i ? null : i));

  return (
    <section id="servicos" className="servicos-section">
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold servicos-title">
          Nossos <span className="devforce-gradient">serviços</span>
        </h2>

        <div className="servicos-list">
          {ITENS.map((s, i) => {
            const isOpen = aberto === i;
            return (
              <article
                key={s.titulo}
                className={`servico-item ${isOpen ? "is-open" : ""}`}
              >
                {/* faixa lateral */}
                <span className="side-accent" aria-hidden />

                <Row className="align-items-center gx-3 gy-3 px-3 px-md-4">
                  <Col md={5}>
                    <h3 className="servico-titulo m-0">{s.titulo}</h3>
                  </Col>

                  <Col md>
                    <div className="d-flex flex-wrap gap-2 justify-content-md-start justify-content-center">
                      {s.tags.map((t) => (
                        <Badge key={t} bg="" className="pill">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </Col>

                  <Col xs="auto" className="ms-auto">
                    <Button
                      aria-label={isOpen ? "Fechar" : "Abrir"}
                      aria-expanded={isOpen}
                      onClick={() => toggle(i)}
                      variant=""
                      className={`toggle-btn ${isOpen ? "active" : ""}`}
                    >
                      <span className="plus" />
                    </Button>
                  </Col>
                </Row>

                <Collapse in={isOpen}>
                  <div className="px-3 px-md-4 pt-3 border-top-light">
                    <p className="servico-desc mb-0">{s.descricao}</p>
                  </div>
                </Collapse>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
