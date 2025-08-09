import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import FAQ from "./components/FAQ";
import Resultado from "./components/Resultados";
import Contato from "./components/Contato";
import Footer from "./components/Footer";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div style={{ backgroundColor: "#111", color: "white", scrollBehavior: "smooth" }}>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="sobre">
          <Sobre />
        </section>
        <section id="servicos">
          <Servicos />
        </section>
        <section id="faq">
          <Resultado />
        </section>
        <section id="resultados">
          <FAQ />
        </section>
        <section id="contato">
          <Contato />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
