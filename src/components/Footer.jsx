// Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="py-4" style={{ backgroundColor: '#111', color: '#aaa' }}>
      <Container className="text-center">
        <div className="mb-2">
          <a
            href="https://www.instagram.com/devforcee?igsh=bzhoZXB1Ymtma2F6"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3"
            style={{ color: '#7f53ac' }}
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/devforcee/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#00d2ff' }}
          >
            <i className="fab fa-linkedin-in fa-lg"></i>
          </a>
        </div>
        <small>© 2025 DevForce. Todos os direitos reservados.</small>
      </Container>
    </footer>
  );
}
