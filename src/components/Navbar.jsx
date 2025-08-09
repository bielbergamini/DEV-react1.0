import React, { useState, useEffect, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '../assets/capacete_original_transparente.png';
import '../Navbar.css';

function AppNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollUp, setScrollUp] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // medir altura da navbar
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(72);

  // refs para scroll estáveis (sem re-render)
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);
  const DELTA = 12; // tolerância p/ evitar tremedeira

  useEffect(() => {
    const measure = () => {
      if (navRef.current) {
        const h = navRef.current.offsetHeight || 72;
        setNavHeight(h);
        document.documentElement.style.setProperty('--nav-h', `${h}px`);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (navRef.current) ro.observe(navRef.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;

      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(() => {
          // estado "scrolled" só muda quando realmente cruza o limite
          setScrolled((prev) => (y > 50 ? (prev ? prev : true) : (prev ? false : prev)));

          const lastY = lastYRef.current;
          const diff = y - lastY;

          if (Math.abs(diff) > DELTA) {
            // true quando rolando para cima
            setScrollUp(diff < 0);
            lastYRef.current = y;
          }
          tickingRef.current = false;
        });
      }
    };

    // inicia posição
    lastYRef.current = window.scrollY || 0;
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  // aparece no topo OU quando rola para cima
  const showDesktopNav = (window.scrollY || 0) < 50 || scrollUp;

  return (
    <>
      {/* Navbar Desktop fixa com blur */}
      <Navbar
        ref={navRef}
        className={`nav-initial d-none d-lg-flex ${showDesktopNav ? 'visible' : 'hidden'} navbar-blur`}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="navbar-logo-initial" />
            <span className="logo-text">
              <span className="devforce-gradient">DEV</span>FORCE
            </span>
          </Navbar.Brand>
          <Nav className="ms-auto nav-links-initial">
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#servicos">Serviços</Nav.Link>
            <Nav.Link href="#faq">Resultados</Nav.Link>
            <Nav.Link href="#resultados">FAQ</Nav.Link>
            <Nav.Link href="#contato" as={Button} className="custom-contact-btn ms-3 fw-bold">
              Contato
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Spacer SEM transição (altura fixa) */}
      <div
        aria-hidden
        style={{ height: navHeight }}
        className="d-none d-lg-block"
      />

      {/* Navbar flutuante mobile (opcional: pode por blur igual) */}
      <div
        className={`floating-navbar bg-dark rounded-pill shadow-sm d-lg-none d-flex ${
          scrolled || scrollUp ? 'visible' : 'hidden'
        }`}
      >
        <Container fluid className="d-flex justify-content-between align-items-center h-100 px-2">
          <Navbar.Brand href="#home" className="p-0">
            <img src={logo} alt="Logo" className="navbar-logo-floating me-2" />
          </Navbar.Brand>
          <Nav.Link href="#contato" as={Button} className="custom-contact-btn btn-sm fw-bold d-none d-md-block">
            Contato
          </Nav.Link>
          <div className={`hamburger-icon ${showOffcanvas ? 'open' : ''}`} onClick={handleShowOffcanvas}>
            <span />
            <span />
            <span />
          </div>
        </Container>
      </div>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end" className="bg-dark text-white">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title className="logo-text">
            <span className="dev-text">DEV</span>FORCE
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#sobre" onClick={handleCloseOffcanvas}>Sobre</Nav.Link>
            <Nav.Link href="#servicos" onClick={handleCloseOffcanvas}>Serviços</Nav.Link>
            <Nav.Link href="#faq" onClick={handleCloseOffcanvas}>Resultados</Nav.Link>
            <Nav.Link href="#resultados" onClick={handleCloseOffcanvas}>FAQ</Nav.Link>
            <Nav.Link
              href="#contato"
              as={Button}
              className="custom-contact-btn mt-3 fw-bold w-100"
              onClick={handleCloseOffcanvas}
            >
              Contato
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AppNavbar;
