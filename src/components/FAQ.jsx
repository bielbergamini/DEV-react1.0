import React from "react";
import { Container, Accordion } from "react-bootstrap";
import "../FAQ.css";

export default function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <Container style={{ maxWidth: 1050 }} data-aos="fade-up">
        <h2 className="faq-title text-center">
          Perguntas <span className="devforce-gradient">Frequentes</span>
        </h2>
        <p className="faq-sub text-center">
          As dúvidas que mais recebemos — resposta direta e sem enrolação.
        </p>

        <Accordion defaultActiveKey="0" className="faq-accordion">
          <Accordion.Item eventKey="0" className="faq-item">
            <Accordion.Header>Como funciona o processo de consultoria?</Accordion.Header>
            <Accordion.Body>
              Nosso processo começa com uma reunião para entender a necessidade.
              Depois enviamos a proposta. Aprovado? Partimos para execução com
              checkpoints semanais e transparência total.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="faq-item">
            <Accordion.Header>Quais tecnologias vocês utilizam?</Accordion.Header>
            <Accordion.Body>
              Trabalhamos com stack moderna (React, .NET/ASP.NET, Python, Node),
              automações (Selenium/RPA), OCR/IA (Tesseract, modelos locais e APIs)
              e integrações com ERPs/CRMs.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="faq-item">
            <Accordion.Header>Quanto tempo leva para desenvolver um site?</Accordion.Header>
            <Accordion.Body>
              Institucional simples: 2–4 semanas. Sistemas sob medida variam
              conforme escopo. Fechamos cronograma e marcos logo na largada.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="faq-item">
            <Accordion.Header>Vocês oferecem suporte após a entrega?</Accordion.Header>
            <Accordion.Body>
              Sim. Oferecemos plano de suporte e evolução contínua (SLA, monitoramento,
              correções e pequenas melhorias).
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}
